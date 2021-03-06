# has-keys [![NPM version](https://badge.fury.io/js/has-keys.svg)](http://badge.fury.io/js/has-keys)

> Returns true if the given object has all of the specified keys.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i has-keys --save
```

## Usage

```js
var hasKeys = require('has-keys');

var obj = {a: 'a', b: 'b', c: 'c'};

hasKeys(obj, 'a');
//=> true

hasKeys(obj, ['a', 'b']);
//=> true

hasKeys(obj, ['a', 'b', 'c']);
//=> true

hasKeys(obj, ['a', 'b', 'c', 'd']);
//=> false
```

## Related projects

* [get-value](https://github.com/jonschlinkert/get-value): Use property paths (`a.b.c`) to get a nested value from an object.
* [has-any](https://github.com/jonschlinkert/has-any): Returns true if an object has any of the specified keys.
* [has-value](https://github.com/jonschlinkert/has-value): Returns true if a value exists, false if empty. Works with deeply nested values using… [more](https://github.com/jonschlinkert/has-value)
* [has-any-deep](https://github.com/jonschlinkert/has-any-deep): Return true if `key` exists deeply on the given object.
* [has-own-deep](https://github.com/jonschlinkert/has-own-deep): Returns true if an object has an own, nested property using dot notation paths ('a.b.c').

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/has-keys/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 02, 2015._
