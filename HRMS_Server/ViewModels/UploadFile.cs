using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace HRMS_Server.ViewModels
{
    public class UploadFile
    {
        public IFormFile File { get; set; }
        public Guid Id { get; set; }

    }
}
