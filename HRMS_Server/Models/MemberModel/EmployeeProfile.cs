using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HRMS_Server.Models.MemberModel
{
    public class EmployeeProfile
    {
        [Key]
        [ForeignKey("Member")]
        public Guid Id { get; set; }
        public Member Member { get; set; }
        public string MaritalStatus { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public DateTime EmployeedDate { get; set; }
        public string Photo { get; set; }
        public Department Department { get; set; }
        public Position Position { get; set; }



    }
}
