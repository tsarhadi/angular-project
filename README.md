# angular-project
It is a small UI application (very basic online shoes store) developed mainly by angular JS and CSS with a little bit of JQuery.
The application is preconfigured to install the Angular framework and a bunch of development and testing tools using 'bower' and 'npm' (node package manager).

### Notes
* The color themes selected might not be the best ones from a web site design point of view but just an indication of how to use CSS classes in the application.
* The header and footer might look too empty, but the idea was mainly to layout the HTML page to contain header, footer and content and more importantly keeping the layout when resizing the browser window.



## Getting Started

To get you started you can simply clone the angular-project repository and install the dependencies:

### Prerequisites

You need git to clone the angular-project repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

A number of node.js tools have been used to initialize and test angular-project. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-project

Clone the angular-project repository using [git][git]:

```
git clone https://github.com/tsarhadi/angular-project.git;
cd angular-project
```
### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

`npm` has been preconfigured  to automatically run `bower` in the application, so you can simply do:

```
npm install
```

### Run the Application

To start the application you can simply do:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

### @TODO list
- [ ] add unit test
- [ ] add end to end test


[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server



