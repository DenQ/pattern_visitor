class ElementA extends IElement
  name: 'ElementA'

  accept:(@visitor)->
    @visitor.visit @