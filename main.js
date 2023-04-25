function printHelloWorld(){
    console.log("Hello, World!");
}

/* Tabs */
$(document).ready(function() {
    $('.tab-links a').on('click', function(e) {
        var currentAttrValue = $(this).attr('href');
        $('.tab-content ' + currentAttrValue).fadeIn(400).siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});
