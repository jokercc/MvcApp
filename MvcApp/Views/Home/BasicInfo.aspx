<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="/css/user_interface_style.css" />
    <link rel="stylesheet" type="text/css" href="/css/jquery.datetimepicker.css"/>
	<title>用户界面</title>
	<script type="text/javascript" src="/Scripts/jquery-1.4.1.min.js"></script>
	<script type="text/javascript" src="/Scripts/userIf.js"></script>
    <script type="text/javascript" src="/Scripts/jquery.js"></script>
    <script type="text/javascript" src="/Scripts/jquery.datetimepicker.js"></script>
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
        <div class="navbox2">
    		<ul>
    			<li class="navboxone_grey">基本信息</li>
    			<li class="navboxtwo_green">身体指标</li>
    			<li class="navboxthree">活动情况</li>
    			<li class="navboxfour">健康计划</li>
    			<li class="navboxfive">急救信息</li>
    		</ul>
    	</div>
        <div class="navbox3">
    		<ul>
    			<li class="navboxone_grey">基本信息</li>
    			<li class="navboxtwo">身体指标</li>
    			<li class="navboxthree_green">活动情况</li>
    			<li class="navboxfour">健康计划</li>
    			<li class="navboxfive">急救信息</li>
    		</ul>
    	</div>
        <div class="navbox4">
    		<ul>
    			<li class="navboxone_grey">基本信息</li>
    			<li class="navboxtwo">身体指标</li>
    			<li class="navboxthree">活动情况</li>
    			<li class="navboxfour_green">健康计划</li>
    			<li class="navboxfive">急救信息</li>
    		</ul>
    	</div>
        <div class="navbox5">
    		<ul>
    			<li class="navboxone_grey">基本信息</li>
    			<li class="navboxtwo">身体指标</li>
    			<li class="navboxthree">活动情况</li>
    			<li class="navboxfour">健康计划</li>
    			<li class="navboxfive_green">急救信息</li>
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
    		<input id="logout_btn" class="logout_btn" type="button" value=""/>
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
			<input class="btn" type="button" onclick=alert("haha") value="上传"/>
			</form>
		</div>
		<!-- 照片上传框结束 -->
		<!-- 基本信息开始 -->
		<div id="basic_info">
			<table class="table_style2">
				<tr>
		        	<td class="title">&nbsp;基础信息</td>
		    	</tr>
	    		<tr>
	        		<td class="bggrey_left">&nbsp;姓名</td>
			        <td class="name"></td>
	    		</tr>
	    		<tr>
	        		<td class="bgwhite_left">&nbsp;性别</td>
			        <td class="sex"></td>
	    		</tr>
	    		<tr>
	        		<td class="bggrey_left">&nbsp;年龄</td>
			        <td class="age"></td>
	    		</tr>
	    		<tr>
	        		<td class="bgwhite_left">&nbsp;婚姻情况</td>
			        <td class="marrige"></td>
	    		</tr>
	    		<tr>
	        		<td class="bggrey_left">&nbsp;联系方式</td>
			        <td class="telnum"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="bgwhite_left">&nbsp;住址</td>
			        <td class="address"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="bggrey_left">&nbsp;子女情况</td>
			        <td class="children"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="bgwhite_left">&nbsp;爱好</td>
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
	        		<td class="heal_bgwhite_left"></td>
			        <td class="heal_bgwhite_right"></td>
	        		</td>
	    		</tr>
	    		<tr>
	        		<td class="heal_bggrey_left"></td>
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
				<input id="datetimepicker1" type="text" />
			</div>
            <div class="white_line">
            </div>
			<div class="finish_date">
				<input id="datetimepicker2" type="text" />
			</div>
			<div class="search_box">
				<input  id="search" type="button" value="" />
			</div>
			<div class="aid_key">
			</div>
		</div>
		<div id="aid_result">
			<div class="aid_time">
				<h3>&nbsp;&nbsp;时间</h3>
                <p></p>
			</div>
			<div class="aid_ads">
				<h3>&nbsp;&nbsp;地点</h3>
                <p></p>
			</div>
			<div class="aid_ast">
				<h3>&nbsp;&nbsp;急救人员</h3>
                <p></p>
			</div>
			<div class="aid_ana">
				<h3>&nbsp;&nbsp;病情分析</h3>
                <p></p>
			</div>
			<div class="aid_diag">
				<h3>&nbsp;&nbsp;诊断结果</h3>
                <p></p>
			</div>
			<div class="aid_doc">
				<h3>&nbsp;&nbsp;医生建议</h3>
                <p></p>
			</div>
		</div>
	<!-- 用户急救信息框结束 -->
    </div>
    <!-- 背景框结束 -->
    <!-- 用户列表显示身体指标开始 -->
    <div id="body_table_head">
    </div>
    <div id="body_table_bg">
        <div class="blood_pre_bg">
            <div class="blood_pre_head">
                <ul>
				    <li id="pre_date"   >&nbsp;&nbsp;日期</li>
				    <li id="down_pre" >&nbsp;收缩压</li>
                    <li id="up_pre" >舒张压</li>
			    </ul>
             </div>
             <div id="blood_pre_data">  
                    <%--动态添加血压数据--%>
            </div>
        </div>
        <div class="heart_boom_bg">
            <div class="heart_boom_head">
                <ul>
				    <li id="heart_date"   >&nbsp;&nbsp;日期</li>
				    <li id="boom_data" >&nbsp;&nbsp;心跳</li>
			    </ul>
            </div>
            <div id="boom_data_bg">  
                    <%--动态添加心跳数据--%>
            </div>
        </div>
        <div class="blood_suger_bg">
            <div class="blood_suger_head">
                <ul>
				    <li id="suger_date"   >&nbsp;&nbsp;日期</li>
				    <li id="suger_data" >&nbsp;&nbsp;血糖</li>
			    </ul>
            </div>
            <div id="suger_data_bg">  
                    <%--动态添加血糖数据--%>
            </div>
        </div>
        <div class="blood_tem_bg">
            <div class="blood_tem_head">
                <ul>
				    <li id="tem_date"   >&nbsp;&nbsp;日期</li>
				    <li id="tem_data" >&nbsp;&nbsp;体温</li>
			    </ul>
            </div>
            <div id="tem_data_bg">  
                    <%--动态添加体温数据--%>
            </div>
        </div>
        <div id="blood_premon_btn"> 
            <input type="button" value=""/>
        </div>
        <div id="blood_premon_btns"> 
            <input type="button" value=""/>
        </div>
        <div id="blood_nextmon_btn">
            <input type="button" value=""/>
        </div>
        <div id="blood_nextmon_btnb">
            <input type="button" value=""/>
        </div>
        <div id="boom_premon_btn">
            <input type="button" value=""/>
        </div>
        <div id="boom_premon_btns">
            <input type="button" value=""/>
        </div>
        <div id="boom_nextmon_btn">
            <input type="button" value=""/>
        </div>
        <div id="boom_nextmon_btnb">
            <input type="button" value=""/>
        </div>
        <div id="suger_premonth_btn">
            <input type="button" value=""/>
        </div>
        <div id="suger_premonth_btns">
            <input type="button" value=""/>
        </div>
        <div id="suger_nextmon_btn">
            <input type="button" value=""/>
        </div>
        <div id="suger_nextmon_btnb">
            <input type="button" value=""/>
        </div>
        <div id="tem_premon_btn">
            <input type="button" value=""/>
        </div>
        <div id="tem_premon_btns">
            <input type="button" value=""/>
        </div>
        <div id="tem_nextmon_btn">
            <input type="button" value=""/>
        </div>
        <div id="tem_nextmon_btnb">
            <input type="button" value=""/>
        </div>
    </div>
    <div id="body_curve_head">        
    </div>
    <div id="body_curve_bg">
            <div class="choose_healpro">
                <form>
                    <select name="cars">
                    <option value="volvo">血压</option>
                    <option value="saab">心跳</option>
                    <option value="fiat" selected="">血糖</option>
                    <option value="audi">体温</option>
                    </select>
                 </form>
            </div>
            <div class="curve_area">
                <h3></h3>
            </div>
            <div class="curve_pre_month">
            </div>
            <div class="curve_next_month">
                <input type="button" value="" />
            </div>
    </div>
    <div id="data_info_head"></div>
    <div id="data_info_bg"></div>
    <div id="act_cueve_head"></div>
    <div id="act_cueve_bg"></div>
    <div id="heal_plan">
        <div class="eat_palan">
            <h3>&nbsp;&nbsp;营养食谱</h3>
            <p></p>
        </div>
        <div class="pe_plan">
            <h3>&nbsp;&nbsp;健康计划</h3>
            <p></p>
        </div>
        <div class="sleep_plan">
            <h3>&nbsp;&nbsp;作息计划</h3>
            <p></p>
        </div>
    </div>
    <input  id="get_username"  value="<%: ViewData["userName"]%>" />

    <img src="/Content/BasicInfo/face100/<%: ViewData["userName"]%>" />

</body>
<script type = "text/javascript">
    $('#datetimepicker1').datetimepicker({
	    yearOffset:0,
	    lang:'ch',
	    timepicker:false,
	    format:'d/m/Y',
	    formatDate:'Y/m/d',
        });
    $('#datetimepicker2').datetimepicker({
	    yearOffset:0,
	    lang:'ch',
	    timepicker:false,
	    format:'d/m/Y',
	    formatDate:'Y/m/d',
        });
</script>
</html>