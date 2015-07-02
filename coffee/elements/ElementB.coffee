class ElementB extends IElement
  name: 'ElementB'

  accept:(@visitor)->
    @visitor.visit @