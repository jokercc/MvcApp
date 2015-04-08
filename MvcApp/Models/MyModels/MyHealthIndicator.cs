using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApp.Models.MyModels
{
    public class MyHealthIndicator
    {
        public global::System.Int64 ID_HealthIndica { get; set; }
        public global::System.Int64 ID_User { get; set; }
        public global::System.Int16 BloodPressure { get; set; }
        public global::System.Int16 BloodGlucose { get; set; }
        public global::System.Int16 Duration { get; set; }
        public global::System.Int16 Calorie { get; set; }
        public global::System.Int16 Distance { get; set; }
        public global::System.Int16 HeartBeat { get; set; }
        public global::System.DateTime Date { get; set; }
    }
}