$(document).ready(function(){
    $('#seac-modal').on('click', (e) => {
        $('.modal.search-bar-232').modal('show');
    })

    document.addEventListener("DOMContentLoaded", function(event) {
        $('.open-header-mobile').on('click', function() {
            $(this).toggleClass("open", " ");
            ($(this).attr("class") == "open-header-mobile") && $(this).removeClass('open')
            console.log($(this).attr("class"))
         })
    })
})