using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Models.MemberModel;
using Microsoft.AspNetCore.Http;

namespace HRMS_Server.ViewModels
{
    public class RegisterMemberEmployee
    {
        public Guid MemberId { get; set; }
        public string MaritalStatus { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public Department Department { get; set; }
        public Position Position { get; set; }
    }
}
