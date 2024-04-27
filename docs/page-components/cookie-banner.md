---
layout: page
title: Cookie banner
subtitle: Page Components
menubar: docs_menu
show_sidebar: false
toc: true
---

## Configuration

To enable the cookie banner, add a `cookie_policy` to your _config.yml file and add the link to your cookie policy page. When the site is built it will display the cookie banner at the top of the page. It will remain until the cookies are either accepted or rejected.  

```yml
# _config.yml

cookie_policy: /cookie-policy/
```

## Hiding the banner

When the cookies have been accepted or rejected, a cookie will be stored to remember that the cookie banner should be hidden. This should prevent the banner showing on future page views. 

If the cookies have been accepted, then an additional cookie will be stored called 'cookiesAccepted' with the value 'true'. You can then check this cookie in your own custom scripts as required. 

## Using with Google Analytics

The Google Analytics implementation has been updated to use Google's consent mode. This sets default settings where storage using cookies is denied. If cookies are accepted then it will trigger a function to update the Google Analytics settings to allow cookie storage. 