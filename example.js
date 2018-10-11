import('./format_number.js')
.then(module => {
		// Listen to all type="tel" inputs
		document.querySelectorAll('input[type=tel][placeholder]').forEach(el => {
			el.addEventListener('input', module.format_input)
		})
	})
	.catch(er => console.error(er))