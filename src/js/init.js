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
    
    document.getElementsByClassName('c-post')[0] ? blazyPrepare() : false;
    
    
    
    


    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        
        
        setTimeout(function() {
            document.body.classList.add('is-loaded');
        }, 250);
        
        setTimeout(function() {
            cover.remove();
        }, 500);
        

        // Carousels 
        
        document.getElementById('community') ? window.communityCarousel() : false;

        // Anims on inview
        window.animsInit()   

        // Blazy
    
        window.bLazy = new Blazy();
        
        
        
        
        var options =
        {
          scriptUrl: '//klosinskinet.disqus.com/embed.js',
          /*
            @type: string (url)
            @default: none
            @required
            URL of Disqus' executive JS file. The value is memorized on the first function call
            and ignored otherwise because Disqus allows only one instance per page at the time.
          */
        
          laziness: 1,
          /*
            @type: int (>=0)
            @default: 1
            Sets the laziness of loading the widget: (viewport height) * laziness . For example:
            0 - widget load starts when at the least a tiny part of it gets in the viewport;
            1 - widget load starts when the distance between the widget zone and the viewport is no more than the height of the viewport;
            2 - 2x viewports, etc.
          */
        
          throttle: 250,
          /*
            @type: int (milliseconds)
            @default: 250
            Defines how often the plugin should make calculations during the
            processes such as resize of a browser's window or viewport scroll.
            250 = 4 times in a second.
          */
        
          /*
            @type: function
            @default: none
            Disqus-native options. Check Disqus' manual for more information.
          */
        };
        
        disqusLoader( '.disqus', options );


        
        
        // Convert kit
        //document.getElementById('convertnewsletter') ? window.ckit() : false;

    };
    
    
    window.addEventListener('load', init);

}, false);