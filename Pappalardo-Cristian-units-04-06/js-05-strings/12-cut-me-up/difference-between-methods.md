# Difference Between `slice()`, `substring()`, and `substr()`

## 1) `slice(start, end)`
- **Parameters**:
  - `start`: index where extraction begins.
  - `end` (optional): index where extraction stops (**not included**).
- **Behavior**:
  - Supports **negative indexes** (`-1` = last character).
  - If `end` is omitted, goes to the end of the string.
  - If `start > end`, returns an empty string.

```js
const text = "JavaScript";

console.log(text.slice(0, 4));   // "Java"
console.log(text.slice(4));      // "Script"
console.log(text.slice(-6));     // "Script" (negative index works)
console.log(text.slice(6, 2));   // "" (start > end)
```

---

## 2) `substring(start, end)`
- **Parameters**:
  - `start`: index where extraction begins.
  - `end` (optional): index where extraction stops (**not included**).
- **Behavior**:
  - **Does NOT support negative indexes** (negative values are treated as `0`).
  - If `start > end`, JavaScript **swaps them automatically**.
  - If `end` is omitted, goes to the end of the string.

```js
const text = "JavaScript";

console.log(text.substring(0, 4));   // "Java"
console.log(text.substring(4));      // "Script"
console.log(text.substring(-2, 4));  // "Java" (-2 becomes 0)
console.log(text.substring(6, 2));   // "vaSc" (indexes are swapped to 2, 6)
```

---

## 3) `substr(start, length)`
- **Parameters**:
  - `start`: index where extraction begins.
  - `length` (optional): number of characters to extract.
- **Behavior**:
  - Second parameter is **length**, not end index.
  - Supports negative `start` (counting from the end).
  - If `length` is omitted, goes to the end of the string.
  - **Legacy / deprecated** in modern JavaScript (avoid in new code).

```js
const text = "JavaScript";

console.log(text.substr(0, 4));    // "Java"
console.log(text.substr(4, 3));    // "Scr" (3 characters)
console.log(text.substr(-6, 6));   // "Script"
console.log(text.substr(4));       // "Script"
```

---

## Quick Summary
- Use **`slice(start, end)`** when you want clear index ranges and negative-index support.
- Use **`substring(start, end)`** when you do not need negative indexes and can accept index swapping.
- Avoid **`substr(start, length)`** in new code because it is deprecated/legacy.
