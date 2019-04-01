$(document).ready(function () {
    // function register(){
    //     var param = {username : ""}
    
    //     $.ajax({
    //         timeout: 20000,
    //         type: "POST",
    //         url: "localhost:8080/person/save",
    //         data: "data",
    //         dataType: "JSON",
    //         success: function (data) {
    //             alert(data);
    //         }
    //     });
    // }
    
    $("#sign_in_btn").click(function(){
        var params = {}
        params.username = $('#username').val()
        params.password = $('#password').val()  
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/user",
	        dataType: "json",
            data: params,
            success:function(data) {
                alert("success: "+data.msg)
            },
            error:function(jqXHR) {
                alert("wrong: "+jqXHR.status)
            }
        });
    });
});

