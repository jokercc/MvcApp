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
    //abcdefg
    //function insert_photo(){
        //$("#act_photo").attr("src","/images/avatar.jpg");
    //}
    //abcdefg end
    // 运用ajax方法像服务器请求数据
    var user = $("#get_username").val();
    var userId;
    var portrait_url;
    var myDate = new Date();
    var myyear = myDate.getFullYear(); 
    var mymonth = (myDate.getMonth()+1);
    var myday = myDate.getDate();
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
    //abcdefg
    $('#datetimepicker1').datetimepicker({
	    yearOffset:0,
	    lang:'ch',
	    timepicker:true,
	    format:'d/m/Y',
	    formatDate:'d/m/Y',
        });
    $('#datetimepicker2').datetimepicker({
	    yearOffset:0,
	    lang:'ch',
	    timepicker:true,
	    format:'d/m/Y',
	    formatDate:'d/m/Y',
        });
    $('#datetimepicker3').datetimepicker({
	    yearOffset:0,
	    lang:'ch',
	    timepicker:true,
	    format:'d/m/Y',
	    formatDate:'d/m/Y',
        });
    //abcdefg end
    $(window).load(function () {
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
                portrait_url = data.face100;
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
                $("#big_portrait").attr("src",portrait_url);
                $("#small_portrait").attr("src",portrait_url);
	        },
	               
	    });
       
    });
     //头像上传部分jquery开始
$(window).load(function () {
    var options =
	{
	    thumbBox: '.thumbBox',
	    spinner: '.spinner',
	    imgSrc: '../images/avatar.jpg'
	}
    var cropper = $('.imageBox').cropbox(options);
    $('#upload-file').on('change', function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            options.imgSrc = e.target.result;
            cropper = $('.imageBox').cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = [];
    })
    $('#btnCrop').on('click', function () {
        var img = cropper.getDataURL();
        $('.cropped').html('');
        $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:64px;margin-top:4px;border-radius:64px;box-shadow:0px 0px 12px #7E7E7E;" ><p>64px*64px</p>');
        $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:110px;margin-top:4px;border-radius:110px;box-shadow:0px 0px 12px #7E7E7E;"><p>110px*110px</p>');
        $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:128px;margin-top:4px;border-radius:128px;box-shadow:0px 0px 12px #7E7E7E;"><p>128px*128px</p>');
    })
    $('#btnZoomIn').on('click', function () {
        cropper.zoomIn();
    })
    $('#btnZoomOut').on('click', function () {
        cropper.zoomOut();
    })
    $('#sure_upload_btn').on('click', function () {
         if ($("#upload-file").val().length > 0) {
                    ajaxFileUpload();
                }
         else {
                    alert("请选择图片");
                }
    })
    function ajaxFileUpload() {
            $.ajaxFileUpload
            (
                {
                    url: '/Avatar/uploadBasicInfoFace', //用于文件上传的服务器端请求地址
                    data: { "userId": userId },
                    secureuri: false, //一般设置为false
                    fileElementId: 'upload-file', //文件上传空间的id属性  <input type="file" id="upload-file" name="file" />
                    dataType: 'HTML', //返回值类型 一般设置为json
                    success: function (data, status)  //服务器成功响应处理函数
                    {
                        alert(data);
                        $("#big_portrait").attr("src",portrait_url);
                        $("#small_portrait").attr("src",portrait_url);
                        if (typeof (data.error) != 'undefined') {
                            if (data.error != '') {
                                alert(data.error);
                            } else {
                                alert(data.msg);
                            }
                        }
                    },
                    error: function (data, status, e)//服务器响应失败处理函数
                    {
                        alert(e);
                    }
                }
            )
            return false;
        }

});
    (function (factory) {
        if (typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
        } else {
            factory(jQuery);
        }
    }(function ($) {
        var cropbox = function(options, el){
            var el = el || $(options.imageBox),
                obj =
                {
                    state : {},
                    ratio : 1,
                    options : options,
                    imageBox : el,
                    thumbBox : el.find(options.thumbBox),
                    spinner : el.find(options.spinner),
                    image : new Image(),
                    getDataURL: function ()
                    {
                        var width = this.thumbBox.width(),
                            height = this.thumbBox.height(),
                            canvas = document.createElement("canvas"),
                            dim = el.css('background-position').split(' '),
                            size = el.css('background-size').split(' '),
                            dx = parseInt(dim[0]) - el.width()/2 + width/2,
                            dy = parseInt(dim[1]) - el.height()/2 + height/2,
                            dw = parseInt(size[0]),
                            dh = parseInt(size[1]),
                            sh = parseInt(this.image.height),
                            sw = parseInt(this.image.width);

                        canvas.width = width;
                        canvas.height = height;
                        var context = canvas.getContext("2d");
                        context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
                        var imageData = canvas.toDataURL('image/png');
                        return imageData;
                    },
                    getBlob: function()
                    {
                        var imageData = this.getDataURL();
                        var b64 = imageData.replace('data:image/png;base64,','');
                        var binary = atob(b64);
                        var array = [];
                        for (var i = 0; i < binary.length; i++) {
                            array.push(binary.charCodeAt(i));
                        }
                        return  new Blob([new Uint8Array(array)], {type: 'image/png'});
                    },
                    zoomIn: function ()
                    {
                        this.ratio*=1.1;
                        setBackground();
                    },
                    zoomOut: function ()
                    {
                        this.ratio*=0.9;
                        setBackground();
                    }
                },
                setBackground = function()
                {
                    var w =  parseInt(obj.image.width)*obj.ratio;
                    var h =  parseInt(obj.image.height)*obj.ratio;

                    var pw = (el.width() - w) / 2;
                    var ph = (el.height() - h) / 2;

                    el.css({
                        'background-image': 'url(' + obj.image.src + ')',
                        'background-size': w +'px ' + h + 'px',
                        'background-position': pw + 'px ' + ph + 'px',
                        'background-repeat': 'no-repeat'});
                },
                imgMouseDown = function(e)
                {
                    e.stopImmediatePropagation();

                    obj.state.dragable = true;
                    obj.state.mouseX = e.clientX;
                    obj.state.mouseY = e.clientY;
                },
                imgMouseMove = function(e)
                {
                    e.stopImmediatePropagation();

                    if (obj.state.dragable)
                    {
                        var x = e.clientX - obj.state.mouseX;
                        var y = e.clientY - obj.state.mouseY;

                        var bg = el.css('background-position').split(' ');

                        var bgX = x + parseInt(bg[0]);
                        var bgY = y + parseInt(bg[1]);

                        el.css('background-position', bgX +'px ' + bgY + 'px');

                        obj.state.mouseX = e.clientX;
                        obj.state.mouseY = e.clientY;
                    }
                },
                imgMouseUp = function(e)
                {
                    e.stopImmediatePropagation();
                    obj.state.dragable = false;
                },
                zoomImage = function(e)
                {
                    e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio*=1.1 : obj.ratio*=0.9;
                    setBackground();
                }

            obj.spinner.show();
            obj.image.onload = function() {
                obj.spinner.hide();
                setBackground();

                el.bind('mousedown', imgMouseDown);
                el.bind('mousemove', imgMouseMove);
                $(window).bind('mouseup', imgMouseUp);
                el.bind('mousewheel DOMMouseScroll', zoomImage);
            };
            obj.image.src = options.imgSrc;
            el.on('remove', function(){$(window).unbind('mouseup', imgMouseUp)});

            return obj;
        };

        jQuery.fn.cropbox = function(options){
            return new cropbox(options, this);
        };
    }));


     $('.btn').click(function(){
		$('.theme-popover-mask').show();
		$('.theme-popover-mask').height($(document).height());
		$('.theme-popover').slideDown(200);
	});   
    $('.theme-poptit .close').click(function(){
		$('.theme-popover-mask').hide();
		$('.theme-popover').slideUp(200);
	})
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
        $("#blood_premon_btns input").hide("fast");
        $("#blood_premon_btn input").show("fast");
     	$("#blood_nextmon_btnb input").hide("fast");
     	$("#blood_nextmon_btn input").show("fast");
        $("#boom_premon_btns input").hide("fast");
        $("#boom_premon_btn input").show("fast");
     	$("#boom_nextmon_btnb input").hide("fast");
     	$("#boom_nextmon_btn input").show("fast");
        $("#suger_premonth_btns input").hide("fast");
        $("#suger_premonth_btn input").show("fast");
     	$("#suger_nextmon_btn input").show("fast");
     	$("#suger_nextmon_btnb input").hide("fast");
        $("#tem_premon_btns input").hide("fast");
        $("#tem_premon_btn input").show("fast");
     	$("#tem_nextmon_btn input").show("fast");
     	$("#tem_nextmon_btnb input").hide("fast");
        //事先已经获得了当前的日期！
        premonth = mymonth;
        boommonth = mymonth;
        sugermonth = mymonth;
        temmonth = mymonth;
        preyear = myyear;
        boomyear = myyear;
        sugeryear = myyear;
        temyear = myyear;
        tbody1 = $("#blood_pre_data").find("table");
        tbody2 = $("#boom_data_bg").find("table");
        tbody3 = $("#suger_data_bg").find("table");
        tbody4 = $("#tem_data_bg").find("table");
        tbody1.empty();
        tbody2.empty();
        tbody3.empty();
        tbody4.empty();
        $.ajax(
	    {
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
    $("#blood_premon_btn, #blood_premon_btns").bind("click",function(){
                premonth--;
                if(premonth==0){
                    premonth=12;
                    preyear--;
                }
                alert(preyear+"-"+premonth);
                var tbody1 = $("#blood_pre_data").find("table");
                tbody1.empty();
                $.ajax(
	                {
                        url: "/BasicInfo/getHealthIndicatorByDate",
	                    //url:"/BasicInfo/testGetHealthIndicator",
            
                        data:{
				            "myYear": preyear,
                            "myMonth" : premonth,
                            "id" : userId
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
                                        $("#blood_pre_data").append(tr1);
                                        }else{
                                            var tr1 = '<table class="table_style3"><tr><td class="pre_bgwhite_left">' +date+ '</td><td class="pre_bgwhite_mid">' + data[i].SystolicPressure + '</td><td class="pre_bgwhite_right">' + data[i].DiastolicPressure + '</td></tr></table>';
                                            $("#blood_pre_data").append(tr1);
                                        }
                            }
                            var forward = i;
                            for (forward; forward < 31; forward++) {
                                    if(forward%2==0){
                                        var tr1 = '<table class="table_style3"><tr><td class="pre_bggrey_left">' +"&nbsp;"+ '</td><td class="pre_bggrey_mid">' + "&nbsp;"+ '</td><td class="pre_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                        $("#blood_pre_data").append(tr1);
                                        }else{
                                            var tr1 = '<table class="table_style3"><tr><td class="pre_bgwhite_left">' +"&nbsp;"+ '</td><td class="pre_bgwhite_mid">' + "&nbsp;" + '</td><td class="pre_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                            $("#blood_pre_data").append(tr1);
                                        }
                            }
	                    },
	               
	                });
            });
            $("#boom_premon_btn, #boom_premon_btns").bind("click",function(){
                boommonth--;
                if(boommonth==0){
                    boommonth=12;
                    boomyear--;
                }
                alert(boomyear+"-"+boommonth);
                var tbody2 = $("#boom_data_bg").find("table");
                tbody2.empty();
                $.ajax(
	                {
                        url: "/BasicInfo/getHealthIndicatorByDate",
	                    //url:"/BasicInfo/testGetHealthIndicator",
            
                        data:{
				            "myYear": preyear,
                            "myMonth" : premonth,
                            "id" : userId
	                        },
	                    type: "GET",
	                    dataType: "json",
	                    contentType: "application/json",
	                    success: function (data) 
	                    {   
                            for (var i = 0; i < data.length; i++) {
                                    var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                                    if(i%2==0){
                                        var tr2 = '<table class="table_style4"><tr><td class="boom_bggrey_left">' +date+  '</td><td class="boom_bggrey_right">' + data[i].HeartBeat + '</td></tr></table>';
                                        $("#boom_data_bg").append(tr2);
                                        }else{
                                            var tr2 = '<table class="table_style4"><tr><td class="boom_bgwhite_left">' +date+  '</td><td class="boom_bgwhite_right">' + data[i].HeartBeat + '</td></tr></table>';
                                            $("#boom_data_bg").append(tr2);
                                        }
                            }
                            var forward = i;
                            for (forward; forward < 31; forward++) {
                                    if(forward%2==0){
                                        var tr2 = '<table class="table_style4"><tr><td class="boom_bggrey_left">' +"&nbsp;"+  '</td><td class="boom_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                        $("#boom_data_bg").append(tr2);
                                        }else{
                                            var tr2 = '<table class="table_style4"><tr><td class="boom_bgwhite_left">' +"&nbsp;"+  '</td><td class="boom_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                            $("#boom_data_bg").append(tr2);
                                        }
                            }
	                    },
	               
	                });
            });
            
            $("#suger_premonth_btn, #suger_premonth_btns").bind("click",function(){
                sugermonth--;
                if(sugermonth==0){
                    sugermonth=12;
                    sugeryear--;
                }
                alert(sugeryear+"-"+sugermonth);
                var tbody3 = $("#suger_data_bg").find("table");
                tbody3.empty();
                $.ajax(
	                {
                        url: "/BasicInfo/getHealthIndicatorByDate",
	                    //url:"/BasicInfo/testGetHealthIndicator",
            
                        data:{
				            "myYear": preyear,
                            "myMonth" : premonth,
                            "id" : userId
	                        },
	                    type: "GET",
	                    dataType: "json",
	                    contentType: "application/json",
	                    success: function (data) 
	                    {   
                            for (var i = 0; i < data.length; i++) {
                                    var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                                    if(i%2==0){
                                        var tr3 = '<table class="table_style5"><tr><td class="suger_bggrey_left">' +date+  '</td><td class="suger_bggrey_right">' + data[i].BloodGlucose + '</td></tr></table>';
                                        $("#suger_data_bg").append(tr3);
                                        }else{
                                            var tr3 = '<table class="table_style5"><tr><td class="suger_bgwhite_left">' +date+  '</td><td class="suger_bgwhite_right">' + data[i].BloodGlucose + '</td></tr></table>';
                                            $("#suger_data_bg").append(tr3);
                                        }
                            }
                            var forward = i;
                            for (forward; forward < 31; forward++) {
                                    if(forward%2==0){
                                        var tr3 = '<table class="table_style5"><tr><td class="suger_bggrey_left">' +"&nbsp;"+  '</td><td class="suger_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                        $("#suger_data_bg").append(tr3);
                                        }else{
                                            var tr3 = '<table class="table_style5"><tr><td class="suger_bgwhite_left">' +"&nbsp;"+  '</td><td class="suger_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                            $("#suger_data_bg").append(tr3);
                                        }
                            }
	                    },
	               
	                });
            });        
    $("#suger_nextmon_btn, #suger_nextmon_btnb").bind("click",function(){
                sugermonth++;
                if(sugeryear==myyear&&sugermonth>mymonth){
                    alert("已经是最新的记录！！！");
                    sugermonth--;
                    alert(sugeryear+"-"+sugermonth);
                }
                else{
                    if(sugermonth==13){
                        sugermonth=1;
                        sugeryear++;
                        alert(sugeryear+"-"+sugermonth);
                        var tbody3 = $("#suger_data_bg").find("table");
                tbody3.empty();
                $.ajax(
	                {
                        url: "/BasicInfo/getHealthIndicatorByDate",
	                    //url:"/BasicInfo/testGetHealthIndicator",
            
                        data:{
				            "myYear": preyear,
                            "myMonth" : premonth,
                            "id" : userId
	                        },
	                    type: "GET",
	                    dataType: "json",
	                    contentType: "application/json",
	                    success: function (data) 
	                    {   
                            for (var i = 0; i < data.length; i++) {
                                    var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                                    if(i%2==0){
                                        var tr3 = '<table class="table_style5"><tr><td class="suger_bggrey_left">' +date+  '</td><td class="suger_bggrey_right">' + data[i].BloodGlucose + '</td></tr></table>';
                                        $("#suger_data_bg").append(tr3);
                                        }else{
                                            var tr3 = '<table class="table_style5"><tr><td class="suger_bgwhite_left">' +date+  '</td><td class="suger_bgwhite_right">' + data[i].BloodGlucose + '</td></tr></table>';
                                            $("#suger_data_bg").append(tr3);
                                        }
                            }
                            var forward = i;
                            for (forward; forward < 31; forward++) {
                                    if(forward%2==0){
                                        var tr3 = '<table class="table_style5"><tr><td class="suger_bggrey_left">' +"&nbsp;"+  '</td><td class="suger_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                        $("#suger_data_bg").append(tr3);
                                        }else{
                                            var tr3 = '<table class="table_style5"><tr><td class="suger_bgwhite_left">' +"&nbsp;"+  '</td><td class="suger_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                            $("#suger_data_bg").append(tr3);
                                        }
                            }
	                    },
	               
	                });
                    }
                    else{
                        alert(sugeryear+"-"+sugermonth);
                        var tbody3 = $("#suger_data_bg").find("table");
                tbody3.empty();
                $.ajax(
	                {
                        url: "/BasicInfo/getHealthIndicatorByDate",
	                    //url:"/BasicInfo/testGetHealthIndicator",
            
                        data:{
				            "myYear": preyear,
                            "myMonth" : premonth,
                            "id" : userId
	                        },
	                    type: "GET",
	                    dataType: "json",
	                    contentType: "application/json",
	                    success: function (data) 
	                    {   
                            for (var i = 0; i < data.length; i++) {
                                    var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                                    if(i%2==0){
                                        var tr3 = '<table class="table_style5"><tr><td class="suger_bggrey_left">' +date+  '</td><td class="suger_bggrey_right">' + data[i].BloodGlucose + '</td></tr></table>';
                                        $("#suger_data_bg").append(tr3);
                                        }else{
                                            var tr3 = '<table class="table_style5"><tr><td class="suger_bgwhite_left">' +date+  '</td><td class="suger_bgwhite_right">' + data[i].BloodGlucose + '</td></tr></table>';
                                            $("#suger_data_bg").append(tr3);
                                        }
                            }
                            var forward = i;
                            for (forward; forward < 31; forward++) {
                                    if(forward%2==0){
                                        var tr3 = '<table class="table_style5"><tr><td class="suger_bggrey_left">' +"&nbsp;"+  '</td><td class="suger_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                        $("#suger_data_bg").append(tr3);
                                        }else{
                                            var tr3 = '<table class="table_style5"><tr><td class="suger_bgwhite_left">' +"&nbsp;"+  '</td><td class="suger_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                            $("#suger_data_bg").append(tr3);
                                        }
                            }
	                    },
	               
	                });
                    }
                }
            });
            $("#tem_premon_btn, #tem_premon_btns").bind("click",function(){
                temmonth--;
                if(temmonth==0){
                    temmonth=12;
                    temyear--;
                }
                alert(temyear+"-"+temmonth);
                var tbody4 = $("#tem_data_bg").find("table");
                tbody4.empty();
                $.ajax(
	                {
                        url: "/BasicInfo/getHealthIndicatorByDate",
	                    //url:"/BasicInfo/testGetHealthIndicator",
            
                        data:{
				            "myYear": preyear,
                            "myMonth" : premonth,
                            "id" : userId
	                        },
	                    type: "GET",
	                    dataType: "json",
	                    contentType: "application/json",
	                    success: function (data) 
	                    {   
                            for (var i = 0; i < data.length; i++) {
                                    var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                                    if(i%2==0){
                                        var tr4 = '<table class="table_style6"><tr><td class="tem_bggrey_left">' +date+  '</td><td class="tem_bggrey_right">' + data[i].Calorie + '</td></tr></table>';
                                        $("#tem_data_bg").append(tr4);
                                        }else{
                                            var tr4 = '<table class="table_style6"><tr><td class="tem_bgwhite_left">' +date+  '</td><td class="tem_bgwhite_right">' + data[i].Calorie + '</td></tr></table>';
                                            $("#tem_data_bg").append(tr4);
                                        }
                            }
                            var forward = i;
                            for (forward; forward < 31; forward++) {
                                    if(forward%2==0){
                                        var tr4 = '<table class="table_style5"><tr><td class="tem_bggrey_left">' +"&nbsp;"+  '</td><td class="tem_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                        $("#tem_data_bg").append(tr4);
                                        }else{
                                            var tr4 = '<table class="table_style5"><tr><td class="tem_bgwhite_left">' +"&nbsp;"+  '</td><td class="tem_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                            $("#tem_data_bg").append(tr4);
                                        }
                            }
	                    },
	               
	                });
            });
            $("#tem_nextmon_btn, #tem_nextmon_btnb").bind("click",function(){
                temmonth++;
                if(temyear==myyear&&temmonth>mymonth){
                    alert("已经是最新的记录！！！");
                    temmonth--;
                    alert(temyear+"-"+temmonth);
                }
                else{
                    if(temmonth==13){
                        temmonth=1;
                        temyear++;
                        alert(temyear+"-"+temmonth);
                        var tbody4 = $("#tem_data_bg").find("table");
                tbody4.empty();
                $.ajax(
	                {
                        url: "/BasicInfo/getHealthIndicatorByDate",
	                    //url:"/BasicInfo/testGetHealthIndicator",
            
                        data:{
				            "myYear": preyear,
                            "myMonth" : premonth,
                            "id" : userId
	                        },
	                    type: "GET",
	                    dataType: "json",
	                    contentType: "application/json",
	                    success: function (data) 
	                    {   
                            for (var i = 0; i < data.length; i++) {
                                    var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                                    if(i%2==0){
                                        var tr4 = '<table class="table_style6"><tr><td class="tem_bggrey_left">' +date+  '</td><td class="tem_bggrey_right">' + data[i].Calorie + '</td></tr></table>';
                                        $("#tem_data_bg").append(tr4);
                                        }else{
                                            var tr4 = '<table class="table_style6"><tr><td class="tem_bgwhite_left">' +date+  '</td><td class="tem_bgwhite_right">' + data[i].Calorie + '</td></tr></table>';
                                            $("#tem_data_bg").append(tr4);
                                        }
                            }
                            var forward = i;
                            for (forward; forward < 31; forward++) {
                                    if(forward%2==0){
                                        var tr4 = '<table class="table_style5"><tr><td class="tem_bggrey_left">' +"&nbsp;"+  '</td><td class="tem_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                        $("#tem_data_bg").append(tr4);
                                        }else{
                                            var tr4 = '<table class="table_style5"><tr><td class="tem_bgwhite_left">' +"&nbsp;"+  '</td><td class="tem_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                            $("#tem_data_bg").append(tr4);
                                        }
                            }
	                    },
	               
	                });
                    }
                    else{
                        alert(temyear+"-"+temmonth);
                        var tbody4 = $("#tem_data_bg").find("table");
                tbody4.empty();
                $.ajax(
	                {
                        url: "/BasicInfo/getHealthIndicatorByDate",
	                    //url:"/BasicInfo/testGetHealthIndicator",
            
                        data:{
				            "myYear": preyear,
                            "myMonth" : premonth,
                            "id" : userId
	                        },
	                    type: "GET",
	                    dataType: "json",
	                    contentType: "application/json",
	                    success: function (data) 
	                    {   
                            for (var i = 0; i < data.length; i++) {
                                    var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                                    if(i%2==0){
                                        var tr4 = '<table class="table_style6"><tr><td class="tem_bggrey_left">' +date+  '</td><td class="tem_bggrey_right">' + data[i].Calorie + '</td></tr></table>';
                                        $("#tem_data_bg").append(tr4);
                                        }else{
                                            var tr4 = '<table class="table_style6"><tr><td class="tem_bgwhite_left">' +date+  '</td><td class="tem_bgwhite_right">' + data[i].Calorie + '</td></tr></table>';
                                            $("#tem_data_bg").append(tr4);
                                        }
                            }
                            var forward = i;
                            for (forward; forward < 31; forward++) {
                                    if(forward%2==0){
                                        var tr4 = '<table class="table_style5"><tr><td class="tem_bggrey_left">' +"&nbsp;"+  '</td><td class="tem_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                        $("#tem_data_bg").append(tr4);
                                        }else{
                                            var tr4 = '<table class="table_style5"><tr><td class="tem_bgwhite_left">' +"&nbsp;"+  '</td><td class="tem_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                            $("#tem_data_bg").append(tr4);
                                        }
                            }
	                    },
	               
	                });
                    }
                }
            });
            $("#blood_nextmon_btn, #blood_nextmon_btnb").bind("click",function(){
                premonth++;
                if(preyear==myyear&&premonth>mymonth){
                    premonth--;
                    alert("已经是最新的记录！！！");
                    alert(preyear+"-"+premonth);
                }
                else{
                    if(premonth==13){
                        premonth=1;
                        preyear++;
                        alert(preyear+"-"+premonth);
                        var tbody1 = $("#blood_pre_data").find("table");
                        tbody1.empty();
                        $.ajax(
	                        {
                                url: "/BasicInfo/getHealthIndicatorByDate",
	                            //url:"/BasicInfo/testGetHealthIndicator",
            
                                data:{
				                    "myYear": preyear,
                                    "myMonth" : premonth,
                                    "id" : userId
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
                                                $("#blood_pre_data").append(tr1);
                                                }else{
                                                    var tr1 = '<table class="table_style3"><tr><td class="pre_bgwhite_left">' +date+ '</td><td class="pre_bgwhite_mid">' + data[i].SystolicPressure + '</td><td class="pre_bgwhite_right">' + data[i].DiastolicPressure + '</td></tr></table>';
                                                    $("#blood_pre_data").append(tr1);
                                                }
                                    }
                                    var forward = i;
                                    for (forward; forward < 31; forward++) {
                                            if(forward%2==0){
                                                var tr1 = '<table class="table_style3"><tr><td class="pre_bggrey_left">' +"&nbsp;"+ '</td><td class="pre_bggrey_mid">' + "&nbsp;"+ '</td><td class="pre_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                                $("#blood_pre_data").append(tr1);
                                                }else{
                                                    var tr1 = '<table class="table_style3"><tr><td class="pre_bgwhite_left">' +"&nbsp;"+ '</td><td class="pre_bgwhite_mid">' + "&nbsp;" + '</td><td class="pre_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                                    $("#blood_pre_data").append(tr1);
                                                }
                                    }
	                            },
	               
	                    });
                    }
                    else{
                        alert(preyear+"-"+premonth);
                        var tbody1 = $("#blood_pre_data").find("table");
                        tbody1.empty();
                        $.ajax(
	                        {
                                url: "/BasicInfo/getHealthIndicatorByDate",
	                            //url:"/BasicInfo/testGetHealthIndicator",
            
                                data:{
				                    "myYear": preyear,
                                    "myMonth" : premonth,
                                    "id" : userId
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
                                                $("#blood_pre_data").append(tr1);
                                                }else{
                                                    var tr1 = '<table class="table_style3"><tr><td class="pre_bgwhite_left">' +date+ '</td><td class="pre_bgwhite_mid">' + data[i].SystolicPressure + '</td><td class="pre_bgwhite_right">' + data[i].DiastolicPressure + '</td></tr></table>';
                                                    $("#blood_pre_data").append(tr1);
                                                }
                                    }
                                    var forward = i;
                                    for (forward; forward < 31; forward++) {
                                            if(forward%2==0){
                                                var tr1 = '<table class="table_style3"><tr><td class="pre_bggrey_left">' +"&nbsp;"+ '</td><td class="pre_bggrey_mid">' + "&nbsp;"+ '</td><td class="pre_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                                $("#blood_pre_data").append(tr1);
                                                }else{
                                                    var tr1 = '<table class="table_style3"><tr><td class="pre_bgwhite_left">' +"&nbsp;"+ '</td><td class="pre_bgwhite_mid">' + "&nbsp;" + '</td><td class="pre_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                                    $("#blood_pre_data").append(tr1);
                                                }
                                    }
	                            },
	               
	                    });
                    }
                }
            });
            $("#boom_nextmon_btn, #boom_nextmon_btnb").bind("click",function(){
                boommonth++;
                if(boomyear==myyear&&boommonth>mymonth){
                    alert("已经是最新的记录！！！");
                    boommonth--;
                    alert(boomyear+"-"+boommonth);
                }
                else{
                    if(boommonth==13){
                        boommonth=1;
                        boomyear++;
                        alert(boomyear+"-"+boommonth);
                        var tbody2 = $("#boom_data_bg").find("table");
                        tbody2.empty();
                        $.ajax(
	                        {
                                url: "/BasicInfo/getHealthIndicatorByDate",
	                            //url:"/BasicInfo/testGetHealthIndicator",
            
                                data:{
				                    "myYear": preyear,
                                    "myMonth" : premonth,
                                    "id" : userId
	                                },
	                            type: "GET",
	                            dataType: "json",
	                            contentType: "application/json",
	                            success: function (data) 
	                            {   
                                    for (var i = 0; i < data.length; i++) {
                                            var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                                            if(i%2==0){
                                                var tr2 = '<table class="table_style4"><tr><td class="boom_bggrey_left">' +date+  '</td><td class="boom_bggrey_right">' + data[i].HeartBeat + '</td></tr></table>';
                                                $("#boom_data_bg").append(tr2);
                                                }else{
                                                    var tr2 = '<table class="table_style4"><tr><td class="boom_bgwhite_left">' +date+  '</td><td class="boom_bgwhite_right">' + data[i].HeartBeat + '</td></tr></table>';
                                                    $("#boom_data_bg").append(tr2);
                                                }
                                    }
                                    var forward = i;
                                    for (forward; forward < 31; forward++) {
                                            if(forward%2==0){
                                                var tr2 = '<table class="table_style4"><tr><td class="boom_bggrey_left">' +"&nbsp;"+  '</td><td class="boom_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                                $("#boom_data_bg").append(tr2);
                                                }else{
                                                    var tr2 = '<table class="table_style4"><tr><td class="boom_bgwhite_left">' +"&nbsp;"+  '</td><td class="boom_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                                    $("#boom_data_bg").append(tr2);
                                                }
                                    }
	                            },
	               
	               
	                    });
                    }
                    else{
                        alert(boomyear+"-"+boommonth);
                        var tbody2 = $("#boom_data_bg").find("table");
                        tbody2.empty();
                        $.ajax(
	                        {
                                url: "/BasicInfo/getHealthIndicatorByDate",
	                            //url:"/BasicInfo/testGetHealthIndicator",
            
                                data:{
				                    "myYear": preyear,
                                    "myMonth" : premonth,
                                    "id" : userId
	                                },
	                            type: "GET",
	                            dataType: "json",
	                            contentType: "application/json",
	                            success: function (data) 
	                            {   
                                    for (var i = 0; i < data.length; i++) {
                                            var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                                            if(i%2==0){
                                                var tr2 = '<table class="table_style4"><tr><td class="boom_bggrey_left">' +date+  '</td><td class="boom_bggrey_right">' + data[i].HeartBeat + '</td></tr></table>';
                                                $("#boom_data_bg").append(tr2);
                                                }else{
                                                    var tr2 = '<table class="table_style4"><tr><td class="boom_bgwhite_left">' +date+  '</td><td class="boom_bgwhite_right">' + data[i].HeartBeat + '</td></tr></table>';
                                                    $("#boom_data_bg").append(tr2);
                                                }
                                    }
                                    var forward = i;
                                    for (forward; forward < 31; forward++) {
                                            if(forward%2==0){
                                                var tr2 = '<table class="table_style4"><tr><td class="boom_bggrey_left">' +"&nbsp;"+  '</td><td class="boom_bggrey_right">' + "&nbsp;" + '</td></tr></table>';
                                                $("#boom_data_bg").append(tr2);
                                                }else{
                                                    var tr2 = '<table class="table_style4"><tr><td class="boom_bgwhite_left">' +"&nbsp;"+  '</td><td class="boom_bgwhite_right">' + "&nbsp;" + '</td></tr></table>';
                                                    $("#boom_data_bg").append(tr2);
                                                }
                                    }
	                            },
	               
	                        });
                        }
                    }
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
        
        line_month = mymonth;
        line_year = myyear;
        $("#select_line_h").html(line_year+"-"+line_month);
        date_array.length = 0; 
        downpre_array.length = 0;
        uppre_array.length = 0;
        boom_array.length = 0;
        suger_array.length = 0;
        tem_array.length = 0;
        $.ajax(
	    {
	    	//url: "/BasicInfo/testGetHealthIndicator",
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
                         var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                         date_array.push(date);
                         downpre_array.push(data[i].SystolicPressure);   
                         uppre_array.push(data[i].DiastolicPressure); 
                         boom_array.push(data[i].HeartBeat); 
                         suger_array.push(data[i].BloodGlucose);  
                         tem_array.push(data[i].Calorie);               
                     }
                     $('#container').highcharts({
                        title: {
                            text:""
                        },
                        subtitle: {
                            text:""
                        },
                        xAxis: {
                            categories:date_array
                        },
                        yAxis: {
                            title: {
                                text: '血压 (mmhg)'
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
                        }, {
                            name: '舒张压',
                            data: uppre_array
                        }]
                    });
                 },
	               
	    });
        
        });
    $(".choose_healpro_btn").bind("click",function(){
            $(".choose_healpro_box").toggle();
        });
    $(".curve_pre_month").bind("click",function(){
            $('#container').empty();
            date_array.length = 0; 
            downpre_array.length = 0;
            uppre_array.length = 0;
            boom_array.length = 0;
            suger_array.length = 0;
            tem_array.length = 0;
            line_month--;
            if(line_month==0){
                line_month=12;
                line_year--;
            }
            $("#select_line_h").html(line_year+"-"+line_month);
            
            $.ajax(
	        {
	    	    //url: "/BasicInfo/testGetHealthIndicator",
                url: "/BasicInfo/getHealthIndicatorByDate",
	            data:{
				    "myYear": line_year,
                    "myMonth" : line_month,
                    "id" : userId
	                },
	            type: "GET",
	            dataType: "json",
	            contentType: "application/json",
	            success: function (data) 
	            {   
                    for (var i = 0; i < data.length; i++) {
                         var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                         date_array.push(date);
                         downpre_array.push(data[i].SystolicPressure);   
                         uppre_array.push(data[i].DiastolicPressure); 
                         boom_array.push(data[i].HeartBeat); 
                         suger_array.push(data[i].BloodGlucose);  
                         tem_array.push(data[i].Calorie);               
                     }
                     $('#container').highcharts({
                        title: {
                            text:""
                        },
                        subtitle: {
                            text:""
                        },
                        xAxis: {
                            categories:date_array
                        },
                        yAxis: {
                            title: {
                                text: '血压 (mmhg)'
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
                        }, {
                            name: '舒张压',
                            data: uppre_array
                        }]
                    });
                  },
        });
        }); 
        $(".curve_next_month").bind("click",function(){
            $('#container').empty();
            date_array.length = 0; 
            downpre_array.length = 0;
            uppre_array.length = 0;
            boom_array.length = 0;
            suger_array.length = 0;
            tem_array.length = 0;
            line_month++;
            if(line_year==myyear&&line_month>mymonth){
                line_month--;
                }
            if(line_month==13){
                 line_month=1;
                 line_year++;
                }
            $("#select_line_h").html(line_year+"-"+line_month);
            $.ajax(
	        {
	    	    //url: "/BasicInfo/testGetHealthIndicator",
	            url: "/BasicInfo/getHealthIndicatorByDate",
                data:{
				    "myYear": line_year,
                    "myMonth" : line_month,
                    "id" : userId
	                },
	            type: "GET",
	            dataType: "json",
	            contentType: "application/json",
	            success: function (data) 
	            {   
                    for (var i = 0; i < data.length; i++) {
                         var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
                         date_array.push(date);
                         downpre_array.push(data[i].SystolicPressure);   
                         uppre_array.push(data[i].DiastolicPressure); 
                         boom_array.push(data[i].HeartBeat); 
                         suger_array.push(data[i].BloodGlucose);  
                         tem_array.push(data[i].Calorie);               
                     }
                     $('#container').highcharts({
                        title: {
                            text:""
                        },
                        subtitle: {
                            text:""
                        },
                        xAxis: {
                            categories:date_array
                        },
                        yAxis: {
                            title: {
                                text: '血压 (mmhg)'
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
                        }, {
                            name: '舒张压',
                            data: uppre_array
                        }]
                    });
                  },
        });
        }); 
        
        $("#select_blood_line").bind("click",function(){
            $(".choose_healpro_box").hide();
            $("#select_p").html("血压");
            $('#container').empty();
            $('#container').highcharts({
                        title: {
                            text:""
                        },
                        subtitle: {
                            text:""
                        },
                        xAxis: {
                            categories:date_array
                        },
                        yAxis: {
                            title: {
                                text: '血压 (mmhg)'
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
                        }, {
                            name: '舒张压',
                            data: uppre_array
                        }]
                    });
        });
        $("#select_boom_line").bind("click",function(){
            $(".choose_healpro_box").hide();
            $("#select_p").html("心跳");
            $('#container').empty();
            $('#container').highcharts({
            title: {
                text:"",
            },
            subtitle: {
                text:"",
            },
            xAxis: {
                categories: date_array
            },
            yAxis: {
                title: {
                    text: '心跳(bpm)'
                },
                min:0,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'bpm'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: '心跳',
                data: boom_array
            }]
        });
        });
        $("#select_suger_line").bind("click",function(){
            $(".choose_healpro_box").hide();
            $("#select_p").html("血糖");
            $('#container').empty();
            $('#container').highcharts({
            title: {
                text:"",
            },
            subtitle: {
                text:"",
            },
            xAxis: {
                categories: date_array
            },
            yAxis: {
                title: {
                    text: '血糖(mmol/L)'
                },
                min:0,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'mmol/L'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: '血糖',
                data: suger_array
            }]
        });
        });
        $("#select_tem_line").bind("click",function(){
            $(".choose_healpro_box").hide();
            $("#select_p").html("体温");
            $('#container').empty();
            $('#container').highcharts({
            title: {
                text:"",
            },
            subtitle: {
                text:"",
            },
            xAxis: {
                categories: date_array
            },
            yAxis: {
                title: {
                    text: '体温(°C)'
                },
                min:0,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: '体温',
                data: tem_array
            }]
        });
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
        //abcdefg
        //var img_src = "/images/avatar.jpg";
        //var test_photo = '<td class="photo_tb_style"><a ><img src="'+img_src+'" /></a></td>';
        //$("#insert_photo").append(test_photo);
        //$("#insert_photo").append(test_photo);
        //$("#insert_photo").append(test_photo);
        //$("#insert_photo").append(test_photo);
        //$("#insert_photo").append(test_photo);
        //abcdefg end
        actmonth = mymonth;
        actyear = myyear;
        date_array.length = 0;
        duration_array.length = 0;
        distance_array.length = 0;
        calorie_array.length = 0;
        $("#select_bars_h").html(actyear+"-"+actmonth);
        $.ajax(
	    {
	    	//url: "/BasicInfo/testGetHealthIndicator",
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
                         var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
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
         //abcdefg
        $.ajax(
	    {
            url: "/BasicInfo/getUserPhotoByUserId",
            
            data:{
                "id" : userId
	            },
	        type: "GET",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (data) 
	        {   
                for (var i = 0; i < data.length; i++) {
                            var img_src = data[i].PhotoPath;
                            var test_photo = '<td class="photo_tb_style"><a ><img src="'+data[i].PhotoPath+'" /></a></td>';
                            $("#insert_photo").append(test_photo);
                }
	        },
	    });
        //abcdefg end
    });
    $(".act_pre_month").bind("click",function(){
            date_array.length = 0;
            duration_array.length = 0;
            distance_array.length = 0;
            calorie_array.length = 0;
            actmonth--;
            if(actmonth==0){
                actmonth=12;
                actyear--;
            }
            $("#select_bars_h").html(actyear+"-"+actmonth);
            $.ajax(
	        {
	    	    //url: "/BasicInfo/testGetHealthIndicator",
                url: "/BasicInfo/getHealthIndicatorByDate",
	            data:{
				    "myYear": actyear,
                    "myMonth" : actmonth,
                    "id" : userId
	                },
	            type: "GET",
	            dataType: "json",
	            contentType: "application/json",
	            success: function (data) 
	            {   
                    for (var i = 0; i < data.length; i++) {
                             var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
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
        });
        $(".act_next_month").bind("click",function(){
            date_array.length = 0;
            duration_array.length = 0;
            distance_array.length = 0;
            calorie_array.length = 0;
            actmonth++;
            if(actyear==myyear&&actmonth>mymonth){
                actmonth--;
                }
            if(actmonth==13){
                 actmonth=1;
                 actyear++;
                }
            $("#select_bars_h").html(actyear+"-"+actmonth);
             $.ajax(
	        {
	    	    //url: "/BasicInfo/testGetHealthIndicator",
                url: "/BasicInfo/getHealthIndicatorByDate",
	            data:{
				    "myYear": actyear,
                    "myMonth" : actmonth,
                    "id" : userId
	                },
	            type: "GET",
	            dataType: "json",
	            contentType: "application/json",
	            success: function (data) 
	            {   
                    for (var i = 0; i < data.length; i++) {
                             var date =  utcToDate(eval('new ' + eval(data[i].Date).source));
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
        //abcdefg
        //var myyear = myDate.getFullYear(); 
        //var mymonth = (myDate.getMonth()+1);
        //var myday = myDate.getDate();
        $("#datetimepicker3").attr("value",""+myday+"/"+mymonth+"/"+myyear+"");
        ajax_date = myday+"/" + mymonth + "/" + myyear;
        $.ajax(
	    {
            //url: "/BasicInfo/testGetLocationByDate",
            url: "/BasicInfo/getLocationByDate",
            data:{
                "id" : userId,
                "Date": ajax_date
	            },
	        type: "GET",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (data) 
	        {   
                var map = new BMap.Map("container_map");          // 创建地图实例
                map.enableScrollWheelZoom(true);
                var point=new Array();
                var polyline=new Array();
                var temple;
                for (var i = 0; i < data.length; i++) {
                            point[i] = new BMap.Point(data[i].Latitude,data[i].Longitude);
                }
                map.centerAndZoom(point[0],12);  //初始化地图,设置城市和地图级别。
                for(var j=0;j<(data.length-1);j++){
                            temple=j;
                            polyline[j] = new BMap.Polyline([point[temple],point[temple+1]], {strokeColor:"red", strokeWeight:3, strokeOpacity:0.8});
                            map.addOverlay(polyline[j]);
               }
	        },
	    });
        //abcdefg end
        });
    //abcdefg
     $(".map_predate").bind("click",function(){
        var map_pretime = $("#datetimepicker3").val();
        var arr=new Array();   
        arr=map_pretime.split('/');//注split可以用字符或字符串分割
        var dd=new Date(arr[2],arr[1]-1,arr[0],"00","00","00");
        dd.setTime(dd.getTime()-24*60*60*1000);
        var s = dd.getDate()+"/" + (dd.getMonth()+1) + "/" + dd.getFullYear();
        $('#datetimepicker3').datetimepicker({
	        yearOffset:0,
	        lang:'ch',
	        timepicker:true,
	        format:'d/m/Y',
	        formatDate:'d/m/Y',
            value:s
        });
        $.ajax(
	        {
                //url: "/BasicInfo/testGetLocationByDate",
                url: "/BasicInfo/getLocationByDate",
                data:{
                    "id" : userId,
                    "Date": s
	                },
	            type: "GET",
	            dataType: "json",
	            contentType: "application/json",
	            success: function (data) 
	            {   
                    var map = new BMap.Map("container_map");          // 创建地图实例
                    map.enableScrollWheelZoom(true);
                    var point=new Array();
                    var polyline=new Array();
                    var temple;
                    for (var i = 0; i < data.length; i++) {
                                point[i] = new BMap.Point(data[i].Latitude,data[i].Longitude);
                    }
                    map.centerAndZoom(point[0],12);  //初始化地图,设置城市和地图级别。
                    for(var j=0;j<(data.length-1);j++){
                                temple=j;
                                polyline[j] = new BMap.Polyline([point[temple],point[temple+1]], {strokeColor:"red", strokeWeight:3, strokeOpacity:0.8});
                                map.addOverlay(polyline[j]);
                   }
	        },
	    });
     });
     $(".map_nextdate").bind("click",function(){
        var map_nexttime = $("#datetimepicker3").val();
        var arr=new Array();   
        arr=map_nexttime.split('/');//注split可以用字符或字符串分割
        var dd=new Date(arr[2],arr[1]-1,arr[0],"00","00","00");
        dd.setTime(dd.getTime()+24*60*60*1000);
        var s = dd.getDate()+"/" + (dd.getMonth()+1) + "/" + dd.getFullYear();
        if(dd.getDate()>myday&&(dd.getMonth()+1)==mymonth&&dd.getFullYear()==myyear)
        {   $('#datetimepicker3').datetimepicker({
	            yearOffset:0,
	            lang:'ch',
	            timepicker:true,
	            format:'d/m/Y',
	            formatDate:'d/m/Y',
                value:""+myday+"/"+mymonth+"/"+myyear+""
            })
            alert("已经是最新的记录了！！！");
            }else{
                $('#datetimepicker3').datetimepicker({
	            yearOffset:0,
	            lang:'ch',
	            timepicker:true,
	            format:'d/m/Y',
	            formatDate:'d/m/Y',
                value:s
            });
            $.ajax(
	        {
                //url: "/BasicInfo/testGetLocationByDate",
                url: "/BasicInfo/getLocationByDate",
                data:{
                    "id" : userId,
                    "Date": s
	                },
	            type: "GET",
	            dataType: "json",
	            contentType: "application/json",
	            success: function (data) 
	            {   
                    var map = new BMap.Map("container_map");          // 创建地图实例
                    map.enableScrollWheelZoom(true);
                    var point=new Array();
                    var polyline=new Array();
                    var temple;
                    for (var i = 0; i < data.length; i++) {
                                point[i] = new BMap.Point(data[i].Latitude,data[i].Longitude);
                    }
                    map.centerAndZoom(point[0],12);  //初始化地图,设置城市和地图级别。
                    for(var j=0;j<(data.length-1);j++){
                                temple=j;
                                polyline[j] = new BMap.Polyline([point[temple],point[temple+1]], {strokeColor:"red", strokeWeight:3, strokeOpacity:0.8});
                                map.addOverlay(polyline[j]);
                   }
	        },
	    });
        }
     });
    //abcdefg end
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
				"userId": userId 
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
                        var tr1 = '<input type="button" class="aidvalue" name="'+i+'" value ="' + date + '"  />';
                        $(".aid_key").append(tr1+"<br>");
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