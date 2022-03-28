---
layout: page
title: Tags
subtitle: Page Components
menubar: docs_menu
show_sidebar: false
toc: true
---

## Bulma Tags

Bulma tags are used in a few different layouts in Bulma Clean Theme, so it has been extracted as it's own component. You can create a tag in your own pages using the below include tag.

{% include tag.html tag="An example tag" style="is-success" %}

## Tag Include

To include a tag use the following include. 

{% raw %}
<code>
{% include tag.html tag="The tag text" %}
</code>
{% endraw %}

You can overwrite the default style (is-primary) by passing in the style in the include tag.

{% raw %}
<code>
{% include tag.html tag="The tag text" style="is-light" %}
</code>
{% endraw %}