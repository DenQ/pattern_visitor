// Generated by CoffeeScript 1.9.3
(function() {
  var ElementA, ElementB, IElement, IVisitor, Visitor1, Visitor2, elements,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  IElement = (function() {
    function IElement() {}

    return IElement;

  })();

  IVisitor = (function() {
    function IVisitor() {}

    return IVisitor;

  })();

  ElementA = (function(superClass) {
    extend(ElementA, superClass);

    function ElementA() {
      return ElementA.__super__.constructor.apply(this, arguments);
    }

    return ElementA;

  })(IElement);

  ElementB = (function(superClass) {
    extend(ElementB, superClass);

    function ElementB() {
      return ElementB.__super__.constructor.apply(this, arguments);
    }

    return ElementB;

  })(IElement);


  /*
    context
   */

  elements = [new ElementA(), new ElementB()];

  Visitor1 = (function(superClass) {
    extend(Visitor1, superClass);

    function Visitor1() {
      return Visitor1.__super__.constructor.apply(this, arguments);
    }

    return Visitor1;

  })(IVisitor);

  Visitor2 = (function(superClass) {
    extend(Visitor2, superClass);

    function Visitor2() {
      return Visitor2.__super__.constructor.apply(this, arguments);
    }

    return Visitor2;

  })(IVisitor);

}).call(this);
