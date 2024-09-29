---
layout: post
title:  "Eigene Schriftart in Home Assistant integrieren"
date:   2023-05-03 06:58:00
categories: Dashboard
description: "Einen Weg, eigene Schriftarten in Home Assistant einzufügen, zeige ich hier."
image: /img/blog-post-eigene-schriftarten.png
published: true
---

Ich wollte unbedingt für meine Dashboards eine Schriftart zur Auswahl haben, welche meine Uhr in digitaler Schrift anzeigt.

Da ich als "font-family" keine passende Schrift gefunden habe, fügte ich mir eine im Netz gefundene in Home Assistant hinzu.
Hier die notwendigen Schritte und Codes zum Nachmachen:

![Digitale Uhr](/img/blog-post-eigene-schriftart-digital-uhr.png)

- Lade dir eine Schrift deiner Wahl aus dem Internet z.B von [https://www.1001fonts.com/technology-font.html](https://www.1001fonts.com/technology-font.html)



- Dann musst du die heruntergeladene "ttf-Datei" in ein "woff2" konvertieren. Nutze dazu diesen [Konverter](https://www.fontconverter.io/de)


3. Entpacke die erstellte Datei und speichere das `<deine-Schrift>.woff2` in deinen `www-Ordner` in Home Assistant. In meinem Fall ist es `Technology.woff2`


4. Nun öffne in Home Assistant deinen File-Editor oder Studio Code Server und erstelle im `www-Ordner` ein neues File mit Namen
`font.css`
und füge folgende Codezeilen ein:


**CSS**
```css
/* Ersetze "Technology" mit dem Namen deiner Schriftart */

@font-face {
  font-family: "DJBGetDigital";
  src: url(/local/Technology.woff2) format('woff2');
}
```


5. Füge ein weiteres File in deinen "www-Order" hinzu und gib ihm den Namen `loadfonts.js`.
In dieses File füge folgenden Code ein:

**Javascript**
```js
function loadcss() {
    let css = '/local/fonts.css?v=0.005'

    let link = document.createElement('link');
    let head = document.getElementsByTagName('head')[0];
    let tmp;
    link.rel = 'stylesheet';
    link.type = 'text/css';

    tmp = link.cloneNode(true);
    tmp.href = css;
    head.appendChild(tmp);
    console.info('%c Font Style sheet loaded', 'color: white; background: #000; font-weight: 700;');
}
loadcss();
```


There are many ways to make a website and many different CMS platforms you can use, such as WordPress and Joomla, as well as site builder tools that offer you drag and drop interfaces, but what about static site generators? 

A static site is pretty much what it sounds like, a set of pre generated html pages. Other platforms take what you enter into the CMS and process the information stored in the database, alongside a template or many template partials and dynamically construct the page before serving the html to you in your browser.  

## Speed
The initial advantage of a static site over a dynamic, database driven site is the page speed as means a lot less processing has to be done before the page is delivered. Some CMS’s provide caching which means that the first visitor to the page gets a dynamic version and then stores a cache of the page. This means subsequent visitor to the page gets the page quicker than the first. If you have a regularly cleared cache, or low numbers of visitors, subsequent visitors may not benefit from the caching and would all experience the increased load times. 

## Version Control
The next advantage of a static site is that it is that it can be version controlled. Usually a CMS relies on a database, which means that if you delete a page or some page content you either have to have revisions enabled in your CMS so you can roll back to a previous version or you need regular backups of your database so you can roll that back to a previous version. A static site with version control means you can easily revert to a previous version of your site and content without the need for database manipulation. 

## Data Files
Static sites, such as Jekyll, also offer a way of storing data in a more human readable format, such as yaml or JSON. This means you can store data that is used in multiple places across your site in one file and reference it in many places. For example, you may have a data file containing products, which you want to list in a category page and a product details page and maybe feature it on the homepage as well. These files can also be version controlled, meaning any changes or updates to your datafiles can be undone easily. The files can also be easily edited in a text editor so if you need to make multiple product amends, such as updating a misspelt brand name you can use something as simple as find and replace to update the spelling in all places at once without having to navigate to multiple different pages in a CMS. 

## Design Freedom
The biggest benefit I find to a static site is there is more freedom for a frontend developer and how they design and build your site. Some CMS’s work in a particular way and you are limited by the way they work. Page builders are available for many CMS’s but it often results in a lot of effort to get a particular piece of content in a particular place on the page. 

A static site generator gives you more freedom to write your own html and text onto the page in the format you want it, rather than having to customise or overwrite the html and css classes output by the page builder tool. 

## Data Protection
A lot of people like the idea of installing a plugin into a CMS to handle things such as contact forms, so people can contact you about something, but in all honesty, it’s easier just to have an email address on the page that users can click on and email you directly. The reason I say this is that you have to try and prevent spam emails by using some kind of captcha on the form, as well as maintaining an email service that will handle the form submission and either store the form data somewhere on your site or send it to you as an email. This is pretty basic stuff, but is further complicated by data privacy laws that dictate how you store customers data and how you protect it. I know a lot of small business users would prefer to not have the hassle of managing stored user data on their site. 

## Security
One last thing to consider is website security. There is always a chance that using a popular CMS will leave your site vulnerable as there are always security issues being identified. You need to constantly keep your site up to date and lock down the CMS login as secure as possible. With a static site, there is no login screen. The original content lives somewhere else and the compiled, generated html is all that needs to be uploaded to your website, minimising the risk. Any public facing website has some risk but anything you can do to minimise it is better for your website in the long run. 

## What will you use on your next project?
A static site may not be the first thing you consider when building your new website, but it’s definitely worth exploring the pros and cons before you start the next project. After all, a faster, more secure site is better for you and your visitors. 
