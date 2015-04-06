<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="/css/login.css" />
	<script type="text/javascript" src="/Scripts/jquery-1.4.1.js"></script>	
    <!-- // <script type="text/javascript" src="Scripts/jquery-1.4.1.min.js"></script> -->
	<script type="text/javascript" >
	    var user_selected = 1;
	    // 判断登入者的身份，初始化为用户
	    function gua_select() {
	        document.getElementById("gua_font").style.color = "#4169E1";
	        document.getElementById("gua_font").style.borderBottom = "1px solid #4169E1";
	        document.getElementById("user_font").style.color = "#FFF";
	        document.getElementById("user_font").style.border = "#FFF";
	        user_selected = 0;
	        // 登入者是管理员
	        // alert(user_selected);
	        // this.style.color=#234324;
	    }

	    function user_select() {
	        document.getElementById("gua_font").style.color = "#FFF";
	        document.getElementById("user_font").style.color = "#4169E1";
	        document.getElementById("user_font").style.borderBottom = "1px solid #4169E1";
	        document.getElementById("gua_font").style.borderBottom = "1px hidden #4169E1";
	        user_selected = 1;
	        // 登陆者是用户
	        // alert(user_selected);
	    }

	    $(document).ready(function () {
	        $("#btn").click(function () {
	            var user = $("#user").val();
	            var pwd = $("#pwd").val();
	            if (user == "") {
	                alert("用户名不能为空");
	                return;
	            }
	            if (pwd == "") {
	                alert("密码不能为空");
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
	                        alert("用户名或密码错误");
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
	                alert("用户登录成功");
	                } 
	                else 
	                {
	                alert("用户名或密码错误");
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
	                        alert("用户名或密码错误");
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
	                alert("监护人登录成功");
	                }
	                else {
	                alert("用户名或密码错误");
	                }

	                }

	                });*/
	            }

	        });
	    });
	    

	</script>
	<title>卓讯智能养老</title>
</head>
<body>
	<div class="main_bg"> 
		<img src="/images/login_body.png" />
	</div>
	<!-- 主页背景main_bg结束 -->

	<div class="top_title">
		<img src="/images/top_title.png" />
	</div>
	<!-- 顶部竖条标题区域top_title结束 -->

	<div class="login_bg">
	</div>
	<!-- 登录框透明度背景login_bg结束 -->
	<div class="login_box">
		<div class="user_choose" >
			<ul>
				<li id="user_font" onclick="user_select()" >&nbsp;用户&nbsp;</li>
				<li id="gua_font" onclick="gua_select()">监护人员</li>
			</ul>
		</div>
		<!-- 登录用户选择user_choose结束 -->
		<!-- <div class="login_form"> -->
			<!-- action跳转页面需要填写！ -->
			<form action="" id="tempform" name="login">
				<div class="user_input">
					<img src="/images/user.png" />
					<input id="user" type="text" name="userName" />
				</div>
				<!-- 用户名输入区user_input结束 -->
				<div class="pw_input">
					<img src="/images/psw.png" />
					<input id="pwd" type="password" name="password"/>
				</div>
				<!-- 密码输入区pw_input结束 -->
				<div class="login_bt" > 
					<input id="btn" type="button" value="登录"/>
				</div>
				<!-- 登录按钮login_bt结束 -->
			</form>
		<!-- </div> -->
		<!-- 登录表单login_form结束 -->
		<div class="psw_forget">
			<ul>
				<li id="psw_forget_font"><a href="" />忘记密码</a></li>
			</ul>
		</div>
	</div>
	<!-- 中部登录框login_box结束 -->
</body>
<!-- 主区域main结束 -->
</html>