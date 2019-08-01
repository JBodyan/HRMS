using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.Models.MemberModel;
using HRMS_Server.Repository.Implementation;
using HRMS_Server.Repository.Interfaces;
using HRMS_Server.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;

namespace HRMS_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowMyOrigin")]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyRepository _companyRepository;

        public CompanyController(AppDbContext context)
        {
            _companyRepository = new CompanyRepository(context);

        }

        [HttpPost]
        [Route("AddDepartment")]
        [Authorize(Roles = "Admin")]
        public ActionResult<object> AddDepartment(RegisterDepartment model)
        {
            if (string.IsNullOrEmpty(model.Name)) return BadRequest("Name cannot be null or empty");
            var department = new Department
            {
                Name = model.Name
            };
            var result = _companyRepository.AddDepartment(department);
            if (result != null) return Ok(new {message = "Department successfuly added"});
            return BadRequest(new {message = "Error adding department"});
        }

        [HttpPost]
        [Route("AddPosition")]
        [Authorize(Roles = "Admin")]
        public ActionResult<object> AddPosition(RegisterPosition model)
        {
            if (string.IsNullOrEmpty(model.Name)) return BadRequest("Name cannot be null or empty");
            var position = new Position
            {
                Name = model.Name
            };
            var result = _companyRepository.AddPosition(position);
            if (result != null) return Ok(new { message = "Position successfuly added" });
            return BadRequest(new { message = "Error adding position" });
        }

        [HttpGet]
        [Route("GetDepartments")]
        public ActionResult<object> Departments()
        {
            var result = _companyRepository.GetAllDepartments();
            if (result != null) return Ok(result);
            return BadRequest(new { message = "Departments not found" });
        }

        [HttpGet]
        [Route("GetPositions")]
        public ActionResult<object> Positons()
        {
            var result = _companyRepository.GetAllPositions();
            if (result != null) return Ok(result);
            return BadRequest(new { message = "Positions not found" });
        }

        [HttpDelete]
        [Route("DeleteDepartment/{id}")]
        [Authorize(Roles = "Admin")]
        public ActionResult<object> DeleteDepartment(Guid id)
        {
            var department = _companyRepository.GetDepartmentById(id);
            if (department == null) return BadRequest(new {message = "Department not found"});
            _companyRepository.DeleteDepartment(id);
            return Ok(new {message = "Department successfuly deleted"});
        }

        [HttpDelete]
        [Route("DeletePosition/{id}")]
        [Authorize(Roles = "Admin")]
        public ActionResult<object> DeletePosition(Guid id)
        {
            var position = _companyRepository.GetPositionById(id);
            if (position == null) return BadRequest(new { message = "Position not found" });
            _companyRepository.DeletePosition(id);
            return Ok(new { message = "Position successfuly deleted" });
        }
    }
}