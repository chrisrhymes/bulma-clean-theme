---
layout: page
title: Page With Notifications
---

This page shows how you can add [Bulma notifications](https://bulma.io/documentation/elements/notification/).

{% include notification.html message="This is the message for the notification" %}

Use the following code to include a simple notification. 

{% raw %}
```liquid
{% include notification.html message="This is the message for the notification" %}
```
{% endraw %}

## Overriding Defaults

The message is required but the status defaults to 'is-warning' and the icon defaults to 'fas fa-exclamation-circle', but can be overwritten by setting the values in the includes.

{% include notification.html message="This is the message for the notification" 
status="is-danger" 
icon="fas fa-exclamation-triangle" %}

{% raw %}
```liquid
{% include notification.html message="This is the message for the notification" 
status="is-danger" 
icon="fas fa-exclamation-triangle" %}
```
{% endraw %}

## Markdown message

The notification message can also be written in markdown. 

{% include notification.html 
message="This **message** contains _markdown_ and a [link](https://www.csrhymes.com).

It also contains a second paragraph and a list.

* List item
* List item
"  %}

{% raw %}
```liquid
{% include notification.html 
message="This **message** contains _markdown_ and a [link](https://www.csrhymes.com).

It also contains a second paragraph.

* List item
* List item
"  %}
```
{% endraw %}

