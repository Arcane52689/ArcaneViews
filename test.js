
MyView = function(config) {
  // this.template = function() { return '<h1> HELLO WORLD </h1><button class="clickme">CLICK ME</button>' };
  this.templateUrl = "http://localhost:3000/templates/test.php"


  this.context = function() { return {
    person: {name: "Thomas Jenkins"}
  }}

  this.initialize(config);
}

ArcaneView.parentOf(MyView);



MyView.prototype.constructor = MyView;