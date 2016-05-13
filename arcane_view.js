

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
  this._listeners
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