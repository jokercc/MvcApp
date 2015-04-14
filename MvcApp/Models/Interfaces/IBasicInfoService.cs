using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Interfaces
{
    public interface IBasicInfoService
    {
        bool login(string userName, string password);

        void addUser(BasicInfo basicInfo);

        void deleteUser(int id);

        void changeUser(int id, BasicInfo basicInfo);

        BasicInfo getUserById(int id);

        MyBasicInfo getUserByUserName(string userName);

        Boolean changeUserFacePath(int userId, string path);
    }
}