using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Interfaces
{
    public interface ILocationService
    {
        void addLocation(Location location); //添加位置信息

        void deleteLocation(int id); //删除位置信息

        void changeLocation(int id, Location location); //更改位置信息

        List<Location> getByUser(BasicInfo user); //获取用户的位置信息

        void deleteByUserId(int id); //删除用户关联的位置信息

        List<MyLocation> getLocationByDate(DateTime date, int id); //根据日期和用户id获取用户活动信息
    }
}