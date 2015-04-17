﻿<!DOCTYPE html>
<html>
<head>
	<title>测距</title>
    <script type="text/javascript" src="http://api.map.baidu.com/api?key=46ce9d0614bf7aefe0ba562f8cf87194&v=1.0&services=false"></script>
</head>
<body>
	
</body>
</html>
<script type="text/javascript">
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom("成都", 12);  //初始化地图,设置城市和地图级别。
    var pointA = new BMap.Point(106.486654, 29.490295);  // 创建点坐标A--大渡口区
    var pointB = new BMap.Point(106.581515, 29.615467);  // 创建点坐标B--江北区
   
    var polyline = new BMap.Polyline([pointA, pointB], { strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 });  //定义折线
    map.addOverlay(polyline);     //添加折线到地图上
</script>
