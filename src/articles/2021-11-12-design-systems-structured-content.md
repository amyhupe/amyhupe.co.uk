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