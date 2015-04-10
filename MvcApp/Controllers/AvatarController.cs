using AvatarUpload.Helper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AvatarUpload.Controllers
{
    public class AvatarController : Controller
    {
        string ImageWS = ConfigurationManager.AppSettings["ImageWS"];
        string ImageUrl = ConfigurationManager.AppSettings["ImageUrl"];

        //
        // GET: /Avatar/

        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 上传头像
        /// </summary>
        /// <param name="qqfile"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult ProcessUpload(string qqfile)
        {
            try
            {
                string UploadedImgUrl = string.Empty;

                //由于应用所在目录会经常切换，所以固定上传到D盘
                string uploadFolder = @"D:\UploadImages\original\" + DateTime.Now.ToString("yyyyMM") + "\\";
                string imgName = DateTime.Now.ToString("ddHHmmssff");
                string imgType = qqfile.Substring(qqfile.LastIndexOf("."));
                string uploadPath = string.Empty;
                //uploadPath = Server.MapPath(uploadFolder);
                uploadPath = uploadFolder;

                if (!Directory.Exists(uploadPath))
                {
                    Directory.CreateDirectory(uploadPath);
                }

                System.Web.HttpBrowserCapabilitiesBase browser = Request.Browser;
                string BrowType = browser.Browser.ToLower();
                if (BrowType == "ie") //IE特殊处理
                {
                    string fileName = Request.Files["qqfile"].FileName;
                    imgType = fileName.Substring(fileName.LastIndexOf("."));
                    using (var inputStream = Request.Files["qqfile"].InputStream)
                    {
                        using (var flieStream = new FileStream(uploadPath + imgName + imgType, FileMode.Create))
                        {
                            // 保存上传图片
                            inputStream.CopyTo(flieStream);
                        }
                    }
                }
                else
                {
                    using (var inputStream = Request.InputStream)
                    {
                        using (var flieStream = new FileStream(uploadPath + imgName + imgType, FileMode.Create))
                        {
                            // 保存上传图片
                            inputStream.CopyTo(flieStream);
                        }
                    }
                }

                // 将大图上传到Image Server, 得到大图 UploadedImgUrl 
                // 这步可根据实际情况修改
                string largeImgFullPath = uploadPath + imgName + imgType;
                byte[] bytes = StreamHelper.Image2ByteWithPath(largeImgFullPath);
                string largeImagePath = DoUploadImageWS(bytes);
                UploadedImgUrl = ImageUrl + largeImagePath;

                try
                {
                    //等比例缩放图片
                    string zoomedPicFullPath = uploadPath + imgName + "_new" + imgType;

                    // 获取等比例缩放 UploadedImgUrl 后的图片路径
                    Image newImg = ImgHandler.ZoomPicture(StreamHelper.ImagePath2Img(largeImgFullPath), 400, 400);
                    newImg.Save(zoomedPicFullPath);

                    byte[] bytesNew = StreamHelper.Image2ByteWithPath(zoomedPicFullPath);
                    string largeImagePathNew = DoUploadImageWS(bytesNew); // DoUploadImageWS 为上传图片服务器器方法
                    UploadedImgUrl = ImageUrl + largeImagePathNew;

                    //保存起来，供裁剪时用
                    Session["UploadedImgUrl_" + Session["sid"].ToString()] = zoomedPicFullPath;

                }
                catch (Exception ex)
                {
                    //LogHelper.WriteError("校园大使任务中心 等比例缩放图片错误：", ex);
                }

                return Json(new { success = true, message = UploadedImgUrl }, "text/plain", System.Text.Encoding.UTF8, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { fail = true, message = ex.Message }, "text/plain", System.Text.Encoding.UTF8, JsonRequestBehavior.AllowGet);
            }
        }

        /// <summary>
        /// 保存缩略图
        /// </summary>
        /// <param name="form"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Index(FormCollection form)
        {
            try
            {
                int x = (int)Convert.ToDouble(form["x"]);
                int y = (int)Convert.ToDouble(form["y"]);
                int w = (int)Convert.ToDouble(form["w"]);
                int h = (int)Convert.ToDouble(form["h"]);
                string imgsrc = form["imgsrc"].Substring(0, form["imgsrc"].LastIndexOf("?")); //imgsrc 变量没用到，因为我们的Web服务器不允许访问外网，无奈改为下面的Session方法进行传值
                /**正常情况将imgsrc是大图的完整路径，所以此处将imgsrc转为据对路径，
                 *调用string path = ImgHandler.CutAvatar(imgsrc, x, y, w, h);
                 *得到小图的路径，需要的话保存到DB
                 */

                //获取等比例缩放后的图片
                string zoomedPicFullPath = Session["UploadedImgUrl_" + Session["sid"].ToString()].ToString();

                try
                {
                    // 根据坐标、宽高 裁剪头像,获得小图的路径
                    string cutImagePath = ImgHandler.CutAvatar(zoomedPicFullPath, x, y, w, h);
                    string path = string.Empty;

                    if (!string.IsNullOrEmpty(cutImagePath))
                    {
                        // 获取裁剪后图像的Url
                        byte[] bytes = StreamHelper.Image2ByteWithPath(cutImagePath);
                        string finalSmallImgPath = DoUploadImageWS(bytes);

                        //保存Path
                        path = ImageUrl + finalSmallImgPath;
                        ViewData["Path"] = path;

                        //把头像后半部分path保存到DB,你可能不需要
                        //long studentID = -1;
                        //long.TryParse(Session["sid"].ToString(), out studentID);
                        //studentLogic.UpdateAvatarUrl(studentID, finalSmallImgPath);

                        return Json(new { success = true, message = path });
                    }
                    else
                    {
                        return Json(new { success = false, message = "" });
                    }
                }
                catch (Exception ex)
                {
                    return Json(new { success = false, message = "" });
                }
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "" });
            }
        }

        private string DoUploadImageWS(byte[] bytes)
        {
            //上传图片服务器器方法,故意留空，根据实际情况处理

            return "aaa";
            //throw new NotImplementedException();
        }

        

    }
}
