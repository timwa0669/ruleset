let body = $response.body.replace(/<script((?!<\/script>).)*(window\.adblock=\!0|adsbygoogle|googlesyndication|googletagmanager)((?!<\/script>).)*<\/script>/gs, '');
$done({ body });