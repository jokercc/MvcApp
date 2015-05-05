<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="/css/login.css" />
	<script type="text/javascript" src="/Scripts/jquery-1.6.1.min.js"></script>
    <script type="text/javascript" src="/Scripts/login.js"></script>
	<title>卓讯智能养老</title>
</head>
<body>
	<div class="main_bg"> 
		<img alt="" src="/images/login_body.png" />
	</div>
	<!-- 主页背景main_bg结束 -->

	<div class="left_title">
	</div>
	<!-- 左上方区域left_title结束 -->

    <%--登录框开始--%>
    <div class="login_box">
        <%--养老人员登录选择--%>
        <div class="choose_old">
            <a href="#">养老人员</a>
        </div>
        <%--监护人员登录选择--%>
        <div class="choose_maanger">
            <a href="#">监护人员</a>
        </div>
        <%--账号输入框--%>
        <div class="name_input">
            <input id="user" type="text" value="" />
        </div>
        <%--密码输入框--%>
        <div class="psw_input">
            <input id="pwd" type="password" value=""/>
        </div>
        <%--登录按钮--%>
        <div class="login_button" >
        </div>
        <%--记住我选项--%>
        <div class="remember_me">
        </div>
        <%--记住我P--%>
        <div class="remember_p">
            <p>记住我</p>
        </div>
        <%--忘记密码区域开始--%>
        <div class="psw_forget">
            <a href="#">忘记密码?</a>
        </div>
        <%--申请账号区域开始--%>
        <div class="user_register">
            <a href="#">用户注册</a>
        </div>
    </div>
</body>
<!-- 主区域main结束 -->
</html>