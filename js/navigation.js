function toggleNavigation(){
    console.log("navigation change");
    var menu = $("#hamburger-menu");
    var navButton = $(".toggle-nav");
    
    if(menu[0].className.indexOf("open") > -1){
        menu.slideUp();
        // menu.hide("slide", {direction: "right"});
        menu.removeClass("open");
        navButton.html('<i class="fas fa-bars"></i>');
        
    }else{
        menu.slideDown();
        // menu.show("slide", {direction: "right"});
        menu.addClass("open");
        navButton.html('<i class="fas fa-times"></i>');
    }
}

// $(function(){
//     $(".nav a").hover(function(){
//         $(this).css("background-color", "red");
//     }, function(){
//         $(this).css("background-color", "");
//     });
// 
// 
// });
