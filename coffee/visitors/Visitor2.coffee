class Visitor2 extends IVisitor

  visit:(@element)->
    console.log 'visit 2 to ' + @element.name