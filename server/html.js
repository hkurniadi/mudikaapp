const html = (reactAppComponent, bundle) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/assets/mudikalogo-fire.png">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />   
    <title>Mudika Vancouver</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">${reactAppComponent}</div>
    <div id="floating-button-root"></div>
    <script type="text/javascript" src="${bundle}"></script>
  </body>
</html>`;

export default html;