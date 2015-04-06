using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApp.Models;
using MvcApp.Models.MyModels;
using MvcApp.Models.Interfaces;
using MvcApp.Models.Service;

namespace MvcApp.Controllers
{
    public class EmergencyInfoController : Controller
    {
        //
        // GET: /Emergency/
        IEmergencyInfoService emergencyInfoService;

        public EmergencyInfoController()
        {
            emergencyInfoService = new EmergencyInfoService();
        }

        public JsonResult getEmergencyInfoById(int id) //通过id获取的详细信息
        {
            MyEmergencyInfo emergencyInfo = emergencyInfoService.getEmergencyInfoById(id);
            return Json(emergencyInfo, JsonRequestBehavior.AllowGet);
        }

        public JsonResult test() //测试使用
        {
            List<MyEmergencyInfo> test = new List<MyEmergencyInfo>();

            MyEmergencyInfo info1 = new MyEmergencyInfo
            {
                ID_Emergency = 1,
                ID_User = 1,
                Location = "cd",
                EmergencyDate = new DateTime(2011,11,11),
                Staff = "staff1",
                IllnessAnalyses = "ill1",
                MedicalResult = "me1",
                Advice = "adv1",
            };

            MyEmergencyInfo info2 = new MyEmergencyInfo
            {
                ID_Emergency = 2,
                ID_User = 2,
                Location = "cd2",
                EmergencyDate = new DateTime(2011, 11, 12),
                Staff = "staff2",
                IllnessAnalyses = "ill2",
                MedicalResult = "me2",
                Advice = "adv2",
            };

            test.Add(info1);
            test.Add(info2);
            return Json(test, JsonRequestBehavior.AllowGet);
        }

    }
}
