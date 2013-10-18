$(document).ready(function(){
  $('.explore div').hover(
    function(){
      $(this.children[1]).css('display', 'block');
    },
    function(){
      $(this.children[1]).css('display', 'none');
    }
  )
});