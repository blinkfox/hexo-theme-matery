// 代码框收缩

$(function () {
  var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>')

  $('.code-area').prepend($code_expand)
  $('.code-expand').on('click', function () {
    if ($(this).hasClass('code-closed')) {
      $(this).siblings('pre').find('code').show();
      $(this).removeClass('code-closed');
      $(this).siblings('pre').append('<style> pre::before { height: 16px; } </style>');
    } else {
      $(this).siblings('pre').find('code').hide();
      $(this).addClass('code-closed');
      $(this).siblings('pre').append('<style> pre::before { height: 0px; } </style>');
    }
  })
});
