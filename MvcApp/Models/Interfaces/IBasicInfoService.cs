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
        bool login(string userName, string password); //用户登录

        void addUser(BasicInfo basicInfo); //添加用户

        void deleteUser(int id); //删除用户

        void changeUser(int id, BasicInfo basicInfo); //更改用户信息

        BasicInfo getUserById(int id); //通过id号获取用户信息

        MyBasicInfo getUserByUserName(string userName); //通过用户名获取用户信息

        Boolean changeUserFacePath(int userId, string path); //更改用户的头像路径
    }
}