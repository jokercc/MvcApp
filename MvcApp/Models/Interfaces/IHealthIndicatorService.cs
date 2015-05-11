using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Interfaces
{
    public interface IHealthIndicatorService
    {
        List<MyHealthIndicator> getHealthIndicatorByDate(DateTime date, int id); //获取传入日期的当月的健康信息
    }
}