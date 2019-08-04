using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.Models.MemberModel;
using HRMS_Server.Repository.Implementation;
using HRMS_Server.Repository.Interfaces;
using HRMS_Server.ViewModels;
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
        public async Task<ActionResult> Members()
        {
            var members = await _memberRepository.FindAll();
            if (members != null) return Ok(members);
            return BadRequest(new {message="Members not found"});
        }

        [HttpGet]
        [Route("Candidates")]
        public async Task<ActionResult> Candidates()
        {
            var candidates = await _memberRepository.FindAllCandidates();
            if (candidates != null) return Ok(candidates);
            return BadRequest(new { message = "Candidates not found" });
        }

        [HttpPost]
        [Route("AddCandidate")]
        public async Task<ActionResult> AddCandidate(RegisterMemberCandidate candidate)
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
            
            await _memberRepository.Add(member);
            return Ok();
        }

        [HttpPost]
        [Route("AddEmployee")]
        public async Task<ActionResult> AddEmployee(RegisterMemberEmployee employee)
        {
            var member = await _memberRepository.FindById(employee.MemberId);

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

            await _memberRepository.Update(member);
            return Ok();
        }

        [HttpGet]
        [Route("GetMember/{id}")]
        public async Task<ActionResult> GetMember(Guid id)
        {
            var member = await _memberRepository.FindById(id);
            if (member != null) return Ok(member);
            return BadRequest(new { message = "Member not found" });
        }
    }
}