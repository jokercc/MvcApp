using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models.Interfaces;
using MvcApp.Models;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Service
{
    public class ManagerService : IManagerService
    {
        ProEntities proEn;

        public ManagerService()
        {
            proEn = new ProEntities();
        }

        public bool login(string userName, string password)
        {
            bool state = false;
            try
            {
                var manager = proEn.Manager.First(m => m.ManName == userName);
                if (manager.ManPassword.Equals(password))
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

        public void addManager(Manager manager)
        {
            proEn.AddToManager(manager);
            proEn.SaveChanges();
        }

        public void deleteManager(int id)
        {
            var managerToDelete = proEn.Manager.First(m => m.ID_Manager == id);
            proEn.DeleteObject(managerToDelete);
            proEn.SaveChanges();
        }

        public void changeManager(int id, Manager manager)
        {
            var managerToChange = proEn.Manager.First(m => m.ID_Manager == id);

            proEn.SaveChanges();
        }

        public Manager getManagerById(int id) 
        {
            var manSel = proEn.Manager.First(m => m.ID_Manager == id);
            return manSel;
        }

        public MyManager getManagerByManName(string manName)
        {
            //从数据库中取出关联的model，赋值给自己定义的model并返回给controller
            var manSel = proEn.Manager.First(m => m.ManName == manName);
            MyManager man = new MyManager
            {
                Man_Add = manSel.Man_Add,
                Man_Age = manSel.Man_Age,
                Man_Name = manSel.Man_Name,
                Man_Sex = manSel.Man_Sex,
                Man_Tel = manSel.Man_Tel,
                ManName = manSel.ManName,
                ManPassword = manSel.ManPassword,
                SysManIdentify = manSel.SysManIdentify,
                //GroupNum = manSel.GroupNum,
                //GroupPlan = manSel.GroupPlan,
            };
            return man;
        }

        public List<Manager> getAllManagers()
        {
            List<Manager> managerList = proEn.Manager.ToList();
            return managerList;
        }
    }
}