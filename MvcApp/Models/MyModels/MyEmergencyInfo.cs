using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApp.Models.MyModels
{
    public class MyEmergencyInfo
    {
        public global::System.Int64 ID_Emergency { get; set; }
        public global::System.Int64 ID_User { get; set; }
        public global::System.String Location { get; set; }
        public global::System.DateTime EmergencyDate { get; set; }
        public global::System.String Staff { get; set; }
        public global::System.String IllnessAnalyses { get; set; }
        public global::System.String MedicalResult { get; set; }
        public global::System.String Advice { get; set; }
    }
}