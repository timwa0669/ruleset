let body = $response.body.replace(/<script((?!<\/script>).)*(adsbygoogle|checkAD|_0xodM|googlesyndication|googletagmanager)((?!<\/script>).)*<\/script>/gs, '');
$done({ body });