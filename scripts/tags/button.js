/**
 * button.js | https://theme-next.js.org/docs/tag-plugins/button
 */

'use strict';

module.exports = ctx => function(args) {
  args = args.join(' ').split(',');
  const url   = args[0];
  const text  = (args[1] || '').trim();
  let icon    = (args[2] || '').trim();
  const title = (args[3] || '').trim();

  if (!url) {
    ctx.log.warn('URL can NOT be empty.');
  }
  if (icon.length > 0) {
    if (!icon.startsWith('fa')) icon = 'fa fa-' + icon;
    icon = `<i class="${icon}"></i>`;
  }

  return `<a class="theme-btn" href="${url}"${title.length > 0 ? ` title="${title}"` : ''}>${icon}${text}</a>`;
};
