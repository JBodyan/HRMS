using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Models.MemberModel;
using HRMS_Server.Repository.Implementation;
using HRMS_Server.Repository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HRMS_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        private readonly IMemberRepository _memberRepository;

        public MemberController(MemberRepository memberRepository)
        {
            _memberRepository = memberRepository;
        }

        [HttpGet]
        [Route("Members")]
        public ActionResult<IEnumerable<Member>> Members()
        {
            var members = _memberRepository.FindAll();
            if (members != null) return Ok(members);
            return BadRequest(new {message="Members not found"});
        }
    }
}