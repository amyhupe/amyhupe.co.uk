---
title: Should design systems include problematic components and patterns?
date:   2022-11-24
categories: design systems 
description: Is it ever appropriate for design systems to include things we don't really want people to use? Here are some considerations to help make that decision.

---

Every now and then I run into the question of whether design systems should document and distribute components and patterns that we don’t really want system users to use. These are sometimes referred to as “anti-patterns”.

A few years ago, I was involved in one such debate about whether to include [a Select component in the GOV.UK Design System](https://design-system.service.gov.uk/components/select/).

(As spoilered by the link I just included, we decided we would.)

One the one hand, selects - or dropdowns - come with a suite of well-documented usability issues. You can find out more about these in:

- [Burn your select tags, a talk by Alice Bartlett](https://www.youtube.com/watch?v=CUkMCQR4TpY)
- [Dropdowns should be the UI of last resort, by Luke Wroblewski](https://www.lukew.com/ff/entry.asp?1950) 

On the other hand, selects were and still are incredibly common on the web as a whole, and in government services in particular.

We didn’t want to encourage usage of selects, but given their prevalence, it didn't feel right to omit them completely.

I don’t think there’s a one-size-fits-all solution to this problem, but I have found some common considerations.

## How much is the component or pattern being used?

If only few teams in our organisation are using a component or pattern, then including it could turn a small problem into a much bigger one.

But if the component or pattern is already being widely used and we omit it, we automatically add “inconsistent implementation” to the list of existing problems it carries.

I don’t believe there’s a quantifiable tipping point at which something becomes worth including, but this question should form part of a system team’s discussion.

## How often are people looking for it in our design system?

As well as observing how often a component or pattern is being used, we should also take stock of how often we’re being asked for it. 

Are people searching for it in our design systems? Are we getting requests to add it to our backlog? 

This will help us to spot a potential uptick (or fall) in demand and factor that in, too.

## Is there an opportunity to make it less bad?

In many cases, there are opportunities to remediate some of the problems inherent with certain components and patterns.

With a select, for example, we can at the very least offer guidance on:

- writing a clear label
- front-loading the copy for options, in case they get cropped
- ordering options
- when to pre-select an option, and when not to

## Including bad practice in design systems gives us an opportunity to call it out

In an ideal world, we’d eradicate bad practice from our systems and then our products entirely.

In the real world, we don’t always share the same understanding or opinion of what constitutes bad practice. 

Design systems provide an opportunity for alignment.

By surfacing problematic components and patterns in our design systems, we create a place for ourselves to explicitly state:

- that they’re problematic
- why they’re problematic
- what to use instead

## In summary

I don’t subscribe to the idea of purely “descriptive” design systems - ones that simply systematise existing UI, regardless of its usability and quality.

Design systems have a responsibility to mitigate - and certainly to not proliferate - bad practice.

However, design systems must also acknowledge the reality of the context in which they sit.

If problematic components and patterns are being widely used, then our design systems can play an important role in discouraging further uptake, raising awareness of their issues, and offering risk-mitigation advice and alternatives to consider.

As with most design system concerns, there’s no blanket solution here. But I hope these considerations will help you the next time you’re faced with this question.


