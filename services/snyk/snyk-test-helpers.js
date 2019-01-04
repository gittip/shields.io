'use strict'

const zeroVulnerabilitiesSvg =
  '<svg id="snyk-badge" data-package="undefined@undefined" width="152" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1" /><stop offset="1" stop-opacity=".1" /></linearGradient><mask id="a"><rect width="152" height="20" rx="3" fill="#fff" /></mask><g mask="url(#a)"><path fill="#555" d="M0 0h90v20H0z" /><path fill="#7B7B7B" d="M90 0h152v20H90z" /><path fill="url(#b)" d="M0 0h152v20H0z" /></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="45" y="15" fill="#010101" fill-opacity=".3">vulnerabilities</text><text x="45" y="14">vulnerabilities</text><text x="120" y="15" fill="#010101" fill-opacity=".3">0</text><text x="120" y="14">0</text></g></svg>'
const twoVulnerabilitiesSvg =
  '<svg id="snyk-badge" data-package="undefined@undefined" width="152" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1" /><stop offset="1" stop-opacity=".1" /></linearGradient><mask id="a"><rect width="152" height="20" rx="3" fill="#fff" /></mask><g mask="url(#a)"><path fill="#555" d="M0 0h90v20H0z" /><path fill="#7B7B7B" d="M90 0h152v20H90z" /><path fill="url(#b)" d="M0 0h152v20H0z" /></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="45" y="15" fill="#010101" fill-opacity=".3">vulnerabilities</text><text x="45" y="14">vulnerabilities</text><text x="120" y="15" fill="#010101" fill-opacity=".3">2</text><text x="120" y="14">2</text></g></svg>'

module.exports = {
  zeroVulnerabilitiesSvg,
  twoVulnerabilitiesSvg,
}
