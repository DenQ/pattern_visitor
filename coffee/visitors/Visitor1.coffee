class Visitor1 extends IVisitor

  visit:(element)->
    console.log 'visit 1 to ' + element.name