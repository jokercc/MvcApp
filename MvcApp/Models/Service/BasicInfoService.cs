using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models;
using MvcApp.Models.Interfaces;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Service
{
    public class BasicInfoService : IBasicInfoService
    {
        ProEntities proEn;
        ILocationService locationService;
        IEmergencyInfoService emergencyInfoService;
        IHealthPlanService healthPlanService;

        public BasicInfoService()
        {
            proEn = new ProEntities();
            locationService = new LocationService();
            emergencyInfoService = new EmergencyInfoService();
            healthPlanService = new HealthPlanService();
        }

        public bool login(string userName, string password)
        {
            bool state = false;
            try
            {
                var user = proEn.BasicInfo.First(m => m.UserName == userName);
                if (user.UserPassword.Equals(password))
                {
                    state = true;
                }
            }
            catch (Exception exception)
            {
                Console.Write(exception.Message);
            }

            return state;
        }

        public void addUser(BasicInfo basicInfo)
        {
            proEn.AddToBasicInfo(basicInfo);
            proEn.SaveChanges();
        }

        public void deleteUser(int id)
        {
            //remove the reference tables's records and the user record;
            var userToDelete = proEn.BasicInfo.First(m => m.ID_User == id);

            healthPlanService.deleteByUserId(id);
            locationService.deleteByUserId(id);
            emergencyInfoService.deleteByUserId(id);
            proEn.DeleteObject(userToDelete);
            proEn.SaveChanges();
        }

        public void changeUser(int id, BasicInfo basicInfo)
        {
            var userToChange = proEn.BasicInfo.First(m => m.ID_User == id);
            userToChange.Age = 1;
            proEn.SaveChanges();
        }

        public MyBasicInfo getUserByUserName(string userName) //通过userName获取详细的用户信息
        {
            var userSel = proEn.BasicInfo.First(m => m.UserName == userName); //通过userName获取实体关系model
            MyBasicInfo user = new MyBasicInfo //将数据库中的实体关系model值复制到自己定义的不和数据库关联的model并返回
            {
                ID_User = userSel.ID_User,   
                ID_Manager = userSel.ID_Manager,
                Name = userSel.Name,
                Age = userSel.Age,
                Sex = userSel.Sex,
                Marrige = userSel.Marrige,
                TelNum = userSel.TelNum,
                Address = userSel.Address,
                Children = userSel.Children,
                Hobby = userSel.Hobby,
                UserName = userSel.UserName,
                UserPassword = "",
                face100 = userSel.face100,
            };
            if (userSel.BloodThreshold == null)
            {
                user.BloodThreshold = 0;
            }
            else
            {
                user.BloodThreshold = (short)userSel.BloodThreshold;
            }

            if (userSel.GlucoseThreshold == null)
            {
                user.GlucoseThreshold = 0;
            }
            else
            {
                user.GlucoseThreshold = (short)userSel.GlucoseThreshold;
            }

            if (userSel.TempThreshold == null)
            {
                user.TempThreshold = 0;
            }
            else
            {
                user.TempThreshold = (short)userSel.TempThreshold;
            }
            return user;
        }

        public Boolean changeUserFacePath(string userName, string path)
        {
            var userSel = proEn.BasicInfo.First(m => m.UserName == userName);
            userSel.face100 = path;
            return true;
        }

        public BasicInfo getUserById(int id) //根据ID获取用户信息
        {
            var userSel = proEn.BasicInfo.First(m => m.ID_User == id);
            return userSel;
        }

    }
}