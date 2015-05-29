<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<link rel="stylesheet" type="text/css" href="/css/user_interface_style.css" />
    <link rel="stylesheet" type="text/css" href="/css/jquery.datetimepicker.css"/>
    <link rel="stylesheet" type="text/css" href="/css/upload_photo.css" />
    <link type="text/css" rel="stylesheet" href="/css/galleryview.css" />
	<title>用户界面</title>
	<script type="text/javascript" src="/Scripts/getScript/jquery-1.6.1.min.js"></script>
	<script type="text/javascript" src="/Scripts/myScript/userIf.js"></script>
    <script type="text/javascript" src="/Scripts/getScript/jquery.js"></script>
    <script type="text/javascript" src="/Scripts/getScript/highcharts.js"></script>
    <script type="text/javascript" src="/Scripts/getScript/slides.js"></script>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=Ww0moWQzefqW6FOflHHjg9pq"></script>
    <script type="text/javascript" src="/Scripts/getScript/jquery.datetimepicker.js"></script>
    <script type="text/javascript" src="/Scripts/getScript/ajaxfileupload.js"></script>
<script type="text/javascript" src="/Scripts/getScript/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="/Scripts/getScript/jquery.galleryview-1.1.js"></script>
<script type="text/javascript" src="/Scripts/getScript/jquery.timers-1.1.2.js"></script>
</head>
<body>
    <div class="main_bg">
        <div class="head_area">
            <div class="logo_area"><img src="/content/images/logo.png" height="100%" width="100%" alt="logo"/></div>
            <div id="menu">
                <ul>
                  <li id="nav1"><img src="/content/images/all.png" height="100%" width="100%" alt="logo"/></li>
                  <li id="nav2"><img src="/content/images/body_all.png" height="100%" width="100%" alt="logo"/></li>
                  <li id="nav3"><img src="/content/images/act_all.png" height="100%" width="100%" alt="logo"/></li>
                  <li id="nav4"><img src="/content/images/plan_all.png" height="100%" width="100%" alt="logo"/></li>
                  <li id="nav5"><img src="/content/images/aid_all.png" height="100%" width="100%" alt="logo"/></li>
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
            <div class="nav_sign">
                <img src="/content/images/all_left.png" height="22" width="22" alt="logo"/>
                <p>概要信息</p>
            </div>
            <div class="nav_signI">
                <img src="/content/images/table_left.png" height="22" width="22" alt="logo"/>
                <p>身体指标</p>
            </div>
            <div class="nav_signII">
                <img src="/content/images/act_photo.png" height="24" width="23" alt="logo"/>
                <p>图片信息</p>
            </div>
            <div class="nav_signIII">
                <img src="/content/images/heal_plan.png" height="27" width="27" alt="logo"/>
                <p>健康计划</p>
            </div>
            <div class="nav_signIIII">
                <img src="/content/images/aid.png" height="27" width="24" alt="logo"/>
                <p>急救信息</p>
            </div>
            <div class="nav_sign2">
                <img src="/content/images/curve_green.png" height="22" width="22" alt="logo"/>
                <p>变化趋势</p>
            </div>
            <div class="nav_sign22">
                <img src="/content/images/act_map_green.png" height="24" width="23" alt="logo"/>
                <p>详细数据</p>
            </div>
            <div class="nav_sign3">
                <img src="/content/images/act_map_green.png" height="27" width="16" alt="logo"/>
                <p>活动轨迹</p>
            </div>
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
                <p id="more_info"><img src="/content/images/more.png" height="20" width="28" alt="logo" align="bottom"/>&nbsp;查看更多资料</p>
		    </div>
        </div>
        <div class="copyright_area">
            <p>Copyright © XXXXXX有限公司 版权所有 </p>
        </div>
        <div class="infomation_area">
            <div class="now_adds_area">
                <img src="/content/images/home.png" height="22px" width="24px" alt="logo" align="middle"/>
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
                <div class="choose_month">
                    <div class="premonth_area_body"><input type="button" id="premonth_btn_body" value="上月" /></div>
                    <div class="nextmonth_area_body"><input type="button" id="nextmonth_btn_body" value="下月" /></div>
                    <div class="premonth_area_pre"><input type="button" id="premonth_btn_pre" value="上月" /></div>
                    <div class="nextmonth_area_pre"><input type="button" id="nextmonth_btn_pre" value="下月" /></div>
                    <div class="premonth_area_suger"><input type="button" id="premonth_btn_suger" value="上月" /></div>
                    <div class="nextmonth_area_suger"><input type="button" id="nextmonth_btn_suger" value="下月" /></div>
                    <div class="premonth_area_boom"><input type="button" id="premonth_btn_boom" value="上月" /></div>
                    <div class="nextmonth_area_boom"><input type="button" id="nextmonth_btn_boom" value="下月" /></div>
                    <div class="premonth_area_tem"><input type="button" id="premonth_btn_tem" value="上月" /></div>
                    <div class="nextmonth_area_tem"><input type="button" id="nextmonth_btn_tem" value="下月" /></div>
                    <p></p>
                    <div class="sel_wrap">
                        <label>血压</label>
                        <select class="select" name="" id="c_body">
                        <option value="0">血压</option>
                        <option value="1">心跳</option>
                        <option value="2">血糖</option>
                        <option value="3">体温</option>
                        </select>
                    </div>
                </div>
                <div class="body_table_area">
                    <table class="dataintable">
                    </table>
                </div>
                <div id="container_change">
                </div>
                <div class="container_photo">
                    <div class="photo_month">
                        <div class="premonth_area_photo"><input type="button" id="premonth_btn_photo" value="上月" /></div>
                        <div class="nextmonth_area_photo"><input type="button" id="nextmonth_btn_photo" value="下月" /></div>
                        <p></p>
                    </div>
                    <div id="act_photo_area">
                        <div id="photos" class="galleryview">
                              
                        </div>
                    </div>
                </div>
                <div class="container_box">
                    <div class="photo_month">
                        <div class="premonth_area_box"><input type="button" id="premonth_btn_box" value="上月" "/></div>
                        <div class="nextmonth_area_box"><input type="button" id="nextmonth_btn_box" value="下月" /></div>
                        <p></p>
                    </div>
                    <div id="box_area"></div>
                </div>
                <div class="container_map">
                    <div class="photo_month">
                        <div class="premonth_area_map"><input type="button" id="premonth_btn_map" value="上一天" /></div>
                        <div class="nextmonth_area_map"><input type="button" id="nextmonth_btn_map" value="下一天" /></div>
                        <div class="map_date_pick"><input id="datetimepicker3" type="text" value=""/></div>
                        <div class="map_search_btn"><input id="map_search" type="button" value="查询"/></div>
                    </div>
                    <div id="map_area"></div>
                </div>
                <div class="container_plan">
                    <div class="heal_plan_eat">
                        <div class="eat_photo">
                            <img src="/content/images/eat_photo.png" height="100%" width="100%" alt="logo" />
                        </div>
                        <div class="eat_title">
                            <p>营养食谱</p>
                        </div>
                        <div class="eat_advice">
                            <p></p>
                        </div>
                    </div>
                    <div class="heal_plan_sleep">
                        <div class="sleep_title">
                            <p>作息安排</p>
                        </div>
                        <div class="sleep_advice">
                            <p></p>
                        </div>
                    </div>
                    <div class="heal_plan_pe">
                        <div class="pe_photo">
                            <img src="/content/images/pe_photo.png" height="100%" width="100%" alt="logo" />
                        </div>
                        <div class="pe_title">
                            <p>健身计划</p>
                        </div>
                        <div class="pe_advice">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="container_aid">
                    <div class="aid_date_start">
                        <input type="text" id="datetimepicker1" value=""/>
                    </div>
                    <div class="aid_date_end">
                        <input type="text" id="datetimepicker2" value=""/>
                    </div>
                    <div class="aid_search_btn">
                        <img src="/content/images/aid_search.png" height="100%" width="100%" alt="logo" />
                    </div>
                    <div class="aid_table_area">
                        <table class="aid_dataintable">
                            <tr><th>时间</th><th>地点</th><th>急救人员</th><th>病情分析</th><th>诊断结果</th><th>医生建议</th></tr>
                            <%--<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>--%>
                        </table>
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
