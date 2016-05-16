// Controllers handle the logic of the display. They generate contexts and can provide views with a way of communicating with each other.

ArcaneController = function(config) {
  this._initialize(config);
}

ArcaneController.parentOf = function(child) {
  var Surrogate = function() {};
  Surrogate.prototype = ArcaneController.prototype;
  child.prototype = new Surrogate();
}






ArcaneController.prototype._initialize = function(config) {
  this._class =  this._class || config.class;
  this.collection = this.collection || config.collection;
  this.model = this.model || config.model;
  if (this._class && config.modelId) {
    this._createModel(config.modelid);
  }
  if (config.modelIsNew)

  this.initialize && this.initialize(config);
}

ArcaneController.prototype._createModel = function(id) {
  if (typeof id === 'undefined') {
    this.model = new this._class()
  } else {
    this.model = new this._class({id: id});
  }
}


ArcaneController.prototype._createCollection = function() {
  if (typeof this.collection === 'function') {
    this.collection = new this.collection();
  }
  this.collection.fetch();
}



ArcaneController.prototype._assignView = function(view) {
  this.view = view;
}

ArcaneController.prototype.context = function() {
  return {
    model: this.model,
    collection: this.collection,
  };
}












