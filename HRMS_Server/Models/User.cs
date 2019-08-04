using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Models.MemberModel;
using Microsoft.AspNetCore.Identity;

namespace HRMS_Server.Models
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string LastName { get; set; }
        public string Photo { get; set; }
    }
}
