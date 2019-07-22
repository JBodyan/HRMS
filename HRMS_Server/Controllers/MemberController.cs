using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.Models.MemberModel;
using HRMS_Server.Repository.Implementation;
using HRMS_Server.Repository.Interfaces;
using HRMS_Server.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HRMS_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        private readonly IMemberRepository _memberRepository;
        
        public MemberController(AppDbContext context)
        {
            _memberRepository = new MemberRepository(context);

        }

        [HttpGet]
        [Route("Members")]
        public ActionResult<IEnumerable<Member>> Members()
        {
            var members = _memberRepository.FindAll();
            if (members != null) return Ok(members);
            return BadRequest(new {message="Members not found"});
        }

        [HttpPost]
        [Route("AddCandidate")]
        public ActionResult<object> AddCandidate(RegisterMemberCandidate candidate)
        {
            var member = new Member
            {
                FirstName = candidate.FirstName,
                SecondName = candidate.SecondName,
                LastName = candidate.LastName,
                Email = candidate.Email,
                Phone = candidate.Phone,
                Skype = candidate.Skype,
                BirthDate = candidate.BirthDate,
                Gender = candidate.Gender,
                Status = Status.Candidate
            };
            var candidateProfile = new CandidateProfile
            {
                CareerObjective = candidate.CareerObjective,
                ReceiptDate = DateTime.Now,
                About = candidate.About
                
            };

            member.CandidateProfile = candidateProfile;
            
            _memberRepository.Add(member);
            return Ok();
        }

        [HttpPost]
        [Route("AddEmployee")]
        public ActionResult<object> AddEmployee(RegisterMemberEmployee employee)
        {
            var member = _memberRepository.FindById(employee.MemberId);

            var employeeProfile = new EmployeeProfile
            {
                
                Address = employee.Address,
                City = employee.City,
                Department = employee.Department,
                Position = employee.Position,
                MaritalStatus = employee.MaritalStatus,
                EmployeedDate = DateTime.Now
            };

            member.EmployeeProfile = employeeProfile;
            member.Status = Status.Employee;

            _memberRepository.Update(member);
            return Ok();
        }

        [HttpGet]
        [Route("GetMember/{id}")]
        public ActionResult<object> GetMember(Guid id)
        {
            var member = _memberRepository.FindById(id);
            if (member != null) return Ok(member);
            return BadRequest(new { message = "Member not found" });
        }
    }
}