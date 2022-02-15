---
layout: page
title: Creating A Page
subtitle: Pages
menubar: docs_menu
toc: true
show_sidebar: false
---

## Creating A Page

Create your pages as individual Markdown files and when the site is built by Jekyll it will process the markdown into html. 

You can create subdirectories with files in and they will have the subdirectory in their path. For example, this page is in the `docs` subdirectory and is called `creating-a-page.md`. This will become `/docs/creating-a-page.html`, or `/docs/creating-a-page/` depending on your permalink settings.

## Front Matter

Ensure you use `layout: page` for normal pages.

Set the page's title and subtitle in the front matter and it will appear in the hero. The subtitle is optional.

```yaml
layout: page
title: The page title
subtitle: The page subtitle
```

## Search Engine Optimisation

Bulma Clean Theme uses Jekyll SEO tag to generate additional meta tags. Ensure each page and post has a unique title and description in the front matter. 

You can also set an image that will be used when the page or post is shared on social media. 

```yaml
layout: page
title: The page title
subtitle: The page subtitle
description: This is the meta description for this page and will help it appear in search engines
image: /img/page-image.jpg
```



