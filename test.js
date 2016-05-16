

MyCont = function(config) {
  this._initialize(config);
}

ArcaneController.parentOf(MyCont);
MyCont.prototype.constructor = MyCont;

MyCont.prototype.generateContext = function() {
  return {
    person: {name: "Thomas Jenkins", age: 26, trait: "weird"}
  }
}


MyView = function(config) {
  // this.template = function() { return '<h1> HELLO WORLD </h1><button class="clickme">CLICK ME</button>' };
  this.templateUrl = "http://localhost:3000/templates/test.php"

  this.initialize(config);
}

ArcaneView.parentOf(MyView);



MyView.prototype.constructor = MyView;