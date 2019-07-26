using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace HRMS_Server.Models.MemberModel
{
    public class CandidateProfile
    {
        [Key]
        [ForeignKey("Member")]
        public Guid Id { get; set; }
        public string CurriculumVitae { get; set; }
        public string About { get; set; }
        public string CareerObjective { get; set; }
        public DateTime ReceiptDate { get; set; }

    }
}
