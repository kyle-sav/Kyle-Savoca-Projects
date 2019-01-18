/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*Using webpack + babel to compile ES6*/\n\n\nconst AdoptionApp = function () {\n  class AdoptionApp {\n    constructor() {\n      this.puppies = [];\n      this._initializeApplication();\n    }\n\n    _initializeApplication() {\n      this._getPuppies();\n    }\n\n    //Fetch Puppy Json\n    _getPuppies() {\n      fetch('./assets/data/dogs.json').then(function (response) {\n        return response.json();\n      }).then(puppyJson => {\n        this.puppies.push(puppyJson.dogs);\n        this._displayPuppies(puppyJson.dogs);\n      }).then(() => {\n        this._addModalCloseListener();\n      });\n    }\n\n    //After fetching data, loop through data and use object literal to create dom elements with data\n    _displayPuppies(puppyJsonFormatted) {\n      const galleryContainer = document.getElementById('gallery');\n      for (let i = 0; i < puppyJsonFormatted.length; i++) {\n        const currentPup = `\n          <p>Puppy ${i + 1}</p>\n          <figure hrefvalue=${puppyJsonFormatted[i].image} srcvalue=${puppyJsonFormatted[i].source}>\n\n          </figure>\n        `;\n\n        const newDiv = document.createElement(\"div\");\n        newDiv.classList.add(\"pup\");\n        newDiv.innerHTML = currentPup;\n        const figure = newDiv.querySelector('figure');\n        figure.style.backgroundImage = `url(\"${puppyJsonFormatted[i].image}\")`;\n        galleryContainer.appendChild(newDiv);\n        this._addThumbnailEventListener(newDiv);\n      }\n    }\n\n    //Add click event listener on button to close modal\n    _addModalCloseListener() {\n      const modal = document.querySelector('#modal');\n      const closeButton = document.querySelector('#closeModal');\n      closeButton.addEventListener('click', () => {\n        modal.classList.remove('opened');\n        modal.classList.add('closed');\n      });\n    }\n\n    //Add event listener to thumbnails to open modal\n    _addThumbnailEventListener(element) {\n      element.addEventListener('click', () => {\n        const elementFigure = element.querySelector('figure');\n        const figureAsset = elementFigure.getAttribute('hrefvalue');\n        console.log(figureAsset);\n        this._openFullScreen(figureAsset);\n      });\n    }\n\n    //Open modal and display Full size puppy!\n    _openFullScreen(figureAsset) {\n      const modal = document.querySelector('#modal');\n      const fullSizeImage = document.querySelector(\"#fullSize\");\n      modal.classList.remove('closed');\n      fullSizeImage.style.backgroundImage = `url(\"${figureAsset}\")`;\n      modal.classList.add('opened');\n    }\n  }\n\n  return AdoptionApp;\n}();\n\nnew AdoptionApp();\n\n/* Additional Notes - Nice to Have :\nI think the positioning of the close button on the image modal is a bit wonky,\nand would like to restructure that. Since the images are not the same dimensions,\nand I didn't want to squish the aspect ratios of them, the close button is not really where I'd like it to be positioned. Possibly not use a modal with a full width transparent background.\nThat was the last piece of the project I got to :)\n*/\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ })

/******/ });