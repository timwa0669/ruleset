//let body = $response.body.replace(/<script((?!<\/script>).)*(window\.adblock=\!0|adsbygoogle|googlesyndication|googletagmanager|sojson)((?!<\/script>).)*<\/script>/gs, '');
let body = $response.body.replace(/.*(\(function\(_0x|eval\(function\(p,a,c,k,e,d\)).*/g, '');
$done({ body });