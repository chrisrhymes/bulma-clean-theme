---
layout: page
title: Page With Contents
subtitle: Example page with contents
toc: true
#toc_title: Custom Title
menubar: example_menu
show_sidebar: false
---

## Introduction

This is an example page with contents that are generated from the page content. 

The page contents are generated automatically using [Jekyll TOC](https://github.com/allejo/jekyll-toc).

## Set Up

To add contents to your page add `toc: true` to the page's front matter. 

### Contents Title

To overwrite the default title for the contents, set `toc_title: My Custom Title` in the page's front matter.

### Example Front Matter 

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
