# 3 Ways to Change the 4th Letter in "Abracadabra" to "X"

Target result: `AbrXcadabra`

## Solution 1 — `slice()` + concatenation
- Keep the first 3 characters with `slice(0, 3)`.
- Add `"X"`.
- Add the rest from index 4 with `slice(4)`.

This builds a new string in three parts.

## Solution 2 — `split()` + index assignment + `join()`
- Convert the string into an array of characters using `split("")`.
- Replace position `3` with `"X"`.
- Convert back to a string with `join("")`.

This is useful when you want direct access to character positions.

## Solution 3 — `replace()` with regex
- Use `replace(/^(.{3})./, "$1X")`.
- `(.{3})` captures the first 3 characters.
- `.` matches the 4th character.
- Replace with captured first 3 characters + `X`.

This is a compact pattern-based solution.
