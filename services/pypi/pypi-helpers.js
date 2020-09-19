'use strict'

/*
  Django versions will be specified in the form major.minor
  trying to sort with `semver.compare` will throw e.g:
  TypeError: Invalid Version: 1.11
  because no patch release is specified, so we will define
  our own functions to parse and sort django versions
*/

function parseDjangoVersionString(str) {
  if (typeof str !== 'string') {
    return false
  }
  const x = str.split('.')
  const maj = parseInt(x[0]) || 0
  const min = parseInt(x[1]) || 0
  return {
    major: maj,
    minor: min,
  }
}

// Sort an array of django versions low to high.
function sortDjangoVersions(versions) {
  return versions.sort((a, b) => {
    if (
      parseDjangoVersionString(a).major === parseDjangoVersionString(b).major
    ) {
      return (
        parseDjangoVersionString(a).minor - parseDjangoVersionString(b).minor
      )
    } else {
      return (
        parseDjangoVersionString(a).major - parseDjangoVersionString(b).major
      )
    }
  })
}

// Extract classifiers from a pypi json response based on a regex.
function parseClassifiers(parsedData, pattern) {
  const results = []
  for (let i = 0; i < parsedData.info.classifiers.length; i++) {
    const matched = pattern.exec(parsedData.info.classifiers[i])
    if (matched && matched[1]) {
      results.push(matched[1].toLowerCase())
    }
  }
  return results
}

function parsePyRequires(parsedData, pattern) {
	var results = ""
	const matched = pattern.exec(parsedData.info.pyrequires)
	if (matched && matched[1]) {
		results = matched[0]
	}
	return results
}

function getLicenses(packageData) {
  const {
    info: { license },
  } = packageData
  if (license) {
    return [license]
  } else {
    const parenthesizedAcronymRegex = /\(([^)]+)\)/
    const bareAcronymRegex = /^[a-z0-9]+$/
    let licenses = parseClassifiers(packageData, /^License :: (.+)$/)
      .map(classifier => classifier.split(' :: ').pop())
      .map(license => license.replace(' license', ''))
      .map(license => {
        const match = license.match(parenthesizedAcronymRegex)
        return match ? match[1].toUpperCase() : license
      })
      .map(license => {
        const match = license.match(bareAcronymRegex)
        return match ? license.toUpperCase() : license
      })
    if (licenses.length > 1) {
      licenses = licenses.filter(l => l !== 'dfsg approved')
    }
    return licenses
  }
}

function getPackageFormats(packageData) {
  const {
    info: { version },
    releases,
  } = packageData
  const releasesForVersion = releases[version]
  return {
    hasWheel: releasesForVersion.some(({ packagetype }) =>
      ['wheel', 'bdist_wheel'].includes(packagetype)
    ),
    hasEgg: releasesForVersion.some(({ packagetype }) =>
      ['egg', 'bdist_egg'].includes(packagetype)
    ),
  }
}

module.exports = {
  parseClassifiers,
  parseDjangoVersionString,
  sortDjangoVersions,
  getLicenses,
  getPackageFormats,
}
