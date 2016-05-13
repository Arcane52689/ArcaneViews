

ArcaneView = function(config) {

  this.initialize(config);
}

ArcaneView.parentOf = function(child) {
  var Surrogate = function() {};
  Surrogate.prototype = ArcaneView.prototype;
  child.prototype = new Surrogate();
}

ArcaneView.prototype.initialize = function(config) {
  this.$el = this.$el || config.$el;
  this.template = this.template || config.template;
  if (config.templateUrl) {
    // this.fetchTemplate(config.templateUrl); - not implemented
  }
  this._listeningFor = {};
}


ArcaneView.prototype._render = function() {
  this.render && this.render();
  this.$el.html(this.template(this._context()));
}

ArcaneView.prototype._context = function() {
  if (this.context) {
    return this.context();
  } else {
    return {};
  }
}

ArcaneView.prototype.on = function(event, target, callback) {
  this.$el.on(event, target, callback);
}

ArcaneView.prototype.one = function(event, target, callback) {
  this.$el.one(event, target, callback);
}

ArcaneView.prototype.addEvents = function(obj) {

}

ArcaneView.prototype.stopListening = function() {
  for (key in this._listeningFor) {
    if (this._listeningFor.hasOwnProperty(key)) {
      this.$el.stopListening(key);
    }
  }
}
