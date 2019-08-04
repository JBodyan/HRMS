using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.Models.MemberModel;
using HRMS_Server.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HRMS_Server.Repository.Implementation
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly AppDbContext _context;
        public CompanyRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Department> GetDepartmentById(Guid id)
        {
            return await _context.Departments.FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task<Position> GetPositionById(Guid id)
        {
            return await _context.Positions.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Department>> GetAllDepartments()
        {
            return await _context.Departments.AsNoTracking().ToListAsync();
        }

        public async Task<IEnumerable<Position>> GetAllPositions()
        {
            return await _context.Positions.AsNoTracking().ToListAsync();
        }

        public async Task<Department> AddDepartment(Department department)
        {
            _context.Departments.Add(department);
            await _context.SaveChangesAsync();
            return department;
        }

        public async Task<Position> AddPosition(Position position)
        {
            _context.Positions.Add(position);
            await _context.SaveChangesAsync();
            return position;
        }

        public async Task<Department> UpdateDepartment(Department department)
        {
            _context.Departments.Update(department);
            await _context.SaveChangesAsync();
            return department;
        }

        public async Task<Position> UpdatePosition(Position position)
        {
            _context.Positions.Update(position);
            await _context.SaveChangesAsync();
            return position;
        }

        public async Task<Department> DeleteDepartment(Guid id)
        {
            var department = _context.Departments.FirstOrDefault(d => d.Id == id);
            if (department == null) return null;
            _context.Departments.Remove(department);
            await _context.SaveChangesAsync();
            return department;
        }

        public async Task<Position> DeletePosition(Guid id)
        {
            var position = _context.Positions.FirstOrDefault(p => p.Id == id);
            if (position == null) return null;
            _context.Positions.Remove(position);
            await _context.SaveChangesAsync();
            return position;
        }
    }
}
