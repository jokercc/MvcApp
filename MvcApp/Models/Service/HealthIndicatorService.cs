using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models;
using MvcApp.Models.MyModels;
using MvcApp.Models.Interfaces;

namespace MvcApp.Models.Service
{
    public class HealthIndicatorService : IHealthIndicatorService
    {
        ProEntities proEn;

        public HealthIndicatorService()
        {
            proEn = new ProEntities();
        }

        public List<MyHealthIndicator> getHealthIndicatorByDate(DateTime date, int id)
        {
            //使用实体关系model取出数据库中的数据
            List<HealthIndicator> list = new List<HealthIndicator>();
            list = proEn.HealthIndicator.ToList();
            //将和数据库相关联的model复制到自己定义的model中并返回
            List<MyHealthIndicator> myList = new List<MyHealthIndicator>();
            //遍历list获取符合要求的healthIndicator 添加到myList
            for (int i = 0; i < list.Count; i++)
            {
                if (date.Month == list[i].Date.Month && id == list[i].ID_User)
                {
                    MyHealthIndicator heal = new MyHealthIndicator
                    {
                        ID_User = list[i].ID_User,
                        BloodGlucose = list[i].BloodGlucose,
                        SystolicPressure = list[i].SystolicPressure,
                        DiastolicPressure = list[i].DiastolicPressure,
                        Duration = list[i].Duration,
                        Calorie = list[i].Calorie,
                        Distance = list[i].Distance,
                        Date = list[i].Date,
                        HeartBeat = list[i].HeartBeat,
                    };
                    myList.Add(heal);
                }
            }
            return myList;
        }
    }
}