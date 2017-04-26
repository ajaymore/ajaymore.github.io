---
---

Steps to develop a usable algorithm.
- Model the problem
- Find an algorithm to solve it.
- Fast enough? Fits in memory?
- If not, figure out why.
- Find a way to address the problem.
- Iterate until satisfied.

## Dynamic Connectivity - Union find
- "is connected" is an equivalence relation:
	- Reflexive: p is connected to p
	- Symmetric: if p is connected to q, then q is connected to p
	- Transitive: if p is connected to q and q is connected to r, then p is connected to r