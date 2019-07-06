using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Models;
using HRMS_Server.Models.DocumentModel;
using HRMS_Server.Models.MemberModel;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace HRMS_Server.Data
{
    public class AppDbContext : IdentityDbContext
    {
        public DbSet<Member> Members { get; set; }
        public DbSet<EmployeeProfile> EmployeeProfiles { get; set; }
        public DbSet<CandidateProfile> CandidateProfiles { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Position> Positions { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<DocumentCategory> DocumentCategories { get; set; }
        public DbSet<DocumentTag> DocumentTags { get; set; }

        public DbSet<User> Users { get; set; }

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Member>().Property(m => m.Status)
                .HasConversion(
                    v => v.ToString(),
                    v => (Status)Enum.Parse(typeof(Status), v));

            modelBuilder.Entity<Member>().Property(m => m.Gender)
                .HasConversion(
                    v => v.ToString(),
                    v => (Gender)Enum.Parse(typeof(Gender), v));

            base.OnModelCreating(modelBuilder);

        }

        public AppDbContext(DbContextOptions options) : base(options)
        {
            
        }

    }
}
