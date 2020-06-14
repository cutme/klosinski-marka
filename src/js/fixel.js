import stickybits from 'stickybits';

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-sticky');
    let mobile = false;
    let stickybit;
    
    
    const init = function() {
        
        let ww = window.innerWidth;
        
        if (ww <= 768) {

            if (mobile === false) {
                
                    
                stickybit = stickybits(el, {
                    stickyBitStickyOffset: 86
                });
                
                mobile = true;
            }

        } else {
            
                
                
                
                stickybit = stickybits(el, {
                    stickyBitStickyOffset: 145
                });
                
                mobile = false;
        }        
    };
    
    if (el.length > 0) {

        window.addEventListener('load', function() {
            init();
        });
        
        window.addEventListener('resize', init);
    }
    

}, false);
