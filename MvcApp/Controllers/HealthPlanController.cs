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
    public class HealthPlanController : Controller
    {
        public IHealthPlanService healthPlanService;

        public void HealthPlanService()
        {
            healthPlanService = new HealthPlanService();
        }

        public JsonResult getHealthPlanById(int id) //通过id获取健康计划的详细信息
        {
            MyHealthPlan healthPlan = healthPlanService.getHealthPlanById(id);
            return Json(healthPlan, JsonRequestBehavior.AllowGet);
        }

    }
}
