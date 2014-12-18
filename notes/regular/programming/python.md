---
---

- Every variable in python is an object
- String are immutable
- for, List are iterables
- function returns None if nothing is returned
- **Document strings** The first line should always be a short, concise summary of the object’s purpose. For brevity, it should not explicitly state the object’s name or type, since these are available by other means (except if the name happens to be a verb describing a function’s operation). This line should begin with a capital letter and end with a period.  
If there are more lines in the documentation string, the second line should be blank, visually separating the summary from the rest of the description. The following lines should be one or more paragraphs describing the object’s calling conventions, its side effects, etc.
- Sequence Types — list, tuple, range
- tuples are immutable, but can contain mutable objects
- A set is an unordered collection with no duplicate elements. support mathematical operations like union, intersection, difference, and symmetric difference.
- python -m http.server [<portNo>]

## List methods
- append(x) - Add an item
- extend(L) - concat a list
- insert(i, x) - insert x before i
- remove(x) - remove first occurance of x
- pop(i) - remove item at ith index and return it's value
- clear - empty the list
- index(x) - return index of the element with value x
- count(x) - return total count of elements with value x
- reverse() - reverse the list items
- sort() - sort the list items
- copy() - generate a shallow copy of the List

## Installing pip
- path to scripts directory
- pip install requests