<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<link rel="stylesheet" type="text/css" href="/css/user_interface_style.css" />
    <link rel="stylesheet" type="text/css" href="/css/jquery.datetimepicker.css"/>
    <link rel="stylesheet" type="text/css" href="/css/upload_photo.css" />
	<title>用户界面</title>
	<script type="text/javascript" src="/Scripts/getScript/jquery-1.6.1.min.js"></script>
	<script type="text/javascript" src="/Scripts/myScript/userIf.js"></script>
    <script type="text/javascript" src="/Scripts/getScript/jquery.js"></script>
    <script type="text/javascript" src="/Scripts/getScript/highcharts.js"></script>
    <script type="text/javascript" src="/Scripts/getScript/slides.js"></script>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=Ww0moWQzefqW6FOflHHjg9pq"></script>
    <script type="text/javascript" src="/Scripts/getScript/jquery.datetimepicker.js"></script>
    <script type="text/javascript" src="/Scripts/getScript/ajaxfileupload.js"></script>
</head>
<body>
    <div class="main_bg">
        <div class="head_area">
            <div id="menu">
                <ul>
                  <li id="nav1">概要信息</li>
                  <li id="nav2">身体指标</li>
                  <li id="nav3">活动情况</li>
                  <li id="nav4">健康计划</li>
                  <li id="nav5">急救信息</li>
                </ul>
             </div> 
        </div>
        <div class="uesr_area">
            <div class="portrait_area">
                <div class="user_portrait">
                    <img id="small_portrait" alt="" src="" />
                    <div class="portrait_cover"><p>点击修改</p></div>
    	        </div>
                
                <div id="user_name">
                    <p></p>
                </div>
                <div class="user_sign">
                    <p>养老用户</p>
                </div>
                <div id="logout">
    	            <form>
    		            <input id="logout_btn" class="logout_btn" type="button" value="退出"/>
    	            </form>
    	        </div>
            </div>
            <div class="nav_sign"></div>
            <div id="basic_info_table">
		        <h class="title">&nbsp;基础信息</h>
			    <table class="table_basic">
	    		    <tr>
	        		    <td class="table_left">&nbsp;性别:</td>
			            <td class="sex"></td>
	    		    </tr>
	    		    <tr>
	        		    <td class="table_left">&nbsp;年龄:</td>
			            <td class="age"></td>
	    		    </tr>
                    <tr>
	        		    <td class="table_left">&nbsp;生日:</td>
			            <td class="birthday"></td>
	    		    </tr>
                    <tr>
	        		    <td class="table_left">&nbsp;血型:</td>
			            <td class="blood_type"></td>
	    		    </tr>
    		    </table>
                </br>
                <h class="title">&nbsp;详细资料</h>
			    <table class="table_basic">
	    		    <tr>
	        		    <td class="table_left">&nbsp;婚姻情况:</td>
			            <td class="marrige"></td>
	    		    </tr>
	    		    <tr>
	        		    <td class="table_left">&nbsp;子女情况:</td>
			            <td class="children"></td>
	    		    </tr>
                    <tr>
	        		    <td class="table_left">&nbsp;住址:</td>
			            <td class="address"></td>
	    		    </tr>
	    		    <tr>
	        		    <td class="table_left">&nbsp;爱好:</td>
			            <td class="hobby"></td>
	    		    </tr>
    		    </table>
                </br>
                 <h class="title">&nbsp;联系方式</h>
			    <table class="table_basic">
	    		    <tr>
	        		    <td class="table_left">&nbsp;个人联系:</td>
			            <td class="telnum"></td>
	    		    </tr>
                    <tr>
	        		    <td class="table_left">&nbsp;家人联系:</td>
			            <td class="home_telnum"></td>
	    		    </tr>
    		    </table>
		    </div>
        </div>
        <div class="copyright_area">
            <p>Copyright © XXXXXX有限公司 版权所有 </p>
        </div>
        <div class="infomation_area">
            <div class="now_adds_area">
                <p1>您当前的位置：概要信息</p1>
                <p2></p2>
            </div>
            <div class="info_show_area">
                <div class="sign_area"><p>概要信息</p></div>
                <div class="easy_body">
                    <div class="body_cover"></div>
                    <div id="container"></div>
                    <div class="body_area_mark">
                        <p>身体指标</p>
                        <p1>老人最近血压、血糖、体温、心跳指标</p1>
                    </div>
                </div>
                <div class="easy_photo">
                    <div id = "container3">
                        <div id="slides">
		                </div>
                   </div> 
                </div>
                <div class="easy_plan">
                    <div class="plan_cover"></div>
                    <div id="container4">
                        <div class="breakfirst_sum">
	                    </div>
                        <div class="breakfirst_p">
                            <p></p>
                        </div>
                        <div class="lunch_sum">
	                    </div>
                        <div class="lunch_p">
                            <p></p>
                        </div>
                        <div class="dinner_sum">
	                    </div>
                        <div class="dinner_p">
                            <p></p>
                        </div>
                    </div>
                    <div class="plan_area_mark">
                        <p>健康计划</p>
                        <p1>老人今日的饮食情况</p1>
                    </div>
                </div>
                <div class="easy_act">
                    <div class="act_cover"></div>
                    <div id="container2"></div>
                    <div class="act_area_mark">
                        <p>活动情况</p>
                        <p1>老人近日活动情况以及活动照片</p1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="theme-popover-mask"></div>

        <div class="theme-popover">
	        <div class="theme-poptit">
		        <a href="javascript:;" title="关闭" class="close">×</a>
		        <h3>选择图像上传</h3>
	        </div>
              <div class="imageBox">
                <div class="thumbBox"></div>
                <div class="spinner" style="display: none">Loading...</div>
              </div>
              <div class="action"> 
                <!-- <input type="file" id="file" style=" width: 200px">-->
                <div class="new-contentarea tc"> <a href="javascript:void(0)" class="upload-img">
                  <label for="upload-file">本地图片</label>
                  </a>
                  <input type="file" class="" name="upload-file" id="upload-file" />
                </div>
                <input type="button"  id="sure_upload_btn"  value="确认上传" />
                <%--<input type="button" id="btnCrop"  class="Btnsty_peyton" value="裁切"/>
                <input type="button" id="btnZoomIn" class="Btnsty_peyton" value="+"  />
                <input type="button" id="btnZoomOut" class="Btnsty_peyton" value="-" />--%>
              </div>
              <%--<div class="cropped"></div>--%>
              <%--<div class="sure_upload"><input type="button" id="sure_upload_btn"  value="确认上传" /></div>--%>
        </div>
    <input  id="get_username"  type=hidden  value="<%: ViewData["userName"]%>" />
</body>
</html>
