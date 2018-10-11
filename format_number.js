function format_string(value, format_string, placeholder = '_') {
	// Extract numbers 
	const numbers = value.match(/\d/g)
	// If no numbers return empty string and position 0 
	if (numbers === null) return {
		value: '',
		pos: 0
	}

	let response = {}
	const format = Array.from(format_string)
	const num_len = numbers.length

	// Get breakpoints in format 
	const breaks = format
		.map((s, i) => s != placeholder ? i : null)
		.filter(s => s != null)

	// Replace placeholder with numbers 
	const formatted_string = format.map(n => (numbers.length && n === placeholder ? numbers.shift() : n))
	response.value = formatted_string.join('')

	// Find last number index from formatted string 
	const last_number_index = format.length - formatted_string.indexOf(
		formatted_string.reverse()
		.find(s => s.match(/\d+/))
	) - 1
	// Get smallest position from offset map 
	response.pos = Math.min(...breaks.map((n, i) => last_number_index < n ? num_len + i : num_len + breaks.length))

	return response
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

	const r = format_string(input.value, format, placeholder)
	// Set input value to new formatted value
	input.value = r.value
	// Set you cursor to the end of the inputted string
	input.setSelectionRange(r.pos, r.pos)
}