---
layout: page
title: Notebooks
menubar: menu_notebooks
permalink: /notebooks/
show_sidebar: false
---

I enjoy solving problems. When I can do it with code, I usually have the opportunity to build upon work of other people, including work I have done somewhere else. This work includes:
1. Concpets: Problems have reoccuring themes. I want to capture those themes, and reuse them. For example, when dealing with a nested list of arbitrary changing depths, and I want to flatten the list, what do I do? Antoher example is examining why it is discouraged to change an iterable during a loop.
2. Algorithms: Most programmers know binary search. But what about variations of binary search? One such variation relates to the problem of finding the first element in a list such that for it a predicate on list elements changes from `true` to `false` or vice-versa. Before it the predicate returns `true` and from that element onwards, the predicate returns `false`.
3. Data Strcutres: Data structures are a specialized tool for a given theme. That said, most data structures do not have builtin accessible implementations. For this reason, I created my own implmentations. Each implementation is composed mostly of implementations I found in other sources, with tweaks I made to patch these together.

Each of these topics can be divided to subtopics. I created Jupyter notebooks for these subtopics, and I will show them here. I am currently focused on Python3.

A word about granularity: There can be many ontologies for dividing such topics. For now, I chose to skip publishing my material in a rigid granularity policy, and mainly share the notebooks with you. As the list grows, I will address this, probably by moving material to [Jupyter books websites](https://jupyterbook.org/en/stable/intro.html).