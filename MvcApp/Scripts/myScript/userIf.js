var userId;
$(function() {
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
    str = "" + myDate.getFullYear() + "年";
    str += (myDate.getMonth() + 1) + "月";
    str += myDate.getDate() + "日     ";
    //str += myh + ":" + myh + ":" + myse;
    str += "     星期";
    str += "天一二三四五六".charAt(myDate.getDay());
    $(".now_adds_area p2").html(str);
    $.ajax({
        url: "/BasicInfo/getUserByUserName",
        data: {
            "userName": user
        },
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        success: function(data) {
            userId = data.ID_User;
            portrait_url = data.face100;
            var name = data.Name;
            var age = data.Age;
            var sex = data.Sex;
            var date = utcToDate(eval('new ' + eval(data.birthday).source));
            var marrige = data.Marrige;
            var telnum = data.TelNum;
            var home_telnum = data.familyTelNum;
            var address = data.Address;
            var children = data.Children;
            var hobby = data.Hobby;;
            var blood_type = data.blood;
            if (sex == true) {
                $(".sex").html("男");
            } else {
                $(".sex").html("女");
            }
            if (marrige == true) {
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
            $("#small_portrait").attr("src", portrait_url);
            //////////////////////////////////////////////////////////////////////////////////
            $.ajax({
                url: "/BasicInfo/getUserPhotoByUserId",
                data: {
                    "userId": userId
                },
                type: "GET",
                dataType: "json",
                contentType: "application/json",
                success: function(data) {
                    for (var i = 0; i < data.length; i++) {
                        var img_src = data[i].PhotoPath;
                        var test_photo = '<img src="' + data[i].PhotoPath + '"width="100%" height="100%" alt="" />';
                        $('#slides').append(test_photo);
                    }
                    //Get the curent slide
                    function currentSlide(current) {
                        $(".current_slide").text(current + " of " + $("#slides").slides("status", "total"));
                    }

                    $(function() {
                        //Initialize SlidesJS
                        $("#slides").slides({
                            width: '100%',
                            height: '100%',
                            navigateEnd: function(current) {
                                currentSlide(current);
                            },
                            loaded: function() {
                                currentSlide(1);
                            }
                        });
                        /////////////////////////////////////////////////////////////////////////////////////
                        $.ajax({
                            url: "/BasicInfo/testGetHealthPlan",
                            data: {
                                "userId": userId
                            },
                            type: "GET",
                            dataType: "json",
                            contentType: "application/json",
                            success: function(data) {
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
                            url: "/BasicInfo/testGetHealthIndicator",
                            data: {
                                "myYear": myyear,
                                "myMonth": mymonth,
                                "id": userId
                            },
                            type: "GET",
                            dataType: "json",
                            contentType: "application/json",
                            success: function(data) {
                                for (var i = 0; i < data.length; i++) {
                                    var date = utcToDate_onlyday(eval('new ' + eval(data[i].Date).source));
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
                                        categories: date_array
                                    },
                                    yAxis: {
                                        title: {
                                            text: '单位'
                                        },
                                        min: 0,
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
                            url: "/BasicInfo/testGetHealthIndicator",
                            data: {
                                "myYear": myyear,
                                "myMonth": mymonth,
                                "id": userId
                            },
                            type: "GET",
                            dataType: "json",
                            contentType: "application/json",
                            success: function(data) {
                                for (var i = 0; i < data.length; i++) {
                                    var date = utcToDate_onlyday(eval('new ' + eval(data[i].Date).source));
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
                                    yAxis: [{
                                        min: 0,
                                        lineWidth: 1,
                                        title: {
                                            text: '卡路里(kcal)'
                                        }
                                    }, {
                                        title: {
                                            text: '时间(min)'
                                        },
                                        lineWidth: 1,
                                        opposite: true
                                    }, {
                                        title: {
                                            text: '距离(m)'
                                        },
                                        lineWidth: 1,
                                        opposite: true
                                    }],
                                    tooltip: {},
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
                                        yAxis: 0
                                    }, {
                                        name: '时间',
                                        data: duration_array,
                                        yAxis: 1
                                    }, {
                                        name: '距离',
                                        data: distance_array,
                                        yAxis: 2
                                    }]
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
$(document).ready(function() {
    $(window).load(function() {
        var options = {
            thumbBox: '.thumbBox',
            spinner: '.spinner',
            imgSrc: '../Content/images/avatar.jpg'
        }
        var cropper = $('.imageBox').cropbox(options);
        $('#upload-file').on('change', function() {
                var reader = new FileReader();
                reader.onload = function(e) {
                    options.imgSrc = e.target.result;
                    cropper = $('.imageBox').cropbox(options);
                }
                reader.readAsDataURL(this.files[0]);
                this.files = [];
            })
            /*$('#btnCrop').on('click', function () {
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
            })*/
        $('#sure_upload_btn').on('click', function() {

            if ($("#upload-file").val().length > 0) {
                ajaxFileUpload();
                $('.theme-popover-mask').hide();
                $('.theme-popover').slideUp(200);
            } else {
                alert("请选择图片");
            }
        });

        function ajaxFileUpload() {
            $.ajaxFileUpload({
                url: '/Avatar/uploadBasicInfoFace', //用于文件上传的服务器端请求地址
                data: {
                    "userId": userId
                },
                secureuri: false, //一般设置为false
                fileElementId: 'upload-file', //文件上传空间的id属性  <input type="file" id="upload-file" name="file" />
                dataType: 'HTML', //返回值类型 一般设置为json
                success: function(data, status) //服务器成功响应处理函数
                    {
                        alert(data);

                        $("#small_portrait").attr("src", portrait_url);
                        if (typeof(data.error) != 'undefined') {
                            if (data.error != '') {
                                alert(data.error);
                            } else {
                                alert(data.msg);
                            }
                        }
                    },
                error: function(data, status, e) //服务器响应失败处理函数
                    {
                        alert(e);
                    }
            })
            return false;
        }

    });
    (function(factory) {
        if (typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
        } else {
            factory(jQuery);
        }
    }(function($) {
        var cropbox = function(options, el) {
            var el = el || $(options.imageBox),
                obj = {
                    state: {},
                    ratio: 1,
                    options: options,
                    imageBox: el,
                    thumbBox: el.find(options.thumbBox),
                    spinner: el.find(options.spinner),
                    image: new Image(),
                    getDataURL: function() {
                        var width = this.thumbBox.width(),
                            height = this.thumbBox.height(),
                            canvas = document.createElement("canvas"),
                            dim = el.css('background-position').split(' '),
                            size = el.css('background-size').split(' '),
                            dx = parseInt(dim[0]) - el.width() / 2 + width / 2,
                            dy = parseInt(dim[1]) - el.height() / 2 + height / 2,
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
                    getBlob: function() {
                        var imageData = this.getDataURL();
                        var b64 = imageData.replace('data:image/png;base64,', '');
                        var binary = atob(b64);
                        var array = [];
                        for (var i = 0; i < binary.length; i++) {
                            array.push(binary.charCodeAt(i));
                        }
                        return new Blob([new Uint8Array(array)], {
                            type: 'image/png'
                        });
                    },
                    zoomIn: function() {
                        this.ratio *= 1.1;
                        setBackground();
                    },
                    zoomOut: function() {
                        this.ratio *= 0.9;
                        setBackground();
                    }
                },
                setBackground = function() {
                    var w = parseInt(obj.image.width) * obj.ratio;
                    var h = parseInt(obj.image.height) * obj.ratio;

                    var pw = (el.width() - w) / 2;
                    var ph = (el.height() - h) / 2;

                    el.css({
                        'background-image': 'url(' + obj.image.src + ')',
                        'background-size': w + 'px ' + h + 'px',
                        'background-position': pw + 'px ' + ph + 'px',
                        'background-repeat': 'no-repeat'
                    });
                },
                imgMouseDown = function(e) {
                    e.stopImmediatePropagation();

                    obj.state.dragable = true;
                    obj.state.mouseX = e.clientX;
                    obj.state.mouseY = e.clientY;
                },
                imgMouseMove = function(e) {
                    e.stopImmediatePropagation();

                    if (obj.state.dragable) {
                        var x = e.clientX - obj.state.mouseX;
                        var y = e.clientY - obj.state.mouseY;

                        var bg = el.css('background-position').split(' ');

                        var bgX = x + parseInt(bg[0]);
                        var bgY = y + parseInt(bg[1]);

                        el.css('background-position', bgX + 'px ' + bgY + 'px');

                        obj.state.mouseX = e.clientX;
                        obj.state.mouseY = e.clientY;
                    }
                },
                imgMouseUp = function(e) {
                    e.stopImmediatePropagation();
                    obj.state.dragable = false;
                },
                zoomImage = function(e) {
                    e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio *= 1.1 : obj.ratio *= 0.9;
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
            el.on('remove', function() {
                $(window).unbind('mouseup', imgMouseUp)
            });

            return obj;
        };

        jQuery.fn.cropbox = function(options) {
            return new cropbox(options, this);
        };
    }));
    $(".user_portrait").mouseover(
        function() {
            $(".portrait_cover").show();
        });
    $(".user_portrait").mouseout(
        function() {
            $(".portrait_cover").hide();
        });
    $('#small_portrait').click(function() {
        $('.theme-popover-mask').show();
        $('.theme-popover-mask').height($(document).height());
        $('.theme-popover').slideDown(200);
    });
    $('.theme-poptit .close').click(function() {
        $('.theme-popover-mask').hide();
        $('.theme-popover').slideUp(200);
    })
    $(".logout_btn").mouseover(
        function() {
            $(".logout_btn").attr("value", "退出X");
        });
    $(".logout_btn").mouseout(
        function() {
            $(".logout_btn").attr("value", "退出");
        });
    $("#nav1").bind("click", function() {
        select = 1;
        $(".now_adds_area p1").html("您当前的位置：概要信息");
        $(".sign_area p").html("概要信息");
        $("#nav2").css("background", "#318492");
        $(this).css("background", "#15697D");
        $("#nav3").css("background", "#318492");
        $("#nav4").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $("#nav2").bind("click", function() {
        select = 2;
        $(".now_adds_area p1").html("您当前的位置：身体指标");
        $(".sign_area p").html("身体指标");
        $("#nav1").css("background", "#318492");
        $(this).css("background", "#15697D");
        $("#nav3").css("background", "#318492");
        $("#nav4").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $("#nav3").bind("click", function() {
        select = 3;
        $(".now_adds_area p1").html("您当前的位置：活动情况");
        $(".sign_area p").html("活动情况");
        $("#nav1").css("background", "#318492");
        $(this).css("background", "#15697D");
        $("#nav2").css("background", "#318492");
        $("#nav4").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $("#nav4").bind("click", function() {
        select = 4;
        $(".now_adds_area p1").html("您当前的位置：健康计划");
        $(".sign_area p").html("健康计划");
        $("#nav1").css("background", "#318492");
        $(this).css("background", "#15697D");
        $("#nav2").css("background", "#318492");
        $("#nav3").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $("#nav5").bind("click", function() {
        select = 5;
        $(".now_adds_area p1").html("您当前的位置：急救信息");
        $(".sign_area p").html("急救信息");
        $("#nav1").css("background", "#318492");
        $(this).css("background", "#15697D");
        $("#nav2").css("background", "#318492");
        $("#nav3").css("background", "#318492");
        $("#nav4").css("background", "#318492");
    });
    $(".easy_body").mouseover(
        function() {
            $(".body_cover").show();
        });
    $(".easy_body").mouseout(
        function() {
            $(".body_cover").hide();
        });
    $(".easy_plan").mouseover(
        function() {
            $(".plan_cover").show();
        });
    $(".easy_plan").mouseout(
        function() {
            $(".plan_cover").hide();
        });
    $(".easy_act").mouseover(
        function() {
            $(".act_cover").show();
        });
    $(".easy_act").mouseout(
        function() {
            $(".act_cover").hide();
        });
    $(".body_cover").bind("click", function() {
        select = 1;
        $(".now_adds_area p1").html("您当前的位置：概要信息");
        $(".sign_area p").html("概要信息");
        $("#nav2").css("background", "#318492");
        $("#nav1").css("background", "#15697D");
        $("#nav3").css("background", "#318492");
        $("#nav4").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $(".easy_plan").bind("click", function() {
        select = 4;
        $(".now_adds_area p1").html("您当前的位置：健康计划");
        $(".sign_area p").html("健康计划");
        $("#nav1").css("background", "#318492");
        $("#nav4").css("background", "#15697D");
        $("#nav2").css("background", "#318492");
        $("#nav3").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
    $(".easy_act").bind("click", function() {
        select = 3;
        $(".now_adds_area p1").html("您当前的位置：活动情况");
        $(".sign_area p").html("活动情况");
        $("#nav1").css("background", "#318492");
        $("#nav3").css("background", "#15697D");
        $("#nav2").css("background", "#318492");
        $("#nav4").css("background", "#318492");
        $("#nav5").css("background", "#318492");
    });
});