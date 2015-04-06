using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApp.Models.MyModels
{
    public class MyHealthPlan
    {
        public global::System.Int64 ID_Plan { get; set;}
        public global::System.Int64 ID_User { get; set;}
        public global::System.String Recipes { get; set;}
        public global::System.String Movement { get; set;}
        public global::System.String Schedule { get; set;}
    }
}