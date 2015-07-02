class Visitor2 extends IVisitor

  constructor:->

  visit:(element)->
    console.log 'visit 2 to ' + element.name