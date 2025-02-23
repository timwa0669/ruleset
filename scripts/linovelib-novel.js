let body = $response.body.replace(/<script((?!<\/script>).)*(yuedu|tj|show-more-images|serviceWorker)((?!<\/script>).)*<\/script>/gs, '');
$done({ body });