# Site du BreizhCamp 2013

Contient l'ensemble du site du breizhcamp 2013 : http://www.breizhcamp.org

Jekyll est utilisé pour servir le contenu de ce site, voici quelques explications sur le contenu :
 * _config.yml : contient la config jekyll.
 * index.html : contient la page racine du site (ne fait que reprendre le contenu de la première page).
 * img/ : contient toutes les images du site.
 * css/ : contient la css du site.
 * _layouts/ : contient le layout du site (template).
 * _posts/ : contient toutes les pages du site.
 * mobile.html : todo

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

Ensuite :

```gem install jekyll```

```jekyll --server 4000```
=> Démarre un serveur qui écoute sur le port 4000

```jekyll ```
=> Génère en continu dans le répertoire _site

Bref (RTFM) :
```jekyll --help```

## Configuration en mode DEV 
pour utilisation en env local et maj du site
Confuration réalisée avec la version 1.0.1 de jekyll
```jekyll -v```  
=>1.0.1

se deplacer dans le repertoire de l'application
```
cd /Users/eheb/Devs/labs/workspace/breizhcamp/breizhcamp2013-site
jekyll serve 4000
```
la commande ```jekyll serveur``` est un alias et n'existe pas par defaut

```
Deprecation: Auto-regeneration can no longer be set from your configuration file(s).
Use the --watch/-w command-line option instead.```
Source: /Users/eheb/Devs/labs/workspace/breizhcamp/breizhcamp2013-site
Destination: /Users/eheb/Devs/labs/workspace/breizhcamp/breizhcamp2013-site/_site
```
Ne pas en tenir compte ??

Configuration file: ```/Users/eheb/Devs/labs/workspace/breizhcamp/breizhcamp2013-site/_config.yml``` à appliquer :
```
pygments: true
permalink: /:title
auto: true
suprimer : url: "http://eheb.github.io/breizhcamp2013-site"
ajouter  : url: "http://localhost:4000"
description: BreizhCamp, un mix de technos
title: breizhcamp2013
```

-supprimer le fichier CNAME
