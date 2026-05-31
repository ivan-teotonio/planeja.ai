const currencyFormatter = new Intl.NumberFormat('pt-BR', {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
})

export function formatCurrencyInput(value: string) {
	const digitsOnly = value.replace(/\D/g, '')

	if (!digitsOnly) {
		return ''
	}

	const numericValue = Number(digitsOnly) / 100

	return currencyFormatter.format(numericValue)
}

export function parseCurrencyInput(value: string) {
	const digitsOnly = value.replace(/\D/g, '')

	if (!digitsOnly) {
		return ''
	}

	return String(Number(digitsOnly) / 100)
}
