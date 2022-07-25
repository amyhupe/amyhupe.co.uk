---
title: Crediting contributors in design systems
date:   2022-07-25
categories: design systems
description: Challenges and things to consider when crediting design system contributors for their work.
---

When we talk about how to incentivise design system contribution, something that comes up in almost every discussion is accreditation: Can we recognise design system contributors with a public acknowledgement of their work on a component or pattern? Or can we award individuals a contributor “status”, by naming them in design system documentation, putting their picture in a digital wall of fame, or sending them a sticker?

Such solutions are seductive in their apparent ease and lack of contention. Formally acknowledging someone’s work takes little time, is free to do, and is surely an attractive promise to prospective contributors.

But in these conversations I often find myself playing the role of spoilsport. Because although I believe, strongly, in making sure people get credit for their work - I also find myself wrangling with complexities that don’t often get talked about. 

In this post I’ll give a rundown of some things to consider when crediting contributors, and why it’s more challenging than it might seem on the surface.

## 1. What constitutes a contribution?

In his article, [defining design system contributions](https://medium.com/eightshapes-llc/defining-design-system-contributions-eb48e00e8898), Nathan Curtis explores different types of contribution on a scale. These range from small updates - like bug fixes - to small and large enhancements, all the way through to whole new features.

He also makes a case for distinguishing between “contribution”, which results in tangible, recordable change, and “participation”, which influences the system but does not directly change it.

(I have a slightly different take on this, but that’s another post for another time!)

Whether you agree with Nathan’s definition of contribution or you follow a different model, one thing is clear: When thinking about crediting contribution, we must first be clear about what we consider it to be.

And if our definition includes different types and levels of contribution, how do we reflect this in our attribution? 

Do we credit people in different ways based on the size of their contribution? Should the size and significance of a contribution be based purely on the impact it has on the system, or does the effort of the individual or team count for something, too?

For example, based on system impact alone, we might decide that a single-line-of-code bug fix from an experienced developer is equal to a typo correction from a content designer. 

But what if, to correct that typo, our content designer had to learn the basics of markdown and GitHub to be able to open a pull request? Do they receive the same level of acknowledgement as the developer who could make their update in a matter of seconds?

Or what if fixing that bug, with that single line of code, required several hours of research from our developer? Is it fair to represent their input as equal to fixing a typo, which required nothing more than a keen eye and a spell checker?

I don’t think there’s a perfect answer here, but in some ways that’s the point: fair and effective attribution requires us to engage with this nuance.

## 2. What if someone doesn’t want their contribution acknowledged publicly?

This is one we don’t often consider. The majority of contributors appreciate attribution, which can lead us to thinking that this position is universal.

But over the years I’ve encountered several people that didn’t want their name attached to a contribution because, for example:

- they worked on it under the radar, without their manager knowing
- the change was potentially contentious and they feared a backlash
- they didn’t use social media and felt uncomfortable with the idea of people discussing their work on Twitter where they wouldn’t see it
- they felt shy about receiving “a fuss”

In reality, there’s likely a myriad of reasons why people may not want their contribution recorded. Taking a fair and human-centred approach to crediting contributions means doing the work to understand preferences on a case-by-case basis.

## 3. How does a design system team protect contributors?

As I touched on before, some contributors fear criticism from the design system’s users once their work has been published - and that anxiety isn’t unwarranted.

If you’ve worked on design systems, you’ll know that it’s common to receive feedback - both constructive and… not so constructive - on the enhancements and features you release.

When that feedback is levelled at those of us in the design system team, we usually recognise it as something that comes with the territory. We share responsibility as a team, and we work together to decide on our response.

But when criticism is directed at the work of an external contributor, we’re in muddier water.

It’s easy enough to establish a policy that the design system team accepts responsibility for whatever gets into the system. We can agree that it’s our duty to respond to negative feedback, and to manage the consequences of anything the system releases.

But in practical terms, this can be hard to govern. Unless we wholly own all the channels of communication used by the systems users and contributors - and for many design systems that includes general design and engineering Slack channels, open repositories on GitHub, and even Twitter - it’s hard to reliably shield contributors from negative feedback, or manage their response.

And to demonstrate how this can escalate: an example. 

A design system team I once worked on used an open source repository on GitHub to host discussions about current and upcoming patterns and components. One such discussion occurred on the subject of how to ask users about their gender.

Following suggestions and research shared by a trans person about how to better support trans users in answering this question, we updated the pattern. This unfortunately triggered a number of critical comments which, though not _explicitly_ abusive or transphobic, amounted to disrespect, erasure and harm to the contributor and other trans users of the design system.

We acted quickly, but damage and harm had already been done to our contributor - and we couldn’t reverse that.

This is arguably a stress case, but it’s one worth thinking about when considering how attribution can go wrong, if we don’t proactively plan for worst case scenarios.

## 4. If a contribution evolves beyond the original author’s intent, should it still be attributed to them?

A final point to consider is how to maintain accreditation over time.

Consider this scenario: Someone contributes a design pattern for letting users select a country. Their design uses a dropdown menu (a select) to let users pick from a pre-defined list. We include their name and avatar on the pattern’s page in the design system website.

After the pattern is released, another team tests it and learns that users are struggling with the pattern, and find that using a text input with autocomplete works better. They contribute this update to the design system and the pattern is changed.

At this point, we have a few choices.

We can leave the original contributor’s details on the pattern. This acknowledges that their input was an important part of the pattern’s evolution, even though the implementation is different from what they proposed.

This may be the most equitable option, but it could be misleading. What if the original contributor disagrees with the new implementation? In that instance, their name is now attributed to something they don’t believe in. On the other hand, is it fair to credit someone for a solution they didn’t actually come up with?

Deciding to remove the original contributor’s details presents problems, too. Whilst doing so might be more accurate in terms of the system’s current implementation, it effectively erases their input.

Would we have discovered and included an alternative pattern, if not for the original contributor’s effort in producing and publishing that first pattern? Is it fair to cut them out of the picture, when they played an important role in the pattern’s development?

To some degree, these issues can be resolved by taking care to go beyond simply slapping a name and an avatar against a contribution, and providing context about the specific part they played. But it does require consideration, and makes it difficult to neatly automate a solution.

## Crediting contributors is complicated, but critical

I want to finish this post by making something crystal clear: 

**None of the challenges I’ve discussed should merit not crediting contributors.**

Attribution is an important currency between design system teams and external contributors. Making sure people get recognition for the work they’ve done is part of what makes our design systems fair, representative and worth contributing to.

But it’s important that we engage with the complexities and nuances I’ve discussed here, to make sure our approach is responsible.

If you’ve found a great way of crediting contributors, I’d love to hear from you. You can email me at [amy.l.hupe@gmail.com](mailto:amy.l.hupe@gmail.com) or [get in touch on Twitter](https://twitter.com/Amy_Hupe).


