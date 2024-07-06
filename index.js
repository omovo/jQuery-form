$("#password_validation").on("focus" ,function(){
    $(".password_required") .slideDown();
});

$("#password_validation").on("blur", function(){
    $(".password_required").slideUp();
})

$("#password_validation").on("keyup" ,function(){
    passValue =$(this).val();

    if(passValue.match(/[a-z]/g)){
        $(".Lowercase").addClass("active")
    }else{
        $(".Lowercase").removeClass("active")
    }

    if(passValue.match(/[A-Z]/g)){
        $(".Capital").addClass("active")
    }else{
        $(".Capital").removeClass("active")
    }
    if(passValue.match(/[0-9]/g)){
        $(".Number").addClass("active")
    }else{
        $(".Number").removeClass("active")
    }
    if(passValue.match(/[!@#$%&*]/g)){
        $(".Special").addClass("active")
    }else{
        $(".Special").removeClass("active")
    }
    if(passValue.length ==8 || passValue.length > 8  ){
        $(".Characters").addClass("active")
    }else{
        $(".Characters").removeClass("active")
    }

    $(".assword_required ul li").each(function(index, el){
     
      if(!$(this).hasClass("active")){
        $(".input_submit").removeClass("active")
      }else{
        $(".input_submit").addClass("active")
      }
    });

})