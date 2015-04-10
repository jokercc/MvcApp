$(function(){
    function utcToDate(utcCurrTime) {
            utcCurrTime = utcCurrTime + "";
            var date = "";
            var month = new Array();
            month["Jan"] = 1;
            month["Feb"] = 2;
            month["Mar"] = 3;
            month["Apr"] = 4;
            month["May"] = 5;
            month["Jun"] = 6;
            month["Jul"] = 7;
            month["Aug"] = 8;
            month["Sep"] = 9;
            month["Oct"] = 10;
            month["Nov"] = 11;
            month["Dec"] = 12;
            str = utcCurrTime.split(" ");
            date =  month[str[1]] + "-" + str[2] + "-" + str[3];
            return date;
                    }
    // 运用ajax方法像服务器请求数据
    var user = $("#get_username").val();
    var userId;
    $(document).ready(function () {
        $.ajax(
	    {
	    	url: "/BasicInfo/getUserByUserName",
	        data:{
				"userName": user
	            },
	        type: "GET",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (data) 
	        {
                userId = data.ID_User;
	        	var name = data.Name;
	        	var age = data.Age;
	        	var sex = data.Sex;
	        	var marrige = data.Marrige;
	        	var telnum = data.TelNum;
	        	var address = data.Address;
	        	var children = data.Children;
	        	var hobby = data.Hobby;

                if(sex == true){
                    $(".sex").html("男");
                } else {
                    $(".sex").html("女");
                }
                if(marrige == true){
                    $(".marrige").html("已婚");
                } else {
                    $(".marrige").html("未婚");
                }

	        	$(".user_name_font").html(name);
	        	$(".name").html(name);
	        	$(".age").html(age);
	        	$(".telnum").html(telnum);
	        	$(".address").html(address);
	        	$(".children").html(children);
	        	$(".hobby").html(hobby);
	        },
	               
	    });
    });

    // 动态显示导航栏显示效果
    $(".navboxone_grey").bind("click",function(){
     	$("#user_basic_info").show("fast");
     	$("#user_heal_info").show("fast");
     	$("#user_aid_info").hide("fast");
        $("#body_table_head").hide("fast");
     	$("#body_table_bg").hide("fast");
        $("#body_curve_head").hide("fast");
     	$("#body_curve_bg").hide("fast");
        $("#data_info_head").hide("fast");
     	$("#data_info_bg").hide("fast");
        $("#act_cueve_head").hide("fast");
     	$("#act_cueve_bg").hide("fast");
        $("#heal_plan").hide("fast");
        $("#heal_plan").hide("fast");
        $(".navbox").show("fast");
        $(".navbox2").hide("fast");
        $(".navbox3").hide("fast");
        $(".navbox4").hide("fast");
        $(".navbox5").hide("fast");
        $(".body_box").hide("fast");
		$(".act_box").hide("fast");
        });
    $(".navboxtwo").bind("click",function(){
        $(".navbox").hide("fast");
        $(".navbox2").show("fast");
        $(".navbox3").hide("fast");
        $(".navbox4").hide("fast");
        $(".navbox5").hide("fast");
        $(".body_box").show("fast");
        $(".act_box").hide("fast");
        });
    $(".navboxtwo_green").bind("click",function(){
        $(".navbox").hide("fast");
        $(".navbox2").show("fast");
        $(".navbox3").hide("fast");
        $(".navbox4").hide("fast");
        $(".navbox5").hide("fast");
        $(".body_box").show("fast");
        $(".act_box").hide("fast");
        });
    $(".navboxthree").bind("click",function(){
        $(".navbox").hide("fast");
        $(".navbox2").hide("fast");
        $(".navbox3").show("fast");
        $(".navbox4").hide("fast");
        $(".navbox5").hide("fast");
        $(".body_box").hide("fast");
        $(".act_box").show("fast");
        });
    $(".navboxthree_green").bind("click",function(){
        $(".navbox").hide("fast");
        $(".navbox2").hide("fast");
        $(".navbox3").show("fast");
        $(".navbox4").hide("fast");
        $(".navbox5").hide("fast");
        $(".body_box").hide("fast");
        $(".act_box").show("fast");
        });
    $(".show_table").bind("click",function(){
     	$("#body_table_head").show("fast");
     	$("#body_table_bg").show("fast");
     	$("#user_aid_info").hide("fast");
        $("#user_basic_info").hide("fast");
     	$("#user_heal_info").hide("fast");
        $("#body_curve_head").hide("fast");
     	$("#body_curve_bg").hide("fast");
        $("#data_info_head").hide("fast");
     	$("#data_info_bg").hide("fast");
        $("#act_cueve_head").hide("fast");
     	$("#act_cueve_bg").hide("fast");
        $("#heal_plan").hide("fast");
        $("#heal_plan").hide("fast");
        $(".navbox").hide("fast");
        $(".navbox2").show("fast");
        $(".navbox3").hide("fast");
        $(".navbox4").hide("fast");
        $(".navbox5").hide("fast");
        $(".body_box").hide("fast");
        var myDate = new Date();
        var myyear = myDate.getFullYear(); 
        var mymonth = (myDate.getMonth()+1);
        var tbody = $("#body_table_bg").find("table");
        tbody.empty();
        $.ajax(
	    {
            url: "/BasicInfo/getHealthIndicatorByDate",
	        //url:"/BasicInfo/testGetHealthIndicator",
            
            data:{
				"myYear": myyear,
                "myMonth" : mymonth
	        },
	        type: "GET",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (data) 
	        {   
                for (var i = 0; i < data.length; i++) {
                        var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                        if(i%2==0){
                            var tr1 = '<table class="table_style3"><tr><td class="pre_bggrey_left">' +date+ '</td><td class="pre_bggrey_mid">' + data[i].SystolicPressure + '</td><td class="pre_bggrey_right">' + data[i].DiastolicPressure + '</td></tr></table>';
                            var tr2 = '<table class="table_style4"><tr><td class="boom_bggrey_left">' +date+  '</td><td class="boom_bggrey_right">' + data[i].HeartBeat + '</td></tr></table>';
                            var tr3 = '<table class="table_style5"><tr><td class="suger_bggrey_left">' +date+  '</td><td class="suger_bggrey_right">' + data[i].BloodGlucose + '</td></tr></table>';
                            var tr4 = '<table class="table_style6"><tr><td class="tem_bggrey_left">' +date+  '</td><td class="tem_bggrey_right">' + data[i].Calorie + '</td></tr></table>';
                            $("#blood_pre_data").append(tr1);
                            $("#boom_data_bg").append(tr2);
                            $("#suger_data_bg").append(tr3);
                            $("#tem_data_bg").append(tr4);
                            }else{
                                var tr1 = '<table class="table_style3"><tr><td class="pre_bgwhite_left">' +date+ '</td><td class="pre_bgwhite_mid">' + data[i].SystolicPressure + '</td><td class="pre_bgwhite_right">' + data[i].DiastolicPressure + '</td></tr></table>';
                                var tr2 = '<table class="table_style4"><tr><td class="boom_bgwhite_left">' +date+  '</td><td class="boom_bgwhite_right">' + data[i].HeartBeat + '</td></tr></table>';
                                var tr3 = '<table class="table_style5"><tr><td class="suger_bgwhite_left">' +date+  '</td><td class="suger_bgwhite_right">' + data[i].BloodGlucose + '</td></tr></table>';
                                var tr4 = '<table class="table_style6"><tr><td class="tem_bgwhite_left">' +date+  '</td><td class="tem_bgwhite_right">' + data[i].Calorie + '</td></tr></table>';
                                $("#blood_pre_data").append(tr1);
                                $("#boom_data_bg").append(tr2);
                                $("#suger_data_bg").append(tr3);
                                $("#tem_data_bg").append(tr4);
                            }
                }
                var forward = i;
                for (forward; forward < 31; forward++) {
                        if(forward%2==0){
                            var tr1 = '<table class="table_style3"><tr><td class="pre_bggrey_left">' +"&nbsp;"+ '</td><td class="pre_bggrey_mid">' + "&nbsp;"+ '</td><td class="pre_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                            var tr2 = '<table class="table_style4"><tr><td class="boom_bggrey_left">' +"&nbsp;"+  '</td><td class="boom_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                            var tr3 = '<table class="table_style5"><tr><td class="suger_bggrey_left">' +"&nbsp;"+  '</td><td class="suger_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                            var tr4 = '<table class="table_style6"><tr><td class="tem_bggrey_left">' +"&nbsp;"+  '</td><td class="tem_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                            $("#blood_pre_data").append(tr1);
                            $("#boom_data_bg").append(tr2);
                            $("#suger_data_bg").append(tr3);
                            $("#tem_data_bg").append(tr4);
                            }else{
                                var tr1 = '<table class="table_style3"><tr><td class="pre_bgwhite_left">' +"&nbsp;"+ '</td><td class="pre_bgwhite_mid">' + "&nbsp;" + '</td><td class="pre_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                var tr2 = '<table class="table_style4"><tr><td class="boom_bgwhite_left">' +"&nbsp;"+  '</td><td class="boom_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                var tr3 = '<table class="table_style5"><tr><td class="suger_bgwhite_left">' +"&nbsp;"+  '</td><td class="suger_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                var tr4 = '<table class="table_style6"><tr><td class="tem_bgwhite_left">' +"&nbsp;"+  '</td><td class="tem_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                $("#blood_pre_data").append(tr1);
                                $("#boom_data_bg").append(tr2);
                                $("#suger_data_bg").append(tr3);
                                $("#tem_data_bg").append(tr4);
                            }
                }
	        },
	               
	    });
        });
    $(".show_curve").bind("click",function(){
     	$("#body_curve_head").show("fast");
     	$("#body_curve_bg").show("fast");
        $("#body_table_head").hide("fast");
     	$("#body_table_bg").hide("fast");
     	$("#user_aid_info").hide("fast");
        $("#user_basic_info").hide("fast");
     	$("#user_heal_info").hide("fast");
        $("#data_info_head").hide("fast");
     	$("#data_info_bg").hide("fast");
        $("#act_cueve_head").hide("fast");
     	$("#act_cueve_bg").hide("fast");
        $("#heal_plan").hide("fast");
        $(".navbox").hide("fast");
        $(".navbox2").show("fast");
        $(".navbox3").hide("fast");
        $(".navbox4").hide("fast");
        $(".navbox5").hide("fast");
        $(".body_box").hide("fast");
        });
    $(".deta_info").bind("click",function(){
     	$("#data_info_head").show("fast");
     	$("#data_info_bg").show("fast");
        $("#body_curve_head").hide("fast");
     	$("#body_curve_bg").hide("fast");
        $("#body_table_head").hide("fast");
     	$("#body_table_bg").hide("fast");
     	$("#user_aid_info").hide("fast");
        $("#user_basic_info").hide("fast");
     	$("#user_heal_info").hide("fast");
        $("#act_cueve_head").hide("fast");
     	$("#act_cueve_bg").hide("fast");
        $("#heal_plan").hide("fast");
        $(".navbox").hide("fast");
        $(".navbox2").hide("fast");
        $(".navbox3").show("fast");
        $(".navbox4").hide("fast");
        $(".navbox5").hide("fast");
        $(".act_box").hide("fast");
        });
    $(".act_cueve").bind("click",function(){
     	$("#act_cueve_head").show("fast");
     	$("#act_cueve_bg").show("fast");
        $("#body_curve_head").hide("fast");
     	$("#body_curve_bg").hide("fast");
        $("#body_table_head").hide("fast");
     	$("#body_table_bg").hide("fast");
     	$("#user_aid_info").hide("fast");
        $("#user_basic_info").hide("fast");
     	$("#user_heal_info").hide("fast");
        $("#data_info_head").hide("fast");
     	$("#data_info_bg").hide("fast");   
        $("#heal_plan").hide("fast");
        $(".navbox").hide("fast");
        $(".navbox2").hide("fast");
        $(".navbox3").show("fast");
        $(".navbox4").hide("fast");
        $(".navbox5").hide("fast");
        $(".act_box").hide("fast");
        });
    $(".navboxfour").bind("click",function(){
     	$("#heal_plan").show("fast");
        $("#user_aid_info").hide("fast");
        $("#user_basic_info").hide("fast");
     	$("#user_heal_info").hide("fast");
     	$("#body_table_head").hide("fast");
     	$("#body_table_bg").hide("fast");
        $("#body_curve_head").hide("fast");
     	$("#body_curve_bg").hide("fast");
        $("#data_info_head").hide("fast");
     	$("#data_info_bg").hide("fast");
        $("#act_cueve_head").hide("fast");
     	$("#act_cueve_bg").hide("fast");
        $(".navbox").hide("fast");
        $(".navbox2").hide("fast");
        $(".navbox3").hide("fast");
        $(".navbox4").show("fast");
        $(".navbox5").hide("fast");
        $(".body_box").hide("fast");
		$(".act_box").hide("fast");
        $.ajax(
	    {
	    	url: "/BasicInfo/getHealthPlanByUserId",
	        data:{
				"id": userId 
	            },
	        type: "GET",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (data) 
	        {
                
	        	var eat = data[0].Recipes;
	        	var pe = data[0].Movement;
	        	var sleep = data[0].Schedule;

	        	$(".eat_palan p").html(eat);
	        	$(".pe_plan p").html(pe);
	        	$(".sleep_plan p").html(sleep);
	        },
	               
	    });
        });
    $(".navboxfive").bind("click",function(){
     	$("#user_aid_info").show("fast");
        $("#user_basic_info").hide("fast");
     	$("#user_heal_info").hide("fast");
     	$("#body_table_head").hide("fast");
     	$("#body_table_bg").hide("fast");
        $("#body_curve_head").hide("fast");
     	$("#body_curve_bg").hide("fast");
        $("#data_info_head").hide("fast");
     	$("#data_info_bg").hide("fast");
        $("#act_cueve_head").hide("fast");
     	$("#act_cueve_bg").hide("fast");
        $("#heal_plan").hide("fast");
        $(".navbox").hide("fast");
        $(".navbox2").hide("fast");
        $(".navbox3").hide("fast");
        $(".navbox4").hide("fast");
        $(".navbox5").show("fast");
        $(".body_box").hide("fast");
		$(".act_box").hide("fast");
        });
   //点击日期开始变换输入框背景样式
   $(".start_date").click(function(){
		$(this).removeClass().addClass("date_bg1");
        });
   $(".finish_date").click(function(){
		$(this).removeClass().addClass("date_bg2");
        });
    //点击搜索按钮向服务器请求符合日期内的急救事件
   $("#search").click(function(){
        $(".aid_key").empty();
        var begin_time = $("#datetimepicker1").val();
        var end_time = $("#datetimepicker2").val();
        $.ajax(
	    {
            url: "/BasicInfo/searchForEmergencyInfo",
	        //url: "/EmergencyInfo/test",
            data:{
				"userId": userId,
                "bTime" : begin_time,
                "eTime" : end_time    
	            },
	        type: "GET",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (data) 
	        {
	        	for (var i = 0; i < data.length; i++) {
                        var date =  utcToDate(eval('new ' + eval(data[i].EmergencyDate).source));
                        var tr1 = '<input type="button" class="aidvalue" name="'+i+'" value ="' + date + data[i].Location + '"  />';
                        $(".aid_key").append(tr1);
                        }
                $(".aidvalue").click(function(){
                   var index = $(this).attr('name');
                   var date =  utcToDate(eval('new ' + eval(data[index].EmergencyDate).source));
                   $(".aid_ads p").html(data[index].Location);
                   $(".aid_doc p").html(data[index].Advice);
                   $(".aid_diag p").html(data[index].MedicalResult);
                   $(".aid_time p").html(date);
                   $(".aid_ast p").html(data[index].Staff);
                   $(".aid_ana p").html(data[index].IllnessAnalyses);
                   
               });
                    
               },
	    });
    });
//    身体指标按钮样式转化
   $("#blood_premon_btns input").bind("click",function(){
        $("#blood_premon_btns input").hide("fast");
        $("#blood_premon_btn input").show("fast");
     	$("#blood_nextmon_btnb input").hide("fast");
     	$("#blood_nextmon_btn input").show("fast");
   });
   $("#blood_nextmon_btn input").bind("click",function(){
        $("#blood_premon_btns input").show("fast");
        $("#blood_premon_btn input").hide("fast");
     	$("#blood_nextmon_btnb input").show("fast");
     	$("#blood_nextmon_btn input").hide("fast");
   });
   $("#boom_premon_btns input").bind("click",function(){
        $("#boom_premon_btns input").hide("fast");
        $("#boom_premon_btn input").show("fast");
     	$("#boom_nextmon_btnb input").hide("fast");
     	$("#boom_nextmon_btn input").show("fast");
   });
   $("#boom_nextmon_btn input").bind("click",function(){
        $("#boom_premon_btns input").show("fast");
        $("#boom_premon_btn input").hide("fast");
     	$("#boom_nextmon_btnb input").show("fast");
     	$("#boom_nextmon_btn input").hide("fast");
   });
   $("#suger_premonth_btns input").bind("click",function(){
        $("#suger_premonth_btns input").hide("fast");
        $("#suger_premonth_btn input").show("fast");
     	$("#suger_nextmon_btn input").show("fast");
     	$("#suger_nextmon_btnb input").hide("fast");
   });
   $("#suger_nextmon_btn input").bind("click",function(){
        $("#suger_premonth_btns input").show("fast");
        $("#suger_premonth_btn input").hide("fast");
     	$("#suger_nextmon_btnb input").show("fast");
     	$("#suger_nextmon_btn input").hide("fast");
   });
   $("#tem_premon_btns input").bind("click",function(){
        $("#tem_premon_btns input").hide("fast");
        $("#tem_premon_btn input").show("fast");
     	$("#tem_nextmon_btn input").show("fast");
     	$("#tem_nextmon_btnb input").hide("fast");
   });
   $("#tem_nextmon_btn input").bind("click",function(){
        $("#tem_premon_btns input").show("fast");
        $("#tem_premon_btn input").hide("fast");
     	$("#tem_nextmon_btnb input").show("fast");
     	$("#tem_nextmon_btn input").hide("fast");
   });
});