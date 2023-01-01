let body = $response.body.replace(/<script((?!<\/script>).)*(window\.adblock=\!0|adsbygoogle)((?!<\/script>).)*<\/script>/gs, '');
$done({ body });