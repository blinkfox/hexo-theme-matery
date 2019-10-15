// 代码块语言识别

$(function () {
  var $highlight_lang = $('<div class="code_lang" title="代码语言"></div>');

  $('pre').after($highlight_lang);
  $('pre').each(function () {
    var code_language = $(this).attr('class');

    if (!code_language) {
      return true;
    };
    var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();

    // 首字母大写
    lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);
    $(this).siblings(".code_lang").text(lang_name);
  });
});
