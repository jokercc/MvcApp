using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApp.Models.MyModels
{
    public class MyLocation
    {
        public global::System.Int64 ID_Location { get; set; }
        public global::System.Int64 ID_User { get; set; }
        public global::System.DateTime DataTime { get; set; }
        public global::System.Double Longitude { get; set; }
        public global::System.Double Latitude { get; set; }
    }
}