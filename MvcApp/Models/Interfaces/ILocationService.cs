using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApp.Models.Interfaces
{
    public interface ILocationService
    {
        void addLocation(Location location);

        void deleteLocation(int id);

        void changeLocation(int id, Location location);

        List<Location> getByUser(BasicInfo user);

        void deleteByUserId(int id);
    }
}