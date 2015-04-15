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
            return "addUser";
        }

        public string deleteUser(int id) //删除用户
        {
            basicInfoService.deleteUser(id);
            return "deleteUser";
        }

        public string changeUser(int id) //更改用户信息
        {
            return "changeUser";
        }

        public ActionResult getUserByUserName(string userName) //获取用户信息
        {
            MyBasicInfo userSel = basicInfoService.getUserByUserName(userName);

            return Json(userSel, JsonRequestBehavior.AllowGet);
        }

        public string getAllUsers() //获取所有用户
        {
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

        public ActionResult getHealthPlanByUserId(int userId) //获取用户健康计划
        {
            BasicInfo test = basicInfoService.getUserById(userId);
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

        public JsonResult testGetHealthIndicator() //for test
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

            MyHealthIndicator t3 = new MyHealthIndicator
            {
                SystolicPressure = 3,
                DiastolicPressure = 3,
                BloodGlucose = 3,
                Duration = 3,
                Calorie = 3,
                Distance = 3,
                HeartBeat = 3,
                Date = new DateTime(2015, 4, 3),
            };

            MyHealthIndicator t4 = new MyHealthIndicator
            {
                SystolicPressure = 4,
                DiastolicPressure = 4,
                BloodGlucose = 4,
                Duration = 4,
                Calorie = 4,
                Distance = 4,
                HeartBeat = 4,
                Date = new DateTime(2015, 4, 4),
            };

            MyHealthIndicator t5 = new MyHealthIndicator
            {
                SystolicPressure = 5,
                DiastolicPressure = 5,
                BloodGlucose = 5,
                Duration = 5,
                Calorie = 5,
                Distance = 5,
                HeartBeat = 5,
                Date = new DateTime(2015, 4, 5),
            };

            MyHealthIndicator t6 = new MyHealthIndicator
            {
                SystolicPressure = 6,
                DiastolicPressure = 6,
                BloodGlucose = 6,
                Duration = 6,
                Calorie = 6,
                Distance = 6,
                HeartBeat = 6,
                Date = new DateTime(2015, 4, 6),
            };

            MyHealthIndicator t7 = new MyHealthIndicator
            {
                SystolicPressure = 7,
                DiastolicPressure = 7,
                BloodGlucose = 7,
                Duration = 7,
                Calorie = 7,
                Distance = 7,
                HeartBeat = 7,
                Date = new DateTime(2015, 4, 7),
            };

            list.Add(t1);
            list.Add(t2);
            list.Add(t3);
            list.Add(t4);
            list.Add(t5);
            list.Add(t6);
            list.Add(t7);

            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}
