$(function () {
    /**
   * 代码框语言识别
   */
  var $highlight_lang = $('<div class="code_lang" title="代码语言"></div>')
  $('pre').before($highlight_lang)
  var lang_name_index
  var lang_name
  $('pre').each(function () {
    lang_name_index = lang_name = $('code').attr('class').split('-')[1];
    if (lang_name_index == 'js')
      lang_name = 'javascript'
    if (lang_name_index == 'md')
      lang_name = 'markdown'
    if (lang_name_index == 'plain')
      lang_name = 'code'
    if (lang_name_index == 'py')
      lang_name = 'python'

    // 首字母大写
    lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1)

    $('pre').siblings(".code_lang").text(lang_name)
  })
});
