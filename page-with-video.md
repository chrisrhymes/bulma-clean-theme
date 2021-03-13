---
layout: page
title: Page With Video
description: A page with an embedded YouTube video
menubar: example_menu
show_sidebar: false
---

This is an example page with an embedded YouTube video. 

{% include youtube.html video="iRuJufELrWo" %}

To embed the video, use an include where you want the video to appear and then pass in the YouTube id as the video variable. 

{% raw %}
```liquid
{% include youtube.html video="videoid" %}
```
{% endraw %}

You can optionally include a start time in seconds. This works the same as the ?t= parameter in Youtube URLs.

{% raw %}
```liquid
{% include youtube.html video="videoid" time=210 %}
```
{% endraw %}

It is also possible to embed Vimeo videos in a similar way


{% raw %}
```liquid
{% include vimeo.html video="videoid" %}
```
{% endraw %}
