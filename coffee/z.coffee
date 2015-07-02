###
  context
###

elements = [new ElementA(), new ElementB()]
for item in elements
  item.accept( new Visitor1() )
  item.accept( new Visitor2() )