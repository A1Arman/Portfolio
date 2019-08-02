window.addEventListener('load', showPage, false);

function showPage() {
    document.body.className = document.body.className.replace("js-loading","");
}

$(".jumper").on("click", function(e) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    
});