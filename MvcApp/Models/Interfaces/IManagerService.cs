using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Interfaces
{
    public interface IManagerService
    {
        bool login(string userName, string password);

        void addManager(Manager manager);

        void deleteManager(int id);

        void changeManager(int id, Manager manager);

        Manager getManagerById(int id);

        MyManager getManagerByManName(string manName);

        List<Manager> getAllManagers();
    }
}