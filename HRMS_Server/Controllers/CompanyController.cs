using System;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.Models.MemberModel;
using HRMS_Server.Repository.Implementation;
using HRMS_Server.Repository.Interfaces;
using HRMS_Server.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<ActionResult> AddDepartment(RegisterDepartment model)
        {
            if (string.IsNullOrEmpty(model.Name)) return BadRequest("Name cannot be null or empty");
            var department = new Department
            {
                Name = model.Name
            };
            var result = await _companyRepository.AddDepartment(department);
            if (result != null) return Ok(new {message = "Department successfuly added"});
            return BadRequest(new {message = "Error adding department"});
        }

        [HttpPost]
        [Route("AddPosition")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> AddPosition(RegisterPosition model)
        {
            if (string.IsNullOrEmpty(model.Name)) return BadRequest("Name cannot be null or empty");
            var position = new Position
            {
                Name = model.Name
            };
            var result = await _companyRepository.AddPosition(position);
            if (result != null) return Ok(new { message = "Position successfuly added" });
            return BadRequest(new { message = "Error adding position" });
        }

        [HttpGet]
        [Route("GetDepartments")]
        public async Task<ActionResult> Departments()
        {
            var result = await _companyRepository.GetAllDepartments();
            if (result != null) return Ok(result);
            return BadRequest(new { message = "Departments not found" });
        }

        [HttpGet]
        [Route("GetPositions")]
        public async Task<ActionResult> Positons()
        {
            var result = await _companyRepository.GetAllPositions();
            if (result != null) return Ok(result);
            return BadRequest(new { message = "Positions not found" });
        }

        [HttpDelete]
        [Route("DeleteDepartment/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> DeleteDepartment(Guid id)
        {
            var department = await _companyRepository.GetDepartmentById(id);
            if (department == null) return BadRequest(new {message = "Department not found"});
            await _companyRepository.DeleteDepartment(id);
            return Ok(new {message = "Department successfuly deleted"});
        }

        [HttpDelete]
        [Route("DeletePosition/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> DeletePosition(Guid id)
        {
            var position = await _companyRepository.GetPositionById(id);
            if (position == null) return BadRequest(new { message = "Position not found" });
            await _companyRepository.DeletePosition(id);
            return Ok(new { message = "Position successfuly deleted" });
        }
    }
}