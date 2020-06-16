const { detect } = require('detect-browser');
//const browser = detect();
import Blazy from 'blazy';

document.addEventListener('DOMContentLoaded',function() {
    
    
    const blazyPrepare = function() {
      
        const img = document.getElementsByClassName('c-post')[0].getElementsByTagName('img'),
              iframeEl = document.getElementsByTagName('iframe');
        
        for (let i = 0; i < img.length; i ++) {
            
            let _this = img[i];
            
            if (!_this.classList.contains('b-lazy')) {
                
                let src = _this.getAttribute('src');
    
                _this.classList.add('b-lazy');
                _this.setAttribute('data-src', src);
                _this.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
                
            }            
        }
        
        // Add blazy possibility to iframes - replace src to data-src    
        
        if (iframeEl.length > 0) {
            for (let i=0; i<iframeEl.length; i++) {
                if(iframeEl[i].getAttribute('src')) {
                   iframeEl[i].setAttribute('data-src',iframeEl[i].getAttribute('src'));
                   iframeEl[i].classList.add('b-lazy');
                   iframeEl[i].setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'); 
                }
            }
        }
    };
    
    //document.getElementsByClassName('c-post')[0] ? blazyPrepare() : false;
    
    
    
    


    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        
        
        setTimeout(function() {
            document.body.classList.add('is-loaded');
        }, 250);
        
        setTimeout(function() {
            cover.remove();
        }, 500);
        


        // Anims on inview
        window.animsInit()   

        // Blazy
    
        window.bLazy = new Blazy();

    };
    
    
    window.addEventListener('load', init);

}, false);