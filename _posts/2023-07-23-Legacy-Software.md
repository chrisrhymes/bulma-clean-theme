---
layout: post
title:  "To Convert An Existing Software Product to a SaMD"
categories: General_QMS
tags: IEC_62304 SaMD Legacy_Device
Date: 2023-07-23
---

It has been more and more often that equipment and software companies providing their products to clinics and hospitals are, actively or passively, due to requests from the regulatory authorities, documenting/filing their products as medical devices. Such changes in the status of a product particularly often occur on software. This is [thankfully] due to the huge progress in the use of software in improving physical and mental health. Common scenarios that a company needs to consider converting an existing software product to a medical device or bringing a legacy software item into part of a Software as Medical Device (SaMD) include:

- Your device was not deemed a medical device, but now it is (e.g., due to a regulatory change, your device was for general purposes and you now want to have one with a medical claim),
- You are considering market entry and realize that conforming to an international standard will be a good approach,
- Your device was a health software, but with a new feature(s) or a modified claim, your device now meets the definition of medical devices,
  - by the way, in this situation, you may want to check the FDA guidance [Multiple Function Device Products: Policy and Considerations](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/multiple-function-device-products-policy-and-considerations)
- You are not a medical device company; however, your customer(s) asks you to follow IEC 62304.
- Your device was designed before the 2015 revision, and now you want to make it conform with IEC 62304:2015.

(BTW, in all the cases above except the last one, if you don't have a RAQA professional that you can speak with - find one first)

The design and development of SaMD follows ISO 62304. Accomplished documentation requires all technical files. For a company just starting to develop a product, all documents are natural and prepared during development. However, you may not know where to begin if a product has already developed in the past (termed "legacy product").

In this case, I would recommend a scooping strategy, user IEC 62304 clause 4. Of course, you can follow the standard step-by-step. However, IEC 62304 designed its clause 4 for bringing the legacy software into IEC 62304 system with a slightly different order that may better suit the needs of the ones who already have their product(s) developed.

This blog post aims to share thoughts about using Section 4 of the IEC 62304 standard to integrate legacy medical devices into Quality Management Systems (QMS). 

Clause 4 includes the following steps:

1. Risk management
2. Determine the Software Safety Classification of your device and determine the deliverables applicable
3. Justification and Maintenance.

Let's walk through them together!

## Risk Management

1. First of all, gather as much existing information as possible and start thinking about your claim/intended use of legacy software. No matter your legacy software is a software item of your product or the legacy software is the product itself, the claim is crucial for you to do the risk assessment.2. Perform risk assessment based on
2. Perform risk assessment based on
   <ol type="a">
   <li>the intended use of your legacy software (software item within a product or being the product itself),</li>
   <li>known feedback/post-production information, especially incident and near-incident events and known anomalies; and</li>
   <li>for integrating legacy software items, their positions and connections within the entire product's architecture</li>
   </ol>
3. Perform regular risk management against this legacy software item(s) and the impacts on the entire product as per ISO 14971 and IEC 62304 §7.1 & 7.2.
  - Reminder 1: these controls should be part of the requirements.
  - Reminder 2: check appendix C in your IEC 62304 guidance for the relationship between ISO 14971 and IEC 62304.

## Software Safety Classification and Gap Mitigations

1. Use your pre-mitigating risk assessment results and the existing external risk controls to determine your Software Safety Classification. It will also likely determine your [documentation level](https://wenytheraqa.github.io/fda/Final-FDA-guidance-on-Content-of-Premarket-Submissions-for-Device-Software-Functions/) if you plan to make a 510(k) submission.
2. Based on the determined Software Safety Classification A, B, or C, you can determine the deliverables you will need.
   - If you ready has some existing deliverables - review them and do a gap assessment;
   - If you have some non-formalized requirements, architecture, or testing - do gap assessments and take the credits from them;
   - In any case, 
     - List your requirements and draw the architecture diagrams, then do the mapping to see if any unmet requirements need to be re-engineered;
     - List your requirements and your current testing, then map them to ensure the full coverage of your testing.
   - As stated in the guidance, the minimum deliverable should be your software system test records.
     - Reminder 3: If the legacy device is integrating into a system (but not the system itself), the details of the system testing should be based on your software safety classification of the **system**, not the legacy devices. The software safety classification of legacy devices depends on partitioning software items within your software system. Figure B.1 in IEC 62304 explains the concept well.

## Justification and Maintenance

You should justify why you determine legacy devices are still good to use.

After all the deliverables are complete, whether you newly create them or you review and deem the existing deliverables acceptable, the following activities will be back to regular maintenance processes and activities.

## Additional Notes

Of course, QMS is way more than IEC 62304. There are also the implementations of ISO 13485, ISO 14971, IEC 62366 and others (fun stuff!) In addition, please definitely check cyber-related guidance. Cybersecurity is now vital and worth a designated post to talk about. 

