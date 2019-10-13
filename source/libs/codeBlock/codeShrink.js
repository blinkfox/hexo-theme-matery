$(function () {
  /**
   * 代碼收縮
   */

  var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>')

  $('.code-area').prepend($code_expand)
  $('.code-expand').on('click', function () {
    if ($(this).hasClass('code-closed')) {
      $(this).siblings('pre').find('code').show();
      $(this).removeClass('code-closed');
    } else {
      $(this).siblings('pre').find('code').hide();
      $(this).addClass('code-closed');
    }
  })
});
