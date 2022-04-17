var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://discord.com/api/v9/users/@me/mfa/totp/disable', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('Authorization', 'mfa.f0c_qGWFTPfrqdFdlG7B8Ly9lE7AE4Jsb51VDInbuaIpwUBXbBqEKnDS35qyDgNm3-O2TiNRllfibclKAUXs');
xhr.onload = function () {
console.log(this.responseText);
};
xhr.send('{"code":"783594"}');
