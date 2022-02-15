---
layout: page
title: Creating A Post
subtitle: Posts
menubar: docs_menu
show_sidebar: false
toc: true
---

## Posts Directory

If you want to start a blog, create a `_posts` directory to store your blog posts as per normal Jekyll usage, with `layout: post`. 

## Creating a Post

Create a new file in the `_posts` directory with the filename format `yyyy-mm-dd-blog-post-name.md` where yyyy is the year, mm is the month and dd is the day. 

In the front matter, use the `layout: post`. You can also use the same settings as when creating a page to configure the hero. 

```yaml
layout: post
title: The Blog Post Title
subtitle: The blog post subtitle
hero_image: /path/to/image.jpg
hero_darken: true
```

## Blog Page

Next, create a `blog` directory with an index.html file that has `layout: blog`.

## Pagination

Set `paginate` and `paginate_path` in your site's `_config.yaml` to configure the posts per page and blog pagination path.

```yaml
paginate: 5
paginate_path: "/blog/page:num"
```

## Other settings

It will display an image in the blog page if you set `image: /path/to/image.jpg` in your post's or page's front matter, or in the [defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/) in your site's `_config.yml`.