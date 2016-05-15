

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
  this.params = config.params;
  this.template = this.template || config.template;
  if (config.templateUrl || this.templateUrl) {
    this._getTemplate(config.templateUrl || this.templateUrl);
  }
  this._listeningFor = {};
}

ArcaneView.prototype._getTemplate = function(url) {
  if (Templates.has(url)) {
    this._assignTemplate(Templates.get(url));
  } else {
    Templates.fetch(url, this._assignTemplate.bind(this));
  }
}

ArcaneView.prototype._assignTemplate = function(template) {
  this.template = template;
  this._render();
}


ArcaneView.prototype._render = function() {
  this.render && this.render();
  if (typeof this.template === 'function'){
    this.$el.html(this.template(this._context()));
  }
}

ArcaneView.prototype._context = function() {
  if (this.context) {
    return this.context();
  } else {
    return {person: "thomas"};
  }
}

ArcaneView.prototype.on = function(event, target, callback) {
  this.$el.on(event, target, callback);
  this._listeningFor[event] = true;
}

ArcaneView.prototype.one = function(event, target, callback) {
  this.$el.one(event, target, callback);
  this._listeningFor[event] = true;
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
