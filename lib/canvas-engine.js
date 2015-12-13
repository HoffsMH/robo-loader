const _ =require("lodash");
const $ =require("jquery");

function CanvasEngine(html) {
  this.canvas = $(html).appendTo("body");
  this.context = this.canvas[0].getContext("2d");
}

CanvasEngine.prototype.render = function(gameComponent) {
  return this.renderBase(gameComponent.state.base) &&
         this.renderChildren(gameComponent.state.children);
};

CanvasEngine.prototype.renderBase = function(baseComponent) {
  if (!baseComponent) {return baseComponent;}
  var x           = baseComponent.x;
  var y           = baseComponent.y;
  var width       = baseComponent.width;
  var height      = baseComponent.height;

  var fillColor   = baseComponent.fillColor;

  var lineWidth   = baseComponent.lineWidth || 2;
  var strokeStyle = baseComponent.strokeStyle || 'black';

  this.context.beginPath();
  this.context.rect( x, y, width, height );
  this.context.fillStyle = fillColor;
  this.context.fill();
  this.context.lineWidth = lineWidth;
  this.context.strokeStyle = strokeStyle;
  this.context.stroke();

  return baseComponent;
};


CanvasEngine.prototype.renderChildren = function(childrenComponents) {
  _.each(childrenComponents, function (childComponent) {
    this.render(childComponent);
  }.bind(this));
};


module.exports = CanvasEngine;
