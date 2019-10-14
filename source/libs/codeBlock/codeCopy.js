// 代码块一键复制

$(function () {
    var $copyIcon = $('<i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i>');
    
    $('.code-area').prepend($copyIcon);
    new ClipboardJS('.fa-copy', {
        target: function (trigger) {
            return trigger.nextElementSibling;
        }
    });
});
