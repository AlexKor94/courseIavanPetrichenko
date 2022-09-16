"use strict";

console.log(Number.MAX_SAFE_INTEGER);

const bigint = 123546787987984564654321484944635n;

const sameBigint = BigInt(121231324654867646431315646465);

console.log(typeof bigint);

console.log(bigint + sameBigint);