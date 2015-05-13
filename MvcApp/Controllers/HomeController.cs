using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using MvcApp.Models;

namespace MvcApp.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        [OutputCache(Duration = 60, VaryByParam = "None")]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult BasicInfo(string userName) //返回指定的用户的主界面
        {
            ViewData["userName"] = userName;
            return View();
        }

        public ActionResult Manager(string manName) //返回指定的监护人员的主界面
        {
            ViewData["manName"] = manName;
            return View();
        }

        public ActionResult Avatar()
        {
            return View();
        }
    }
}
