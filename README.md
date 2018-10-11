#Number String Formatter
========

Number String Formatter is a built on a pure functions for formatting number strings to a specified format. Need your input field to use the US phone number format?
```html
<input id="phone_input" type="tel" placeholder="(___) ___-____">
```
```javascript
import('./format_number.js')
.then(module => {
    document.getElementById('phone_input').addEventListener('input', module.update_input)
})
.catch(er => console.error(er))
```

##Features
--------
- Functional
- Works with any custom format
- Fast! Each update take ~0.5ms to execute

##Installation
------------
[Download here](https://gitlab.com/datwood/phone-number-formatting/raw/master/format_number.js)

##License
-------

The project is licensed under the GNU General Public License v3.0.