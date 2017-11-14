# Mochadoc Runner #
A programmatic mochadoc runner for building tools

## Installing Mochadoc Runner ##

Simply install using NPM into whichever package you need it for:

`npm install mochadoc-runner --save`

## Using Mochadoc Runner ##

Mochadoc Runner exports a single function, "callMochadoc." It can be used as follows:

```
const mochadocRunner = require('mochadoc-runner');

const options = {
    silent: true,
    config: './myMochdocConfig.json'
};

mochadocRunner.callMochadoc(options, () => doNextThing());
```

All options are optional, however an empty object is required even if no options are provided. A callback is also required, though it is not required to do anything. This is to ensure a consistent behavior and guarantee your code manages all of the requirements as you prefer them.

## Mochadoc Runner Scratches an Itch ##

Mochadoc Runner was created primarily for creating Grunt and Gulp tasks, so it may not satisfy your needs.  That's okay, because you are welcome to fork it, or issue pull requests.  If it does satisfy your needs, hooray! I'm glad it helped.