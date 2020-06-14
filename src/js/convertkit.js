document.addEventListener('DOMContentLoaded', function() {
        
    window.ckit = function() {        
        
        
        const clearForm = function() {
            let form = document.getElementById('convertnewsletter').getElementsByClassName('seva-form')[0];
            let styles = form.getElementsByTagName('style')[0];
            let fields = form.getElementsByClassName('formkit-input');
            let submitBtn = form.getElementsByClassName('formkit-submit')[0];
            
            styles.parentNode.removeChild(styles);                                            
            
            for (let i = 0; i < fields.length; i ++) {
                fields[i].removeAttribute('style');
            }
            
            submitBtn.removeAttribute('style');
            submitBtn.classList.add('o-btn');
            submitBtn.classList.add('o-btn--black');    
        };
        
        const loadScript = function( url, callback ) {
            const script = document.createElement('script');
        
            if (script.readyState) {  // only required for IE <9
            
                script.onreadystatechange = function() {
                    if ( script.readyState === "loaded" || script.readyState === "complete" ) {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
                
            } else {  //Others
        
                script.onload = function() {
                    callback();
                };
            }
        
            script.async;
            script.setAttribute('data-uid', '6330b85db5')
            script.src = url;
            document.getElementById('convertnewsletter').appendChild(script);
            //document.getElementsByTagName('head')[0].appendChild( script );
        }
        
        loadScript('//f.convertkit.com/6330b85db5/a09272a253.js', function() {
            clearForm();
            console.log('init newsletter');
        });
    };

}, false);
