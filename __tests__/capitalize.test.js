import capitalize from "../src/capitalize";

test ('capitalize', () => {
    expect(capitalize('')).toEqual('');
    expect(capitalize('hello')).toEqual('Hello');
});