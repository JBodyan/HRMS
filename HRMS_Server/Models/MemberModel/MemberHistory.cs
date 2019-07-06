using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRMS_Server.Models.MemberModel
{
    public class MemberHistory
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Event { get; set; }
        public DateTime Date { get; set; }

    }
}
