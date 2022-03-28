---
layout: page
title: Video
subtitle: Page Components
menubar: docs_menu
show_sidebar: false
toc: true
redirect_from: 
    - /page-with-video/
---

## Example

{% include youtube.html video="iRuJufELrWo" %}

## YouTube

To embed the YouTube video, include the youtube.html where you want the video to appear and then pass in the YouTube id as the video variable. 

{% raw %}
```liquid
{% include youtube.html video="videoid" %}
```
{% endraw %}

### Start Time

You can optionally include a start time in seconds. This works the same as the ?t= parameter in Youtube URLs.

{% raw %}
```liquid
{% include youtube.html video="videoid" time=210 %}
```
{% endraw %}


## Vimeo Video

It is also possible to embed Vimeo videos in a similar way by including the vimeo.html and passing in the video id.

{% raw %}
```liquid
{% include vimeo.html video="videoid" %}
```
{% endraw %}
