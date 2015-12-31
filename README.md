# Generator Angular2 with TypeScript

[![Angular 2 with TypeScript Generator](https://raw.githubusercontent.com/rrgarciach/generator-angular2-ts/master/assets/banner.png)]

[![Build Status](https://secure.travis-ci.org/rrgarciach/generator-angular2-ts.png?branch=master)](https://travis-ci.org/rrgarciach/generator-angular2-ts)  [![Join the chat at https://gitter.im/rrgarciach/generator-angular2-ts](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/rrgarciach/generator-angular2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[Yeoman](http://yeoman.io) Generator for bootstrapping Angular2 application with TypeScript.

### Getting Started

Install [Yeoman](http://yeoman.io) and this generator globally.

```bash
npm install -g yo generator-angular2-ts
```

In your desired project folder run the generator.

```bash
yo angular2-ts
```

You'll be prompted to start the server once the generator has finished.

You'll then be able to access the application at `http://localhost:8000`. Serving the application can be configured in the `gulpfile.js` using [gulp-webserver](https://www.npmjs.com/package/gulp-webserver) options.

### Generated Structure

The structure generated is;

```
- src/
	- components/
		- {generated-file-name}.html
		- {generated-file-name}.spec.ts
		- {generated-file-name}.ts
	- bootstrap.ts
	- settings.ts
- .editorconfig 
- .gitignore
- gulpfile.js
- karma.conf.js
- package.json
- readme.md
- tsconfig.json
- tsd.json
```

### Developing

All contributions are more than welcome, no matter how large or small.

Clone the repository and `cd` into it

`git clone git@github.com:rrgarciach/generator-angular2-ts.git && cd generator-angular2-ts`

Install the project dependencies

`npm install`

Link the package to use the version you're working on

`npm link`

Run the tests to ensure no failures

`npm test`

Submit a pull request with your changes

### License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
