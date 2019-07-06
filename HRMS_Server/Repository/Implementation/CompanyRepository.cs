using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.Models.MemberModel;
using HRMS_Server.Repository.Interfaces;

namespace HRMS_Server.Repository.Implementation
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly AppDbContext _context;
        public CompanyRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Department> GetAllDepartments()
        {
            return _context.Departments;
        }

        public IEnumerable<Position> GetAllPositions()
        {
            return _context.Positions;
        }

        public Department AddDepartment(Department department)
        {
            _context.Departments.Add(department);
            _context.SaveChanges();
            return department;
        }

        public Position AddPosition(Position position)
        {
            _context.Positions.Add(position);
            _context.SaveChanges();
            return position;
        }

        public Department UpdateDepartment(Department department)
        {
            _context.Departments.Update(department);
            _context.SaveChanges();
            return department;
        }

        public Position UpdatePosition(Position position)
        {
            _context.Positions.Update(position);
            _context.SaveChanges();
            return position;
        }

        public Department DeleteDepartment(Guid id)
        {
            var department = _context.Departments.FirstOrDefault(d => d.Id == id);
            if (department == null) return null;
            _context.Departments.Remove(department);
            _context.SaveChanges();
            return department;
        }

        public Position DeletePosition(Guid id)
        {
            var position = _context.Positions.FirstOrDefault(p => p.Id == id);
            if (position == null) return null;
            _context.Positions.Remove(position);
            _context.SaveChanges();
            return position;
        }
    }
}
