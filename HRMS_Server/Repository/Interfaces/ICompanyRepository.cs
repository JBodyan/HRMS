using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HRMS_Server.Models.MemberModel;

namespace HRMS_Server.Repository.Interfaces
{
    interface ICompanyRepository
    {
        Task<Department> GetDepartmentById(Guid id);
        Task<Position> GetPositionById(Guid id);
        Task<IEnumerable<Department>> GetAllDepartments();
        Task<IEnumerable<Position>> GetAllPositions();
        Task<Department> AddDepartment(Department department);
        Task<Position> AddPosition(Position position);
        Task<Department> UpdateDepartment(Department department);
        Task<Position> UpdatePosition(Position position);
        Task<Department> DeleteDepartment(Guid id);
        Task<Position> DeletePosition(Guid id);
    }
}
