using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.Models.MemberModel;
using HRMS_Server.Repository.Interfaces;

namespace HRMS_Server.Repository.Implementation
{
    public class MemberRepository : IMemberRepository
    {
        private readonly AppDbContext _context;
        public MemberRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Member> FindAll(bool removed,bool archived)
        {
            //return all members
            if (removed && archived) return _context.Members;
            //return all members with status 'removed'
            if (removed) return _context.Members.Where(m => m.IsRemoved == removed);
            //return all members with status 'archived'
            if (archived) return _context.Members.Where(m => m.IsArchived == archived);
            //return all members without 'removed' and 'archived' 
            return _context.Members.Where(m => m.IsArchived == archived && m.IsRemoved == removed);
        }

        public Member FindById(Guid id)
        {
            return _context.Members.FirstOrDefault(m => m.Id == id);
        }

        public Member Add(Member member)
        {
            _context.Members.Add(member);
            _context.SaveChanges();
            return member;
        }

        public Member Update(Member member)
        {
            _context.Members.Update(member);
            _context.SaveChanges();
            return member;
        }

        public Member RemovedStatus(Guid id,bool remove)
        {
            var member = _context.Members.FirstOrDefault(m => m.Id == id);
            if (member == null) return null;
            member.IsRemoved = remove;
            _context.Members.Update(member);
            _context.SaveChanges();
            return member;
        }

        public Member ArchivedStatus(Guid id,bool archive)
        {
            var member = _context.Members.FirstOrDefault(m => m.Id == id);
            if (member == null) return null;
            member.IsArchived = archive;
            _context.Members.Update(member);
            _context.SaveChanges();
            return member;
        }
    }
}
