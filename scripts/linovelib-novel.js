let body = $response.body.replace(/<script((?!(<\/script>)|(prevpage)|(nextpage)|(bookpage)|(ReadParams)).)*<\/script>/gs, '');
$done({ body });