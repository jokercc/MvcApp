using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Interfaces
{
    public interface IEmergencyInfoService
    {
        void addEmergencyInfo(EmergencyInfo emergencyInfo);

        void deleteEmergencyInfo(int id);

        void changeEmergencyInfo(int id, EmergencyInfo emergencyInfo);

        List<EmergencyInfo> getByUser(BasicInfo user);

        void deleteByUserId(int id);

        MyEmergencyInfo getEmergencyInfoById(int id);

        List<MyEmergencyInfo> searchForEmergencyInfo(int userId, DateTime beginTime, DateTime endTime);
    }
}