using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models;
using MvcApp.Models.Interfaces;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Service
{

    public class HealthPlanService : IHealthPlanService
    {
        ProEntities proEn;

        public HealthPlanService()
        {
            proEn = new ProEntities();
        }

        public void addHealthPlan(HealthPlan healthPlan)
        {
            proEn.AddToHealthPlan(healthPlan);
            proEn.SaveChanges();
        }

        public void deleteHealthPlan(int id)
        {
            var healthPlan = proEn.HealthPlan.First(m => m.ID_Plan == id);
            proEn.DeleteObject(healthPlan);
            proEn.SaveChanges();
        }

        public void changeHealthPlan(int id, HealthPlan healthPlan)
        {
            var healthPlanToChange = proEn.HealthPlan.First(m => m.ID_Plan == id);

            proEn.SaveChanges();
        }

        public List<HealthPlan> getByUser(BasicInfo user)
        {
            List<HealthPlan> healthPlans = proEn.HealthPlan.ToList().FindAll(m=>m.ID_User == user.ID_User);
            return healthPlans;
        }

        public void deleteByUserId(int id)
        {
            List<HealthPlan> healthPlans = proEn.HealthPlan.ToList().FindAll(m => m.ID_User == id);
            foreach (HealthPlan h in healthPlans)
            {
                proEn.DeleteObject(h);
            }
            proEn.SaveChanges();
        }

        public MyHealthPlan getHealthPlanById(int id) //通过id号获取健康计划的详细信息
        {
            var healthPlanSel = proEn.HealthPlan.First(m => m.ID_Plan == id); //从数据库中取出实体关系model
            MyHealthPlan healthPlan = new MyHealthPlan //将数据库中的实体关系model值复制到自己定义的不和数据库关联的model并返回
            {
                ID_User = healthPlanSel.ID_User,
                Recipes = healthPlanSel.Recipes,
                Movement = healthPlanSel.Movement,
                Schedule = healthPlanSel.Schedule,
            };
            return healthPlan;
        }
    }
}