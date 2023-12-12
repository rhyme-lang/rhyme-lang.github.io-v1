---
title: Getting Started
description: Excited about Rhyme? Learn about how to get started here!
weight: 1
---

## What is it?

Rhyme is a declarative query language designed for querying and transforming nested data structures
like JSON or tensors (nested arrays).
It is designed to be easy to use, and to be able to express complex queries in a simple way while also being
able to achieve performance by constructing an IR which gets optimized and translated to efficient JS code.
Rhyme takes inspiration from existing approaches like GraphQL, Datalog, JQ, XQuery, and other similar 
query languages.

It can perform the usual data query operators like aggregations, joins, group-by, and so on, while also having the capability to
express tensor computations in the style of einops, express visualizations, and so on.

Below is an example that computes a group-by aggregation based on keys:
```js
let data = [
    {"key": "A", "value": 30},
    {"key": "B", "value": 20},
    {"key": "A", "value": 45},
]
// rhyme-query
let query = {
    "data.*.key": api.sum("data.*.value")
}
// compile 
let fun = api.compile(query)
// run the compiled query
let result = fun({data})
```

Likewise we can also express other types of workloads like tensor computations:
```js
let A = [[1, 2], [3, 4]]
let B = [[5, 6], [7, 8]]

// rhyme-query
let matmul = {"*i": {"*j": api.sum("A.*i.*j * B.*k.*k")}}
// compile
let fun = api.compile(matmul)
// run the compiled query
let result = fun({A, B})
```

To learn more about the different ways of using Rhyme, including different APIs, check out the [documentation](/docs/frontends).

## Installation

To get started with the latest release of Rhyme in your node project,
run the following command:

```bash
npm install rhyme-lang
```

You can then import the library (as you would any other node module) and start using it:

```javascript
const { api } = require('rhyme-lang')

let data = [
    { key: "A", value: 10 },
    { key: "B", value: 20 },
    { key: "A", value: 30 }
]

let query = {
    total: api.sum("data.*.value"),
    "data.*.key": api.sum("data.*.value"),
}
let res = api.compile(query)({ data })
console.log("Result: " + JSON.stringify(res))
```

## Developer Installation

Head to our Github repo at [rhyme-lang](https://github.com/rhyme-lang/rhyme-private).

Clone the repo and run `npm install` to install all the dependencies.

```bash
git clone git@github.com:rhyme-lang/rhyme.git
cd rhyme
npm install
```

If you want to use the development version of the library you cloned in a different
project, you can run `npm link` in the root directory of the repo and then run
`npm link rhyme-lang` in your project directory.

## Useful Links

- Github repo can be found [here](https://github.com/rhyme-lang/rhyme-private)
- An interactive blog introducing Rhyme can be found [here](https://tiarkrompf.github.io/notes/?/js-queries/).
- An upcoming publication on Rhyme which is going to appear at PADL 2024 can be found [here](https://www.cs.purdue.edu/homes/rompf/papers/abeysinghe-padl24.pdf).