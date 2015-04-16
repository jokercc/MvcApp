using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Interfaces
{
    public interface ILocationService
    {
        void addLocation(Location location);

        void deleteLocation(int id);

        void changeLocation(int id, Location location);

        List<Location> getByUser(BasicInfo user);

        void deleteByUserId(int id);

        List<MyLocation> getLocationByDate(DateTime date, int id); //根据日期和用户id获取用户活动信息
    }
}