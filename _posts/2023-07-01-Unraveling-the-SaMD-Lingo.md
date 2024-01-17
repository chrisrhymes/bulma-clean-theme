---
layout: post
title: Creating a post series
description: How to create a post series with Bulma Clean Theme
date: 2021-10-30 09:00:07
hero_image: /bulma-clean-theme/img/blog-post-series.jpg
image: /bulma-clean-theme/img/blog-post-series.jpg
hero_height: is-large
hero_darken: true
tags: bulma-clean-theme jekyll blog
series: example_blog_series
---

---
title: "Unraveling the SaMD Lingo: Anomaly, Defect, Bug, and Nonconformity"
categories:
  - General QMS
tags:
  - IEC 62304
  - FDA
  - SaMD
---

If you are stepping into the Software as Medical Devices (SaMD) world, chances are you will come across terms like "anomaly," "defect," "bug," or "software failure" in various standards, guidance, white papers, and such. These words often seem interchangeable, but have you ever wondered if there are any nuances you need to be aware of?
This post dives head-first into the regulatory/software language. We'll unravel how these terms are defined by different entities – from the FDA's perspective to the guidelines laid down by IS 62304, and of course, in the everyday lingo of our very own software engineers.
Understanding these terms and their context not only helps us communicate more effectively but also enhances our comprehension of the complex dynamics of software creation and maintenance. So, let's get started!

## Definitions

People can get confused when they start to look into these terms: the definitions of the terms seems not specified in the FDA guidance nor in IEC 62304, other than Anomaly (IEC 62304:2015 3.2.) So what are they and where are they?

**ANOMALY**: Any condition that deviates from the expected based on requirements specifications, design documents, standards, etc. or from someone's perceptions or experiences. ANOMALIES may be found during, but not limited to, the review, test, analysis, or use of "medical device software" or applicable documentation. (IEC 62304:2015, clause 3.2)

**BUG**: The most historical term to describe any fault in a program -- back to the time when it meant the actual bug (insect.) Dev people use it for everything not desired. Actually, the US FDA gave their definition on [their website](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/glossary-computer-system-software-development-terminology-895): A fault in a program which causes the program to perform in an unintended or unanticipated manner. 

**DEFECT**: nonconformity related to an intended or specified use. ([ISO 9000:2015 clause 3.6.10](https://www.iso.org/obp/ui/en/#iso:std:iso:9000:ed-4:v1:en:term:3.6.10))

**NONCONFORMITY**(NC): non-fulfilment of a requirement. ([ISO 9000:2015 clause 3.6.9](https://www.iso.org/obp/ui/en/#iso:std:iso:9000:ed-4:v1:en:term:3.6.9))

The latter two are the harder to find because they are not in the ISO 13485, IEC 62304, and the actual FDA guidance directly.

## Nuances?

#### Difference between Nonconformity and Defect

As ISO 9000 specified, the difference between NC and Defect is simple but important. The defect has legal connotations and could be associated with liability issues. In the general ISO world, NC means anything "out of specs" - it can be as severe as a car's brake not working to as simple as the color of the car model being off. In this case, the former NC impacts (or potentially could impact) the usage of the product and thus will be considered a defect. This is an extreme base, but in general, anything that could affect users' usage should be considered a defect, and that's why you may find defects in IEC 62304 usually appear when the paragraph discusses risk, control, impact…etc.

#### Difference between Defect and Anomaly

At first glance, 'anomaly' and 'defect' may seem similar. However, there's a subtle difference: an anomaly could be outside the manufacturer's requirements and specifications. The definition "...or from someone's perceptions or experiences" covers non-desired outcomes, even if expected. A defect, in contrast, is an outcome that was never supposed to occur in the first place. Understanding this distinction can help us better manage software issues, particularly in the critical field of medical device software.

And bug? A bug could be anything above. People use it as general as possible.

## Practical Usage

And you may think, okay, I know there are differences, now what?

Practically, the US FDA think these terms are all together (they crossed-reference all the terms), and they want the manufacturers to consider them all together. So it is totally cool if you plan to manage them in a system - just pick a word and use it harmonically in your group. However, if you want to further classify problems in your Software problem resolution process (IEC 62304, section 9), you can use these terms as they are well-defined.
