// Controllers handle the logic of the display. They generate contexts and can provide views with a way of communicating with each other.

ArcaneController = function(config) {
  this._initialize();
}

ArcaneController.parentOf = function(child) {
  var Surrogate = function() {};
  Surrogate.prototype = ArcaneController.prototype;
  child.prototype = new Surrogate();
}


ArcaneController.prototype._initialize = function(config) {
  this.view = config.view();
  this.model = config.model || undefined;
  this.collection = config.collection || undefined;

  this.initialize && this.initialize(config);
}








