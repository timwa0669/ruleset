let body = $response.body.replace(/<script((?!<\/script>).)*adsbygoogle((?!<\/script>).)*<\/script>/gs, '');
$done({ body });