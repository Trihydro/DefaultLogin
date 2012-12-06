var token;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    
}

//$(function() {
    //$("#form").jCryption();
//});

function LoginUser(){
    var userName = $("#txbUsername").val();
    var passWord = $("#txbPassword").val();
    
    $.ajax({
       type: "GET",
       url: "http://monoservicetest.trihydro.com/MobileLogin/MobileLoginService.svc/LoginUser",
       data: { userName: userName, password: passWord},
       dataType: "json",
       success: function(data){
           //Update these to real values...
           if(data.d != null && data.d != -1){
               token = data.d;
           }
           else{
               $("#txbUsername").val("");
               $("#txbPassword").val("");
               $("#divError").text("There was an error logging please try again.");
           }
               
       },
       error : function(data){
           alert("There was an error with your login, please try again.");
       }
    });
}