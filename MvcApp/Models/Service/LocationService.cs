using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models.Interfaces;
using MvcApp.Models;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Service
{
    public class LocationService : ILocationService
    {
        ProEntities proEn;

        public LocationService()
        {
            proEn = new ProEntities();
        }

        public void addLocation(Location location)
        {
            proEn.AddToLocation(location);
            proEn.SaveChanges();
        }

        public void deleteLocation(int id)
        {
            var locationToDelete = proEn.Location.First(m => m.ID_Location == id);
            proEn.DeleteObject(locationToDelete);
            proEn.SaveChanges();
        }

        public void changeLocation(int id, Location location)
        {
            var LocationToChange = proEn.Location.First(m => m.ID_Location == id);
            LocationToChange.DataTime = location.DataTime;
            LocationToChange.Latitude = location.Latitude;
            LocationToChange.Longitude = location.Longitude;
            proEn.SaveChanges();
        }

        public List<Location> getByUser(BasicInfo user)
        {
            List<Location> locations = proEn.Location.ToList().FindAll(m => m.ID_User == user.ID_User);
            return locations;
        }

        public void deleteByUserId(int id)
        {
            List<Location> locations = proEn.Location.ToList().FindAll(m => m.ID_User == id);
            foreach (Location l in locations)
            {
                proEn.DeleteObject(l);
            }
            proEn.SaveChanges();
        }

        public List<MyLocation> getLocationByDate(DateTime date, int id) //根据日期和用户id获取用户活动信息
        {
            //使用实体关系model取出数据库中的数据
            List<Location> locationList = new List<Location>();
            locationList = proEn.Location.ToList();
            //将和数据库相关联的model复制到自己定义的model中并返回
            List<MyLocation> myLocationList = new List<MyLocation>();
            //遍历list获取符合要求的location 添加到myLocationList
            for (int i = 0; i < locationList.Count; i++)
            {
                if (locationList[i].DataTime == date)
                {
                    MyLocation myLocation = new MyLocation
                    {
                        ID_Location = locationList[i].ID_Location,
                        ID_User = locationList[i].ID_User,
                        DataTime = locationList[i].DataTime,
                        Latitude = locationList[i].Latitude,
                        Longitude = locationList[i].Longitude,
                    };
                    myLocationList.Add(myLocation);
                }
            }
            return myLocationList;
        }
    }
}