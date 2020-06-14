const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {
    
    const el = document.getElementsByClassName('js-open-navmenu');
    

    const init = function() {
        
        const apla = document.getElementsByClassName('js-apla')[0],
              navmenu = document.getElementsByClassName('js-navmenu')[0],
              navmenu_content = document.getElementsByClassName('js-navmenu_content')[0];
              close = document.getElementsByClassName('js-close-navmenu')[0];
              
        const checkClass = function(e) {

            if( !e.target.parentNode.classList.contains('js-navmenu"') ) {
                closeMenu();
            } 
        }
    
        const closeMenu = function() {
            enableBodyScroll(navmenu_content);
            apla.classList.remove('is-visible');
            navmenu.classList.remove('is-visible');            
            document.removeEventListener('click', checkClass);
        }
        
        const openMenu = function(e) {	        

            disableBodyScroll(navmenu_content);
            apla.classList.add('is-visible');
            navmenu.classList.add('is-visible');
            
            setTimeout(function() {
                document.addEventListener('click', checkClass);
            }, 1000); 
            
            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        }
    
        close.addEventListener('click', closeMenu);

        for (let i = 0; i < el.length; i++){
            el[i].addEventListener('click', openMenu);
            
        }
        
        document.addEventListener('keydown', function(evt) {
           // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                closeMenu();
            }
        });
        
        
        // Metoda teczowki floating bar only

        const logo = document.getElementsByClassName('js-logo')[0]
        
        if (logo) {
            const goHome = function(e) {	        
    
                let target = e.currentTarget.getAttribute('data-href');
    			window.open(target, '_self');
                    
                e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            }
    
            logo.addEventListener('click', goHome);
        }
    };


    el ? init() : false;


}, false);
