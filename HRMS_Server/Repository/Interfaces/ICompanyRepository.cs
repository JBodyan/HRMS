using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Models.MemberModel;

namespace HRMS_Server.Repository.Interfaces
{
    interface ICompanyRepository
    {
        Department GetDepartmentById(Guid id);
        Position GetPositionById(Guid id);
        IEnumerable<Department> GetAllDepartments();
        IEnumerable<Position> GetAllPositions();
        Department AddDepartment(Department department);
        Position AddPosition(Position position);
        Department UpdateDepartment(Department department);
        Position UpdatePosition(Position position);
        Department DeleteDepartment(Guid id);
        Position DeletePosition(Guid id);

    }
}
