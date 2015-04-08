$(function(){
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
        $.ajax(
	    {
            url: "/BasicInfo/getHealthIndicatorByDate",
	        data:{
				"myYear": myyear,
                "myMonth" : mymonth
	            },
	        type: "GET",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (data) 
	        {
	        	alert(data);
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
        var begin_time = $("#datetimepicker1").val();
        var end_time = $("#datetimepicker2").val();
        $.ajax(
	    {
            url: "/BasicInfo/searchForEmergencyInfo",
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
	        	alert(data);
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