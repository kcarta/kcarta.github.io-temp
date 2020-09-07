---
layout: post
title:  "The Product Owner role in Enterprise Systems Integration Projects"
#date:   2020-00-00 00:00:00 +0000
tags: []
comments: true
---

In previous posts []({}) I wrote about a series of posts I came across, by Samad Aidane, which examine Agile practices in the context of enterprise systems integration projects, a sort of 'white whale' of mine. I laid out my thoughts on several practices that Aidane lists, but never gives a detailed writeup on: using rolling wave and timeboxes for planning, and following Scrum concepts like sprints, retros, and standups. In this post, I'd like to examine a practice Aidane *does* explore, the Product Owner.

First, I'd like to look at one more practice Aidane lists but doesn't discuss, which I think segues nicely into the topic of the Product Owner:

## Use single prioritized backlog of work

A large enough ("enterprise") project will likely have multiple official & unofficial stakeholders, in addition to a primary sponsor who controls the budget. A large project has to align a formidable array of parties: those of all the concerned stakeholders and sponsor(s), any affected business units, the project development team(s), project partners, platform suppliers (especially on enterprise SI projects) and not to be forgotten, of course, the end-users. 


To have a hope of success, a project must respect and consider the interests of all these parties. Meeting this challenge requires an equally formidable set of practices, to me best enshrined in the single backlog of work, owned and ordered by a single responsible Product Owner.


I think the concept of the backlog is fantastically simple: a list of work items, to prepare and feed to the development team so that they can build a product. 

 The backlog scales well, too.  Frameworks like SAFe seem to me (a novice) to be first and foremost about backlogs and ceremonies for maintaining them at various scales. I don't see any other way to scale a project to a multi-team level, without scaling the backlog concept first and foremost. A team (department, organization, etc.) must at any time have a clear, singular focus. The moment aced with competing demands  does, that team will immediately become crippled due to the loss of focused clear direction and competing demands.

I think the concept works best on its most granular level, with one product, one backlog, one team, and one product owner.

Especially within a legacy-laden enterprise, there will always be many competing interests putting pressure on the project. In such an atmosphere, a project divided against itself cannot succeed.


### Prioritization

This single backlog must also be prioritized. It is rare to see backlog items in an integration project that aren't either essential for technical reasons, or of high priority for one or several key stakeholders. Prioritization methods - MoSCoW for example - can be valuable in highlighting the exceptions, the scope that *can* be negotiated. As a method for steering the project, I consider prioritization important, but with quickly diminishing returns due to the technical necessity of most of the work in an integration project.

### Ordering > Prioritizing

Ordering the backlog is a lot more important than prioritizing it. One key challenge for a Product Owner in an integration project is that the ordering of the work is largely technically-driven. How is a PO, especially one lacking a technical background, supposed to understand the "natural" technical ordering of the backlog items? 

*By working closely with the development team*, I reckon. With active input from the development team, the Product Owner can still own the backlog and ensure that the work on it is properly ordered. This is a lot of work, probably more than a single Product Owner can handle in a busy enterprise organization! However, this should open up a few strategic opportunities such as early identification and resolution of dependencies, coordination of support activities for development, test, and release, and hopefully the ability to do some value-driven prioritization as well.

## Product Owner


## How do you feed the single backlog?

The question of how to fill this backlog, is one I'd like to examine in a standalone post. Understanding, estimating, planning, tracking, delivering, and reflecting on *the delta* is the killer element of integration projects in my opinion, and deserves way more attention than I'd like to give in this post.