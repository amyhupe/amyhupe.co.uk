---

title: We document our design systems - why don't we systematise our documentation?
date:   2022-11-28
categories: Design systems, documentation
description: The way we create and manage design system documentation is rife with inefficiency. Here's why I think it's time to try a new approach.

---

Working - as I do - at the intersection of content design and design systems, I’m often thinking about ways of improving design system documentation.

And in this quest, I come up against one question time and time again: 

Why don’t we approach guidance and documentation as modular parts of our systems, the way we do with everything else?

Let me explain.

## Design systems documentation as reusable modules

Let’s say that we want to add some guidance to our design system that tells people to write calls to action in sentence case, not title case.

For example: “Buy this book” not “Buy This Book”.

In our documentation website alone, this guidance may be relevant to our:

- button documentation
- guidance on links
- content A-Z styleguide

And beyond our documentation site, we might also want to surface it in places like:

- developer documentation in GitHub or Storybook
- design libraries in Figma or Sketch

At the moment, we can solve this problem by repeating the guidance in all those places, which creates a maintenance burden and risks them falling out of sync. 

Given that content professionals are a rarity in design system teams, and that documentation is often treated as lower priority than other system parts, it’s important that we keep our maintenance overhead as low as possible.

Alternatively, we can create the guidance in _one_ of those places and link to it. This is more maintainable, but forces people to go to another place to get all the information they need to complete their task. 

When we think about how much overlapping guidance design systems typically include, we can see that this solution doesn’t scale far without creating a clunky, disruptive reading experience for those using our systems.

Neither of these options is ideal, and it strikes me as especially nonsensical that we don’t have a better solution, since this is a perfect example of the problem a design system aims to solve.

Design systems seek to increase efficiency via common solutions that can be maintained centrally and reused in multiple places. So why don’t we apply this thinking to our documentation?

## Documentation has variants, too

As well as documentation that’s relevant in multiple places, we may also want to create more than one version of a piece guidance based on the contexts in which it appears.

Building on the previous example, we may want to simply tell people to write calls to action in sentence case, without providing rationale.

But in some cases - for instance in our content styleguide - we may want to explain that sentence case is proven to be more readable most of the time, and link to research to support this.

So already, we have 2 variants:

- rule
- rule with rationale

## Where are we today?

Right now, we don’t really have an agreed upon solution to this problem.

Part of that, I think, is that we don’t widely acknowledge that it _is_ a problem to solve, in the first place.

It’s complicated further by the fact that the mix of tools that we use to document our design systems. It’s typical for most teams to use at least 3 of the following:

- a custom built documentation site
- an off-the-shelf documentation tool, like Zeroheight
- Figma
- Sketch
- GitHub
- Storybook

Any viable solution will need to accommodate documentation modules that can be shared not just in multiple contexts, but also across multiple tools with little standardisation across APIs.

A few weeks ago, my colleague Heydon and I talked to [Chase McCoy](https://chasem.co/), who has also described this problem in his article [Design systems as knowledge graphs](https://chasem.co/2021/08/systems-as-knowledge-graphs).

He, along with his team at Stripe, are running some experiments in this area.

I’ll be watching their efforts with interest, though I think Chase would concede that they haven’t yet unearthed any kind of silver bullet.

## Over to you… 

I’d love to hear from you if:
- you’re also interested in this problem
- you’re exploring solutions to this problem
- you’ve solved this problem already (Hurrah!)

If that’s you, you can amy.l.hupe@gmail.com(mailto:amy.l.hupe@gmail.com), or contact me on [Twitter](twitter.com/amy_hupe) or [Mastodon](https://social.design.systems/@Amy_Hupe).


