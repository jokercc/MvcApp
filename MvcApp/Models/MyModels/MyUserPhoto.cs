using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApp.Models.MyModels
{
    public class MyUserPhoto
    {
        public global::System.Int64 ID_Photo { get; set; }
        public global::System.Int64 ID_User { get; set; }
        public global::System.String PhotoPath { get; set; }
        public global::System.DateTime date { get; set; }
    }
}