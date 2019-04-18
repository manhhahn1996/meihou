(function sliteAction(){
  var odd = $('.odd');
  var win = $(document);
  win.scroll(function(){
  if(win.scrollTop() > 150)
  odd.addClass('odd-show');
  })
  })();
  (function slideAction(){
    var even = $('.even');
    var win = $(document);
    win.scroll(function(){
    if(win.scrollTop() > 500)
    even.addClass('even-show');
    })
    })();