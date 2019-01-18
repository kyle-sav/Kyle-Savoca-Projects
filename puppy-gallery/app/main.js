/*Using webpack + babel to compile ES6*/
'use strict';
const AdoptionApp = (function(){
  class AdoptionApp {
    constructor() {
      this.puppies = [];
      this._initializeApplication();
    }

    _initializeApplication() {
      this._getPuppies();
    }

    //Fetch Puppy Json
    _getPuppies() {
    fetch('./assets/data/dogs.json')
         .then(function(response) {
           return response.json();
         })
         .then((puppyJson) => {
           this.puppies.push(puppyJson.dogs);
           this._displayPuppies(puppyJson.dogs);
         })
         .then(() => {
           this._addModalCloseListener();
         });
    }

    //After fetching data, loop through data and use object literal to create dom elements with data
    _displayPuppies(puppyJsonFormatted) {
      const galleryContainer = document.getElementById('gallery');
      for(let i=0; i<puppyJsonFormatted.length; i++) {
        const currentPup = `
          <p>Puppy ${i+1}</p>
          <figure hrefvalue=${puppyJsonFormatted[i].image} srcvalue=${puppyJsonFormatted[i].source}>

          </figure>
        `;

        const newDiv = document.createElement("div");
        newDiv.classList.add("pup");
        newDiv.innerHTML = currentPup;
        const figure = newDiv.querySelector('figure');
        figure.style.backgroundImage = `url("${puppyJsonFormatted[i].image}")`;
        galleryContainer.appendChild(newDiv);
        this._addThumbnailEventListener(newDiv);
      }
    }

    //Add click event listener on button to close modal
    _addModalCloseListener() {
      const modal = document.querySelector('#modal');
      const closeButton = document.querySelector('#closeModal');
      closeButton.addEventListener('click', ()=> {
        modal.classList.remove('opened');
        modal.classList.add('closed');
      })
    }

    //Add event listener to thumbnails to open modal
    _addThumbnailEventListener(element) {
      element.addEventListener('click', ()=> {
        const elementFigure = element.querySelector('figure');
        const figureAsset = elementFigure.getAttribute('hrefvalue');
        console.log(figureAsset);
        this._openFullScreen(figureAsset);
      });
    }

    //Open modal and display Full size puppy!
    _openFullScreen(figureAsset) {
      const modal = document.querySelector('#modal');
      const fullSizeImage = document.querySelector("#fullSize");
      modal.classList.remove('closed');
      fullSizeImage.style.backgroundImage = `url("${figureAsset}")`;
      modal.classList.add('opened');
    }
  }

  return AdoptionApp;
}());

new AdoptionApp();
