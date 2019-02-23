---

title: Handling example copy in design systems
date:   2019-02-22
categories:
---

Earlier this week, I took to Twitter to ask a question. I wanted to know more about the different approaches people take to handling the copy (words) in design system examples.

But first things first.

## What is a design system?

Design systems help organisations create consistency across one or more products. In large organisations especially, they also stop teams from having to solve problems that have already been solved by other teams.

You’ll find many a definition of design systems floating around the internet and in books (remember books?) but in this article, I’m defining a design system as a collection of:

- code and tools, like design layout or prototype-making software
- processes like peer reviews and quality assurance
- best practice guidelines like content and visual style guides
- reusable designs for common user interface elements like buttons, tables, links, headers and footers
- solutions or design patterns for common user tasks like signing in or out of a website, searching for something or filling in a form

Design systems contain lots of documented examples, and those examples often include copy.

This copy doesn't replace a general content style guide, but it can help to reinforce best practice, and give guidance for more specific scenarios.

## Types of example copy

Broadly speaking, there are 3 different types of example copy you can use – instructive, realistic, or placeholder copy.

### Instructive copy

Instructive copy describes what information is needed to replace it. For instance, instructive copy on a button example might say “[button text]” or “button text goes here”.

### Realistic copy

Realistic copy is what it sounds like. It’s an example of the actual copy that might be used in a real-life situation. In the button example, realistic copy might be “Confirm and send” or “Get a quote”.

### Placeholder copy

Placeholder copy is dummy text, the most famous example being [Lorem Ipsum](https://www.lipsum.com/). It shows how content will fill a space, whilst aiming not to distract the viewer with readable content. Lorem Ipsum, as well as derivatives like [Hipster Ipsum](https://hipsum.co/) and [Bacon Ipsum](https://baconipsum.com/), are commonly used in prototype applications, page designs and editorial layouts.

 ## Which type of copy works best in design system examples?

Welcome back to my original question. In the case of design system examples, is it best to use instructive, realistic or placeholder copy, a mix of these, or something else entirely?

In the [GOV.UK Design System](https://design-system.service.gov.uk/), which I work on, we use realistic copy in most of our examples.

<div class="image">
	<figure>
		<img src="/assets/images/radio-buttons.png" alt="a screenshot of an example from the GOV.UK Design System, showing a set of radio buttons underneath the question ‘where do you live?’. The first option, ‘England’ is selected." width="100%">
		<figcaption>Radio buttons example in the GOV.UK Design System using realistic copy.</figcaption>
	</figure>
</div>

We’ve found it helps to give our users an idea of how something works in context and shows, at least implicitly, what good copy looks like.

This works especially well for things where the context is specific, like our [asking for names](https://design-system.service.gov.uk/patterns/names/) or [email addresses](https://design-system.service.gov.uk/patterns/email-addresses/) patterns. In these cases, a Design System user can just take the copy and it will likely make sense in their service.

But for other things, like a [text input](https://design-system.service.gov.uk/components/text-input/) or [table component](https://design-system.service.gov.uk/components/table/) we really can’t know what context it’s going to be used in.

If the user’s context is different, which it often will be, we’re not providing them with a template or structure that they can tailor to their needs.

With realistic copy, they’ll have to adapt what we’ve given to suit their use case, or start from scratch.

In this instance, is instructive copy more useful? Should we stick with realistic copy, but provide more examples to cover the most popular use cases? Should we use a combination?

I wanted to find out what other people were doing, so I went on Twitter and asked.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">People who work on <a href="https://twitter.com/hashtag/designsystems?src=hash&amp;ref_src=twsrc%5Etfw">#designsystems</a> I have a question. When an example includes copy, like the words on a button, do you use:<br><br>- instructive/illustrative text eg “button text goes here”<br>- realistic copy eg “submit” <br>- Lorem Ipisum <br>- a mixture of those<br>- something else<br><br>And why?</p>&mdash; Amy Hupe (@Amy_Hupe) <a href="https://twitter.com/Amy_Hupe/status/1097455807908716544?ref_src=twsrc%5Etfw">February 18, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## What Twitter thought

I got a tonne of really useful responses.

There was an overwhelming preference for using realistic copy, as it:

- helps users to understand the context in which something could be used, without having to imagine it
- makes it easier to evaluate the efficacy and appropriateness of a component or pattern
- gives hints about the correct content formatting, like length, case, grammar and punctuation

However, instructive copy does have some advantages. A system would struggle to predict every possible application of its components and prescribe a precise solution. And it shouldn’t try to either.

One benefit of instructive example copy is that some consistency can still be established by providing rules and a structure to follow.


And there’s always the option of a hybrid approach. At least 2 people told me they use a mixture of instructive and realistic example copy.

Deliveroo uses this approach in their [content design examples](https://medium.com/deliveroo-design/content-design-systems-need-you-82836afb4fe6). For example, their toggles and switches pattern copy is:

**Toggle on**

_Label: [The thing] for example, Notifications_
_Subcopy: [The result of the on state] for example, You’ll get notifications_

**Toggle off**

_Label: [The thing] for example, Notifications_
_Subcopy: [The result of the off state] for example, No notifications for you_

In this example, instructive text allows Deliveroo to communicate the structure and intention of the copy, while realistic copy shows how it works in practice.

## Is a mix of instructive and realistic copy the answer?

Using a hybrid approach like Deliveroo has definite advantages. It enables users to find content design guidelines and best practice examples in one place.

That said, I’d use it with caution for context-specific patterns. For example, asking users for common information like names or addresses, or familiar interactions like signing in or out.

In these instances, there’s less of a need to tailor the copy, so instructive text may well be overkill. An example with realistic, well-tested copy is probably all you need.

## And what about Lorem Ipsum?

Frankly, it wasn’t popular. Not one person in my Twitter thread recommended using it, and many warned against doing. Not least because of the risk of [Lorem Ipsum ending up in live services by mistake](https://www.simplysigns.com/lorem-ipsum-fails/).

Using realistic or instructive copy in design system examples are a much better way to communicate the intention and use of a component or pattern.

There’s also an implication that by using placeholder copy in designs, the content is being treated as an add on.

As a content designer, I probably don’t need to explain why that doesn't sit well with me.

As [Eli Montgomery](https://twitter.com/Intentionaut/status/1097779673709400065) put it:

_"Content matters and designing with fake content means we're not going to make it right._

_Design makes content work. Not the other way around."_

A big thank you to everyone who responded to my Tweet and helped inform this article. If this sparked your interest, you can [read the whole thread on Twitter](https://twitter.com/Amy_Hupe/status/1097455807908716544).
