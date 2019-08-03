using System.Threading.Tasks;
using HRMS_Server.Models;
using Microsoft.AspNetCore.Identity;

namespace HRMS_Server.Data
{
    public class RoleInitializer
    {
        public static async Task InitializeAsync(UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            var adminEmail = "admin@gmail.com";
            var password = "Admin123456";
            if (await roleManager.FindByNameAsync("Admin") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("Admin"));
            }
            if (await roleManager.FindByNameAsync("Manager") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("Manager"));
            }
            if (await userManager.FindByNameAsync(adminEmail) == null)
            {
                var admin = new User { Email = adminEmail, UserName = "admin" };
                var result = await userManager.CreateAsync(admin, password);
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(admin, "Admin");
                }
            }

            var managerEmail = "manager@gmail.com";
            var mPassword = "Manager123456";
           
            if (await userManager.FindByNameAsync(managerEmail) == null)
            {
                var manager = new User { Email = managerEmail, UserName = "manager" };
                var result = await userManager.CreateAsync(manager, mPassword);
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(manager, "Manager");
                }
            }
        }
    }
}
