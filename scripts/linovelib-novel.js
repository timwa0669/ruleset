let body = $response.body.replace(/<script((?!<\/script>).)*((?!prevpage)|(?!nextpage)|(?!bookpage))*((?!<\/script>).)*<\/script>/gs, '');
$done({ body });