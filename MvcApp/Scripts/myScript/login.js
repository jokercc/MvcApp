$(function () {
    var user_selected = 1;
    var num = 0;
    $(".choose_old").bind("click", function () {
        user_selected = 1;
        $(".choose_old a").css("color", "#3a84c8");
        $(".choose_maanger a").css("color", "#4C4C4C");
    });
    $(".choose_maanger").bind("click", function () {
        user_selected = 0;
        $(".choose_old a").css("color", "#4C4C4C");
        $(".choose_maanger a").css("color", "#3a84c8");
    });
    $(".remember_me").bind("click", function () {
        num++;
        if (num % 2 == 0) {
            $(this).css("background", "url(../images/remember_me.png)  no-repeat");
        } else { $(this).css("background", "url(../images/remember_true.png)  no-repeat"); }
    });

    $(document).ready(function () {
        $(".login_button").click(function () {
            $(this).css("background", "url(../images/btn_hover.png)  no-repeat");
            var user = $("#user").val();
            var pwd = $("#pwd").val();
            if (user == "") {
                alert("�û�������Ϊ��");
                return;
            }
            if (pwd == "") {
                alert("���벻��Ϊ��");
                return;
            }

            if (user_selected == 1) {
                $.post("BasicInfo/login", {
                    "userName": user,
                    "password": pwd
                }, function (data) {
                    if (data == "true") {
                        window.location = "/Home/BasicInfo?userName=" + user;
                    } else {
                        alert("�û������������");
                    }
                });
                /*
                $.ajax(
                {
                url: "BasicInfo/login",

                data: 
                {
                "userName": user,
                "password": pwd
                },
                type: "POST",
                dataType: "json",
                success: function (data) 
                {
                if(data == "true")
                {
                alert("�û���¼�ɹ�");
                } 
                else 
                {
                alert("�û������������");
                }

                }
	               
                });*/
            }
            else {
                $.post("/Manager/login", {
                    "userName": user,
                    "password": pwd
                }, function (data) {
                    if (data == "true") {
                        window.location = "/Home/Manager?manName=" + user;
                    } else {
                        alert("�û������������");
                    }
                });
                /*
                $.ajax(
                {
                url: "/Manager/login",

                data:
                {
                "userName": user,
                "password": pwd
                },
                type: "POST",
                dataType: "json",
                success: function (data) {
                if (data == "true") {
                alert("�໤�˵�¼�ɹ�");
                }
                else {
                alert("�û������������");
                }

                }

                });*/
            }

        });
    });
});