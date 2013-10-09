$ ->
  $("div#canvas").dblclick (e) ->
    canvas = $(e.target)
    x = e.pageX - canvas.position().left
    y = e.pageY - canvas.position().top
    canvas.append("<div class='block' style='left: #{x}px; top: #{y}px;' />")
