using AvatarUpload.Helper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApp.Models.Service;
using MvcApp.Models.Interfaces;

namespace AvatarUpload.Controllers
{
    public class AvatarController : Controller
    {
        public IBasicInfoService basicInfoService;

        public AvatarController()
        {
            basicInfoService = new BasicInfoService();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult uploadBasicInfoFace(int userId) //上传用户头像
        {
            HttpFileCollection hfc = System.Web.HttpContext.Current.Request.Files;
            string imgPath = "/Content/BasicInfo/face100/";
            if (hfc.Count > 0)
            {
                imgPath = imgPath + userId + Path.GetExtension(hfc[0].FileName);
                basicInfoService.changeUserFacePath(userId, imgPath); //更改用户face字段的值
                string PhysicalPath = Server.MapPath(imgPath);
                hfc[0].SaveAs(PhysicalPath);
            }
            return Content(imgPath);
        }

        public ActionResult getUserPhotos(int userId) //获取用户所有的活动图片
        {
            List<String> list = new List<String>();
            String filePath = "/Content/BasicInfo/" + userId;

            string PhysicalPath = Server.MapPath(filePath);

            FileInfo fileInfo = new FileInfo(PhysicalPath);

            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}
