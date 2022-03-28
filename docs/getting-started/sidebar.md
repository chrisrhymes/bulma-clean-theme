---
layout: page
title: Sidebar
subtitle: Getting Started
menubar: docs_menu
toc: true
show_sidebar: false
redirect_from:
    - /page-1/
    - /page-2/
---

## What is the sidebar

The sidebar is a column on the right of the page. It contains links, with excerpts, to the latest posts. 

It uses the `_includes/latest-posts.html` file, so if you would like the sidebar to contain different content, then you need to override this file.

## Sidebar Visibility

If you want to show the sidebar with latest posts then set `show_sidebar: true` in the page's frontmatter, or in the [defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/) in your site's `_config.yml`.