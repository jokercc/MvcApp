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
        IUserPhotoService userPhotoService;

        public BasicInfoController()
        {
            basicInfoService = new BasicInfoService();
            locationService = new LocationService(); 
            emergencyInfoService = new EmergencyInfoService();
            healthPlanService = new HealthPlanService();
            healthIndicatorService = new HealthIndicatorService();
            userPhotoService = new UserPhotoService();
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

        public string addUser() //添加用户（未实现）
        {
            
            return "addUser";
        }

        public string deleteUser(int id) //删除用户
        {
            basicInfoService.deleteUser(id);
            return "deleteUser";
        }

        public string changeUser(int id) //更改用户信息（未实现）
        {
            return "changeUser";
        }

        public ActionResult getUserByUserName(string userName) //获取用户信息
        {
            MyBasicInfo userSel = basicInfoService.getUserByUserName(userName);

            return Json(userSel, JsonRequestBehavior.AllowGet);
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

        public JsonResult getHealthIndicatorByDate(string myYear, string myMonth, int id) //根据日期获取用户的健康指标信息
        {
            int y = Int16.Parse(myYear);
            int m = Int16.Parse(myMonth);
            DateTime d = new DateTime(y, m, 1);
            List<MyHealthIndicator> healthIndicatorList = healthIndicatorService.getHealthIndicatorByDate(d, id);
            return Json(healthIndicatorList, JsonRequestBehavior.AllowGet);
        }

        public JsonResult getLocationByDate(string Date, int id) //根据日期获取用户的活动信息
        {
            if (Date.Length == 10)
            {
                string bDay = Date.Substring(0, 2);
                string bMonth = Date.Substring(3, 2);
                string bYear = Date.Substring(6);
                Date = bMonth + "/" + bDay + "/" + bYear;
            }
            else
            {
                string bDay = Date.Substring(0, 2);
                string bMonth = Date.Substring(3, 1);
                string bYear = Date.Substring(5);
                Date = bMonth + "/" + bDay + "/" + bYear;
            }


            DateTime date = DateTime.Parse(Date);

            List<MyLocation> locationList = locationService.getLocationByDate(date, id);
            return Json(locationList, JsonRequestBehavior.AllowGet);
        }

        public JsonResult getUserPhotoByUserId(int userId) //通过用户Id获取他的所有图片的路径
        {
            List<MyUserPhoto> list = userPhotoService.getUserPhotoByUserId(userId);
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult testGetLocationByDate() //提供数据给前端测试，获取用户的位置信息
        {
            List<MyLocation> list = new List<MyLocation>();

            MyLocation l1 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.530958,
                Longitude = 29.544901,
            };

            MyLocation l2 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531075,
                Longitude = 29.544901,
            };

            MyLocation l3 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531196,
                Longitude = 29.544901,
            };

            MyLocation l4 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531322,
                Longitude = 29.544916,
            };

            MyLocation l5 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531466,
                Longitude = 29.544928,
            };

            MyLocation l6 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531569,
                Longitude = 29.544932,
            };

            MyLocation l7 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531578,
                Longitude = 29.545026,
            };

            MyLocation l8 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.53161,
                Longitude = 29.545093,
            };

            MyLocation l9 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531556,
                Longitude = 29.545282,
            };

            MyLocation l10 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531556,
                Longitude = 29.545376,
            };

            MyLocation l11 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531506,
                Longitude = 29.545521,
            };

            MyLocation l12 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531466,
                Longitude = 29.545655,
            };

            MyLocation l13 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531403,
                Longitude = 29.545886,
            };

            MyLocation l14 = new MyLocation
            {
                ID_Location = 1,
                ID_User = 1,
                DataTime = new DateTime(2015, 4, 21),
                Latitude = 106.531322,
                Longitude = 29.546044,
            };

            list.Add(l1);
            list.Add(l2);
            list.Add(l3);
            list.Add(l4);
            list.Add(l5);
            list.Add(l6);
            list.Add(l7);
            list.Add(l8);
            list.Add(l9);
            list.Add(l10);
            list.Add(l11);
            list.Add(l12);
            list.Add(l13);
            list.Add(l14);


            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult testGetHealthIndicator() //提供数据给前端测试，获取用户健康信息
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

        public JsonResult testGetUser() //提供数据给前端测试，获取一个用户信息
        {
            MyBasicInfo user = new MyBasicInfo //将数据库中的实体关系model值复制到自己定义的不和数据库关联的model并返回
            {
                ID_User = 1,
                ID_Manager = 2,
                Name = "王大爷",
                Age = 22,
                Sex = true,
                birthday = new DateTime(1962, 9, 29),
                familyTelNum = "13666666666",
                blood = "B",
                Marrige = false,
                TelNum = "13555555555",
                Address = "成都市一环路东一段",
                Children = "一男一女",
                Hobby = "看电影",
                UserName = "test",
                UserPassword = "",
                face100 = "/Content/BasicInfo/face100/1.jpg",
            };

            return Json(user, JsonRequestBehavior.AllowGet);
        }

        public JsonResult testGetHealthPlan() //提供数据给前端测试，获取用户健康计划
        {
            MyHealthPlan test = new MyHealthPlan 
            { 
                ID_Plan = 1,
                ID_User = 1,
                Movement = " ",
                Schedule = " ",
                Recipes = "早餐：老人营养瘦肉粥、牛奶、鸡蛋、玉米;午餐：米饭、鸡蛋汤、炒菜;晚餐：小米粥、水果、甜点",
            };
            List<MyHealthPlan> list = new List<MyHealthPlan>();
            list.Add(test);
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult testGetUserPhoto() //提供数据给前端测试，获取用户的活动图片
        { 
            MyUserPhoto photo1 = new MyUserPhoto
            {
                ID_User = 1,
                ID_Photo = 1,
                PhotoPath = "/Content/UserPhoto/1.png",
            };

            MyUserPhoto photo2 = new MyUserPhoto
            {
                ID_User = 1,
                ID_Photo = 2,
                PhotoPath = "/Content/UserPhoto/2.png",
            };

            MyUserPhoto photo3 = new MyUserPhoto
            {
                ID_User = 1,
                ID_Photo = 3,
                PhotoPath = "/Content/UserPhoto/3.png",
            };

            List<MyUserPhoto> list = new List<MyUserPhoto>();
            list.Add(photo1);
            list.Add(photo2);
            list.Add(photo3);

            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}
