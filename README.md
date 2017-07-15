# grunt-nsp
> Checks your package.json / npm-shrinkwrap.json against the Node Security (+) API for dependencies with known vulnerabilities.


## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-nsp --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.initConfig({
  nsp: {
    package: grunt.file.readJSON('package.json')
  }
});

grunt.loadNpmTasks('grunt-nsp');
```

## Options
This package supports the following options.

- package (object): The contents of a single package.json file [required]
- shrinkwrap (object): The contents of a single npm-shrinkwrap.json file (optional, but is a much more efficient check)
- output (string): Adjust the output format to any formatter supported by [nsp](https://github.com/nodesecurity/nsp)
- failOnVulns (boolean): When `true` fails the Grunt build, when `false` allows the build to proceed. Default is `true`.
- outputFile (string): The filename of a file to write the formatted results to. (optional, results are always written to console)

## Command Line Options

--package
Path to a package.json file
Example `grunt nsp --package ./package.json`

--shrinkwrap
Path to a npm-shrinkwrap.json file
Example `grunt nsp --shrinkwrap ./npm-shrinkwrap.json`

--output
nsp output formatter to use
Example `grunt nsp --package ./package.json --output summary`

## License

    Copyright (c) 2016 by ^Lift Security

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

    See the License for the specific language governing permissions and
    limitations under the License.

Note: the above text describes the license for the code located in this repository *only*. Usage of this tool or the API this tool accesses implies acceptance of our [terms of service](https://nodesecurity.io/tos).

