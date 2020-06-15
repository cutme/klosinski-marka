document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-accordion');
    
    const init = function() {
        
        const action = function(e) {

            const parent = e.currentTarget.parentNode,
                  box = parent.parentNode.getElementsByClassName('js-box');
            
            if (parent.classList.contains('is-active')) {
                parent.classList.remove('is-active');
                parent.classList.remove('fade-in');
            }
            
            else {
                for (let i = 0; i < box.length; i++) {
                    box[i].classList.remove('is-active');
                    box[i].classList.remove('fade-in');
                }

                parent.classList.add('is-active');
                
                setTimeout(function() {
                    
                    parent.classList.add('fade-in');
                    
                }, 10);
            }
        };
        
        for (let h = 0; h < el.length; h++) {

            const title = el[h].getElementsByClassName('js-title');
            
            for (let i = 0; i < title.length; i ++) {
                title[i].addEventListener('click', action);
            }
        }
    }
    
    el.length > 0 ? init() : false;
    
}, false);
