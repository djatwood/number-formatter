/**
 * Formats passed string to passed format; returns formatted string and caret position
 * @param {string} string_to_format 
 * @param {string} format_string
 * @param {string} placeholder 
 * @return {object} {value: formatted_string, pos: caret_position}
 */
function format_string(string_to_format, format_string, placeholder = '_') {
	// Extract numbers 
	const numbers = string_to_format.match(/\d/g)
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

/**
 * Format field's value with placeholder as input mask and return boolean of success
 * @param {Event} event 
 * @param {Node} element 
 * @returns {Boolean} True if was sucsessful false if failed
 */
export function format_input(event, element = null) {
	const exit = err => {
		console.error(err, input)
		input.removeEventListener('input', format_input)
		return false
	}

	const input = element || event.target
	const format = input.placeholder
	const placeholder = input.dataset.placeholder

	// If placeholder attribute not supplied
	if (!format) return exit('Placeholder attribute is required')
	// If placeholder character is a number remove the listener
	if (format.match(/\d+/)) return exit('Cannot use number as placeholder character')



	const response = format_string(input.value, format, placeholder)
	// Set input value to new formatted value
	input.value = response.value
	// Set you cursor to the end of the inputted string
	input.setSelectionRange(response.pos, response.pos)
	return true
}
