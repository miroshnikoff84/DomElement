'use strict';

const DomElement = function(selector, height, width, bg, fontSize, text){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
};

DomElement.prototype.createElement = function(text){
  let element;
  if(this.selector[0] === '.'){
    element = document.createElement('div');
    element.setAttribute('class', this.selector);
    document.body.appendChild(element);
  }
  if(this.selector[0] === '#'){
    element = document.createElement('p');
    element.setAttribute('id',this.selector);
    document.body.appendChild(element);
  }
  element.style.cssText = `height: ${this.height}px;
                          width: ${this.width}px;
                          background: ${this.bg};
                          font-size: ${this.fontSize}px;
                          `;
  element.textContent = this.text;
  return element;
};

const redSquare = new DomElement('.block', 500, 500, 'green', 22, 'redSquare');
redSquare.createElement();


