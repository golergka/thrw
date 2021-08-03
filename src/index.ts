export function thrw(error: string | Error): never {
	throw typeof error === 'string' ? new Error(error) : error
}
