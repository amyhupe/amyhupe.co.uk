---
title: Design systems and structured content
date:   2021-11-12
categories:
description: How do we publish design system usage guidance across multiple tools and platforms? Could structured content provide a solution?
---

When people talk about design system documentation, they often mean:

- values for design foundations, like colours, spacing and layouts
- component specification, like size, spacing and behaviour
- the system’s information architecture - how things are categorised and named

But not everything can be “baked in”, and communicated through a token’s name, a component’s code, or an annotated visual.

Sometimes we can’t just _show_ what we mean, we have to _say_ it. I'll call this "usage guidance". It includes things like:

- when to use a certain component or design element, versus another one
- accessibility guidelines
- how to write copy for the text elements in a component, like the label or hint text on a form input
- relevant research findings
- how to contribute
- how to ask for support

For me, usage guidance is where the value lies. It’s where we tell people not just what to use but how, and why. It’s where we can communicate purpose and intent; helping to establish the values we adhere to, even if the specific applications of those values change.

Most design systems _do_ provide usage guidance, but they’re often treated as secondary to the first set of things I mentioned—and that’s disappointing.

## Are we forgetting usage guidance in our multi-platform docs publishing plans?

A problem arises when we start to explore solutions for disseminating design system documentation across different tools.

By harnessing APIs and plug-ins for tools like Storybook and Figma, it’s becoming easier and easier to manage design rules and component specs from a single source.

But while these solutions cater increasingly well to that first subset of documentation I mentioned, I can’t help but feel that usage guidance is being left out of the equation.

How are we going to manage _that_ across different tools, so it can live in situ, alongside the component or style element it refers to, in whatever tool our audience is using?

Let’s use the example of a tabs component. We can create a single source of truth that shows developers in Storybook and designers in Figma:

- how to style the tabs with the right colours and fonts
- the size of the tabs
- how the tabs change at different breakpoints
- how the tabs behave on hover, focus, and when active

But where do we explain that tabs can be a usability nightmare, causing users to miss content?

How about the fact that tabs probably work best in regular-use systems, where the need to efficiently switch between related information, might outweigh the need for a simple first-time experience? 

And what about guidance on how to write clear labels for tabs, which can’t just be hard-coded in since we don’t know the context in which they’ll be used?

## Our current solutions are inadequate

Unless you work in an organisation where designers alone make these kinds of decisions, and developers just implement them, this information is relevant for both disciplines—and currently, the best solutions we have for providing it in multiple tools within a design system are:

- put in a documentation website, which may become less relevant and less likely to be looked at the more we cater to our users’ in-tool experiences
- publish the same content in multiple places and update each instance every time there’s a change - a solution with huge maintenance overhead and that risks information falling out of sync

Neither of these solutions seems satisfactory. I worry that they’ll lead us to a place where usage guidance gets forgotten about, and our design systems turn into spec-libraries, devoid of context.

## Could structured content be the answer?

Here’s the bit where I tell you I don’t really have an answer. 

I’m a content designer thinking about a content problem, and I don’t yet know what’s technically possible, but one of the ways I think we could start to solve this problem is with structured content.

Structured content is content that has been broken down into its constituent elements, which are then categorised, tagged and named.

For example, if we were to take a structured content approach to our component usage guidance, we might break it down into:

<table class="a">
    <tr>
        <th>Content element</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>Title</td>
        <td>Tabs</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>The tabs component lets users switch between related sections of content, displaying one section at a time.</td>
    </tr>
    <tr>
        <td>Installation guidance</td>
        <td>To use the tabs component, you’ll need to import the component package from npm.</td>
    </tr>
    <tr>
        <td>Suitable situations</td>
        <td>Use tabs when users might need to switch between related sections of content and won’t need to view more than one section at a time.</td>
    </tr>
     <tr>
        <td>Unsuitable situations</td>
        <td>Don’t use tabs when users might need to view all of the content at once. In this case, use accordions instead.</td>
    </tr>
     <tr>
        <td>Implementation rules</td>
        <td>Write clear labels to help users understand what content is included in unselected tabs.<br><br>
        Organise tabs in order from most-to-least important, based on user needs.<br><br>
        Don’t disable tabs—it’s confusing. If you don’t have any content for a tab, remove it.</td>
    </tr>
     <tr>
        <td>Support details</td>
        <td>If you need help using this component, email us at example@designsystem.org</td>
    </tr>
     <tr>
        <td>Contribution guidelines</td>
        <td>If you want to contribute a change to this component, open a pull request on GitHub</td>
    </tr>
</table>



<br><br>This is an over-simplified example, but hopefully you can already see how some of this content would be useful to more than one set of users, while some of it wouldn’t.

For example, we’d probably want to display the component title, description, support details and contribution guidelines everywhere the component appeared. 

However, we might only want to show the suitable and unsuitable situations content to designers, if they’re responsible for choosing whether or not to use a component in the first place.

And we might only want to show the installation guidance to developers.

Using structured content means we can think about what information is needed independently of the constraints of the individual tools we’re using. 

We’re effectively creating a content API that can be consumed by other applications. Using a bit of technical wizardry, we can then publish whichever combination of those elements we think will be useful into the relevant platforms.

## What now?

I don’t know if what I’ve described here has been done already, or if it’s even possible with the suite of design system tools most of us use.

However, I’d like to put usage guidance on the agenda for our discussions about publishing design system docs into multiple tools and platforms. 

And if you’ve got any thoughts on this, I’d love to hear them. [Contact me on Twitter](https://twitter.com/Amy_Hupe), or email me at amy.l.hupe@gmail.com
