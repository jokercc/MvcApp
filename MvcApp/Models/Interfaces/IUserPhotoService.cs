using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApp.Models.MyModels;

namespace MvcApp.Models.Interfaces
{
    public interface IUserPhotoService
    {
        List<MyUserPhoto> getUserPhotoByUserId(int userId);
    }
}