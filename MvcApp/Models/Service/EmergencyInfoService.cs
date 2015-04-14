using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models;
using MvcApp.Models.MyModels;
using MvcApp.Models.Interfaces;

namespace MvcApp.Models.Service
{
    public class EmergencyInfoService : IEmergencyInfoService
    {
        ProEntities proEn;

        public EmergencyInfoService()
        {
            proEn = new ProEntities();
        }

        public void addEmergencyInfo(EmergencyInfo emergencyInfo)
        {
            proEn.AddToEmergencyInfo(emergencyInfo);
            proEn.SaveChanges();
        }

        public void deleteEmergencyInfo(int id)
        {
            var emergencyInfoToDelete = proEn.EmergencyInfo.First(m => m.ID_Emergency == id);
            proEn.DeleteObject(emergencyInfoToDelete);
            proEn.SaveChanges();
        }

        public void changeEmergencyInfo(int id, EmergencyInfo emergencyInfo)
        {
            var emergencyInfoToChange = proEn.EmergencyInfo.First(m => m.ID_Emergency == id);

            emergencyInfoToChange.IllnessAnalyses = emergencyInfo.IllnessAnalyses;
            emergencyInfoToChange.Location = emergencyInfo.Location;
            emergencyInfoToChange.MedicalResult = emergencyInfo.MedicalResult;
            emergencyInfoToChange.Staff = emergencyInfo.Staff;

            proEn.SaveChanges();
        }

        public List<EmergencyInfo> getByUser(BasicInfo user)
        {
            List<EmergencyInfo> emergencyInfos = proEn.EmergencyInfo.ToList().FindAll(m => m.ID_User == user.ID_User);
            return emergencyInfos;
        }

        public void deleteByUserId(int id)
        {
            List<EmergencyInfo> emergencyInfos = proEn.EmergencyInfo.ToList().FindAll(m => m.ID_User == id);
            foreach (EmergencyInfo em in emergencyInfos)
            {
                proEn.DeleteObject(em);
            }
            proEn.SaveChanges();
        }

        public MyEmergencyInfo getEmergencyInfoById(int id) ////通过id号获取急救信息的详细信息
        {
            var emergencyInfoSel = proEn.EmergencyInfo.First(m => m.ID_Emergency == id);//从数据库中取出实体关系model
            MyEmergencyInfo emergencyInfo = new MyEmergencyInfo //将数据库中的实体关系model值复制到自己定义的不和数据库关联的model并返回
            {
                ID_User = emergencyInfoSel.ID_User,
                Location = emergencyInfoSel.Location,
                EmergencyDate = emergencyInfoSel.EmergencyDate,
                Staff = emergencyInfoSel.Staff,
                IllnessAnalyses = emergencyInfoSel.IllnessAnalyses,
                MedicalResult = emergencyInfoSel.MedicalResult,
                Advice = emergencyInfoSel.Advice,
            };
            return emergencyInfo;
        }

        public List<MyEmergencyInfo> searchForEmergencyInfo(int userId, DateTime beginTime, DateTime endTime)
        {
            //使用实体关系model取出数据库中的数据
            List<EmergencyInfo> list = new List<EmergencyInfo>();
            list = proEn.EmergencyInfo.ToList();

            //将和数据库相关联的model复制到自己定义的model中并返回
            List<MyEmergencyInfo> myList = new List<MyEmergencyInfo>();
            //遍历list获取符合要求的emergencyInfo 添加到myList
            for (int i = 0; i < list.Count; i++)
            {
                if (list[i].EmergencyDate >= beginTime && list[i].EmergencyDate <= endTime && list[i].ID_User == userId) //条件符合就添加到mylist中
                {
                    MyEmergencyInfo em = new MyEmergencyInfo
                    {
                        ID_Emergency = list[i].ID_Emergency,
                        ID_User = list[i].ID_User,
                        Location = list[i].Location,
                        EmergencyDate = list[i].EmergencyDate,
                        Staff = list[i].Staff,
                        IllnessAnalyses = list[i].IllnessAnalyses,
                        MedicalResult = list[i].MedicalResult,
                        Advice = list[i].Advice,
                    };
                    myList.Add(em);
                }
            }
            return myList;
        }
    }
}