# GitHub-Explorer

A simple react-native App that allows to see all the repositories and organizations that some GitHub user has.

![alt text](https://media.giphy.com/media/3oFzlZnVt9CYlAcquk/giphy.gif) 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Build Files
You can also get only the file to run directly on your device:

* Android .apk file: [download](https://drive.google.com/file/d/1wSaIF1_UZYZYk80C7XFUBStteKB7Le2o/view?usp=sharing)
* iOS file: SOON!

### Prerequisites

#### Setting-up environment

* To run the iOS App, you might be in a Apple environment, and also have the Xcode installed. You can download Xcode  [here](https://developer.apple.com/download/).

* To run the Android App, you might have Android-Studio installed. You can download Android-Studio  [here](https://developer.android.com/studio/index.html).
*  Also, if you want to use a different emulator to run the Android App, I strongly recommend you to use [Genymotion](https://www.genymotion.com/).

### Installing

 *If you already have the Node.js and npm installed, you can skip  the step below.*

**Installing Node.js and npm**

To run the App, you'll need to have the Node.js and  npm installed on your machine, if you don't have Node.js and npm installed yet, you can follow the following steps to install both:

 * Installing Node.js and npm on macOS and Windows environment: [here](https://nodejs.org/en/download/).
 * Installing Node.js and npm on Ubuntu environment: [here](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/).

**Installing react-native cli**

You'll need to have the react-native cli installed on your machine, that will make possible to run the App.

```
$ npm install -g create-react-native-app
```

## Running the App

**Cloning the repository**
```
$ git clone https://github.com/steniowagner/github-explorer && cd github-explorer
```

After cloning the repository and enter on the directory, you just need to run one of the following commands, depending on which platform you want to see the App running:

**Running the iOS App**

```
$ react-native run-ios
```

**Running the Android App**

```
$ react-native run-android
```

### Coding Style

This App follow the air-bnb JavaScript style guide, you can learn more about this [here](https://github.com/airbnb/javascript).

## Built With

* [React-Native](http://www.dropwizard.io/1.0.2/docs/) - A framework for building native apps using React
* [API-Sauce](https://github.com/infinitered/apisauce) - A lib to request/response API requests
* [Reactotron](https://github.com/infinitered/reactotron) - A macOS, Windows, and Linux app for inspecting your React JS and React Native apps.
* [Babel](https://babeljs.io/) - The compiler for writing next generation JavaScript
* [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX
* [ApeTool](https://apetools.webprofusion.com/app/#/tools/imagegorilla) - Create all the required sizes of Icons and Splashscreens for your app instantly for all major platforms

## Contributing

Feel free to contribute to this project with new features or any improvements that you think that is relevant!


## License

GitHubExplorer is provided under the [MIT License](https://github.com/vhesener/Closures/blob/master/LICENSE).

```text
The MIT License (MIT)
Copyright (c) 2017 Stenio Wagner
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```