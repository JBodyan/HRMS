using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Models.MemberModel;

namespace HRMS_Server.Repository.Interfaces
{
    public interface IMemberRepository
    {
        IEnumerable<Member> FindAll(bool removed = false,bool archived = false);
        Member FindById(Guid id);
        Member Add(Member member);
        Member Update(Member member);
        Member RemovedStatus(Guid id,bool removed);
        Member ArchivedStatus(Guid id,bool archived);

    }
}
