# Phone number formatting

A functional script for formatting numbers with HTML and JavaScript.

## Using the module
To use the number formatter just add the update_input function as the callback for an <input> 'input' event.
```javascript
import('./format_number.js')
.then(module => {
		// Listen to all type="tel" inputs
		document.querySelectorAll('input[type=tel][placeholder]').forEach(el => {
			el.addEventListener('input', module.update_input)
		})
	})
	.catch(er => console.error(er))
```

## How it works
`update_input` passes the input's placeholder and value to `f_string` then updates the field with the returned values
```javascript
f_string(string_to_be_formatted, format_string[, placholder_character]) {
    // return [formatted_string, caret_position]
}
```
#### The HTML
```html
<input type="tel" placeholder="(___) ___-____">
```
If you want a placeholder character other than `_`
```html
<input type="tel" placeholder="...-...-...." data-placeholder=".">
```
The placeholder attribute holds the input mask