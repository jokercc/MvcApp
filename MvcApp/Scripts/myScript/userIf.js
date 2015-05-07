$(function () {
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
        date = str[3] + "年" + month[str[1]] + "月" + str[2] + "日";
        return date;
    }
    function utcToDate_onlyday(utcCurrTime) {
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
        date = str[2] + "日";
        return date;
    }
    var user = $("#get_username").val();
    var userId;
    var portrait_url;
    var myDate = new Date();
    var myyear = myDate.getFullYear();
    var mymonth = (myDate.getMonth() + 1);
    var myday = myDate.getDate();
    var myh = myDate.getHours();
    var mym = myDate.getMinutes();
    var myse = myDate.getSeconds();
    var premonth;
    var boommonth;
    var sugermonth;
    var temmonth;
    var preyear;
    var boomyear;
    var sugeryear;
    var temyear;
    var duration_array = new Array();
    var calorie_array = new Array();
    var distance_array = new Array();
    var date_array = new Array();
    var downpre_array = new Array();
    var uppre_array = new Array();
    var boom_array = new Array();
    var suger_array = new Array();
    var tem_array = new Array();
    var line_month;
    var line_year;
    var actmonth;
    var actyear;
    var str;
    var select;
    $(window).load(function () {
        str = "" + myDate.getFullYear() + "年";
        str += (myDate.getMonth() + 1) + "月";
        str += myDate.getDate() + "日     ";
        //str += myh + ":" + myh + ":" + myse;
        str += "     星期";
        str += "天一二三四五六".charAt(myDate.getDay());
        $(".now_adds_area p2").html(str);
        $.ajax({
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
                portrait_url = data.face100;
                var name = data.Name;
                var age = data.Age;
                var sex = data.Sex;
                var date =  utcToDate(eval('new ' + eval(data.birthday).source));
                var marrige = data.Marrige;
                var telnum = data.TelNum;
                var home_telnum = data.familyTelNum;
                var address = data.Address;
                var children = data.Children;
                var hobby = data.Hobby;;
                var blood_type = data.blood;
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

                $("#user_name p").html(name);
                $(".name").html(name);
                $(".age").html(age);
                $(".telnum").html(telnum);
                $(".address").html(address);
                $(".children").html(children);
                $(".hobby").html(hobby);
                $(".birthday").html(date);
                $(".home_telnum").html(home_telnum);
                $(".blood_type").html(blood_type);
                $("#small_portrait").attr("src",portrait_url);
//////////////////////////////////////////////////////////////////////////////////
                $.ajax({
                    url: "/BasicInfo/getUserPhotoByUserId",
                    data:{
                        "userId" : userId
                    },
                    type: "GET",
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) 
                    {   
                        for (var i = 0; i < data.length; i++) {
                        var img_src = data[i].PhotoPath;
                        var test_photo = '<img src="'+data[i].PhotoPath+'"width="100%" height="100%" alt="" />';
                        $('#slides').append(test_photo);
                        }
                        //Get the curent slide
                        function currentSlide(current) {
                            $(".current_slide").text(current + " of " + $("#slides").slides("status", "total"));
                        }

                        $(function () {
                        //Initialize SlidesJS
                        $("#slides").slides({
                            width : '100%',
                            height : '100%',
                            navigateEnd: function (current) {
                                currentSlide(current);
                        },
                        loaded: function () {
                            currentSlide(1);
                        }
                });
/////////////////////////////////////////////////////////////////////////////////////
                $.ajax({
                    url: "/BasicInfo/getHealthPlanByUserId",
                    data:{
                        "userId": userId
                    },
                    type: "GET",
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) 
                    {
                        var eat_plan = data[0].Recipes;
                        var arr = new Array();
                        arr = eat_plan.split(';');
                        $(".breakfirst_p").html(arr[0]);
                        $(".lunch_p").html(arr[1]);
                        $(".dinner_p").html(arr[2]);
                    },
                });
///////////////////////////////////////////////////////////////////////////////
                $.ajax({
                    url: "/BasicInfo/getHealthIndicatorByDate",
                    data:{
                        "myYear": myyear,
                        "myMonth" : mymonth,
                        "id" : userId
                    },
                    type: "GET",
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) 
                    {   
                        for (var i = 0; i < data.length; i++) {
                            var date =  utcToDate_onlyday(eval('new ' + eval(data[i].Date).source));
                            date_array.push(date);
                            downpre_array.push(data[i].SystolicPressure);   
                            uppre_array.push(data[i].DiastolicPressure); 
                            boom_array.push(data[i].HeartBeat); 
                            suger_array.push(data[i].BloodGlucose);  
                            tem_array.push(data[i].Calorie);               
                        }
                        
                        $('#container').highcharts({
                            title: {
                                text: ''
                            },
                            subtitle: {
                                text: ''
                            },
                            credits: {
                                enabled: false 
                            },
                            xAxis: {
                                categories:date_array
                            },
                            yAxis: {
                                title: {
                                    text: '单位'
                                },
                                min:0,
                                plotLines: [{
                                    value: 0,
                                    width: 1,
                                    color: '#808080'
                                }]
                            },
                            tooltip: {
                                valueSuffix: 'mmhg'
                            },

                            legend: {
                                layout: 'vertical',
                                align: 'right',
                                verticalAlign: 'middle',
                                borderWidth: 0
                            },
                            series: [{
                                    name: '收缩压',
                                    data: downpre_array
                                },{
                                    name: '血糖',
                                    data: suger_array
                                }, {
                                    name: '体温',
                                    data: tem_array
                                }, {
                                    name: '心跳',
                                    data: boom_array
                                }, {
                                    name: '舒张压',
                                    data: uppre_array
                            }]
                        });
                    },
                });
 ////////////////////////////////////////////////////////////////////////////////
                $.ajax({
                    url: "/BasicInfo/getHealthIndicatorByDate",
                    data:{
                        "myYear": myyear,
                        "myMonth" : mymonth,
                        "id" : userId
                    },
                    type: "GET",
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) 
                    {   
                        for (var i = 0; i < data.length; i++) {
                            var date =  utcToDate_onlyday(eval('new ' + eval(data[i].Date).source));
                            date_array.push(date);
                            duration_array.push(data[i].Duration);   
                            calorie_array.push(data[i].Calorie); 
                            distance_array.push(data[i].Distance); 
                        }
                        $('#container2').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: ''
                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            categories: date_array
                        },
                        yAxis:[{
                            min : 0,
                            lineWidth : 1,
                            title:{
                                text :'卡路里(kcal)'
                            }
                        },{
                            title:{
                            text :'时间(min)'
                            },
                            lineWidth : 1,
                            opposite:true
                        },{
                            title:{
                            text :'距离(m)'
                            },
                            lineWidth : 1,
                            opposite:true
                        }],
                        tooltip: {
                        },
                        plotOptions: {
                            column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                            }
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle',
                            borderWidth: 0
                        },
                        series: [{
                            name: '卡路里',
                            data: calorie_array,
                            yAxis:0
                        }, {
                            name: '时间',
                            data: duration_array,
                            yAxis:1
                        }, {
                            name: '距离',
                            data: distance_array,
                            yAxis:2}]
                        });
                    },
                });
 //////////////////////////////////////////////////////////////////////////
                });
            },
        });

        },
});
        
        
        
    
    
    });
    $(document).ready(function(){ 
    $(".logout_btn").mouseover(
		function(){
			$(".logout_btn").attr("value","退出X");
            });
    $(".logout_btn").mouseout(
		function(){
			$(".logout_btn").attr("value","退出");
            });
    $("#nav1").bind("click", function () {
        select=1;
        $(".now_adds_area p1").html("您当前的位置：概要信息");
        $(".sign_area p").html("概要信息");
        $("#nav2").css("background", "#318492");
        $(this).css("background", "#15697D");
        $("#nav3").css("background", "#318492");
        $("#nav4").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $("#nav2").bind("click", function () {
        select=2;
        $(".now_adds_area p1").html("您当前的位置：身体指标");
        $(".sign_area p").html("身体指标");
        $("#nav1").css("background", "#318492");
        $(this).css("background", "#15697D");
        $("#nav3").css("background", "#318492");
        $("#nav4").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $("#nav3").bind("click", function () {
        select=3;
        $(".now_adds_area p1").html("您当前的位置：活动情况");
        $(".sign_area p").html("活动情况");
        $("#nav1").css("background", "#318492");
        $(this).css("background", "#15697D");
        $("#nav2").css("background", "#318492");
        $("#nav4").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $("#nav4").bind("click", function () {
        select=4;
        $(".now_adds_area p1").html("您当前的位置：健康计划");
        $(".sign_area p").html("健康计划");
        $("#nav1").css("background", "#318492");
        $(this).css("background", "#15697D");
        $("#nav2").css("background", "#318492");
        $("#nav3").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $("#nav5").bind("click", function () {
        select=5;
        $(".now_adds_area p1").html("您当前的位置：急救信息");
        $(".sign_area p").html("急救信息");
        $("#nav1").css("background", "#318492");
        $(this).css("background", "#15697D");
        $("#nav2").css("background", "#318492");
        $("#nav3").css("background", "#318492");
        $("#nav4").css("background", "#318492");
    });
    $(".easy_body").mouseover(
		function(){
			$(".body_cover").show();
            });
    $(".easy_body").mouseout(
		function(){
			$(".body_cover").hide();
            });
    $(".easy_plan").mouseover(
		function(){
			$(".plan_cover").show();
            });
    $(".easy_plan").mouseout(
		function(){
			$(".plan_cover").hide();
            });
    $(".easy_act").mouseover(
		function(){
			$(".act_cover").show();
            });
    $(".easy_act").mouseout(
		function(){
			$(".act_cover").hide();
            });
    $(".body_cover").bind("click", function () {
        select=1;
        $(".now_adds_area p1").html("您当前的位置：概要信息");
        $(".sign_area p").html("概要信息");
        $("#nav2").css("background", "#318492");
        $("#nav1").css("background", "#15697D");
        $("#nav3").css("background", "#318492");
        $("#nav4").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $(".easy_plan").bind("click", function () {
        select=4;
        $(".now_adds_area p1").html("您当前的位置：健康计划");
        $(".sign_area p").html("健康计划");
        $("#nav1").css("background", "#318492");
        $("#nav4").css("background", "#15697D");
        $("#nav2").css("background", "#318492");
        $("#nav3").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $(".easy_act").bind("click", function () {
        select=3;
        $(".now_adds_area p1").html("您当前的位置：活动情况");
        $(".sign_area p").html("活动情况");
        $("#nav1").css("background", "#318492");
        $("#nav3").css("background", "#15697D");
        $("#nav2").css("background", "#318492");
        $("#nav4").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    }); 
});