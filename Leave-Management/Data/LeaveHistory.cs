﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Leave_Management.Data
{
    public class LeaveHistory
    {
        [Key]
        public int ID { get; set; }

        [ForeignKey("RequestingEmployeeId")]
        public Employee RequestingEmployee { get; set; }

        public string RequestingEmployeeId { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        [ForeignKey("LeaveTypeID")]
        public LeaveType LeaveType { get; set; }

        public int LeaveTypeID { get; set; }

        public DateTime DateRequested { get; set; }

        public DateTime DateActioned { get; set; }  

        public bool? Approved { get; set; }

        [ForeignKey("ApprovedById")]

        public Employee ApprovedBy { get; set; }

        public String ApprovedById { get; set; }


    }
}
