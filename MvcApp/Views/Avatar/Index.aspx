<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
		body, html{width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
		#allmap{height:500px;width:100%;}
		#r-result{width:100%; font-size:14px;}
	</style>
    <script type="text/javascript" src="http://api.map.baidu.com/api?key=46ce9d0614bf7aefe0ba562f8cf87194&v=1.0&services=false"></script>
	<script type="text/javascript" src="/Scripts/jquery-1.4.1.min.js"></script>
	<title>地图demo</title>
</head>
<body>
	<div id="allmap"></div>
	<div id="r-result">
		经度: <input id="longitude" type="text" style="width:100px; margin-right:10px;" />
		纬度: <input id="latitude" type="text" style="width:100px; margin-right:10px;" />
		<input type="button" value="查询" onclick="theLocation()" />
	</div>
</body>
</html>
<script type="text/javascript">

    var myDate = new Date();
    var myYear = myDate.getFullYear();
    var myMonth = (myDate.getMonth() + 1);
    var myDay = (myDate.getDay() + 1);

    alert(myDate);
    alert(myYear);
    alert(myMonth);
    alert(myDay);

    $.ajax(
	    {
	    	url: "/BasicInfo/getLocationByDate",
	        data:{
				"myYear": myYear,
                "myMonth": myMonth,
                "myDay": myDay,
                "id": 1
	        },
	        type: "GET",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (data) 
	        {
                alert(data);
	        },  
	    });

    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
    map.enableScrollWheelZoom(true);

    // 用经纬度设置地图中心点
    function theLocation() {
        if (document.getElementById("longitude").value != "" && document.getElementById("latitude").value != "") {
            map.clearOverlays();
            var new_point = new BMap.Point(document.getElementById("longitude").value, document.getElementById("latitude").value);
            var marker = new BMap.Marker(new_point);  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            map.panTo(new_point);
        }
    }
</script>
