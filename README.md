# Number Formatter

_**Todo:** I would like to make this even more generic so it formats any string._

Number Formatter is a built on a pure functions for formatting number strings to the format of the `placeholder` attribute. Need your input field to use the US phone number format?
```html
<script>
    import('./format_number.js')
    .then(module => {
        document.getElementById('phone_input').addEventListener('input', module.format_input)
    })
    .catch(er => console.error(er))
</script>
<input id="phone_input" type="tel" placeholder="(___) ___-____">
```
By default `_` is the placeholder character but if you want to use a different character just supply the `data-placeholder` attribute.
```html
<input type="tel" placeholder="...-...-...." data-placeholder=".">
```
The only restriction is that your format string cannot contain numbers. This is not valid:
```html
<input type="tel" placeholder="000-000-0000" data-placeholder="0">
```
<p data-height="384" data-theme-id="0" data-slug-hash="NOpgNe" data-default-tab="result" data-user="datwood" data-pen-title="US Number Formatter v2" class="codepen">See the Pen <a href="https://codepen.io/datwood/pen/NOpgNe/">Number Formatter</a> by Daniel Atwood (<a href="https://codepen.io/datwood">@datwood</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## Features
- Functional
- Works with any custom format
- Fast! Each update take ~0.5ms to execute

## Installation
[Download here](https://gitlab.com/datwood/phone-number-formatting/raw/master/format_number.js)

## License

The project is licensed under the GNU General Public License v3.0.