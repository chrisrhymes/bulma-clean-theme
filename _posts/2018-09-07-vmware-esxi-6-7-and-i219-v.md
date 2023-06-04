---
id: 108
title: 'VMWare ESXi 6.7 and I219-V'
date: '2018-09-07T10:31:14+01:00'
author: Sander
layout: post
guid: 'https://rutten.me/?p=108'
permalink: /2018/09/07/vmware-esxi-6-7-and-i219-v/
categories:
    - Projects
    - Technology
tags:
    - ESXi
    - Technology
    - VMWare
hero_image: /assets/img/2018/09/07/hero_image.webp
#hero_height: is-large
hero_darken: true
image: /assets/img/2018/09/07/post_image.webp

---

A free tip for people with a (to new?) Intel I219V (Or Intel I219-V for search results 🙂

Recently I begun with the upgrade of my VMWare server, running on an Intel i3-6100 6th gen. My current motherboard’s chipset was only able to handle 6th and 7th gen and I wanted to upgrade to the Intel i5-8400 8th gen. So I also needed a new motherboard: **[ASRock H370M-ITX/ac](https://www.asrock.com/mb/Intel/H370M-ITXac/index.asp)**.

This board has 2 network interfaces, the Intel I211AT and an Intel I219V. And the latter is a bit picky in VMWare.  
The I219V should be supported in ESXi. So no problem, right? Untill I installed ESXi 6.7 and had only 1 network card available.

As it appears Intel created different I219V’s “generations” in the past years. My version is probably generation 7 (Hence the (7) in the name below), which has vendor/device ID: 8086:**15bc**.

```
<pre class="EnlighterJSRAW" data-enlighter-highlight="3" data-enlighter-language="shell" data-enlighter-linenumbers="false" data-enlighter-theme="beyond">lspci -v | grep "Class 0200" -B 1
0000:00:1f.6 Ethernet controller Network controller: Intel Corporation Ethernet Connection (7) I219-V
Class 0200: 8086:15bc
--
0000:01:00.0 Ethernet controller Network controller: Intel Corporation I211 Gigabit Network Connection [vmnic0]
Class 0200: 8086:1539
```

According to VMWare this card (Specific the version with device ID 15bc) is native supported in ESXi 6.5 U2 but not in 6.7:  
[https://www.vmware.com/resources/compatibility/detail.php?deviceCategory=io&amp;productid=45884&amp;vcl=true](https://www.vmware.com/resources/compatibility/detail.php?deviceCategory=io&productid=45884&vcl=true)

So I decided to install ESXi 6.5 U2, and update to 6.7 afterwards. I have tested this with the current latest version, ESXi-6.7.0-20180804001-standard. In this version it is still working. Let’s hope that the future will be the same. Or that it will be supported native in ESXi 6.7 some day.

**Update 22/2/2019**  
A clean install with ESXi-6.7.0-20190104001-standard is still not detecting this NIC, unless upgraded from 6.5 U2.

```
<pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-linenumbers="false" data-enlighter-theme="beyond">esxcli network nic list
Name PCI Device Driver Admin Status Link Status Speed Duplex MAC Address MTU Description
------ ------------ ------ ------------ ----------- ----- ------ ----------------- ---- -------------------------------------------------
vmnic0 0000:00:1f.6 ne1000 Up Down 0 Half 70:85:c2:7a:7d:26 1500 Intel Corporation Ethernet Connection (7) I219-V
vmnic1 0000:01:00.0 igbn Up Up 1000 Full 70:85:c2:7a:7d:24 1500 Intel Corporation I211 Gigabit Network Connection
```

According to other websites it should also be possible to install ESXi 6.7 directly, and by manually installing older drivers from ESXi 6.5 U2. Somehow this method didn’t work for me. And a clean install with 6.5 U2 with upgrade does.
