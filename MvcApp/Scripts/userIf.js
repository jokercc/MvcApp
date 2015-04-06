$(function(){
    // 运用ajax方法像服务器请求数据
    var user = $("#get_username").val();
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
        });
    $(".navboxfive").bind("click",function(){
     	$(".navboxfive").hover(
		function(){
			$(this).removeClass().addClass("navboxfive_green");
		},
		function(){
		$(this).addClass("navboxfive_green");});
     	$("#user_basic_info").hide("fast");
     	$("#user_heal_info").hide("fast");
     	$("#user_aid_info").show("fast");
        });
    $("#search").click(function(){
    	$.ajax(
	    {
	    	url: "/EmergencyInfo/test",
	        data:{
				"userName": user
	            },
	        type: "GET",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (data) 
	        {
	        	
	        },
	               
	    });
    });
});