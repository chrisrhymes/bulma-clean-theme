---
layout: page
title: Hero
subtitle: Pages
menubar: docs_menu
show_sidebar: false
redirect_from:
    - /page-without-hero/
---

## Page Hero

A page can have a Bulma hero at the top of the page. This allows you to display the title and subtitle, as well as a background image. 

## Background Image

Heros can display a background image if you provide a `hero_image: /path/to/image.jpg` setting in your page front matter.

```yaml
layout: page
title: My page
hero_image: /path/to/image.jpg
```

To set a default background image for all heros, you can set a [default value](https://jekyllrb.com/docs/configuration/front-matter-defaults/) in your site's `_config.yml`.

## Hero Height

You can set the height of the hero by providing a Bulma hero height class in your front matter, such as `hero_height: is-fullwidth`. If you do not provide this, it will revert to `is-medium`.

```yaml
layout: page
title: My page
hero_height: is-fullwidth
```

## Call to action

If you would like to add a call to action button in the hero then add `hero_link` and `hero_link_text` to the page's front matter.

```yaml
layout: page
title: My page
hero_link: /my-page/
hero_link_text: The Link Text
```

## Hiding the Hero

If you would like to hide the hero on the page, you can set `hide_hero: true` in the page's front matter.

```yaml
layout: page
title: My page
hide_hero: true
```

## Dark overlay

If you would like to darken the hero so the title stands out more over a light image, you can set `hero_darken: true` in the page's front matter. 

```yaml
layout: page
title: My page
hero_image: /path/to/img.jpg
hero_darken: true
```

You can overwrite the default hero background colour by setting the `$hero-darken` sass variable.