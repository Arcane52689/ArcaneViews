
MyView = function(config) {
  this.template = function() { return '<h1> HELLO WORLD </h1><button class="clickme">CLICK ME</button>' };


  this.initialize(config);
}

ArcaneView.parentOf(MyView);

MyView.prototype.constructor = MyView;