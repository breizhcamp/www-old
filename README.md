# Site du BreizhCamp 2013

Contient l'ensemble du site du breizhcamp 2013 : http://www.breizhcamp.org

Jekyll est utilisé pour servir le contenu de ce site, voici quelques explications sur le contenu :
 * _config.yml : contient la config jekyll.
 * index.html : contient la page racine du site (ne fait que reprendre le contenu de la première page).
 * img/ : contient toutes les images du site.
 * css/ : contient la css du site.
 * _layouts/ : contient le layout du site (template).
 * _posts/ : contient toutes les pages du site.

## Le layout

Tout le layout du site est dans _layouts/layout.html :

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr'" lang="fr-fr">
<head>
    <meta charset="utf-8">
    <meta name="title" content="{{site.title}}">
    <meta itemprop="name" content="{{site.title}}">
    <meta property="og:title" content="{{site.title}}">
    <meta name="description" content="{{site.description}}">
    <meta itemprop="description" content="{{site.description}}">
    <meta id="meta-tag-description" property="og:description" content="{{site.description}}">
    <title>{{site.title}}</title>
    <link href="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css"
          rel="stylesheet">
    <link href="{{site.url}}/css/breizhcamp.css" rel="stylesheet">
    <link rel="shortcut icon" type="image/x-icon" href="{{site.url}}/img/favicon.ico" />
    <link rel="icon" type="image/png" href="{{site.url}}/img/favicon.png"/>
    <link rel="apple-touch-icon" href="{{site.url}}/img/apple-touch-icon.png"/>

</head>
<body>

<header>
    <a href="http://www.breizhcamp.org">
        <img id="logo-img-id" src="{{site.url}}/img/logo.png" alt="Logo" class="sites-logo ">
    </a>
    <div class="navigation">
        <ul>

            {% for post in site.posts %}
                <li {% if post.url == page.url %}class="current" {% endif %}><a href="{{site.url}}/{{post.url}}">{{post.label}}</a></li>
            {% endfor %}

            <li><a href="http://2011.breizhcamp.org">Edition 2011</a></li>
            <li><a href="http://2012.breizhcamp.org">Edition 2012</a></li>
        </ul>
    </div>
</header>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.1/angular.min.js"></script>
<script src="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>
<script src="https://pagedown.googlecode.com/hg/Markdown.Converter.js"></script>
<script src="https://pagedown.googlecode.com/hg/Markdown.Sanitizer.js"></script>

<div class="container">
{{ content }}
</div>

</body>
</html>
```

La partie ```{% for post in site.posts %}``` sert à afficher un menu par page du site.

La partie ```{{ content }}``` sera remplacée par le contenu de la page.


## Les pages

Toutes les pages sont contenue dans _posts.

Le nom d'une page est de la forme ```YYYY-MM-DD-<title>.html```.

La date est importante, les menus seront afficher par order décroissant de date (jekyll est un moteur de blog à la base).

La partie ```title``` sera utilisée pour l'URL de la page.

Le contenu d'une page doit toujours commencer par :
```
---
layout: layout
label: <Titre de la page>
---
```

La partie ```label``` sera utilisée pour le menu.

## Mettre à jour
Il faut avoir Ruby sur sa machine (RTFM).

Ensuite vous allez installer bundler pour gérer les versions de librairies. Et j'ai forcé les versions des gems pour coller à celles des pages Github.

```
$ gem install bundler
Successfully installed bundler-1.3.5
1 gem installed

$ bundle
Using RedCloth (4.2.9)
Using fast-stemmer (1.0.2)
Using classifier (1.3.3)
Using directory_watcher (1.5.1)
Using kramdown (0.13.8)
Using liquid (2.4.1)
Using syntax (1.0.0)
Using maruku (0.6.0)
Using posix-spawn (0.3.6)
Using yajl-ruby (1.1.0)
Using pygments.rb (0.3.7)
Using jekyll (0.12.0)
Using rdiscount (1.6.8)
Using redcarpet (2.1.1)
Using bundler (1.3.5)
Your bundle is complete!
Use `bundle show [gemname]` to see where a bundled gem is installed.
```

Pour ceux qui ne connaissent pas [Bundler](http://gembundler.com/).

Pour démarrer un serveur qui écoute sur le port 4000 :

```
$ bundle exec jekyll --pygments --no-lsi --safe --server 4000
```

Pour générer en continu dans le répertoire _site :

```
$ bundle exec jekyll --pygments --no-lsi --safe
```

Bref (RTFM) :

```
$ bundle exec jekyll --help
```

Pour ceux qui n'aurait pas suivi, j'ai comme prompt `$` donc ne le tapez pas :p.

Et préfixer les commandes par `bundle exec` permet de forcer l'utilisation des bonnes versions.
