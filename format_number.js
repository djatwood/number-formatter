function f_string(value, format_string, placeholder = '_') {
	// Extract numbers 
	const i = value.match(/\d/g)
	// If no numbers return empty string and position 0 
	if (i === null) return {
		value: '',
		pos: 0
	}

	let r = {}
	const format = Array.from(format_string)
	const len = i.length

	// Get breakpoints in format 
	const b = format
		.map((s, i) => s != placeholder ? i : null)
		.filter(s => s != null)

	// Replace placeholder with numbers 
	const s = format.map(n => (i.length && n === placeholder ? i.shift() : n))
	r.value = s.join('')

	// Find last number index from formatted string 
	const p = format.length - s.indexOf(
		s.reverse()
		.find(s => s.match(/\d+/))
	) - 1
	// Get smallest position from offset map 
	r.pos = Math.min(...b.map((n, i) => p < n ? len + i : len + b.length))

	return r
}

function update_input(e) {
	const input = e.target
	const format = input.placeholder
	const placeholder = input.dataset.placeholder

	// If placeholder character is a number remove the listener
	if (format.match(/\d+/)) {
		input.removeEventListener('input', update_input)
		console.error('Cannot use number as placeholder character on ', input)
		return
	}

	const r = f_string(input.value, format, placeholder)
	// Set input value to new formatted value
	input.value = r.value
	// Set you cursor to the end of the inputted string
	input.setSelectionRange(r.pos, r.pos)
}

// Listen to all type="tel" inputs
document.querySelectorAll('input[type=tel][placeholder]').forEach(el => {
	el.addEventListener('input', update_input)
})