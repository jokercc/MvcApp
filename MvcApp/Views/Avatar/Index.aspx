<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage" %>
<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Index</title>
    <link href="/Content/fineuploader.css" rel="stylesheet" />
    <link href="/Content/bootstrap.min.css" rel="stylesheet" />
    <link href="/Content/jquery.Jcrop.min.css" rel="stylesheet" />
    <link href="/Content/bootstrap-responsive.min.css" rel="stylesheet" />
    <link href="/Content/crop.min.css" rel="stylesheet" />
    <script type="text/javascript" src="/Scripts/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="/Scripts/jquery.fineuploader-3.1.min.js"></script>
    <script type="text/javascript" src="/Scripts/jquery.Jcrop.min.js"></script>
    <script type="text/javascript" src="/Scripts/jquery.form.min.js"></script>
    <script type="text/javascript" src="/Scripts/crop.js"></script>
</head>
<body>
    <div id="jquery-wrapped-fine-uploader"></div>
    <div style="clear:both"></div>
    <div id="message"></div>
    <div id="crop_wrap">
        <div id="crop_holder">
            <div id="crop_area" class="border">
                <img id="crop_image" alt="" src="/Content/images/201504/1016223683.jpg" class="preview-image" style="" />
            </div>
            <div id="preview_area">
                <div id="preview_title">当前头像</div>
                <div id="preview_large_text" class="preview-text">100px × 100px</div>
                <div id="preview_large_wrap" class="border">
                    <img id="preview_large" alt="" src="/Content/images/201504/1016223683.jpg" class="preview-image" style="" />
                </div>
            </div>
        </div>
        <div id="crop_operation" style="display: none;">
            <form id="form_crop" action="/Avatar/ProcessUpload" method="post">
                <input type="hidden" name="x" id="x">
                <input type="hidden" name="y" id="y">
                <input type="hidden" name="w" id="w">
                <input type="hidden" name="h" id="h">
                <input type="hidden" name="imgsrc" id="imgsrc">
                <input id="crop_operation_submit" type="submit" value="裁切并保存" />
                <span id="crop_operation_msg" style="display: none" class="green"></span>
            </form>
        </div>
        <div id="croped_message" class="green"></div>
    </div>
</body>
</html>
