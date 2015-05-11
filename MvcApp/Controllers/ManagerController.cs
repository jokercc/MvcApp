using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApp.Models.Interfaces;
using MvcApp.Models.Service;
using MvcApp.Models;
using MvcApp.Models.MyModels;

namespace MvcApp.Controllers
{
    public class ManagerController : Controller
    {
        //
        // GET: /Manager/
        IManagerService managerService;

        public ManagerController()
        {
            managerService = new ManagerService();
        }

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult login(string userName, string password) //监护人员登录
        {
            bool sta = managerService.login(userName, password);
            string state = "true";

            if (sta == false)
            {
                state = "false";
                
            }
            return Json(state);
        }

        public string addManager() //添加监护人员（未实现）
        {
            return "addManager";
        }

        public string deleteManager(int id) //删除监护人员
        {
            managerService.deleteManager(id);
            return "deleteManager";
        }

        public string changeManager(int id) //更改监护人员信息（未实现）
        {
            return "changeManager";
        }

        public ActionResult getManagerByManName(string manName) //通过监护人员的用户名返回监护人员的基本信息
        {
            MyManager managerSel = managerService.getManagerByManName(manName);
            return Json(managerSel, JsonRequestBehavior.AllowGet);
        }

        public ActionResult getAllManagers() //获取所有的监护人员
        {
            List<Manager> allManager = managerService.getAllManagers();
            return Json(allManager,JsonRequestBehavior.AllowGet);
        }
    }
}
