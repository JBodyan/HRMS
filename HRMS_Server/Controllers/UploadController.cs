using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.Models;
using HRMS_Server.Repository.Implementation;
using HRMS_Server.Repository.Interfaces;
using HRMS_Server.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HRMS_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly IMemberRepository _memberRepository;
        private readonly UserManager<User> _userManager;
        public UploadController(AppDbContext context, UserManager<User> userManager)
        {
            _userManager = userManager;
            _memberRepository = new MemberRepository(context);
        }
        
        [HttpPost]
        [Route("CurriculumVitae/{id}")]
        public ActionResult<object> UploadCurriculumVitae(IFormFile file,Guid id)
        {
            
            if (file == null) return BadRequest("File not found");
            var member = _memberRepository.FindById(id);
            if (member == null) return BadRequest("Member not found");

            try
            {
                if (member.CandidateProfile != null)
                {
                    var fileName = Guid.NewGuid() + file.FileName;
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Uploads", "CV", fileName);
                    file.CopyTo(new FileStream(filePath, FileMode.Create));
                    member.CandidateProfile.CurriculumVitae = fileName;
                    return Ok(new {message = "File successfuly uploaded"});
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new {message = "Upload failed"});
            }

            return BadRequest(new {message = "Upload failed: candidate profile not found"});

        }

        [HttpPost]
        [Route("UserPhoto/{id}")]
        public async Task<object> UploadUserPhoto(IFormFile file, string id)
        {

            if (file == null) return BadRequest("File not found");
            var user = await _userManager.FindByIdAsync(id);
            if (user == null) return BadRequest("User not found");

            try
            {
                
                    var fileName = Guid.NewGuid() + file.FileName;
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Uploads", "UserPhoto", fileName);
                    file.CopyTo(new FileStream(filePath, FileMode.Create));
                    user.Photo = fileName;
                    return Ok(new { message = "Photo successfuly uploaded" });
                
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Upload failed" });
            }
        }

        [HttpPost]
        [Route("MemberPhoto/{id}")]
        public ActionResult<object> UploadMemberPhoto(IFormFile file, Guid id)
        {

            if (file == null) return BadRequest("File not found");
            var member = _memberRepository.FindById(id);
            if (member == null) return BadRequest("Member not found");

            try
            {
                if (member.EmployeeProfile != null)
                {
                    var fileName = Guid.NewGuid() + file.FileName;
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Uploads", "MemberPhoto", fileName);
                    file.CopyTo(new FileStream(filePath, FileMode.Create));
                    member.EmployeeProfile.Photo = fileName;
                    return Ok(new { message = "File successfuly uploaded" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Upload failed" });
            }

            return BadRequest(new { message = "Upload failed: emlployee profile not found" });

        }
    }
}