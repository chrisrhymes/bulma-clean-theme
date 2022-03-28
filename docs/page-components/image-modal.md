---
layout: page
title: Image Modal
subtitle: Page Components
menubar: docs_menu
show_sidebar: false
toc: true
redirect_from: 
    - /page-with-image-modal/
---

## Image Modal Include

The image modal allows you to display a small image, which then opens a large image in an image modal. 

The include needs the ratio, link, alt and large link. 

The ratios are Bulma image classes. The link is the path to the thumbnail image, the large_link is the path to the large image. 

Below is an example for the include.

{% raw %}
<code>
{% include image-modal.html ratio="is-16by9" link="https://via.placeholder.com/400x225" alt="Example image" large_link="https://via.placeholder.com/1200x675" %}
</code>
{% endraw %}

## Example Image Modal

<div class="columns">
<div class="column is-6">
{% include image-modal.html ratio="is-16by9" link="https://via.placeholder.com/400x225" alt="Example image" large_link="https://via.placeholder.com/1200x675" %}
</div>
<div class="column is-6">
Click on the image to open the image modal.
</div>
</div>