using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace HRMS_Server.Models
{
    public class User : IdentityUser
    {
        public string Photo { get; set; }

    }
}
