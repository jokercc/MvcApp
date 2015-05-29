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
		date = str[2];
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
	var bodyyear;
	var bodymonth;
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
	var line_day;
	var actmonth;
	var actyear;
	var photo_month;
	var photo_year;
	var str;
	$('#datetimepicker1').datetimepicker({
		yearOffset: 0,
		lang: 'ch',
		timepicker: true,
		format: 'd/m/Y',
		formatDate: 'd/m/Y',
	});
	$('#datetimepicker2').datetimepicker({
		yearOffset: 0,
		lang: 'ch',
		timepicker: true,
		format: 'd/m/Y',
		formatDate: 'd/m/Y',
	});
	$('#datetimepicker3').datetimepicker({
		yearOffset: 0,
		lang: 'ch',
		timepicker: true,
		format: 'd/m/Y',
		formatDate: 'd/m/Y',
	});
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
					$(function() {
						//Initialize SlidesJS
						$("#slides").slides({
							width: '100%',
							height: '100%',
						});
						/////////////////////////////////////////////////////////////////////////////////////
						$.ajax({
							url: "/BasicInfo/getHealthPlanByUserId",
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
							url: "/BasicInfo/getHealthIndicatorByDate",
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
							url: "/BasicInfo/getHealthIndicatorByDate",
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


	$(window).load(function() {
		var options = {
			thumbBox: '.thumbBox',
			spinner: '.spinner',
			imgSrc: ''
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
	$(".aid_search_btn").mouseover(
		function() {
			$(".aid_search_btn img").attr("src", "/content/images/aid_search_green.png");
		});
	$(".aid_search_btn").mouseout(
		function() {
			$(".aid_search_btn img").attr("src", "/content/images/aid_search.png");
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
    $(".logout_btn").click(
        function() {
            window.location = "/Home";
        }
    )
	$(".logout_btn").mouseout(
		function() {
			$(".logout_btn").attr("value", "退出");
		});
    $("#more_info").click(
        function() {
            $("#basic_info_table").css('overflow', 'scroll');
            $(this).css('display', 'none');
        }
    )
	bodyyear = myyear;
	bodymonth = mymonth;
	boommonth = mymonth;
	sugermonth = mymonth;
	temmonth = mymonth;
	boomyear = myyear;
	sugeryear = myyear;
	temyear = myyear;
	premonth = mymonth;
	preyear = myyear;
	actmonth = mymonth;
	actyear = myyear;
	line_month = mymonth;
	line_year = myyear;
	line_day = myday;
	photo_month = mymonth;
	photo_year = myyear
	$("#nav1").click(function() {
		$(".now_adds_area p1").html("您当前的位置：概要信息");
		$(".sign_area p").html("概要信息");
		$("#container_change").hide();

		$("#nav2").css("background", "#318492");
		$(this).css("background", "#15697D");
		$("#nav3").css("background", "#318492");
		$("#nav4").css("background", "#318492");
		$("#nav5").css("background", "#318492");
		$("#basic_info_table").css("top", "35%");
		$(".easy_body").css("display", "block");
		$(".easy_photo").css("display", "block");
		$(".easy_plan").css("display", "block");
		$(".easy_act").css("display", "block");
		$(".nav_sign2").css("display", "none");
		$(".choose_month").css("display", "none");
		$(".body_table_area").css("display", "none");
		$(".nav_signII,.nav_sign22,.nav_sign3,.nav_signIII").css("display", "none");
		$(".nav_signIIII").css("display", "none");
		$(".nav_sign").show();
		$(".nav_signI").hide();
		$(".nav_sign2").hide();
		$(".container_box").hide();
		$(".container_photo").hide();
		$(".container_map").hide();
		$(".container_plan").hide();
		$(".container_aid").hide();
	});
	$("#nav2 ,.body_cover").click(function() {
		$(".now_adds_area p1").html("您当前的位置：身体指标>列表显示");
		$(".sign_area p").html("列表显示");
		$("#nav1").css("background", "#318492");
		$(this).css("background", "#15697D");
		$("#nav3").css("background", "#318492");
		$("#nav4").css("background", "#318492");
		$("#nav5").css("background", "#318492");
		$("#basic_info_table").css("top", "40%");
		$(".easy_body").css("display", "none");
		$(".easy_photo").css("display", "none");
		$(".easy_plan").css("display", "none");
		$(".easy_act").css("display", "none");
		$(".nav_sign2").css("display", "block");
		$(".choose_month").css("display", "block");
		$(".body_table_area").css("display", "block");
		$(".nav_signI").css('background', '#1CBDB3');
		$(".nav_signI img").attr('src', '/content/images/table_left.png');
		$(".nav_signI p").css('color', 'white');
		$(".nav_sign2").css('background', 'none');
		$(".nav_sign2 p").css('color', '#1CBDB3');
		$(".nav_sign2 img").attr('src', '/content/images/curve_green.png');
		$(".nav_sign").hide();
		$(".nav_signI").show();
		$(".sel_wrap").hide();
		$(".container_box").hide();
		$(".container_photo").hide();
		$(".container_map").hide();
		$(".container_plan").hide();
		$(".premonth_area_body").show();
		$(".nextmonth_area_body").show();
		$(".premonth_area_pre").hide();
		$(".nextmonth_area_pre").hide();
		$(".premonth_area_tem").hide();
		$(".nextmonth_area_tem").hide();
		$(".premonth_area_suger").hide();
		$(".nextmonth_area_suger").hide();
		$(".premonth_area_boom").hide();
		$(".nextmonth_area_boom").hide();
		$(".container_aid").hide();
		$(".nav_signIIII").css("display", "none");
		$(".nav_signII,.nav_sign22,.nav_sign3,.nav_signIII").css("display", "none");
		tbody = $(".body_table_area").find("tr");
		tbody.empty();
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": preyear,
				"myMonth": premonth,
				"id": userId
			},
			type: "GET",
			dataType: "json",
			contentType: "application/json",
			success: function(data) {
				var th = '<tr><th>日期</th><th>收缩压</th><th>舒张压</th><th>心跳</th><th>血糖</th><th>体温</th></tr>';
				$(".dataintable").append(th);
				for (var i = 0; i < data.length; i++) {
					var date = utcToDate_onlyday(eval('new ' + eval(data[i].Date).source));
					var tr = '<tr><td>' + date + '</td><td>' + data[i].SystolicPressure + '</td><td>' + data[i].DiastolicPressure + '</td><td>' + data[i].HeartBeat + '</td><td>' + data[i].BloodGlucose + '</td><td>' + data[i].Calorie + '</td></tr>';
					$(".dataintable").append(tr);
				}
			},
		});

	});
	$("#nav3").bind("click", function() {
		$(".now_adds_area p1").html("您当前的位置：活动情况>图片信息");
		$(".sign_area p").html("图片信息");
		$(".nav_signII").css('background', '#1CBDB3');
		$(".nav_signII img").attr('src', '/content/images/act_photo.png');
		$(".nav_signII p").css('color', 'white');
		$(".nav_sign22").css('background', 'none');
		$(".nav_sign22 p").css('color', '#1CBDB3');
		$(".nav_sign22 img").attr('src', '/content/images/act_info_green.png');
		$(".nav_sign3").css('background', 'none');
		$(".nav_sign3 p").css('color', '#1CBDB3');
		$(".nav_sign3 img").attr('src', '/content/images/act_map_green.png');
		$("#nav1").css("background", "#318492");
		$(this).css("background", "#15697D");
		$("#nav2").css("background", "#318492");
		$("#nav4").css("background", "#318492");
		$("#nav5").css("background", "#318492");
		$("#basic_info_table").css("top", "45%");
		$(".body_table_area").hide();
		$(".sel_wrap").hide();
		$("#container_change").hide();
		$(".premonth_area_body").hide();
		$(".nextmonth_area_body").hide();
		$(".premonth_area_pre").hide();
		$(".nextmonth_area_pre").hide();
		$(".premonth_area_tem").hide();
		$(".nextmonth_area_tem").hide();
		$(".premonth_area_suger").hide();
		$(".nextmonth_area_suger").hide();
		$(".premonth_area_boom").hide();
		$(".nextmonth_area_boom").hide();
		$(".easy_body").css("display", "none");
		$(".easy_photo").css("display", "none");
		$(".easy_plan").css("display", "none");
		$(".easy_act").css("display", "none");
		$(".nav_sign").css("display", "none");
		$(".nav_signI").css("display", "none");
		$(".nav_sign2").css("display", "none");
		$(".nav_signIII").css("display", "none");
		$(".nav_signIIII").css("display", "none");
		$(".container_box").hide();
		$(".container_photo").show();
		$(".container_map").hide();
		$(".container_plan").hide();
		$(".container_aid").hide();
		$(".choose_month").css("display", "none");
		$(".body_table_area").css("display", "none");
        $(".nav_signII,.nav_sign22,.nav_sign3,.container_photo").css("display", "block");
        $('#photos').empty();
		$.ajax({
				url: "/BasicInfo/getUserPhotoByDate",
				data: {
                    "myYear": photo_year,
				    "myMonth": photo_month,
					"userId": userId
				},
				type: "GET",
				dataType: "json",
				contentType: "application/json",
				success: function(data) {
                    var photo_test2;
                    photo_test2 = '<ul class="filmstrip">';
					for (var i = 0; i < data.length; i++) {
						var test_photo = '<div class="panel"><img src="' + data[i].PhotoPath + '"width="100%" height="100%" alt="" /></div>';
                        photo_test2 += '<li><img src="' + data[i].PhotoPath + '" width="100" height="100" /></li>';
						$('#photos').append(test_photo);
                        
					}
                    photo_test2 += '</ul>'
                    $('#photos').append(photo_test2);
                    $('#photos').galleryView({
		            panel_width:900,
		            panel_height: 400,
		            frame_width: 100,
		            frame_height: 100
	                });
                },
        });
        
	});
	$("#nav4").bind("click", function() {
		$(".now_adds_area p1").html("您当前的位置：健康计划");
		$(".sign_area p").html("健康计划");
		$("#nav1").css("background", "#318492");
		$(this).css("background", "#15697D");
		$("#nav2").css("background", "#318492");
		$("#nav3").css("background", "#318492");
		$("#nav5").css("background", "#318492");
		$("#basic_info_table").css("top", "35%");
		$(".body_table_area").hide();
		$(".sel_wrap").hide();
		$("#container_change").hide();
		$(".premonth_area_body").hide();
		$(".nextmonth_area_body").hide();
		$(".premonth_area_pre").hide();
		$(".nextmonth_area_pre").hide();
		$(".premonth_area_tem").hide();
		$(".nextmonth_area_tem").hide();
		$(".premonth_area_suger").hide();
		$(".nextmonth_area_suger").hide();
		$(".premonth_area_boom").hide();
		$(".nextmonth_area_boom").hide();
		$(".easy_body").css("display", "none");
		$(".easy_photo").css("display", "none");
		$(".easy_plan").css("display", "none");
		$(".easy_act").css("display", "none");
		$(".nav_sign").css("display", "none");
		$(".nav_signI").css("display", "none");
		$(".nav_sign2").css("display", "none");
		$(".nav_signIII").css("display", "block");
		$(".nav_signIIII").css("display", "none");
		$(".container_box").hide();
		$(".container_photo").hide();
		$(".container_map").hide();
		$(".container_plan").show();
		$(".container_aid").hide();
		$(".choose_month").css("display", "none");
		$(".body_table_area").css("display", "none");
		$(".nav_signII,.nav_sign22,.nav_sign3,.container_photo").css("display", "none");
		$.ajax({
			url: "/BasicInfo/getHealthPlanByUserId",
			data: {
				"userId": userId
			},
			type: "GET",
			dataType: "json",
			contentType: "application/json",
			success: function(data) {

				var eat = data[0].Recipes;
				var pe = data[0].Movement;
				var sleep = data[0].Schedule;

				var arr_eat = new Array();
				var arr_sleep = new Array();
				var arr_pe = new Array();

				arr_eat = eat.split(';');
				arr_sleep = sleep.split(';');
				arr_pe = pe.split(';');

				var eat_str;
				var sleep_str;
				var pe_str;

				for (var i = 0; i < arr_eat.length; i++) {
					if (i == 0) {
						eat_str = "" + arr_eat[i] + "<br/>";
					} else {
						eat_str += "" + arr_eat[i] + "<br/>";
					}
				}

				for (var j = 0; j < arr_sleep.length; j++) {
					if (j == 0) {
						sleep_str = "" + arr_sleep[j] + "<br/>";
					} else {
						sleep_str += "" + arr_sleep[j] + "<br/>";
					}
				}

				for (var k = 0; k < arr_pe.length; k++) {
					if (k == 0) {
						pe_str = "" + arr_pe[k] + "<br/>";
					} else {
						pe_str += "" + arr_pe[k] + "<br/>";
					}
				}
				$(".eat_advice p").html(eat_str);
				$(".pe_advice p").html(pe_str);
				$(".sleep_advice p").html(sleep_str);
			},

		});
	});
	$("#nav5").bind("click", function() {
		$(".now_adds_area p1").html("您当前的位置：急救信息");
		$(".sign_area p").html("急救信息");
		$("#nav1").css("background", "#318492");
		$(this).css("background", "#15697D");
		$("#nav2").css("background", "#318492");
		$("#nav3").css("background", "#318492");
		$("#nav4").css("background", "#318492");
		$(".body_table_area").hide();
		$(".sel_wrap").hide();
		$("#container_change").hide();
		$(".premonth_area_body").hide();
		$(".nextmonth_area_body").hide();
		$(".premonth_area_pre").hide();
		$(".nextmonth_area_pre").hide();
		$(".premonth_area_tem").hide();
		$(".nextmonth_area_tem").hide();
		$(".premonth_area_suger").hide();
		$(".nextmonth_area_suger").hide();
		$(".premonth_area_boom").hide();
		$(".nextmonth_area_boom").hide();
		$(".easy_body").css("display", "none");
		$(".easy_photo").css("display", "none");
		$(".easy_plan").css("display", "none");
		$(".easy_act").css("display", "none");
		$(".nav_sign").css("display", "none");
		$(".nav_signI").css("display", "none");
		$(".nav_sign2").css("display", "none");
		$(".nav_signIII").css("display", "none");
		$(".nav_signIIII").css("display", "block");
		$(".container_box").hide();
		$(".container_photo").hide();
		$(".container_map").hide();
		$(".container_plan").hide();
		$(".container_aid").show();
		$(".choose_month").css("display", "none");
		$(".body_table_area").css("display", "none");
		$(".nav_signII,.nav_sign22,.nav_sign3,.container_photo").css("display", "none");

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
		$("#nav2").css("background", "#15697D");
	});
	$(".easy_plan").bind("click", function() {
		$(".now_adds_area p1").html("您当前的位置：健康计划");
		$(".sign_area p").html("健康计划");
		$("#nav1").css("background", "#318492");
		$("#nav4").css("background", "#15697D");
		$("#nav2").css("background", "#318492");
		$("#nav3").css("background", "#318492");
		$("#nav5").css("background", "#318492");
		$("#basic_info_table").css("top", "35%");
		$(".body_table_area").hide();
		$(".sel_wrap").hide();
		$("#container_change").hide();
		$(".premonth_area_body").hide();
		$(".nextmonth_area_body").hide();
		$(".premonth_area_pre").hide();
		$(".nextmonth_area_pre").hide();
		$(".premonth_area_tem").hide();
		$(".nextmonth_area_tem").hide();
		$(".premonth_area_suger").hide();
		$(".nextmonth_area_suger").hide();
		$(".premonth_area_boom").hide();
		$(".nextmonth_area_boom").hide();
		$(".easy_body").css("display", "none");
		$(".easy_photo").css("display", "none");
		$(".easy_plan").css("display", "none");
		$(".easy_act").css("display", "none");
		$(".nav_sign").css("display", "none");
		$(".nav_signI").css("display", "none");
		$(".nav_sign2").css("display", "none");
		$(".nav_signIII").css("display", "block");
		$(".nav_signIIII").css("display", "none");
		$(".container_box").hide();
		$(".container_photo").hide();
		$(".container_map").hide();
		$(".container_plan").show();
		$(".container_aid").hide();
		$(".choose_month").css("display", "none");
		$(".body_table_area").css("display", "none");
		$(".nav_signII,.nav_sign22,.nav_sign3,.container_photo").css("display", "none");
		$.ajax({
			url: "/BasicInfo/getHealthPlanByUserId",
			data: {
				"userId": userId
			},
			type: "GET",
			dataType: "json",
			contentType: "application/json",
			success: function(data) {

				var eat = data[0].Recipes;
				var pe = data[0].Movement;
				var sleep = data[0].Schedule;

				var arr_eat = new Array();
				var arr_sleep = new Array();
				var arr_pe = new Array();

				arr_eat = eat.split(';');
				arr_sleep = sleep.split(';');
				arr_pe = pe.split(';');

				var eat_str;
				var sleep_str;
				var pe_str;

				for (var i = 0; i < arr_eat.length; i++) {
					if (i == 0) {
						eat_str = "" + arr_eat[i] + "<br/>";
					} else {
						eat_str += "" + arr_eat[i] + "<br/>";
					}
				}

				for (var j = 0; j < arr_sleep.length; j++) {
					if (j == 0) {
						sleep_str = "" + arr_sleep[j] + "<br/>";
					} else {
						sleep_str += "" + arr_sleep[j] + "<br/>";
					}
				}

				for (var k = 0; k < arr_pe.length; k++) {
					if (k == 0) {
						pe_str = "" + arr_pe[k] + "<br/>";
					} else {
						pe_str += "" + arr_pe[k] + "<br/>";
					}
				}
				$(".eat_advice p").html(eat_str);
				$(".pe_advice p").html(pe_str);
				$(".sleep_advice p").html(sleep_str);
			},

		});
	});
	$(".easy_act").bind("click", function() {
		$(".now_adds_area p1").html("您当前的位置：活动情况>详细数据");
		$(".sign_area p").html("详细数据");
        $("#nav2").css("background", "#318492");
		$("#nav3").css("background", "#15697D");
		$("#nav1").css("background", "#318492");
		$("#nav4").css("background", "#318492");
		$("#nav5").css("background", "#318492");
		$(".easy_body").css("display", "none");
		$(".easy_photo").css("display", "none");
		$(".easy_plan").css("display", "none");
		$(".easy_act").css("display", "none");
		$(".photo_month p").html(actyear + "-" + actmonth);
		$(".container_box").show();
		$(".container_photo").hide();
		$(".container_map").hide();
		$(".nav_sign").css("display", "none");
		$(".nav_signII,.nav_sign22,.nav_sign3").css("display", "block");
		$(".nav_signII").css('background', 'none');
		$(".nav_signII img").attr('src', '/content/images/act_photo_green.png');
		$(".nav_signII p").css('color', '#1CBDB3');
		$(".nav_sign22").css('background', '#1CBDB3');
		$(".nav_sign22 p").css('color', 'white');
		$(".nav_sign22 img").attr('src', '/content/images/act_info.png');
		$(".nav_sign3").css('background', 'none');
		$(".nav_sign3 p").css('color', '#1CBDB3');
		$(".nav_sign3 img").attr('src', '/content/images/act_map_green.png');
		$("#basic_info_table").css("top", "50%");
		calorie_array.length = 0;
		duration_array.length = 0;
		distance_array.length = 0;
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": actyear,
				"myMonth": actmonth,
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
				$('#box_area').highcharts({
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
	});

	$(".nav_sign").click(function() {});
	$(".nav_signI").click(function() {
		$(".premonth_area_body").show();
		$(".nextmonth_area_body").show();
		$(".premonth_area_pre").hide();
		$(".nextmonth_area_pre").hide();
		$(".premonth_area_tem").hide();
		$(".nextmonth_area_tem").hide();
		$(".premonth_area_suger").hide();
		$(".nextmonth_area_suger").hide();
		$(".premonth_area_boom").hide();
		$(".nextmonth_area_boom").hide();
		$(".body_table_area").show();
		$("#container_change").hide();
		$(".sel_wrap").hide();

		$(".now_adds_area p1").html("您当前的位置：身体指标>列表显示");
		$(".sign_area p").html("列表显示");
		$(".nav_signI").css('background', '#1CBDB3');
		$(".nav_signI img").attr('src', '/content/images/table_left.png');
		$(".nav_signI p").css('color', 'white');
		$(".nav_sign2").css('background', 'none');
		$(".nav_sign2 p").css('color', '#1CBDB3');
		$(".nav_sign2 img").attr('src', '/content/images/curve_green.png');
		$(".choose_month p").html(bodyyear + "-" + bodymonth);
		tbody = $(".body_table_area").find("tr");
		tbody.empty();
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": bodyyear,
				"myMonth": bodymonth,
				"id": userId
			},
			type: "GET",
			dataType: "json",
			contentType: "application/json",
			success: function(data) {
				var th = '<tr><th>日期</th><th>收缩压</th><th>舒张压</th><th>心跳</th><th>血糖</th><th>体温</th></tr>';
				$(".dataintable").append(th);
				for (var i = 0; i < data.length; i++) {
					var date = utcToDate_onlyday(eval('new ' + eval(data[i].Date).source));
					var tr = '<tr><td>' + date + '</td><td>' + data[i].SystolicPressure + '</td><td>' + data[i].DiastolicPressure + '</td><td>' + data[i].HeartBeat + '</td><td>' + data[i].BloodGlucose + '</td><td>' + data[i].Calorie + '</td></tr>';
					$(".dataintable").append(tr);
				}
			},
		});
	});
	$(".nav_sign2").click(function() {
		$(".body_table_area").hide();
		$(".sel_wrap").show();
		$("#container_change").show();
		$(".premonth_area_body").hide();
		$(".nextmonth_area_body").hide();
		$(".premonth_area_pre").show();
		$(".nextmonth_area_pre").show();
		$(".premonth_area_tem").hide();
		$(".nextmonth_area_tem").hide();
		$(".premonth_area_suger").hide();
		$(".nextmonth_area_suger").hide();
		$(".premonth_area_boom").hide();
		$(".nextmonth_area_boom").hide();
		$(".choose_month p").html(preyear + "-" + premonth);
		$(".sel_wrap label").html("血压");
		date_array.length = 0;
		downpre_array.length = 0;
		uppre_array.length = 0;
		boom_array.length = 0;
		suger_array.length = 0;
		tem_array.length = 0;

		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": preyear,
				"myMonth": premonth,
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

				$('#container_change').highcharts({
					chart: {
						type: 'area'
					},
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
						name: '舒张压',
						data: uppre_array
					}]
				});
			},
		});
		$(".now_adds_area p1").html("您当前的位置：身体指标>变化趋势");
		$(".sign_area p").html("变化趋势");
		$(".nav_signI").css('background', 'none');
		$(".nav_signI img").attr('src', '/content/images/table_left_green.png');
		$(".nav_signI p").css('color', '#1CBDB3');
		$(".nav_sign2").css('background', '#1CBDB3');
		$(".nav_sign2 p").css('color', 'white');
		$(".nav_sign2 img").attr('src', '/content/images/curve.png');
	});
	$(".nav_signII").click(function() {
        $(".photo_month p").html(photo_year + "-" + photo_month);
		$(".container_box").hide();
		$(".container_photo").show();
		$(".container_map").hide();
		$(".now_adds_area p1").html("您当前的位置：活动情况>图片信息");
		$(".sign_area p").html("图片信息");
		$(".nav_signII").css('background', '#1CBDB3');
		$(".nav_signII img").attr('src', '/content/images/act_photo.png');
		$(".nav_signII p").css('color', 'white');
		$(".nav_sign22").css('background', 'none');
		$(".nav_sign22 p").css('color', '#1CBDB3');
		$(".nav_sign22 img").attr('src', '/content/images/act_info_green.png');
		$(".nav_sign3").css('background', 'none');
		$(".nav_sign3 p").css('color', '#1CBDB3');
		$(".nav_sign3 img").attr('src', '/content/images/act_map_green.png');
        $('#photos').empty();
		$.ajax({
				url: "/BasicInfo/getUserPhotoByDate",
				data: {
                    "myYear": photo_year,
				    "myMonth": photo_month,
					"userId": userId
				},
				type: "GET",
				dataType: "json",
				contentType: "application/json",
				success: function(data) {
                    var photo_test2;
                    photo_test2 = '<ul class="filmstrip">';
					for (var i = 0; i < data.length; i++) {
						var test_photo = '<div class="panel"><img src="' + data[i].PhotoPath + '"width="100%" height="100%" alt="" /></div>';
                        photo_test2 += '<li><img src="' + data[i].PhotoPath + '" width="100" height="100" /></li>';
						$('#photos').append(test_photo);
                        
					}
                    photo_test2 += '</ul>'
                    $('#photos').append(photo_test2);
                    $('#photos').galleryView({
		            panel_width:900,
		            panel_height: 400,
		            frame_width: 100,
		            frame_height: 100
	                });
                },
        });
	});
	$(".nav_sign22").click(function() {
		$(".now_adds_area p1").html("您当前的位置：活动情况>详细数据");
		$(".sign_area p").html("详细数据");
		$(".photo_month p").html(actyear + "-" + actmonth);
		$(".container_box").show();
		$(".container_photo").hide();
		$(".container_map").hide();
		$(".nav_signII").css('background', 'none');
		$(".nav_signII img").attr('src', '/content/images/act_photo_green.png');
		$(".nav_signII p").css('color', '#1CBDB3');
		$(".nav_sign22").css('background', '#1CBDB3');
		$(".nav_sign22 p").css('color', 'white');
		$(".nav_sign22 img").attr('src', '/content/images/act_info.png');
		$(".nav_sign3").css('background', 'none');
		$(".nav_sign3 p").css('color', '#1CBDB3');
		$(".nav_sign3 img").attr('src', '/content/images/act_map_green.png');
		calorie_array.length = 0;
		duration_array.length = 0;
		distance_array.length = 0;
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": actyear,
				"myMonth": actmonth,
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
				$('#box_area').highcharts({
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
	});
	$(".nav_sign3").click(function() {
		$(".container_box").hide();
		$(".container_photo").hide();
		$(".container_map").show();
		$(".now_adds_area p1").html("您当前的位置：活动情况>活动轨迹");
		$(".sign_area p").html("活动轨迹");
		$(".nav_sign3").css('background', '#1CBDB3');
		$(".nav_sign3 p").css('color', 'white');
		$(".nav_sign3 img").attr('src', '/content/images/act_map.png');
		$(".nav_sign22").css('background', 'none');
		$(".nav_sign22 p").css('color', '#1CBDB3');
		$(".nav_sign22 img").attr('src', '/content/images/act_info_green.png');
		$(".nav_signII").css('background', 'none');
		$(".nav_signII img").attr('src', '/content/images/act_photo_green.png');
		$(".nav_signII p").css('color', '#1CBDB3');
		$("#datetimepicker3").attr("value", "" + line_day + "/" + line_month + "/" + line_year + "");
		ajax_date = line_day + "/" + line_month + "/" + line_year;
		$.ajax({
			url: "/BasicInfo/getLocationByDate",

			data: {
				"id": userId,
				"Date": ajax_date
			},
			type: "GET",
			dataType: "json",
			contentType: "application/json",
			success: function(data) {
				var map = new BMap.Map("map_area"); // 创建地图实例
				map.enableScrollWheelZoom(true);
				var point = new Array();
				var polyline = new Array();
				var temple;
				for (var i = 0; i < data.length; i++) {
					point[i] = new BMap.Point(data[i].Longitude, data[i].Latitude);
				}
				map.centerAndZoom(point[0], 20); //初始化地图,设置城市和地图级别。
				for (var j = 0; j < (data.length - 1); j++) {
					temple = j;
					polyline[j] = new BMap.Polyline([point[temple], point[temple + 1]], {
						strokeColor: "red",
						strokeWeight: 3,
						strokeOpacity: 0.8
					});
					map.addOverlay(polyline[j]);
				}
			},
		});
	});
	$(".sel_wrap").on("change", function() {
		var o;
		var opt = $(this).find('option');
		opt.each(function(i) {
			if (opt[i].selected == true) {
				o = opt[i].innerHTML;
			}
		})
		$(this).find('label').html(o);
	}).trigger('change');
	$("#c_body").change(function() {
		var c_body = $("#c_body").val();
		if (c_body == 0) {
			date_array.length = 0;
			downpre_array.length = 0;
			uppre_array.length = 0;
			boom_array.length = 0;
			suger_array.length = 0;
			tem_array.length = 0;
			$(".premonth_area_body").hide();
			$(".nextmonth_area_body").hide();
			$(".premonth_area_pre").show();
			$(".nextmonth_area_pre").show();
			$(".premonth_area_tem").hide();
			$(".nextmonth_area_tem").hide();
			$(".premonth_area_suger").hide();
			$(".nextmonth_area_suger").hide();
			$(".premonth_area_boom").hide();
			$(".nextmonth_area_boom").hide();
			$(".choose_month p").html(preyear + "-" + premonth);
			$.ajax({
				url: "/BasicInfo/getHealthIndicatorByDate",
				data: {
					"myYear": preyear,
					"myMonth": premonth,
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

					$('#container_change').highcharts({
						chart: {
							type: 'area'
						},
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
							name: '舒张压',
							data: uppre_array
						}]
					});
				},
			});
		} else if (c_body == 1) {
			date_array.length = 0;
			downpre_array.length = 0;
			uppre_array.length = 0;
			boom_array.length = 0;
			suger_array.length = 0;
			tem_array.length = 0;
			$(".premonth_area_body").hide();
			$(".nextmonth_area_body").hide();
			$(".premonth_area_pre").hide();
			$(".nextmonth_area_pre").hide();
			$(".premonth_area_tem").hide();
			$(".nextmonth_area_tem").hide();
			$(".premonth_area_suger").hide();
			$(".nextmonth_area_suger").hide();
			$(".premonth_area_boom").show();
			$(".nextmonth_area_boom").show();
			$(".choose_month p").html(boomyear + "-" + boommonth);
			$.ajax({
				url: "/BasicInfo/getHealthIndicatorByDate",
				data: {
					"myYear": boomyear,
					"myMonth": boommonth,
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

					$('#container_change').highcharts({
						chart: {
							type: 'area'
						},
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
							name: '心跳',
							data: boom_array
						}]
					});
				},
			});
		} else if (c_body == 2) {

			$(".premonth_area_body").hide();
			$(".nextmonth_area_body").hide();
			$(".premonth_area_pre").hide();
			$(".nextmonth_area_pre").hide();
			$(".premonth_area_tem").hide();
			$(".nextmonth_area_tem").hide();
			$(".premonth_area_suger").show();
			$(".nextmonth_area_suger").show();
			$(".premonth_area_boom").hide();
			$(".nextmonth_area_boom").hide();
			$(".choose_month p").html(sugeryear + "-" + sugermonth);
			date_array.length = 0;
			downpre_array.length = 0;
			uppre_array.length = 0;
			boom_array.length = 0;
			suger_array.length = 0;
			tem_array.length = 0;
			$.ajax({
				url: "/BasicInfo/getHealthIndicatorByDate",
				data: {
					"myYear": sugeryear,
					"myMonth": sugermonth,
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

					$('#container_change').highcharts({
						chart: {
							type: 'area'
						},
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
							name: '血糖',
							data: suger_array
						}]
					});
				},
			});
		} else {

			$(".premonth_area_body").hide();
			$(".nextmonth_area_body").hide();
			$(".premonth_area_pre").hide();
			$(".nextmonth_area_pre").hide();
			$(".premonth_area_tem").show();
			$(".nextmonth_area_tem").show();
			$(".premonth_area_suger").hide();
			$(".nextmonth_area_suger").hide();
			$(".premonth_area_boom").hide();
			$(".nextmonth_area_boom").hide();
			$(".choose_month p").html(temyear + "-" + temmonth);
			date_array.length = 0;
			downpre_array.length = 0;
			uppre_array.length = 0;
			boom_array.length = 0;
			suger_array.length = 0;
			tem_array.length = 0;
			$.ajax({
				url: "/BasicInfo/getHealthIndicatorByDate",
				data: {
					"myYear": temyear,
					"myMonth": temmonth,
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

					$('#container_change').highcharts({
						chart: {
							type: 'area'
						},
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
							name: '体温',
							data: tem_array
						}]
					});
				},
			});
		}
	});
	$("#premonth_btn_body").click(function() {
		bodymonth--;
		if (bodymonth == 0) {
			bodymonth = 12;
			bodyyear--;
		}
		$(".choose_month p").html(bodyyear + "-" + bodymonth);
		tbody = $(".body_table_area").find("tr");
		tbody.empty();
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": bodyyear,
				"myMonth": bodymonth,
				"id": userId
			},
			type: "GET",
			dataType: "json",
			contentType: "application/json",
			success: function(data) {
				var th = '<tr><th>日期</th><th>收缩压</th><th>舒张压</th><th>心跳</th><th>血糖</th><th>体温</th></tr>';
				$(".dataintable").append(th);
				for (var i = 0; i < data.length; i++) {
					var date = utcToDate_onlyday(eval('new ' + eval(data[i].Date).source));
					var tr = '<tr><td>' + date + '</td><td>' + data[i].SystolicPressure + '</td><td>' + data[i].DiastolicPressure + '</td><td>' + data[i].HeartBeat + '</td><td>' + data[i].BloodGlucose + '</td><td>' + data[i].Calorie + '</td></tr>';
					$(".dataintable").append(tr);
				}
			},
		});
	});
	$("#nextmonth_btn_body").click(function() {
		bodymonth++;
		if (bodyyear == myyear && bodymonth > mymonth) {
			bodymonth--;
		}
		if (bodymonth == 13) {
			bodymonth = 1;
			bodyyear++;
		}
		$(".choose_month p").html(bodyyear + "-" + bodymonth);
		tbody = $(".body_table_area").find("tr");
		tbody.empty();
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": bodyyear,
				"myMonth": bodymonth,
				"id": userId
			},
			type: "GET",
			dataType: "json",
			contentType: "application/json",
			success: function(data) {
				var th = '<tr><th>日期</th><th>收缩压</th><th>舒张压</th><th>心跳</th><th>血糖</th><th>体温</th></tr>';
				$(".dataintable").append(th);
				for (var i = 0; i < data.length; i++) {
					var date = utcToDate_onlyday(eval('new ' + eval(data[i].Date).source));
					var tr = '<tr><td>' + date + '</td><td>' + data[i].SystolicPressure + '</td><td>' + data[i].DiastolicPressure + '</td><td>' + data[i].HeartBeat + '</td><td>' + data[i].BloodGlucose + '</td><td>' + data[i].Calorie + '</td></tr>';
					$(".dataintable").append(tr);
				}
			},
		});
	});
	$("#premonth_btn_pre").bind("click", function() {
		premonth--;
		if (premonth == 0) {
			premonth = 12;
			preyear--;
		}
		$(".choose_month p").html(preyear + "-" + premonth);
		date_array.length = 0;
		downpre_array.length = 0;
		uppre_array.length = 0;
		boom_array.length = 0;
		suger_array.length = 0;
		tem_array.length = 0;

		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": preyear,
				"myMonth": premonth,
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

				$('#container_change').highcharts({
					chart: {
						type: 'area'
					},
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
						name: '舒张压',
						data: uppre_array
					}]
				});
			},
		});
	});
	$("#nextmonth_btn_pre").bind("click", function() {
		premonth++;
		if (preyear == myyear && premonth > mymonth) {
			premonth--;
		}
		if (premonth == 13) {
			premonth = 1;
			preyear++;
		}
		$(".choose_month p").html(preyear + "-" + premonth);
		date_array.length = 0;
		downpre_array.length = 0;
		uppre_array.length = 0;
		boom_array.length = 0;
		suger_array.length = 0;
		tem_array.length = 0;

		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": preyear,
				"myMonth": premonth,
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

				$('#container_change').highcharts({
					chart: {
						type: 'area'
					},
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
						name: '舒张压',
						data: uppre_array
					}]
				});
			},
		});
	});
	$("#premonth_btn_boom").bind("click", function() {
		boommonth--;
		if (boommonth == 0) {
			boommonth = 12;
			boomyear--;
		}
		$(".choose_month p").html(boomyear + "-" + boommonth);
		date_array.length = 0;
		downpre_array.length = 0;
		uppre_array.length = 0;
		boom_array.length = 0;
		suger_array.length = 0;
		tem_array.length = 0;
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": boomyear,
				"myMonth": boommonth,
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

				$('#container_change').highcharts({
					chart: {
						type: 'area'
					},
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
						name: '心跳',
						data: boom_array
					}]
				});
			},
		});
	});
	$("#nextmonth_btn_boom").bind("click", function() {
		boommonth++;
		if (boomyear == myyear && boommonth > mymonth) {
			boommonth--;
		}
		if (boommonth == 13) {
			boommonth = 1;
			boomyear++;
		}
		$(".choose_month p").html(boomyear + "-" + boommonth);
		date_array.length = 0;
		downpre_array.length = 0;
		uppre_array.length = 0;
		boom_array.length = 0;
		suger_array.length = 0;
		tem_array.length = 0;
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": boomyear,
				"myMonth": boommonth,
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

				$('#container_change').highcharts({
					chart: {
						type: 'area'
					},
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
						name: '心跳',
						data: boom_array
					}]
				});
			},
		});
	});
	$("#premonth_btn_suger").bind("click", function() {
		sugermonth--;
		if (sugermonth == 0) {
			sugermonth = 12;
			sugeryear--;
		}
		$(".choose_month p").html(sugeryear + "-" + sugermonth);
		date_array.length = 0;
		downpre_array.length = 0;
		uppre_array.length = 0;
		boom_array.length = 0;
		suger_array.length = 0;
		tem_array.length = 0;
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": sugeryear,
				"myMonth": sugermonth,
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

				$('#container_change').highcharts({
					chart: {
						type: 'area'
					},
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
						name: '血糖',
						data: suger_array
					}]
				});
			},
		});
	});
	$("#nextmonth_btn_suger").bind("click", function() {
		sugermonth++;
		if (sugeryear == myyear && sugermonth > mymonth) {
			sugermonth--;
		}
		if (sugermonth == 13) {
			sugermonth = 1;
			sugeryear++;
		}
		$(".choose_month p").html(sugeryear + "-" + sugermonth);
		date_array.length = 0;
		downpre_array.length = 0;
		uppre_array.length = 0;
		boom_array.length = 0;
		suger_array.length = 0;
		tem_array.length = 0;
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": sugeryear,
				"myMonth": sugermonth,
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

				$('#container_change').highcharts({
					chart: {
						type: 'area'
					},
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
						name: '血糖',
						data: suger_array
					}]
				});
			},
		});
	});
	$("#premonth_btn_tem").bind("click", function() {
		temmonth--;
		if (temmonth == 0) {
			temmonth = 12;
			temyear--;
		}
		$(".choose_month p").html(temyear + "-" + temmonth);
		date_array.length = 0;
		downpre_array.length = 0;
		uppre_array.length = 0;
		boom_array.length = 0;
		suger_array.length = 0;
		tem_array.length = 0;
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": temyear,
				"myMonth": temmonth,
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

				$('#container_change').highcharts({
					chart: {
						type: 'area'
					},
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
						name: '体温',
						data: tem_array
					}]
				});
			},
		});
	});
	$("#nextmonth_btn_tem").bind("click", function() {
		temmonth++;
		if (temyear == myyear && temmonth > mymonth) {
			temmonth--;
		}
		if (temmonth == 13) {
			temmonth = 1;
			temyear++;
		}
		$(".choose_month p").html(temyear + "-" + temmonth);
		date_array.length = 0;
		downpre_array.length = 0;
		uppre_array.length = 0;
		boom_array.length = 0;
		suger_array.length = 0;
		tem_array.length = 0;
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": temyear,
				"myMonth": temmonth,
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

				$('#container_change').highcharts({
					chart: {
						type: 'area'
					},
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
						name: '体温',
						data: tem_array
					}]
				});
			},
		});
	});
	$("#premonth_btn_photo").bind("click", function() {
		photo_month--;
		if (photo_month == 0) {
			photo_month = 12;
			photo_year--;
		}
		$(".photo_month p").html(photo_year + "-" + photo_month);
        $('#photos').empty();
        $.ajax({
				url: "/BasicInfo/getUserPhotoByDate",
				data: {
                    "myYear": photo_year,
				    "myMonth": photo_month,
					"userId": userId
				},
				type: "GET",
				dataType: "json",
				contentType: "application/json",
				success: function(data) {
                    var photo_test2;
                    photo_test2 = '<ul class="filmstrip">';
					for (var i = 0; i < data.length; i++) {
						var test_photo = '<div class="panel"><img src="' + data[i].PhotoPath + '"width="100%" height="100%" alt="" /></div>';
                        photo_test2 += '<li><img src="' + data[i].PhotoPath + '" width="100" height="100" /></li>';
						$('#photos').append(test_photo);
                        
					}
                    photo_test2 += '</ul>'
                    $('#photos').append(photo_test2);
                    $('#photos').galleryView({
		            panel_width:900,
		            panel_height: 400,
		            frame_width: 100,
		            frame_height: 100
	                });
                },
        });
	});
	$("#nextmonth_btn_photo").bind("click", function() {
		photo_month++;
		if (photo_year == myyear && photo_month > mymonth) {
			photo_month--;
		}
		if (photo_month == 13) {
			photo_month = 1;
			photo_year++;
		}
		$(".photo_month p").html(photo_year + "-" + photo_month);
        $('#photos').empty();
        $.ajax({
				url: "/BasicInfo/getUserPhotoByDate",
				data: {
                    "myYear": photo_year,
				    "myMonth": photo_month,
					"userId": userId
				},
				type: "GET",
				dataType: "json",
				contentType: "application/json",
				success: function(data) {
                    var photo_test2;
                    photo_test2 = '<ul class="filmstrip">';
					for (var i = 0; i < data.length; i++) {
						var test_photo = '<div class="panel"><img src="' + data[i].PhotoPath + '"width="100%" height="100%" alt="" /></div>';
                        photo_test2 += '<li><img src="' + data[i].PhotoPath + '" width="100" height="100" /></li>';
						$('#photos').append(test_photo);
                        
					}
                    photo_test2 += '</ul>'
                    $('#photos').append(photo_test2);
                    $('#photos').galleryView({
		            panel_width:900,
		            panel_height: 400,
		            frame_width: 100,
		            frame_height: 100
	                });
                },
        });
	});
	$("#premonth_btn_box").bind("click", function() {
		actmonth--;
		if (actmonth == 0) {
			actmonth = 12;
			actyear--;
		}
		$(".photo_month p").html(actyear + "-" + actmonth);
		calorie_array.length = 0;
		duration_array.length = 0;
		distance_array.length = 0;
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": actyear,
				"myMonth": actmonth,
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
				$('#box_area').highcharts({
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
	});
	$("#nextmonth_btn_box").bind("click", function() {
		actmonth++;
		if (actyear == myyear && actmonth > mymonth) {
			actmonth--;
		}
		if (actmonth == 13) {
			actmonth = 1;
			actyear++;
		}
		$(".photo_month p").html(actyear + "-" + actmonth);
		calorie_array.length = 0;
		duration_array.length = 0;
		distance_array.length = 0;
		$.ajax({
			url: "/BasicInfo/getHealthIndicatorByDate",
			data: {
				"myYear": actyear,
				"myMonth": actmonth,
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
				$('#box_area').highcharts({
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
	});
	$("#premonth_btn_map").bind("click", function() {
		var map_pretime = $("#datetimepicker3").val();
		var arr = new Array();
		arr = map_pretime.split('/'); //注split可以用字符或字符串分割
		var dd = new Date(arr[2], arr[1] - 1, arr[0], "00", "00", "00");
		dd.setTime(dd.getTime() - 24 * 60 * 60 * 1000);
		var s = dd.getDate() + "/" + (dd.getMonth() + 1) + "/" + dd.getFullYear();
		$('#datetimepicker3').datetimepicker({
			yearOffset: 0,
			lang: 'ch',
			timepicker: true,
			format: 'd/m/Y',
			formatDate: 'd/m/Y',
			value: s
		});
		$("#datetimepicker3").change();
	});
	$("#map_search").bind("click", function() {
		$("#datetimepicker3").change();
	});
	$("#nextmonth_btn_map").bind("click", function() {
		var map_nexttime = $("#datetimepicker3").val();
		var arr = new Array();
		arr = map_nexttime.split('/'); //注split可以用字符或字符串分割
		var dd = new Date(arr[2], arr[1] - 1, arr[0], "00", "00", "00");
		dd.setTime(dd.getTime() + 24 * 60 * 60 * 1000);
		var s = dd.getDate() + "/" + (dd.getMonth() + 1) + "/" + dd.getFullYear();
		if (dd.getDate() > myday && (dd.getMonth() + 1) == mymonth && dd.getFullYear() == myyear) {
			$('#datetimepicker3').datetimepicker({
				yearOffset: 0,
				lang: 'ch',
				timepicker: true,
				format: 'd/m/Y',
				formatDate: 'd/m/Y',
				value: "" + myday + "/" + mymonth + "/" + myyear + ""
			})
			alert("已经是最新的记录了！！！");
		} else {
			$('#datetimepicker3').datetimepicker({
				yearOffset: 0,
				lang: 'ch',
				timepicker: true,
				format: 'd/m/Y',
				formatDate: 'd/m/Y',
				value: s
			});
		}
		$("#datetimepicker3").change();
	});
	$("#datetimepicker3").change(function() {
		var put_time = $("#datetimepicker3").val();
		var arr = new Array();
		arr = put_time.split('/'); //注split可以用字符或字符串分割
		var dd = new Date(arr[2], arr[1] - 1, arr[0], "00", "00", "00");
		var s = dd.getDate() + "/" + (dd.getMonth() + 1) + "/" + dd.getFullYear();
		if (dd.getDate() > myday && (dd.getMonth() + 1) == mymonth && dd.getFullYear() == myyear) {
			$('#datetimepicker3').datetimepicker({
				yearOffset: 0,
				lang: 'ch',
				timepicker: true,
				format: 'd/m/Y',
				formatDate: 'd/m/Y',
				value: "" + myday + "/" + mymonth + "/" + myyear + ""
			})
			alert("已经是最新的记录了！！！");
		} else {
			$('#datetimepicker3').datetimepicker({
				yearOffset: 0,
				lang: 'ch',
				timepicker: true,
				format: 'd/m/Y',
				formatDate: 'd/m/Y',
				value: s
			});
		}
        ajax_date = $("#datetimepicker3").val();

		$.ajax({
			url: "/BasicInfo/getLocationByDate",

			data: {
				"id": userId,
				"Date": ajax_date
			},
			type: "GET",
			dataType: "json",
			contentType: "application/json",
			success: function(data) {
				var map = new BMap.Map("map_area"); // 创建地图实例
				map.enableScrollWheelZoom(true);
				var point = new Array();
				var polyline = new Array();
				var temple;
				for (var i = 0; i < data.length; i++) {
					point[i] = new BMap.Point(data[i].Longitude, data[i].Latitude);
				}
				map.centerAndZoom(point[0], 20); //初始化地图,设置城市和地图级别。
				for (var j = 0; j < (data.length - 1); j++) {
					temple = j;
					polyline[j] = new BMap.Polyline([point[temple], point[temple + 1]], {
						strokeColor: "red",
						strokeWeight: 3,
						strokeOpacity: 0.8
					});
					map.addOverlay(polyline[j]);
				}
			},
		});
	});
	$(".aid_search_btn").click(function() {
		var begin_time = $("#datetimepicker1").val();
		var end_time = $("#datetimepicker2").val();
		tbody = $(".aid_table_area").find("tr");
		tbody.empty();
		$.ajax({
			url: "/BasicInfo/searchForEmergencyInfo",
			data: {
				"userId": userId,
				"bTime": begin_time,
				"eTime": end_time
			},
			type: "GET",
			dataType: "json",
			contentType: "application/json",
			success: function(data) {
				var th = '<tr><th>时间</th><th>地点</th><th>急救人员</th><th>病情分析</th><th>诊断结果</th><th>医生建议</th></tr>';
				$(".aid_dataintable").append(th);
				for (var i = 0; i < data.length; i++) {
					var date = utcToDate(eval('new ' + eval(data[i].EmergencyDate).source));
					var tr = '<tr><td>' + date + '</td><td>' + data[i].Location + '</td><td>' + data[i].Staff + '</td><td>' + data[i].IllnessAnalyses + '</td><td>' + data[i].MedicalResult + '</td><td>' + data[i].Advice + '</td></tr>';
					$(".aid_dataintable").append(tr);
				}
			},
		});
	});
});