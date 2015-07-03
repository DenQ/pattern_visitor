class Visitor1 extends IVisitor

  visit:(@element)->
    console.log 'Visit 1 to ' + @element.name