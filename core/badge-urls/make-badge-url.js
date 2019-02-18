'use strict'

const queryString = require('query-string')
const pathToRegexp = require('path-to-regexp')

function badgeUrlFromPath({
  baseUrl = '',
  path,
  queryParams,
  style,
  format = 'svg',
  longCache = false,
}) {
  const outExt = format.length ? `.${format}` : ''

  const outQueryString = queryString.stringify({
    maxAge: longCache ? '2592000' : undefined,
    style,
    ...queryParams,
  })
  const suffix = outQueryString ? `?${outQueryString}` : ''

  return `${baseUrl}${path}${outExt}${suffix}`
}

function badgeUrlFromPattern({
  baseUrl = '',
  pattern,
  namedParams,
  queryParams,
  style,
  format = 'svg',
  longCache = false,
}) {
  const toPath = pathToRegexp.compile(pattern, {
    strict: true,
    sensitive: true,
  })

  const path = toPath(namedParams)

  return badgeUrlFromPath({
    baseUrl,
    path,
    queryParams,
    style,
    format,
    longCache,
  })
}

function encodeField(s) {
  return encodeURIComponent(s.replace(/-/g, '--').replace(/_/g, '__'))
}

function staticBadgeUrl({
  baseUrl = '',
  label,
  message,
  color = 'lightgray',
  style,
  namedLogo,
  format = 'svg',
}) {
  const path = [label, message, color].map(encodeField).join('-')
  const outQueryString = queryString.stringify({
    style,
    logo: namedLogo,
  })
  const suffix = outQueryString ? `?${outQueryString}` : ''
  return `${baseUrl}/badge/${path}.${format}${suffix}`
}

function dynamicBadgeUrl({
  baseUrl,
  datatype,
  label,
  dataUrl,
  query,
  prefix,
  suffix,
  color,
  format = 'svg',
}) {
  const queryParams = {
    label,
    url: dataUrl,
    query,
  }

  if (color) {
    queryParams.colorB = color
  }
  if (prefix) {
    queryParams.prefix = prefix
  }
  if (suffix) {
    queryParams.suffix = suffix
  }

  const outQueryString = queryString.stringify(queryParams)
  return `${baseUrl}/badge/dynamic/${datatype}.${format}?${outQueryString}`
}

module.exports = {
  badgeUrlFromPath,
  badgeUrlFromPattern,
  encodeField,
  staticBadgeUrl,
  dynamicBadgeUrl,
}
