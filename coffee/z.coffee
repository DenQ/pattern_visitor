###
  context
###

visitor1 = new Visitor1()
visitor2 = new Visitor2()

elements = [new ElementA(), new ElementB()]

for item in elements
  item.accept visitor1
  item.accept visitor2