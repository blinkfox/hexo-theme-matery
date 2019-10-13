$(function () {
    /**
   * 代码框语言识别
   */
  var $highlight_lang = $('<div class="code_lang" title="代码语言" style="position: absolute; top: 0.35rem; right: 30px; font-weight: bold; z-index: 1; filter: invert(50%); cursor: pointer;"></div>')
  $('pre').after($highlight_lang)
  var lang_name_index
  var lang_name
  $('pre').each(function () {
    lang_name_index = lang_name = $('pre code').attr('class').split('-')[1];
    if (lang_name_index == 'js')
      lang_name = 'javascript'
    if (lang_name_index == 'md')
      lang_name = 'markdown'
    if (lang_name_index == 'plain')
      lang_name = 'code'
    if (lang_name_index == 'py')
      lang_name = 'python'

    $('pre').siblings(".code_lang").text(lang_name)
  })
});
