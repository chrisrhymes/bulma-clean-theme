---
title: 'UniFi Guest Portal with IPv6'
date: '2018-11-23T12:17:56+01:00'
author: Sander
layout: post
permalink: /2018/11/23/unifi-guest-portal-with-ipv6/
categories:
    - Technology
tags:
    - IPv6
    - UniFi
hero_image: /assets/img/2018/11/23/hero_image.webp
#hero_height: is-large
hero_darken: true
image: /assets/img/2018/11/23/post_image.webp
---

For some reason Ubiquiti / UniFi doesn’t really love IPv6 after all those years. It took quite some time before the UniFi Controller itself supported IPv6. Beta IPv6 implementation started almost a year ago with the release of UniFi 5.7.7. But this doesn’t include the devices. Or at least not my Ubiquity AP-AC Lite. You can only configure IPv4 on the management interface.

Luckily this doesn’t mean that your mobile devices can’t get IPv6, this works perfectly. Well perfectly… As long as you don’t use the Guest Portal for that SSID.  
If you want to use the Guest Portal the accesspoint just drops all IPv6 traffic on your guest network.

User [mrbig](https://community.ubnt.com/t5/UniFi-Wireless/Guest-mode-cannot-access-IPv6/m-p/1299150/highlight/true#M111684) at the Ubiquity forums has found and posted a method to get SLAAC (Stateless autoconfiguration) working with the Guest Portal enabled.  
For DHCPv6 (Stateful autoconfiguration) this method doesn’t seem to work.  
The author does give a warning: All guests can send multicast traffic. So I guess that this could be a security issue. The original post is from 2015 and so far this still seems to be the best option.

Edit the config.properties file (&lt;unifi path&gt;/data/sites/default/config.properties)

```
<pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-linenumbers="false">config.system_cfg.1=ebtables.101.cmd=-t nat -I GUESTIN 1 -p IPv6 --dst 33:33:00:00:00:00/ff:ff:00:00:00:00 -j ACCEPT
config.system_cfg.2=ebtables.102.cmd=-t nat -I GUESTIN 2 -p IPv6 -j AUTHORIZED_GUESTS
config.system_cfg.3=ebtables.103.cmd=-t nat -I GUESTOUT 3 -p IPv6 -j ACCEPT
```

Go to your UniFi Controller to adopt this changes: Devices &gt; select your AP &gt; Config &gt; Manage Device &gt; Force Provision.

If you connect to your guest network you should receive IPv6 addresses on your devices.
