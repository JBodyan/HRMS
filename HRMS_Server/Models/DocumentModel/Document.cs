using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HRMS_Server.Models.DocumentModel
{
    public class Document
    {
        
        public Guid Id { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        public string Name { get; set; }
        public IEnumerable<DocumentCategory> Categories { get; set; }
        public IEnumerable<DocumentTag> Tags { get; set; }
        public string Url { get; set; }
        public string Path { get; set; }
        public bool IsDeleted { get; set; }
        public User User { get; set; }
        public DateTime UploadingDate { get; set; }
        public DateTime DeletionDate { get; set; }

    }
}
