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
    element = document.createElement('p');
    element.id = 'best';
    document.body.appendChild(element);
  }
  element.style.cssText = `height: ${this.height}px;
                          width: ${this.width}px;
                          background: ${this.bg};
                          font-size: ${this.fontSize}px;
                          `;
  element.textContent = 'redSquare';
  return element;
};

let redSquare = new DomElement('.block', 500, 500, 'green', 22);
redSquare.createElement();


