# JavaScript TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error: `TypeError: Cannot read properties of undefined (reading 'length')`.  The error occurs when code attempts to access the `length` property of a value that is not an object with a `length` property (e.g., null, undefined, or a number). 

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run it using a JavaScript interpreter (like Node.js).
3. Observe the `TypeError` for non-array/string inputs. 

## Solution

The solution involves adding type checking before accessing the `length` property, ensuring the input is of the expected type.