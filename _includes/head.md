<head>
  <meta charset="UTF-8">
  <title>
    {% if page.title %}
      {{ page.title }} - {{ site.name }}
    {% else %}
      {{ site.name }} - {{ site.title }}
    {% endif %}
  </title>

  <meta name="description" content="{{ site.description }}">
  <link rel="canonical" href="{{ site.baseurl }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="{{ "assets/imgs/favicon.ico" | absolute_url }}" type="image/x-icon">
  <link rel="icon" href="{{ "assets/imgs/favicon.ico" | absolute_url }}" type="image/x-icon">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css" rel="stylesheet">
  <link href="{{ "/styles/main.css" | absolute_url }}" rel="stylesheet">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-33600682-1', 'auto');
    ga('send', 'pageview');
  </script>
</head>