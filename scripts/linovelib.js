let body = $response.body.replace(/<script((?!<\/script>).)*(window\.adblock=\!0|adsbygoogle)((?!<\/script>).)*<\/script>/gs, '');
body = body.replace();
$done({ body });