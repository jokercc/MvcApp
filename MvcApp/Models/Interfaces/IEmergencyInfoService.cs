using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Interfaces
{
    public interface IEmergencyInfoService
    {
        void addEmergencyInfo(EmergencyInfo emergencyInfo); //添加急救信息

        void deleteEmergencyInfo(int id); //删除急救信息

        void changeEmergencyInfo(int id, EmergencyInfo emergencyInfo); //更改急救信息

        List<EmergencyInfo> getByUser(BasicInfo user); //获取用户的所有急救信息

        void deleteByUserId(int id); //删除传入用户的急救信息

        MyEmergencyInfo getEmergencyInfoById(int id); //通过急救信息id获取急救信息内容

        List<MyEmergencyInfo> searchForEmergencyInfo(int userId, DateTime beginTime, DateTime endTime); //通过开始日期和结束日期搜索急救信息
    }
}