using System;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Models;
using HRMS_Server.Models.MemberModel;
using Microsoft.AspNetCore.Identity;

namespace HRMS_Server.Data
{
    public class RoleInitializer
    {
        public static async Task InitializeAsync(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, AppDbContext context)
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
            //if (await userManager.FindByNameAsync(adminEmail) == null)
            //{
            //    var admin = new User { Email = adminEmail, UserName = "admin" };
            //    var result = await userManager.CreateAsync(admin, password);
            //    if (result.Succeeded)
            //    {
            //        await userManager.AddToRoleAsync(admin, "Admin");
            //    }
            //}

            //var managerEmail = "manager@gmail.com";
            //var mPassword = "Manager123456";

            //if (await userManager.FindByNameAsync(managerEmail) == null)
            //{
            //    var manager = new User { Email = managerEmail, UserName = "manager" };
            //    var result = await userManager.CreateAsync(manager, mPassword);
            //    if (result.Succeeded)
            //    {
            //        await userManager.AddToRoleAsync(manager, "Manager");
            //    }
            //}

            await AddCandidate(context, "Viktoriya", "Shemet", "viktoriyashemet@gmail.com", "viktoriya_shemet", new DateTime(1984, 8, 31));
            await AddCandidate(context, "Nikolay", "Levchenko", "nikolaylevchenko@gmail.com", "nikolay_levchenko", new DateTime(1990, 3, 1));
            await AddCandidate(context, "Pavel", "Bogach", "pavelbogach@gmail.com", "pavel_bogach", new DateTime(1993, 5, 11));
            await AddCandidate(context, "Igor", "Mironov", "igormironov@gmail.com", "igor_mironov", new DateTime(1995, 11, 28));
            await AddCandidate(context, "Denys", "Mitko", "denysmitko@gmail.com", "denys_mitko", new DateTime(1981, 2, 22));
            await AddCandidate(context, "Inna", "Khmelenko", "innakhmelenko@gmail.com", "inna_khmelenko", new DateTime(1984, 10, 13));
            await AddCandidate(context, "Anastasiya", "Kusch", "anastasiyakusch@gmail.com", "anastasiya_kusch", new DateTime(1991, 9, 10));
        }

        private static async Task AddCandidate(AppDbContext context,
                                               string firstName, string lastName,
                                               string emailMember, string skype, DateTime bithday)
        {
            var members = context.Members.Where(m => m.Email == emailMember);
            if (!members.Any())
            {
                var member = new Member()
                {
                    Status = Status.Candidate,
                    Skype = skype,
                    BirthDate = bithday,
                    Email = emailMember,
                    FirstName = firstName,
                    LastName = lastName
                };
                context.Add(member);
                await context.SaveChangesAsync();
            }
        }
    }
}
