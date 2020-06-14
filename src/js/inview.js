import InView from 'inview';

document.addEventListener('DOMContentLoaded',function() {
            
    const anims = document.getElementsByClassName('anim'),
          newsletter = document.getElementById('newsletter');
    
    window.animsInit = function() {        

        for (let i = 0; i < anims.length; i++) {

            if (cutme.Helpers.isInView(anims[i])) {
                anims[i].classList.add('anim--visible');
                
            }

            const inview = InView(anims[i], function(isInView) {
                if (isInView) {

                    anims[i].classList.add('anim--visible');
                    this.destroy();
    
                }
            });
        }

        
        // Newsletter Convert kit init
        
        const inview = InView(newsletter, function(isInView) {
            if (isInView) {
                
                document.getElementById('convertnewsletter') ? window.ckit() : false;
                this.destroy();
            }
        });
    };

}, false);
