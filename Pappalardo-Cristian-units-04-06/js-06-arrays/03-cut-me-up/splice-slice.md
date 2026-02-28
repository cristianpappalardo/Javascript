# Difference Between `slice()` and `splice()`

## `slice(start, end)`
- **Purpose**: Returns a **new array** with selected elements.
- **Parameters**:
	- `start`: index where extraction starts.
	- `end` (optional): index where extraction stops (**not included**).
- **Behavior**:
	- Does **not** modify the original array.
	- Supports negative indexes.
	- If `end` is omitted, it goes to the end of the array.

```js
const fruits = ["apple", "banana", "cherry", "orange", "kiwi"];

const part1 = fruits.slice(1, 4);
console.log(part1);   // ["banana", "cherry", "orange"]
console.log(fruits);  // ["apple", "banana", "cherry", "orange", "kiwi"] (unchanged)

const part2 = fruits.slice(-2);
console.log(part2);   // ["orange", "kiwi"]
```

---

## `splice(start, deleteCount, ...items)`
- **Purpose**: Changes an array by removing/replacing/adding elements.
- **Parameters**:
	- `start`: index where changes begin.
	- `deleteCount` (optional): how many elements to remove.
	- `...items` (optional): elements to insert at `start`.
- **Behavior**:
	- **Modifies** the original array.
	- Returns an array containing removed elements.
	- Can delete, insert, or replace in one method.

```js
const colors = ["red", "green", "blue", "yellow"];

const removed = colors.splice(1, 2, "purple", "pink");
console.log(removed); // ["green", "blue"]
console.log(colors);  // ["red", "purple", "pink", "yellow"] (modified)

// Insert without deleting
colors.splice(2, 0, "black");
console.log(colors);  // ["red", "purple", "black", "pink", "yellow"]
```

---

## Quick Comparison
- `slice()` = copy part of an array, original stays the same.
- `splice()` = edit the original array (remove/add/replace).
- `slice()` uses `end` index (excluded).
- `splice()` uses `deleteCount` and optional items to insert.
