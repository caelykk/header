document.addEventListener('DOMContentLoaded', pageLoader)

function pageLoader() {
    
}


function delegate(box, eventName, selector, handler) {
    box.addEventListener(eventName, function(evt) {
        let el = evt.target.closest(selector);

        if(box.contains(el) && el != null) {
            handler.call(el, evt);
        }
    });
}