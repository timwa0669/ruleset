let body = $response.body.replace(/<script((?!<\/script>).)*((?!<\/script>).)*<\/script>/gs, '');
$done({ body });