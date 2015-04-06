<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="/css/user_interface_style.css" />
	<title>用户界面</title>
	<script type="text/javascript" src="/Scripts/jquery-1.4.1.min.js"></script>
	<script type="text/javascript" src="/Scripts/userIf.js"></script>
</head>
<body>
	<!-- 背景框开始 -->
	<div id="bg">
	<!-- 头部开始 -->
	<div id = "header">
        <!-- logo开始 -->
		<div class = "logo">
			<!-- <h1>卓讯智能养老</h1> -->
		</div>
        <!-- logo结束 -->
	<!-- 头部结束 -->
    </div>
    <!-- 主体部分开始 -->
    <div id = "main">
    	<!-- <img src="images/user_bg.png" /> -->
    </div>
    <!-- 主体部分结束 -->
    <div class="navtop">
    </div>
    <!-- 导航栏开始 -->
    <div id="nav">
    	<div class="navbox">
    		<ul>
    			<li class="navboxone">基本信息</li>
    			<li class="navboxtwo">身体指标</li>
    			<li class="navboxthree">活动情况</li>
    			<li class="navboxfour">健康计划</li>
    			<li class="navboxfive">急救信息</li>
    		</ul>
    	</div>
    </div>
    <!-- 用户身体指标隐藏盒子显示开始 -->
   	<div class="body_box">
   		<div class="show_table">
   			<input type="button" value="列表显示">
   		</div>
   		<div class="show_curve" >
   			<input type="button" value="变化趋势">
   		</div>
   	</div>
   	<div class="act_box">
   		<div class="deta_info">
   			<input type="button" value="详细信息">
   		</div>
   		<div class="act_cueve">
   			<input type="button" value="活动轨迹">
   		</div>
   	</div>
    <!-- 用户身体指标隐藏盒子显示结束 -->
	<!-- 导航栏结束 -->
	<!-- 用户显示开始 -->
    <div id="show_user">
    	<div id="user_portrait">
    	</div>
    	<div id="user_name">
    		<div class="user_name_box">
    			<ul>
    				<li class = "user_name_font"></li>
    			</ul>
    		</div>
    	</div>
    	<div id="user_sign">
    	</div>
    	<div id="logout">
    	<form>
    		<input class="logout_btn" id="logout_botton" type="button" value=""/>
    	</form>
    	</div>
    </div>
    <!-- 用户显示结束 -->
    <div></div>
	<!-- 用户基本信息开始 -->
	<div id="user_basic_info">
		<!-- 用户照片开始 -->
		<div id="user_photo">
		</div>
		<!-- 用户照片结束 -->
		<!-- 照片上传框开始 -->
		<div id="photo_upload">
			<form>
			<input class="btn" type="button" onclick=alert("上传") value="上传"/>
			</form>
		</div>
		<!-- 照片上传框结束 -->
		<!-- 基本信息开始 -->
		<div id="basic_info">
			<table class="table_style2">
				<tr>
		        	<td class="title">&nbsp;基础信息</th>
		    	</tr>
	    		<tr>
	        		<td class="bggrey_left">&nbsp;姓名</th>
			        <td class="name"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="bgwhite_left">&nbsp;性别</th>
			        <td class="sex"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="bggrey_left">&nbsp;年龄</th>
			        <td class="age"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="bgwhite_left">&nbsp;婚姻情况</th>
			        <td class="marrige"></tdh
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="bggrey_left">&nbsp;联系方式</th>
			        <td class="telnum"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="bgwhite_left">&nbsp;住址</th>
			        <td class="address"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="bggrey_left">&nbsp;子女情况</th>
			        <td class="children"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="bgwhite_left">&nbsp;爱好</th>
			        <td class="hobby"></td>
	        		</td>
	    		</tr>
    		</table>
		</div>
		<!-- 基本信息结束 -->
	</div>
	<!-- 用户基本信息结束 -->
	<!-- 用户初始健康信息开始 -->
	<div id="user_heal_info">
		<div id="heal_info">
			<table class="table_style2">
				<tr>
	        		<td class="heal_title">&nbsp;&nbsp;初始健康信息</td>
	    		</tr>
	    		<tr>
	        		<td class="heal_bggrey_left">&nbsp;&nbsp;心率</td>
			        <td class="heal_bggrey_right"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="heal_bgwhite_left">&nbsp;&nbsp;血压</td>
			        <td class="heal_bgwhite_right"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="heal_bggrey_left">&nbsp;&nbsp;脉搏</td>
			        <td class="heal_bggrey_right"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="heal_bgwhite_left">&nbsp;&nbsp;血糖</td>
			        <td class="heal_bgwhite_right"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="heal_bggrey_left">&nbsp;&nbsp;既往病史</td>
			        <td class="heal_bggrey_right"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="heal_bgwhite_left">&nbsp;&nbsp;</td>
			        <td class="heal_bgwhite_right"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="heal_bggrey_left">&nbsp;&nbsp;</td>
			        <td class="heal_bggrey_right"></td>
	        		</td>
	    		</tr>
    		</table>
		</div>
	</div>
	<!-- 用户初始健康信息结束 -->
	<!-- 用户急救信息框开始 -->
	<div id="user_aid_info">
		<div id="aid_search">
			<div class="start_date">
				<input type="button" value="">
			</div>
			<div class="finish_date">
				<input type="button" value="">
			</div>
			<div class="search_box">
				<input  id="search" type="button" value="">
			</div>
			<div class="aid_key">
			</div>
		</div>
		<div id="aid_result">
			<div class="aid_time">
				<h3>&nbsp;&nbsp;时间</h3>
			</div>
			<div class="aid_ads">
				<h3>&nbsp;&nbsp;地点</h3>
			</div>
			<div class="aid_ast">
				<h3>&nbsp;&nbsp;急救人员</h3>
			</div>
			<div class="aid_ana">
				<h3>&nbsp;&nbsp;病情分析</h3>
			</div>
			<div class="aid_diag">
				<h3>&nbsp;&nbsp;诊断结果</h3>
			</div>
			<div class="aid_doc">
				<h3>&nbsp;&nbsp;医生建议</h3>
			</div>
		</div>
	<!-- 用户急救信息框结束 -->
    </div>
    <!-- 背景框结束 -->
    <input  id="get_username"  value="<%: ViewData["userName"]%>">
</body>
</html>