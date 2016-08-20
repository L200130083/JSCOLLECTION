
function getParameter(url, name) {
        var r = new RegExp('(\\?|#|&)' + name + '=([^&#\\?]*)(&|#|$|\\?)', 'i');
        var m = url.match(r);
        if ((!m || m === ''))
            m = top.location.href.match(r);
        return (!m ? '' : m[2]);
}
var url = http://google.com/?foo=bar
alert(getParameter(url, 'foo')); // output bar
//if you want to use current url, use var url = ''+window.location;

