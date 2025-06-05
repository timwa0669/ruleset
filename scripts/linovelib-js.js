//let body = $response.body.replace(/<script((?!<\/script>).)*(window\.adblock=\!0|adsbygoogle|googlesyndication|googletagmanager|sojson)((?!<\/script>).)*<\/script>/gs, '');
let body = $response.body.replace(/.*(eval\(function\(p,a,c,k,e,d\)|AdBlock).*/g, '');
$done({ body });