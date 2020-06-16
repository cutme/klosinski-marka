import ScrollToPlugin from 'gsap/ScrollToPlugin';
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

    const btnGoTo = document.getElementsByClassName('js-goto');

	const speed_calculate = function (target) {
    	let base_speed  = 15,
    		page_offset = window.pageYOffset || document.documentElement.scrollTop,
        	offset_diff = Math.abs(target - page_offset),
        	speed = ((offset_diff * base_speed) / 1000)/100;

    	return speed;
	};
	
	const apla = document.getElementsByClassName('js-apla')[0],
          navmenu = document.getElementsByClassName('js-navmenu')[0],
          navmenu_content = document.getElementsByClassName('js-navmenu_content')[0];
          close = document.getElementsByClassName('js-close-navmenu')[0];

    const closeMenu = function() {
        enableBodyScroll(navmenu_content);
        apla.classList.remove('is-visible');
        navmenu.classList.remove('is-visible');            
        //document.removeEventListener('click', checkClass);
    }

	const clickAction = function(e) {
	
	    const that = e.currentTarget;

	    let src = that.getAttribute('href');
	    
	    if (!src) {
	    
	        src = that.getElementsByTagName('a')[0].getAttribute('href');
        } 

	    const window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

	    const obj = document.getElementById( src.slice(1, src.length) );

	    if (obj) {
	        let offset = that.getAttribute('data-offset');

            if (!offset) {
                offset = 30;
            }
            
            document.body.removeAttribute('style');
            
            if (window_pos === 0) {
                offset = 30;
                                    
            } else {
                if (document.documentElement.classList.contains('mobile')) {
                    offset = 30;
                }
            }
	    
	        let target = window_pos + obj.getBoundingClientRect().top - offset;
	        cutme.Helpers.scrollTo(target, speed_calculate(target), offset);
	        
	        window.closeMenu();

	    } else {
    	    
    	    window.open(src, '_self');
    	    
	    }
	    
        
        if (window.e) {
            window.e.returnValue = false;
        }
        
	    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
	};
	
    if (btnGoTo.length > 0) {
        for (let i = 0; i < btnGoTo.length; i++) {
            btnGoTo[i].addEventListener('click', clickAction);
        }
    }

    
}, false);
