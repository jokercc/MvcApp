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
	// 导航栏样式转换
	$(".navtop").hover(
		function(){
			$(".body_box").hide("fast");
			$(".act_box").hide("fast");
		},
		function(){
			$(".body_box").hide("fast");
			$(".act_box").hide("fast");
		});
	$(".navboxone").hover(
		function(){
			$(".body_box").hide("fast");
		},
		function(){
			$(".body_box").hide("fast");
		});
	$(".navboxtwo").hover(
		function(){
			$(this).removeClass().addClass("navboxtwo_green");
			$(".navboxone").removeClass().addClass("navboxone_grey");
			$(".body_box").show("fast");
			$(".act_box").hide("fast");
			// $(".navboxone").removeClass().addClass("navboxone_grey");
		},
		function(){
			$(this).removeClass("navboxtwo_green").addClass("navboxtwo");
			$(".navboxone_grey").removeClass().addClass("navboxone");
			// $(".navboxone").removeClass("navboxone_grey");
		});
	$(".body_box").hover(
		function(){
			$(".navboxtwo").removeClass().addClass("navboxtwo_green");
			$(".navboxone").removeClass().addClass("navboxone_grey");
			$(this).show("fast");
			// $(".navboxone").removeClass().addClass("navboxone_grey");
		},
		function(){
			$(".navboxtwo_green").removeClass().addClass("navboxtwo");
			$(".navboxone_grey").removeClass().addClass("navboxone");
			$(this).hide("fast");
			// $(".navboxone").removeClass("navboxone_grey");
		});
	$(".navboxthree").hover(
		function(){
			$(this).removeClass().addClass("navboxthree_green");
			$(".navboxone").removeClass().addClass("navboxone_grey");
			$(".act_box").show("fast");
			$(".body_box").hide("fast");
		},
		function(){
			$(this).removeClass("navboxthree_green").addClass("navboxthree");
			$(".navboxone_grey").removeClass().addClass("navboxone");
		});
	$(".act_box").hover(
		function(){
			$(".navboxthree").removeClass().addClass("navboxthree_green");
			$(".navboxone").removeClass().addClass("navboxone_grey");
			$(this).show("fast");
			// $(".navboxone").removeClass().addClass("navboxone_grey");
		},
		function(){
			$(".navboxthree_green").removeClass().addClass("navboxthree");
			$(".navboxone_grey").removeClass().addClass("navboxone");
			$(this).hide("fast");
			// $(".navboxone").removeClass("navboxone_grey");
		});
	$(".navboxfour").hover(
		function(){
			$(this).removeClass().addClass("navboxfour_green");
			$(".navboxone").removeClass().addClass("navboxone_grey");
			$(".act_box").hide("fast");
		},
		function(){
			$(this).removeClass("navboxfour_green").addClass("navboxfour");
			$(".navboxone_grey").removeClass().addClass("navboxone");
		});
	$(".navboxfive").hover(
		function(){
			$(this).removeClass().addClass("navboxfive_green");
			$(".navboxone").removeClass().addClass("navboxone_grey");
		},
		function(){
			$(this).removeClass("navboxfive_green").addClass("navboxfive");
			$(".navboxone_grey").removeClass().addClass("navboxone");
		});
    
    // 动态显示导航栏显示效果
    $(".navboxone").bind("click",function(){
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
                for(var i = 0; i < data.length; i++)
                {
                    var date = eval('new ' + eval(data[i].EmergencyDate).source); 
                    alert(date);
                }
	        }
	    });
    });
});