using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using HRMS_Server.Models;
using HRMS_Server.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace HRMS_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagerController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _configuration;

        public ManagerController(UserManager<User> userManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("GetManagers")]
        public async Task<object> GetManagers()
        {
            try
            {
                var result = await _userManager.GetUsersInRoleAsync("Manager");
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("ResetPassword/{id}")]
        public async Task<object> ResetPassword(string password, string id)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(id);
                if (user == null) return BadRequest("UserNotFound");
                var passwordToken = await _userManager.GeneratePasswordResetTokenAsync(user);
                var result = await _userManager.ResetPasswordAsync(user,passwordToken,password);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("UpdateManager/{id}")]
        public async Task<object> UpdateManager(UpdateUser model,string id)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(id);
                if (user == null) return BadRequest("UserNotFound");
                user.FirstName = model.FirstName;
                user.SecondName = model.SecondName;
                user.LastName = model.LastName;
                user.PhoneNumber = model.Phone;
                user.Email = model.Email;
                var result = await _userManager.UpdateAsync(user);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("GetManager/{id}")]
        public async Task<object> GetManager(string id)
        {
            try
            {
                var result = await _userManager.FindByIdAsync(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
