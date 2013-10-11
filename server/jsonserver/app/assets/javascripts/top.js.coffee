$ ->
  $("div#canvas").dblclick (e) ->
    canvas = $(e.target)
    [x,y] = positionOfNewBlock(e)
    block = $("<div class='block' style='left: #{x}px; top: #{y}px;' />")
    .draggable(containment: "parent").css(position: "absolute")
    canvas.append(block)

positionOfNewBlock = (e) ->
  canvas = $(e.target)
  x = e.pageX - canvas.position().left
  y = e.pageY - canvas.position().top
  [x,y]



