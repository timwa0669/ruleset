let body = $response.body.replace(/<script((?!(<\/script>)|(prevpage)|(nextpage)|(bookpage)).)*<\/script>/gs, '');
$done({ body });