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
