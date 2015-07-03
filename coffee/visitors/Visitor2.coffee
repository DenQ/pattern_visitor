class Visitor2 extends IVisitor

  visit:(@element)->
    console.log 'Visit 2 to ' + @element.name