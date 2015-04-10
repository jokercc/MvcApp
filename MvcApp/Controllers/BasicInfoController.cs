using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services;
using MvcApp.Models.Service;
using MvcApp.Models;
using MvcApp.Models.Interfaces;
using MvcApp.Models.MyModels;

namespace MvcApp.Controllers
{
    public class BasicInfoController : Controller
    {
        //
        // GET: /BasicInfo/
        IBasicInfoService basicInfoService;
        ILocationService locationService;
        IEmergencyInfoService emergencyInfoService;
        IHealthPlanService healthPlanService;
        IHealthIndicatorService healthIndicatorService;

        public BasicInfoController()
        {
            basicInfoService = new BasicInfoService();
            locationService = new LocationService();
            emergencyInfoService = new EmergencyInfoService();
            healthPlanService = new HealthPlanService();
            healthIndicatorService = new HealthIndicatorService();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult login(string userName, string password) //用户登录
        {
            bool sta = basicInfoService.login(userName, password);
            string state = "true";

            if (sta == false)
            {
                state = "false";

            }
            return Json(state);
            //return RedirectToAction("BasicInfo", "Home");
        }

        public string addUser() //添加用户  
        {
            BasicInfo basicInfo = BasicInfo.CreateBasicInfo(3, "caocan", 22, true, false, "12333333333", "qy", "none", "play", "test", "test");
            basicInfoService.addUser(basicInfo);
            return "addUser";
        }

        public string deleteUser(int id) //删除用户
        {
            basicInfoService.deleteUser(id);
            return "deleteUser";
        }

        public string changeUser(int id) //更改用户信息
        {
            BasicInfo userToChange = BasicInfo.CreateBasicInfo(3, "hehe", 22, true, true, "13666666666", "chengdu", "none", "play", "test", "123456");
            basicInfoService.changeUser(id, userToChange);
            return "changeUser";
        }

        public ActionResult getUserByUserName(string userName) //获取用户信息
        {
            MyBasicInfo userSel = basicInfoService.getUserByUserName(userName);

            return Json(userSel, JsonRequestBehavior.AllowGet);
        }

        public string getAllUsers() //获取所有用户
        {
            List<BasicInfo> allUser = basicInfoService.getAllUsers();
            return "getAllUsers";
        }

        public ActionResult getLocationByUserId(int id) //获取用户活动信息
        {
            BasicInfo test = basicInfoService.getUserById(id);
            List<Location> locations = locationService.getByUser(test);
            return Json(locations, JsonRequestBehavior.AllowGet);
        }

        public ActionResult getEmergencyInfoByUserId(int id) //获取用户急救信息
        {
            BasicInfo test = basicInfoService.getUserById(id);
            List<EmergencyInfo> emergencyInfos = emergencyInfoService.getByUser(test);
            return Json(emergencyInfos, JsonRequestBehavior.AllowGet);
        }

        public ActionResult getHealthPlanByUserId(int id) //获取用户健康计划
        {
            BasicInfo test = basicInfoService.getUserById(id);
            List<MyHealthPlan> healthPlans = healthPlanService.getByUser(test);
            return Json(healthPlans, JsonRequestBehavior.AllowGet);
        }

        public JsonResult searchForEmergencyInfo(int userId, string bTime, string eTime) //根据日期搜索来获取用户急救信息
        {
            //将前台取来的日期数据解析为后台可以使用的日期类型
            string bDay = bTime.Substring(0, 2);
            string bMonth = bTime.Substring(3, 2);
            string bYear = bTime.Substring(6);
            bTime = bMonth + "/" + bDay + "/" + bYear;

            string eDay = eTime.Substring(0, 2);
            string eMonth = eTime.Substring(3, 2);
            string eYear = eTime.Substring(6);
            eTime = eMonth + "/" + eDay + "/" + eYear;

            DateTime beginTime = DateTime.Parse(bTime);
            DateTime endTime = DateTime.Parse(eTime);

            //所有数据存到list中
            List<MyEmergencyInfo> emergencyInfoList = new List<MyEmergencyInfo>(); 
            emergencyInfoList = emergencyInfoService.searchForEmergencyInfo(userId, beginTime, endTime);
            return Json(emergencyInfoList, JsonRequestBehavior.AllowGet);
        }

        public JsonResult getHealthIndicatorByDate(string myYear, string myMonth, int id)
        {
            int y = Int16.Parse(myYear);
            int m = Int16.Parse(myMonth);
            DateTime d = new DateTime(y, m, 1);
            List<MyHealthIndicator> healthIndicatorList = healthIndicatorService.getHealthIndicatorByDate(d, id);
            return Json(healthIndicatorList, JsonRequestBehavior.AllowGet);
        }

        public JsonResult testGetHealthIndicator()
        {
            List<MyHealthIndicator> list = new List<MyHealthIndicator>();

            MyHealthIndicator t1 = new MyHealthIndicator
            {
                SystolicPressure = 1,
                DiastolicPressure = 1,
                BloodGlucose = 1,
                Duration = 1,
                Calorie = 1,
                Distance = 1,
                HeartBeat = 1,
                Date = new DateTime(2015, 4, 1),
            };

            MyHealthIndicator t2 = new MyHealthIndicator
            {
                SystolicPressure = 2,
                DiastolicPressure = 2,
                BloodGlucose = 2,
                Duration = 2,
                Calorie = 2,
                Distance = 2,
                HeartBeat = 2,
                Date = new DateTime(2015, 4, 2),
            };

            list.Add(t1);
            list.Add(t2);

            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}
