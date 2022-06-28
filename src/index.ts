export function thrw(error: string | Error | unknown): never {
	throw typeof error === 'string' ? new Error(error) : error
}
