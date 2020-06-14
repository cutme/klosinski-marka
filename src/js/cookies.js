import Cookies from 'js-cookie';

document.addEventListener('DOMContentLoaded', function() {

    var el = document.getElementById('cookies');
    
    var init = function() {
    
        var accept = el.getElementsByClassName('js-accept')[0];

        if (Cookies.get('klosinski-cookies') != 1) {

            el.classList.remove('move-out');
        }
        
        accept.addEventListener('click', function() {
            Cookies.set("klosinski-cookies", 1, { expires: 356, path: '/' });
            el.classList.add('move-out');
        });
    };

    el ? init() : false;

}, false);
