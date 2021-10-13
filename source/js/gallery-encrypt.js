'use strict';

function decryptAES(password) {

  try {

    var decryptionError = String(document.getElementById('decryptionError').innerHTML);
    var noContentError = String(document.getElementById('noContentError').innerHTML);

  } catch (e) {

    decryptionError = 'Incorrect Password!';
    noContentError = 'No content to display!';

  }

  try {

    let content = CryptoJS.AES.decrypt(document.getElementById('encrypt-blog').innerHTML.trim(), password);
    content = content.toString(CryptoJS.enc.Utf8);
    content = decodeBase64(content);
    content = unescape(content);
    if (content === '') {

      throw new Error(noContentError); // ???

    } else {

      document.getElementById('encrypt-blog').style.display = 'inline';
      document.getElementById('encrypt-blog').innerHTML = '';

      // Use jquery to load some js code
      try {

        $('#encrypt-blog').html(content);

        // NO Style Change here

        // NO Style Change here

      } catch (e) {

        const errorInfo = '<p>'
          + 'Some errors occurred, check the original file please.'
          + 'Detailed exceptions are shown in console.'
          + '</p>';
        console.error(e);
        $('#encrypt-blog').html(errorInfo);

      }

      document.getElementById('hbe-security').style.display = 'none';
      if (document.getElementById('toc-div')) {

        document.getElementById('toc-div').style.display = 'inline';

      }

    }

    // Call MathJax to render
    if (typeof MathJax !== 'undefined') {

      try {

        MathJax.Hub.Queue(
          ['resetEquationNumbers', MathJax.InputJax.TeX,],
          ['PreProcess', MathJax.Hub,],
          ['Reprocess', MathJax.Hub,]
        );

      } catch (e) {

        console.log('Can\'t render with MathJax');

      }

    }

  } catch (e) {

    alert(decryptionError);
    console.log(e);
    return false;

  }

  return true;

}

function htmlDecode(str) {

  let s = '';
  if (str.length == 0) {

    return '';

  }

  s = str.replace(/&gt;/g, '&');
  s = s.replace(/&lt;/g, '<');
  s = s.replace(/&gt;/g, '>');
  s = s.replace(/&nbsp;/g, '    '); // ??? why not ' '
  s = s.replace(/'/g, '\'');
  s = s.replace(/&quot;/g, '"');
  s = s.replace(/<br>/g, '\n');
  return s;

}

function decodeBase64(content) {

  content = CryptoJS.enc.Base64.parse(content);
  content = CryptoJS.enc.Utf8.stringify(content);
  return content;

}

function setCookie(cookieName, cookieValue, expireMinutes) {

  const expireTime = new Date(new Date().getTime() + 1000 * 60 * expireMinutes);
  document.cookie = `${cookieName}=${escape(cookieValue)}${expireMinutes == null ? '' : `;expires=${expireTime.toGMTString()}`}`;

}

function getCookie(cookieName) {

  if (document.cookie.length > 0) {

    let idx = document.cookie.indexOf(`${cookieName}=`);
    if (idx != -1) {

      idx = idx + cookieName.length + 1;
      let idy = document.cookie.indexOf(';', idx);
      if (idy == -1) {

        idy = document.cookie.length;

      }
      return unescape(document.cookie.substring(idx, idy));

    }

  }
  return '';

}

function GetUrlRelativePath() {

  const url = document.location.toString();
  const arrUrl = url.split('//');

  const start = arrUrl[1].indexOf('/');
  let relUrl = arrUrl[1].substring(start);

  if (relUrl.indexOf('?') != -1) {

    relUrl = relUrl.split('?')[0];

  }
  return relUrl;

}

function GenerateCookieName() {

  const COOKIE_NAME = 'HBE-PASSWORD';
  return COOKIE_NAME + GetUrlRelativePath();

}

// Since you decided to use jQuery.
$(document).ready(
  function () {
    let password = String(getCookie(GenerateCookieName()));
    console.log(`Get password from Cookie:${password}`);

    if (password != '') {

      if (!decryptAES(password)) {
        // Delete cookie
        setCookie(COOKIE_NAME, password, -5);
      } else {

        document.getElementById('encrypt-blog').removeAttribute('style');

        $("#encrypt-blog").justifiedGallery({margins: 5, rowHeight: 150});
      }
    }
    document.getElementById('pass').onkeypress = function (keyPressEvent) {

      password = String(document.getElementById('pass').value);
      if (keyPressEvent.keyCode === 13) {

        const result = decryptAES(password);

        if (result) {
          document.getElementById('encrypt-blog').removeAttribute('style');

          $("#encrypt-blog").justifiedGallery({margins: 5, rowHeight: 150});

          setCookie(GenerateCookieName(), password, 30);
        }
      }
    };
    $('#btn_decrypt').on('click', function () {

      password = String(document.getElementById('pass').value);

      const result = decryptAES(password);

      if (result) {

        document.getElementById('encrypt-blog').removeAttribute('style');

        $("#encrypt-blog").justifiedGallery({margins: 5, rowHeight: 150});

        setCookie(GenerateCookieName(), password, 30);
      }
    });
  }
);