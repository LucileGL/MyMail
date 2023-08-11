

document.addEventListener("DOMContentLoaded", function () {
    
    var messages = document.getElementsByClassName("corps");
    
    if (spanNombreMsg) {
        spanNombreMsg.textContent = messages.length;
    }
});
