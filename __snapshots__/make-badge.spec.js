exports['The badge generator SVG should match snapshot 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90" height="20"><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="90" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="45" height="20" fill="#555"/><rect x="45" width="45" height="20" fill="#4c1"/><rect width="90" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="235" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">cactus</text><text x="235" y="140" transform="scale(.1)" textLength="350">cactus</text><text x="665" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="665" y="140" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "flat" template badge generation should match snapshots: message/label, no logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90" height="20"><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="90" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="45" height="20" fill="#0f0"/><rect x="45" width="45" height="20" fill="#b3e"/><rect width="90" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="235" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">cactus</text><text x="235" y="140" transform="scale(.1)" textLength="350">cactus</text><text x="665" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="665" y="140" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "flat" template badge generation should match snapshots: message/label, with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="107" height="20"><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="107" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="62" height="20" fill="#0f0"/><rect x="62" width="45" height="20" fill="#b3e"/><rect width="107" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><text x="405" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">cactus</text><text x="405" y="140" transform="scale(.1)" textLength="350">cactus</text><text x="835" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="835" y="140" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "flat" template badge generation should match snapshots: message only, no logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="20"><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="45" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="0" height="20" fill="#b3e"/><rect x="0" width="45" height="20" fill="#b3e"/><rect width="45" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="225" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="225" y="140" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "flat" template badge generation should match snapshots: message only, with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63" height="20"><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="63" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="0" height="20" fill="#0f0"/><rect x="0" width="63" height="20" fill="#b3e"/><rect width="63" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><text x="405" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="405" y="140" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "flat" template badge generation should match snapshots: message/label, with links 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90" height="20"><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="90" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="45" height="20" fill="#0f0"/><rect x="45" width="45" height="20" fill="#b3e"/><rect width="90" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="235" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">cactus</text><text x="235" y="140" transform="scale(.1)" textLength="350">cactus</text><text x="665" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="665" y="140" transform="scale(.1)" textLength="350">grown</text></g><a target="_blank" xlink:href="https://www.google.co.uk/"><rect width="NaN" height="20" fill="rgba(0,0,0,0)"/></a><a target="_blank" xlink:href="https://shields.io/"><rect width="undefined" height="20" fill="rgba(0,0,0,0)"/></a></svg>
`

exports['The badge generator "flat-square" template badge generation should match snapshots: message/label, no logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90" height="20"><g shape-rendering="crispEdges"><rect width="45" height="20" fill="#0f0"/><rect x="45" width="45" height="20" fill="#b3e"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="235" y="140" transform="scale(.1)" textLength="350">cactus</text><text x="665" y="140" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "flat-square" template badge generation should match snapshots: message/label, with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="107" height="20"><g shape-rendering="crispEdges"><rect width="62" height="20" fill="#0f0"/><rect x="62" width="45" height="20" fill="#b3e"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><text x="405" y="140" transform="scale(.1)" textLength="350">cactus</text><text x="835" y="140" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "flat-square" template badge generation should match snapshots: message only, no logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="20"><g shape-rendering="crispEdges"><rect width="0" height="20" fill="#b3e"/><rect x="0" width="45" height="20" fill="#b3e"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="225" y="140" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "flat-square" template badge generation should match snapshots: message only, with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63" height="20"><g shape-rendering="crispEdges"><rect width="0" height="20" fill="#0f0"/><rect x="0" width="63" height="20" fill="#b3e"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><text x="405" y="140" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "flat-square" template badge generation should match snapshots: message/label, with links 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90" height="20"><g shape-rendering="crispEdges"><rect width="45" height="20" fill="#0f0"/><rect x="45" width="45" height="20" fill="#b3e"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="235" y="140" transform="scale(.1)" textLength="350">cactus</text><text x="665" y="140" transform="scale(.1)" textLength="350">grown</text></g><a target="_blank" xlink:href="https://www.google.co.uk/"><rect width="NaN" height="20" fill="rgba(0,0,0,0)"/></a><a target="_blank" xlink:href="https://shields.io/"><rect width="undefined" height="20" fill="rgba(0,0,0,0)"/></a></svg>
`

exports['The badge generator "plastic" template badge generation should match snapshots: message/label, no logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90" height="18"><linearGradient id="s" x2="0" y2="100%"><stop offset="0"  stop-color="#fff" stop-opacity=".7"/><stop offset=".1" stop-color="#aaa" stop-opacity=".1"/><stop offset=".9" stop-color="#000" stop-opacity=".3"/><stop offset="1"  stop-color="#000" stop-opacity=".5"/></linearGradient><clipPath id="r"><rect width="90" height="18" rx="4" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="45" height="18" fill="#0f0"/><rect x="45" width="45" height="18" fill="#b3e"/><rect width="90" height="18" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="235" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">cactus</text><text x="235" y="130" transform="scale(.1)" textLength="350">cactus</text><text x="665" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="665" y="130" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "plastic" template badge generation should match snapshots: message/label, with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="107" height="18"><linearGradient id="s" x2="0" y2="100%"><stop offset="0"  stop-color="#fff" stop-opacity=".7"/><stop offset=".1" stop-color="#aaa" stop-opacity=".1"/><stop offset=".9" stop-color="#000" stop-opacity=".3"/><stop offset="1"  stop-color="#000" stop-opacity=".5"/></linearGradient><clipPath id="r"><rect width="107" height="18" rx="4" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="62" height="18" fill="#0f0"/><rect x="62" width="45" height="18" fill="#b3e"/><rect width="107" height="18" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><image x="5" y="2" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><text x="405" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">cactus</text><text x="405" y="130" transform="scale(.1)" textLength="350">cactus</text><text x="835" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="835" y="130" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "plastic" template badge generation should match snapshots: message only, no logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="18"><linearGradient id="s" x2="0" y2="100%"><stop offset="0"  stop-color="#fff" stop-opacity=".7"/><stop offset=".1" stop-color="#aaa" stop-opacity=".1"/><stop offset=".9" stop-color="#000" stop-opacity=".3"/><stop offset="1"  stop-color="#000" stop-opacity=".5"/></linearGradient><clipPath id="r"><rect width="45" height="18" rx="4" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="0" height="18" fill="#b3e"/><rect x="0" width="45" height="18" fill="#b3e"/><rect width="45" height="18" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="225" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="225" y="130" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "plastic" template badge generation should match snapshots: message only, with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63" height="18"><linearGradient id="s" x2="0" y2="100%"><stop offset="0"  stop-color="#fff" stop-opacity=".7"/><stop offset=".1" stop-color="#aaa" stop-opacity=".1"/><stop offset=".9" stop-color="#000" stop-opacity=".3"/><stop offset="1"  stop-color="#000" stop-opacity=".5"/></linearGradient><clipPath id="r"><rect width="63" height="18" rx="4" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="0" height="18" fill="#0f0"/><rect x="0" width="63" height="18" fill="#b3e"/><rect width="63" height="18" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><image x="5" y="2" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><text x="405" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="405" y="130" transform="scale(.1)" textLength="350">grown</text></g></svg>
`

exports['The badge generator "plastic" template badge generation should match snapshots: message/label, with links 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90" height="18"><linearGradient id="s" x2="0" y2="100%"><stop offset="0"  stop-color="#fff" stop-opacity=".7"/><stop offset=".1" stop-color="#aaa" stop-opacity=".1"/><stop offset=".9" stop-color="#000" stop-opacity=".3"/><stop offset="1"  stop-color="#000" stop-opacity=".5"/></linearGradient><clipPath id="r"><rect width="90" height="18" rx="4" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="45" height="18" fill="#0f0"/><rect x="45" width="45" height="18" fill="#b3e"/><rect width="90" height="18" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><text x="235" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">cactus</text><text x="235" y="130" transform="scale(.1)" textLength="350">cactus</text><text x="665" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">grown</text><text x="665" y="130" transform="scale(.1)" textLength="350">grown</text></g><a target="_blank" xlink:href="https://www.google.co.uk/"><rect width="NaN" height="18" fill="rgba(0,0,0,0)"/></a><a target="_blank" xlink:href="https://shields.io/"><rect width="undefined" height="18" fill="rgba(0,0,0,0)"/></a></svg>
`

exports['The badge generator "for-the-badge" template badge generation should match snapshots: message/label, no logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="147" height="28"><g shape-rendering="crispEdges"><rect width="74" height="28" fill="#0f0"/><rect x="74" width="73" height="28" fill="#b3e"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="100"><text x="370" y="175" transform="scale(.1)" textLength="500">CACTUS</text><text x="1105" y="175" font-weight="bold" transform="scale(.1)" textLength="490">GROWN</text></g></svg>
`

exports['The badge generator "for-the-badge" template badge generation should match snapshots: message/label, with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="164" height="28"><g shape-rendering="crispEdges"><rect width="91" height="28" fill="#0f0"/><rect x="91" width="73" height="28" fill="#b3e"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><text x="540" y="175" transform="scale(.1)" textLength="500">CACTUS</text><text x="1275" y="175" font-weight="bold" transform="scale(.1)" textLength="490">GROWN</text></g></svg>
`

exports['The badge generator "for-the-badge" template badge generation should match snapshots: message only, no logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="73" height="28"><g shape-rendering="crispEdges"><rect width="0" height="28" fill="#b3e"/><rect x="0" width="73" height="28" fill="#b3e"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="100"><text x="365" y="175" font-weight="bold" transform="scale(.1)" textLength="490">GROWN</text></g></svg>
`

exports['The badge generator "for-the-badge" template badge generation should match snapshots: message only, with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="91" height="28"><g shape-rendering="crispEdges"><rect width="18" height="28" fill="#0f0"/><rect x="18" width="73" height="28" fill="#b3e"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><text x="545" y="175" font-weight="bold" transform="scale(.1)" textLength="490">GROWN</text></g></svg>
`

exports['The badge generator "for-the-badge" template badge generation should match snapshots: message/label, with links 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="147" height="28"><g shape-rendering="crispEdges"><rect width="74" height="28" fill="#0f0"/><rect x="74" width="73" height="28" fill="#b3e"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="100"><text x="370" y="175" transform="scale(.1)" textLength="500">CACTUS</text><text x="1105" y="175" font-weight="bold" transform="scale(.1)" textLength="490">GROWN</text></g><a target="_blank" xlink:href="https://www.google.co.uk/"><rect width="NaN" height="28" fill="rgba(0,0,0,0)"/></a><a target="_blank" xlink:href="https://shields.io/"><rect width="undefined" height="28" fill="rgba(0,0,0,0)"/></a></svg>
`

exports['The badge generator "social" template badge generation should match snapshots: message/label, no logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="95" height="20"><style>a #llink:hover{fill:url(#b);stroke:#ccc}a #rlink:hover{fill:#4183c4}</style><linearGradient id="a" x2="0" y2="100%"><stop offset="0" stop-color="#fcfcfc" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#ccc" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><g stroke="#d5d5d5"><rect stroke="none" fill="#fcfcfc" x="0.5" y="0.5" width="47" height="19" rx="2"/><rect x="53.5" y="0.5" width="41" height="19" rx="2" fill="#fafafa"/><rect x="53" y="7.5" width="0.5" height="5" stroke="#fafafa"/><path d="M53.5 6.5 l-3 3v1 l3 3" stroke="d5d5d5" fill="#fafafa"/></g><g fill="#333" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="700" font-size="110px" line-height="14px"><text x="235" y="150" fill="#fff" transform="scale(.1)" textLength="370">Cactus</text><text x="235" y="140" transform="scale(.1)" textLength="370">Cactus</text><text x="735" y="150" fill="#fff" transform="scale(.1)" textLength="330">grown</text><text id="rlink" x="735" y="140" transform="scale(.1)" textLength="330">grown</text></g><rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="47" height="19" rx="2" /></svg>
`

exports['The badge generator "social" template badge generation should match snapshots: message/label, with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112" height="20"><style>a #llink:hover{fill:url(#b);stroke:#ccc}a #rlink:hover{fill:#4183c4}</style><linearGradient id="a" x2="0" y2="100%"><stop offset="0" stop-color="#fcfcfc" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#ccc" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><g stroke="#d5d5d5"><rect stroke="none" fill="#fcfcfc" x="0.5" y="0.5" width="64" height="19" rx="2"/><rect x="70.5" y="0.5" width="41" height="19" rx="2" fill="#fafafa"/><rect x="70" y="7.5" width="0.5" height="5" stroke="#fafafa"/><path d="M70.5 6.5 l-3 3v1 l3 3" stroke="d5d5d5" fill="#fafafa"/></g><image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><g fill="#333" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="700" font-size="110px" line-height="14px"><text x="405" y="150" fill="#fff" transform="scale(.1)" textLength="370">Cactus</text><text x="405" y="140" transform="scale(.1)" textLength="370">Cactus</text><text x="905" y="150" fill="#fff" transform="scale(.1)" textLength="330">grown</text><text id="rlink" x="905" y="140" transform="scale(.1)" textLength="330">grown</text></g><rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="64" height="19" rx="2" /></svg>
`

exports['The badge generator "social" template badge generation should match snapshots: message only, no logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="59" height="20"><style>a #llink:hover{fill:url(#b);stroke:#ccc}a #rlink:hover{fill:#4183c4}</style><linearGradient id="a" x2="0" y2="100%"><stop offset="0" stop-color="#fcfcfc" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#ccc" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><g stroke="#d5d5d5"><rect stroke="none" fill="#fcfcfc" x="0.5" y="0.5" width="11" height="19" rx="2"/><rect x="17.5" y="0.5" width="41" height="19" rx="2" fill="#fafafa"/><rect x="17" y="7.5" width="0.5" height="5" stroke="#fafafa"/><path d="M17.5 6.5 l-3 3v1 l3 3" stroke="d5d5d5" fill="#fafafa"/></g><g fill="#333" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="700" font-size="110px" line-height="14px"><text x="55" y="150" fill="#fff" transform="scale(.1)" textLength="10"></text><text x="55" y="140" transform="scale(.1)" textLength="10"></text><text x="375" y="150" fill="#fff" transform="scale(.1)" textLength="330">grown</text><text id="rlink" x="375" y="140" transform="scale(.1)" textLength="330">grown</text></g><rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="11" height="19" rx="2" /></svg>
`

exports['The badge generator "social" template badge generation should match snapshots: message only, with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="73" height="20"><style>a #llink:hover{fill:url(#b);stroke:#ccc}a #rlink:hover{fill:#4183c4}</style><linearGradient id="a" x2="0" y2="100%"><stop offset="0" stop-color="#fcfcfc" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#ccc" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><g stroke="#d5d5d5"><rect stroke="none" fill="#fcfcfc" x="0.5" y="0.5" width="25" height="19" rx="2"/><rect x="31.5" y="0.5" width="41" height="19" rx="2" fill="#fafafa"/><rect x="31" y="7.5" width="0.5" height="5" stroke="#fafafa"/><path d="M31.5 6.5 l-3 3v1 l3 3" stroke="d5d5d5" fill="#fafafa"/></g><image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><g fill="#333" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="700" font-size="110px" line-height="14px"><text x="195" y="150" fill="#fff" transform="scale(.1)" textLength="10"></text><text x="195" y="140" transform="scale(.1)" textLength="10"></text><text x="515" y="150" fill="#fff" transform="scale(.1)" textLength="330">grown</text><text id="rlink" x="515" y="140" transform="scale(.1)" textLength="330">grown</text></g><rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="25" height="19" rx="2" /></svg>
`

exports['The badge generator "social" template badge generation should match snapshots: message/label, with links 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="95" height="20"><style>a #llink:hover{fill:url(#b);stroke:#ccc}a #rlink:hover{fill:#4183c4}</style><linearGradient id="a" x2="0" y2="100%"><stop offset="0" stop-color="#fcfcfc" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#ccc" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><g stroke="#d5d5d5"><rect stroke="none" fill="#fcfcfc" x="0.5" y="0.5" width="47" height="19" rx="2"/><rect x="53.5" y="0.5" width="41" height="19" rx="2" fill="#fafafa"/><rect x="53" y="7.5" width="0.5" height="5" stroke="#fafafa"/><path d="M53.5 6.5 l-3 3v1 l3 3" stroke="d5d5d5" fill="#fafafa"/></g><g fill="#333" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="700" font-size="110px" line-height="14px"><text x="235" y="150" fill="#fff" transform="scale(.1)" textLength="370">Cactus</text><text x="235" y="140" transform="scale(.1)" textLength="370">Cactus</text><text x="735" y="150" fill="#fff" transform="scale(.1)" textLength="330">grown</text><a target="_blank" xlink:href="https://www.google.co.uk/"><text id="rlink" x="735" y="140" transform="scale(.1)" textLength="330">grown</text></a></g><a target="_blank" xlink:href="https://shields.io/"><rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="47" height="19" rx="2" /></a></svg>
`

exports['The badge generator badges with logos should always produce the same badge badge with logo 1'] = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="113" height="20"><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="113" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="54" height="20" fill="#555"/><rect x="54" width="59" height="20" fill="#4c1"/><rect width="113" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"><image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxu"/><text x="365" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="270">label</text><text x="365" y="140" transform="scale(.1)" textLength="270">label</text><text x="825" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="490">message</text><text x="825" y="140" transform="scale(.1)" textLength="490">message</text></g></svg>
`
