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
        bool login(string userName, string password); //监护人员登录

        void addManager(Manager manager); //添加监护人员

        void deleteManager(int id); //删除监护人员

        void changeManager(int id, Manager manager); //更改监护人员信息

        Manager getManagerById(int id); //通过id号获取监护人员的信息

        MyManager getManagerByManName(string manName); //通过监护人员的用户名获取监护人员信息

        List<Manager> getAllManagers(); //获取所有的监护人员
    }
}