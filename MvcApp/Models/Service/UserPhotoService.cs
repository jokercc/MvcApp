using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models;
using MvcApp.Models.MyModels;
using MvcApp.Models.Interfaces;

namespace MvcApp.Models.Service
{
    public class UserPhotoService : IUserPhotoService
    {
        ProEntities proEn;

        public UserPhotoService()
        {
            proEn = new ProEntities();
        }

        public List<MyUserPhoto> getUserPhotoByUserId(int userId) //通过userId获取和他相关的所有的活动图片url
        {
            //从数据库中取出所有userphoto
            List<UserPhoto> list = new List<UserPhoto>();
            list = proEn.UserPhoto.ToList();
            //找到userId为要查询的 add到mylist并返回
            List<MyUserPhoto> myList = new List<MyUserPhoto>();
            for (int i = 0; i < list.Count; i++)
            {
                if (userId == list[i].ID_User)
                {
                    MyUserPhoto m = new MyUserPhoto
                    {
                        ID_Photo = list[i].ID_Photo,
                        ID_User = list[i].ID_User,
                        PhotoPath = list[i].PhotoPath,
                    };
                    myList.Add(m);
                }
            }
            return myList;
        }
    }
}