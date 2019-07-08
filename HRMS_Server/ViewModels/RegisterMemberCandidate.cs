using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Models.MemberModel;
using Microsoft.AspNetCore.Http;

namespace HRMS_Server.ViewModels
{
    public class RegisterMemberCandidate
    {
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string LastName { get; set; }

        public string Phone { get; set; }
        public string Email { get; set; }
        public string Skype { get; set; }

        public Gender Gender { get; set; }
        public DateTime BirthDate { get; set; }

        public IFormFile CurriculumVitae { get; set; }
        public string About { get; set; }
        public string CareerObjective { get; set; }

    }
}
