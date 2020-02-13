'use strict';

const DomElement = function(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElement = function(){
  let element;
  if(this.selector[0] === '.'){
    element = document.createElement('div');
    element.className = 'block';
    document.body.appendChild(element);
  }
  if(this.selector[0] === '#'){
    element = document.createElement('div');
    element.id = 'best';
    document.body.appendChild(element);
  }
  element.style.cssText = `height: 100px;
                          width: 100px;
                          background-color: red;
                          font-size: 16px;
                          `;
  element.textContent = 'redSquare';
  return element;
};

let redSquare = new DomElement('.block');
redSquare.createElement();


