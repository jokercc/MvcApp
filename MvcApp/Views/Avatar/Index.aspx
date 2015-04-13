<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage" %>
<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Index</title>
    <script type="text/javascript" src="/Scripts/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="/Scripts/ajaxfileupload.js"></script>

    <script type="text/javascript">

        $(function () {
            $(":button").click(function () {
                if ($("#file1").val().length > 0) {
                    ajaxFileUpload();
                }
                else {
                    alert("请选择图片");
                }
            })
        })
        function ajaxFileUpload() {
            $.ajaxFileUpload
            (
                {
                    url: '/Avatar/Upload', //用于文件上传的服务器端请求地址
                    data: {"userName" : "test"},
                    secureuri: false, //一般设置为false
                    fileElementId: 'file1', //文件上传空间的id属性  <input type="file" id="file" name="file" />
                    dataType: 'HTML', //返回值类型 一般设置为json
                    success: function (data, status)  //服务器成功响应处理函数
                    {
                        alert(data);
                        $("#img1").attr("src", data);
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

    </script>

</head>
<body>

    <p><input type="file" id="file1" name="file" /></p>
    <input type="button" value="上传" />

</body>
</html>
