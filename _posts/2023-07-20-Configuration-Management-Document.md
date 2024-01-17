---
layout: post
title:  "Deliverables for Software Configuration Management in IEC 62304"
categories: General_QMS
date:   2023-07-20
tags: IEC_62304 SaMD
---

Just share notes and thoughts about the Software Configuration Management in IEC 62304 (section 6 in the 2015 version).

# Configuration Management

"Configuration management(CM)" is a generic concept in ISO, IEC, and IEEE (or the [FDA Glossary](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/glossary-computer-system-software-development-terminology-895)). It applies to hardware & software, and products & services.

Tailor it for IEC 62304; in my language, it means your controls over your listed software items include
- Identification of both the item level and the system level
- Change Control Processes (map with ISO 13485:2016, §7.3.9)
- Configuration status accounting, aka records of the history, including when and why --- to ensure only authorized modifications will go into the product(s).

## Deliverables:

### CM procedure

**Identifications**: describe the versioning system and the naming system:
- Versioning: Do you use the major.minor.patch, major.minor.build. revision, or the year and date? And better to explain your definition of "major" and "minor."
  - Personally, I prefer to have a major and minor in the system, review the [FDA 510(k) software change guidnace](https://www.fda.gov/media/99785/download) or anything similar from the regulatory authorities with the Engineering, and map the definition of "major" when we need to file a new submission.
- Identifier: how do you name your software items
  - Please note here are the items, including source code, object code, control code, control data, or a collection of these items.
  - Think about if there is a need to have an internal identifier for SOUPs and OTSs, or you can use its original names.
  - Assets within the software will also be within the scope (e.g., any images, text...etc.)


**Change control**:

The process flow should be: 

```
Initiative a Chagne Request -> Approve Chagne Request -> Implement changes -> Verification -> Release.
```

Several points:
- I consider a "change request" as a "plan" --- we document the scope, evaluate the impacts, and identify the applicable activities and tasks.
- I think the term "implementation" in ISO 13485 differs slightly from IEC 62304 within this change control context. I believe this is due to the natural difference between standalone software and general manufacturing: "implementation" in IEC 62304 §8.2.2, to me, is making changes to the software configurable items prior to V&V. In ISO 13485:2016, §7.3.9, the implementation is when the design change has been approved and going to be transferred to the production.
- IEC 62304 §8.2.4 makes it clear that a change request needs to serve traceability purposes: A Change request <-> a list of the product report (e.g., your bug tickets or open issues) <-> The approval that lists the changes on the configuration software items (§8.3).


### CM Plan (62304, §5.1.9)

| Requirements | Sections in your Plan | Notes |
| -------- | -------- | -------- |
| The classes, types, categories or lists of items to be controlled | Refer to your SOP/WI and specify where will you document this information (e.g., release note, SBOM...etc)  | For both the system/product and all items involved |
| The configuration Management Activities and tasks | A table of applicable activities and the owners is recommended. Besides, a checklist before product release (design tranfer) is recommended. | See below Note 1 |
| The organization(s) responsible for performing software configuration management activities | This include storage, record keeping ...etc. | See below Note 1 |
| When the items are to be placed under configuration control | What is your criteria of baseline, and when your particular version(s) will be agreed upon and fixed. | [ISO definition](https://www.iso.org/obp/ui/en/#iso:std:iso:9000:ed-4:v1:en:term:3.10.7) |
| When the problem resolution process is to be used | §5.6.8, §5.7.2, and §6.2.2 | |

**Note 1**: Several examles:
- Your configuration management includes OTS and SOUP items within your device(s). Based on the situation, you could download and store your copies for your OTS/SOUP or update the item lists when your vendor updates the version (e.g., the item is a Saas) or in any other applicable manner.
- You may have different teams controlling different type of items (e.g., have a designated team for media controls, or technical writers for the IFU page...etc.)
- You may have an OEM for software development, and they are the one maintaining it.
- You purchased a customized software component, and you will maintain it by yourself in the future.

&nbsp;

Of course the rest of the deliverables will be the deliverables you mentioned in your CM plan.

___

I hope you find it more straightforward than you thought it would be. And I hope you think this article is helpful :smile:

