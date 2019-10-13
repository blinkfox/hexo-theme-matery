$(function () {
   /**
   * 代碼收縮
   */
  var highlight_shrink = true
  if (highlight_shrink == 'true') {
    var $code_expand = $('<i class="fa fa-angle-down code-expand code-closed" style="font-weight: bold;" aria-hidden="true"></i>')
  } else {
    var $code_expand = $('<i class="fa fa-angle-down code-expand" style="font-weight: bold;" aria-hidden="true"></i>')
  }
  $('.code-area').prepend($code_expand)
  $('.code-area .code-expand').on('click', function () {
    if ($(this).hasClass('code-closed')) {
      $(this).siblings('pre').find('code').show();
      $(this).removeClass('code-closed');
    } else {
      $(this).siblings('pre').find('code').hide();
      $(this).addClass('code-closed');
    }
  })
});