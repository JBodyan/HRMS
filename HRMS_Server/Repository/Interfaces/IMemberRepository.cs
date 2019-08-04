using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HRMS_Server.DTO;
using HRMS_Server.Models.MemberModel;

namespace HRMS_Server.Repository.Interfaces
{
    public interface IMemberRepository
    {
        Task<IEnumerable<Member>> FindAll(bool removed = false,bool archived = false);
        Task<IEnumerable<MemberDTO>> FindAllCandidates();
        Task<Member> FindById(Guid id);
        Task<Member> Add(Member member);
        Task<Member> Update(Member member);
        Task<Member> RemovedStatus(Guid id,bool removed);
        Task<Member> ArchivedStatus(Guid id,bool archived);
    }
}
