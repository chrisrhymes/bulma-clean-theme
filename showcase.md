---
title: Showcase
subtitle: An example showcase page
layout: page
showcase: showcase_example
show_sidebar: false
---

## Create A Showcase Datafile

Create a datafile in your sites `_data` directory in the following format. Features and tags are not required.

```yaml
intro: >
  This is some introduction text for the showcases.
items:
  - title: Example showcase item
    description: >
      This is the example description for this item that you are showcasing and has a background image, title, description, tags and a link.
    features:
      - This is a feature
      - This is a feature
    image: https://via.placeholder.com/1024x788
    link: http://www.example.com
    link_text: View example
    tags: PHP,CSS,JavaScript
```

## Displaying the Showcase

Set the showcase in the page's frontmatter to be the name of the showcase data file without the extension

```yaml
---
title: Showcase
subtitle: An example showcase page
layout: page
showcase: showcase_example
show_sidebar: false
---
```



