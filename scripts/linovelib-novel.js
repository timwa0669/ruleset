//let body = $response.body.replace(/<script((?!(<\/script>)|(prevpage)|(nextpage)|(bookpage)|(ReadParams)).)*<\/script>/gs, '');
let body = $response.body.replace(/<script((?!<\/script>).)*(window\.adblock=\!0|adsbygoogle|googlesyndication|googletagmanager|sojson|yuedu|tj|show-more-images|serviceWorker|tip_chapter|readtools|zation|baidu)((?!<\/script>).)*<\/script>/gs, '');
$done({ body });