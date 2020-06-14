document.addEventListener('DOMContentLoaded', function() {

    const filter = document.getElementsByClassName('js-filter');
    
    const init = function() {

        const el = document.getElementById('filters');
        const item = document.getElementsByClassName('js-fitem');
        const loadmore = document.getElementsByClassName('js-loadmore')[0];
        const results = document.getElementsByClassName('js-results')[0];
        const offset = 140;
        let step = 5; let target = 'all';
        let length = 0;
        let hash = window.location.hash;

        const reset = function() {
            
            for (let i = 0; i < item.length; i++) {
                item[i].classList.add('is-h');
                item[i].classList.remove('fade-in');
            }            
        };
        
        const gotop = function() {
            let window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
            let targetPos = window_pos + results.getBoundingClientRect().top;
	        cutme.Helpers.scrollTo(targetPos, .5, offset);

        };
        
        const removeHash = function() { 
            var scrollV, scrollH, loc = window.location;
            if ("pushState" in history)
                history.pushState("", document.title, loc.pathname + loc.search);
            else {
                // Prevent scrolling by storing the page's current scroll offset
                scrollV = document.body.scrollTop;
                scrollH = document.body.scrollLeft;
        
                loc.hash = "";
        
                // Restore the scroll offset, should be flicker free
                document.body.scrollTop = scrollV;
                document.body.scrollLeft = scrollH;
            }
            
            hash = '';
        }
        
        const show = function(arg) {

            reset();
            
            if (arg.length <= step) {
                length = arg.length;
                loadmore.classList.add('is-h');
            } else {
                length = step;
            }

            for (let i = 0; i < length; i++) {
               arg[i].classList.remove('is-h');
               
               setTimeout(function() {
                   arg[i].classList.add('fade-in');
               }, 100);
            }
            
            // Get target name if hash exist
            if (hash) {
                target = hash.slice(1, hash.length);
                gotop();
                removeHash();
            }
      
	        // Clear active class
	        for (let i = 0; i < filter.length; i++) {
               filter[i].classList.remove('is-active');
            }          

            // Add active class
            let active = el.querySelectorAll("a[href='"+target+"']");
            active[0].classList.add('is-active');
        };
       
        const action = function(e) {
            
            target = e.currentTarget.getAttribute('href');
            
            if ((!document.body.classList.contains('home')) && (!document.body.classList.contains('category'))) {
                window.open('http://'+window.location.host+'#'+target, '_self');
            } else {
                
                step = 5;
                loadmore.classList.remove('is-h');                
                
                if (target === 'all') {
                    show(document.getElementsByClassName('js-fitem'));
                } else {
                    show(document.getElementsByClassName(target));
                }
                
                gotop();             
            }
            
            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        };
        
        for (let i = 0; i < filter.length; i++) {
            filter[i].addEventListener('click', action);            
        }

        if ( (document.body.classList.contains('home')) || (document.body.classList.contains('category')) ) {
            
            const showOnStart = function() {                

            	if (hash) {
                    show(document.getElementsByClassName(hash.slice(1, hash.length)));
                } else {
                    show(item);
                }
            };            
            
            const loadMoreItems = function(e) {
                step = step + 3;
                
                if (target === 'all') {
                    show(document.getElementsByClassName('js-fitem'));
                } else {
                    show(document.getElementsByClassName(target));
                }
                
                e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            };
            
            loadmore.addEventListener('click', loadMoreItems);
            
            showOnStart();
        } else {
            console.log('no home in body');
        }       
    };

    window.addEventListener('load', function() {
       filter.length > 0 ? init() : false;
    });
    

}, false);
