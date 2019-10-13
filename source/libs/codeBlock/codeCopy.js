$(function () {
    /**
     * 代码复制按钮
     * Add copy icon
     */
    $('.line-numbers').wrap('<div class="code-area" style="position: relative"></div>')
    var $copyIcon = $('<i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i>')
    $('.code-area').prepend($copyIcon)
    new ClipboardJS('.fa-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    })
});
