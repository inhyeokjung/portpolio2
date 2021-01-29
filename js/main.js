$(document).ready(function(){ 
 $("#popup_open").click(function(){ 
 $("#popup_wrap").css("display", "block"); 
 $("#mask").css("display", "block"); 
 }); 
 }); 

$(document).ready(function(){ 
$("#popup_open").click(function(){ 
$("#popup_wrap").css("display", "block"); 
$("#mask").css("display", "block"); 
}); 
$("#popup_close").click(function(){ 
$("#popup_wrap").css("display", "none"); 
$("#mask").css("display", "none"); 
});
$("#mask").click(function(){ 
$("#popup_wrap").css("display", "none"); 
$("#mask").css("display", "none"); 
});    
}); 