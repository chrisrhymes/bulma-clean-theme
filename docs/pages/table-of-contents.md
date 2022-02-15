---
layout: page
title: Table of Contents
subtitle: Pages
menubar: docs_menu
show_sidebar: false
redirect_from:
    - /page-with-contents/
---

## Introduction

The table of contents are generated automatically from the page content using [Jekyll TOC](https://github.com/allejo/jekyll-toc).

## Set Up

To add contents to your page add `toc: true` to the page's front matter. The contents will be displayed at the top of the page, above the content. You can also make the contents in the [menubar](#displaying-the-contents-in-the-menubar).

## Contents Title

To overwrite the default title for the contents, set `toc_title: My Custom Title` in the page's front matter.

```yaml
layout: page
title: Page With Contents
toc: true
toc_title: Custom Title
```

## Displaying the contents in the menubar

If you would prefer to display the contents in the menubar at the side of the page, then use `menubar_toc: true` instead of `toc: true`. This will also override the page's `menubar` setting.

```yaml
layout: page
title: Page With Contents
menubar_toc: true
toc_title: Custom Title
```