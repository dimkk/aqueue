export interface ITecThing {
  rank: number;
  title: string;
  url: string;
  description: string;
  logo: string;
}

export class WebDevTecService {
  public data: ITecThing[];

  public get tec(): ITecThing[] {
    return this.data;
  }

  /** @ngInject */
  constructor () {
    var rawData = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Angular Material Design',
        'url': 'https://material.angularjs.org/#/',
        'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
        'logo': 'angular-material.png'
      },
      {
        'title': 'TypeScript',
        'url': 'http://www.typescriptlang.org/',
        'description': 'TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
        'logo': 'typescript.png'
      },
      {
        'key': 'jade',
        'title': 'Jade',
        'url': 'http://jade-lang.com/',
        'description': 'Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.',
        'logo': 'jade.png'
      }
    ];

    this.data = rawData.map((awesomeThing: ITecThing) => {
      awesomeThing.rank = Math.random();
      return awesomeThing;
    });
  }
}
