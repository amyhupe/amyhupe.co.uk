---

title: This is the title of article B
date:   2019-01-22 09:00:01
categories: tag1 tag2
description: Description of article b
---

[Interacting with forms](#) is one of the most important interactions a person can have on the web. Making them more accessible can be done with little effort.

## Labels

Labels provide information about each control. Sighted users will see the label. Visually impaired users might use a screen reader which will announce the label.

Additionally, browsers may provide the ability to click a label which will either move focus to the control or even mark the control as checked in the case of a checkbox or radio control.

Labels are only needed for controls that provide input e.g. submit buttons are fine without.

Associating a control with a label involves matching the `for` attribute of the label with the control's `id` attribute like this:

	<label for="username">Username</label>
	<input id="username">

## Grouping controls together

Fieldsets should be used to group related controls. This is commonly useful for controls with a type attribute `radio` or `checkbox`.

For example, imagine a field which lets users to choose their favourite colour. The choices are represented as radio buttons: red, yellow and blue.

“Red” doesn’t convey enough information on its own. However, wrapping the group of radios in a fieldset with a legend of “Favourite colour” means the control's will be read out as "Favourite colour, Red".

    <fieldset>
      <legend>Favourite colour</legend>
      <input type="radio" name="colour" id="colourRed" value="red">
      <label for="colourRed">Red</label>
      ...
    </fieldset>

## Optional radio buttons

Radio buttons can not be unchekced until a different radio control is checked. Therefore, if this type of field is optional for the user, provide a 'None selected' option like this:

    <fieldset>
      <legend>Favourite colour</legend>
      <input type="radio" name="colour" id="colourNone" value="none">
      <label for="colourNone">None selected</label>
      <input type="radio" name="colour" id="colourRed" value="red">
      <label for="colourRed">Red</label>
      <input type="radio" name="colour" id="colourBlue" value="blue">
      <label for="colourBlue">Blue</label>
    </fieldset>

## Grouping select box options

The `<optgroup>` groups options inside a `<select>` together. If a user had to select their favourite fruit including variety, for example, then adding an `<optgroup>` labelled "Apple" containing options such as "Pink lady" can be useful:

    <select>
      <optgroup label="Apples">
        <option>Pink lady</option>
      </optgroup>
    </select>

## Misusing select boxes

Select boxes let users choose options from a list for input. An [issue can arise when script is used to submit the form when the select's change event fires](/articles/select-boxes-shouldnt-submit-on-change/). Keyboard and screen reader users may struggle.

## Avoid multiple select boxes

Multiple select boxes let users select multiple options but users find them difficult to use. Use checkboxes instead.