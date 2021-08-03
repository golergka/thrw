# thrw

This is a tiny replacement for [throw expressions](https://github.com/tc39/proposal-throw-expressions). With it, you can replace this code:

```Typescript
const value: number|null = getValue()
if (value === null) {
	throw new Error(`couldn't get value`)
}
```

With this:

```Typescript
const value: number = getValue() || thrw(`couldn't get value`)
```

`thrw` is a function that of `never` type because it never actually returns anything — it just throws an error. This allows you to use it in place of any other type. You can use `thrw` with an instance of an error you want to throw, or with just a string, in which case it will create an instance of `Error` itself.
