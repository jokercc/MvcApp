using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models.Interfaces;
using MvcApp.Models;

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
            List<Location> locations = proEn.Location.ToList().FindAll(m=>m.ID_User == user.ID_User);
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
    }
}