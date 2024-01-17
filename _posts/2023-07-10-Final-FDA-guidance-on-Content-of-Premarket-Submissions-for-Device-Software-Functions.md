---
layout: post
title: "Deltas of 2023 (Final) FDA guidance on Content of Premarket Submissions for Device Software Functions"
date: 2023-07-10
hero_darken: true
categories: FDA
tags: FDA SaMD
---

Just a friendly reminder 😉 - the FDA guidelines is for preparing your submission packages. So even if the FDA doesn’t require a specific document for submission, you must still ensure you cover all the necessary steps according to 21 CFR 820, ISO 13485, and IEC 62304 --- if you claim conformity.

Simply want to highlight a few observations that caught my attention:

## Compare [2015](https://www.fda.gov/media/73065/download) and [2023](https://www.fda.gov/media/153781/download) versions

### A.1: SW91:2018

A new standard out in 2018. May worth checking.

### A.2: Level of concern is gone - Documentation Level is up

It may be worth mentioning to those who just entered the SaMD world that both “level of concern” and “Documentation Level” are intended to scope the documentation/information needed for the premarket notification/approval submissions but not the development practices.

I think the 2023 revision used a more aligned language to IEC 62304 and ISO 14971:2019. In short, based on the context of the devices’ intended use:

- Enhanced Documentation corresponds to Class C.
- Basic Documentation corresponds to Class B & A. No minor level anymore.

### A.3: Software Version History 

This part is interesting (at least to me). The term changed from “Revision Level History” to “Software Version History,” and the requirements were slightly different than they used to be.

The information needed is more specific:

- The Scope of Documentation: The original history of “software revisions” created during the “product development” cycle. It does not specify the different levels (unit, integration, and system) of software testing and verification or validation activities as in the 2023 guidance. The 2023 guidance even specifies different types of testing - bench, animal, and clinical testing, if applicable. This was not in the 2015 version.
- Type of Changes: The 2015 version referred to the “major” changes in each software version, while the 2023 guidance mentions “all” changes, suggesting a more detailed and extensive list of modifications in the latter case.

### A.4: Unresolved Software Anomalies

For this deliverable, the draft guidance was similar to the 2015 version. But new content was added in the 2023 Final version - How it was discovered & the root causes analysis are now expected. On the other hand, the “any plans or timeframes for correcting the problem” is not mentioned in the 2023 Final version.

Also, the FDA removed “or from someone’s perceptions or experiences” from the anomaly description. It seems (at least to me) to be an intensional removal and deviated from IEC 62304:2015+A1. I think the US FDA has now aligned the concept of “unresolved software anomalies list” to Non-Conformity Materials during the submission review. However, as mentioned in the beginning, this guidance is not meant to say the manufacturers should change their IEC 62304 practices; it is just the “or from someone’s perceptions or experiences” part of the information that is not required for the submission.

### A.5: AI/ML related components

As expected, several AI/ML-designated items are listed in the **Software Description** section.

### A.6: Traceability Analysis is gone but everywhere

As can be noticed, there is no designated item called traceability analysis. However, please note that the traceability-specific descriptions are in the SRS, Risk Assessment, and Verification and Validation. Still, personally, I'll recommend you still prepare a summary table similar to what is in [the special 510(k) guidance](https://www.fda.gov/media/116418/download), even for internal gap analysis.

## Compare 2022 (Draft) and 2023 (Final) versions

Most of the changes between the Draft and the Final version are for clarification purposes, making the requirement more comprehensive. For example, in the risk analysis section, the Draft guidance only mentioned “Identification of the hazard,” and the Final guidance specified it as “Identification of known or foreseeable hazards.” In this case, the risk management files have languages more aligned with the recognized consensus standard ISO 14971:2019.

Although a careful gap assessment is encouraged if you have updated your internal procedure(s) based on the Draft guidance. We are not discussing these minor differences in this article.

### B.1: Predetermined change control plan (PCCP) section

FDA PCCP guidance ([Draft](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial)) was out earlier this year. If you attended to FDA’s webinar, you may notice that the moderator, Elias Mallis, emphasized in the meeting that “It’s important to note that while the draft guidance is focused on PCCPs for AI/ML-enabled devices, the omnibus provision applies to more than just AI/ML. And in fact, the bill provides authority for PCCPs for all devices” ([p.4])(https://www.fda.gov/media/167353/download)), which is reflected in this 2023 Final version. I think this PCCP concept is a great step, especially for the devices established based on some theories or clinical practices, e.g., devices for simulation, digital therapy, clinical decision support devices…etc. These devices may need to be updated when there are any evolutions in clinical practices and state-of-the-art. For manufacturers of these types of devices, it may be worth considering discussing the potential changes with the authorities ahead.  

### B.2: Criteria for Enhanced Documentation is reduced

Compared with the Draft Guidance, the Final Guidance stressed that the US FDA uses a risk-based approach.

In the draft guidance, the criteria for “Enhanced Documentation” were:

> 1. *The device is a constituent part of a combination product.*
> 2. *The device (a) is intended to test blood donations for transfusion-transmitted infections; or (b) is used to determine donor and recipient compatibility; or (c) is a Blood Establishment Computer Software.*
> 3. *The device is classified as Class III.*
> 4. *A failure or latent flaw of the device software function(s) could present a probable risk of death or serious injury, either to a patient, user of the device, or others in the environment of use. These risk(s) should be assessed prior to implementation of risk control measures. You should consider the risk(s) in the context of the device’s intended use; the direct and indirect impacts to safety, treatment, and/or diagnosis; and other relevant considerations.*

And when we moved on to the Final guidance, in addition to the content emphasising that the Documentation Level is based on the risk of the software device function(s) in the context of the device’s intended use, the criteria for “Enhanced Documentation” became:

> *should be provided for any premarket submission that includes device software function(s) where a failure or flaw of any device software function(s) could present a hazardous situation with a probable risk of death or serious injury, either to a patient, user of the device, or others in the environment of use. These risks should be assessed prior to implementation of risk control measures. Sponsors should consider the risks in the context of the device’s intended use (e.g., impacts to safety, treatment, and/or diagnosis), and other relevant considerations.*

Please note that the first three criteria mentioned in the draft guidance were not gone; they were moved to the following paragraph and changed from “must-have” to “recommended,” device manufacturers can justify why the Basic Documentation is appropriate for their devices.

### B.3: Removal of OTS Appendix

I believe this is just to avoid the information duplication - OTS FDA guidance is referred multiple times in the guidance.
 
