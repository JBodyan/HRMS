using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRMS_Server.Models.MemberModel
{
    public class Member
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string LastName { get; set; }

        public string Phone { get; set; }
        public string Email { get; set; }
        public string Skype { get; set; }

        public Gender Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public Status Status { get; set; }

        public bool IsArchived { get; set; }
        public bool IsRemoved { get; set; }

        public EmployeeProfile EmployeeProfile { get; set; }
        public CandidateProfile CandidateProfile { get; set; }

        public IEnumerable<MemberHistory> Histories { get; set; }


    }

    
}
