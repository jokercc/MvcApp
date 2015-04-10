using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Interfaces
{
    public interface IHealthPlanService
    {
        void addHealthPlan(HealthPlan healthPlan);

        void deleteHealthPlan(int id);

        void changeHealthPlan(int id, HealthPlan healthPlan);

        MyHealthPlan getHealthPlanById(int id);

        List<MyHealthPlan> getByUser(BasicInfo user);

        void deleteByUserId(int id);
    }
}