using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.DTO;
using HRMS_Server.Models.MemberModel;
using HRMS_Server.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HRMS_Server.Repository.Implementation
{
    public class MemberRepository : IMemberRepository
    {
        private readonly AppDbContext _context;
        public MemberRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Member>> FindAll(bool removed, bool archived)
        {
            //return all members
            if (removed && archived) return await _context.Members.AsNoTracking().ToArrayAsync();
            //return all members with status 'removed'
            if (removed) return await _context.Members.Where(m => m.IsRemoved == removed).AsNoTracking().ToArrayAsync();
            //return all members with status 'archived'
            if (archived) return await _context.Members.Where(m => m.IsArchived == archived).AsNoTracking().ToArrayAsync();
            //return all members without 'removed' and 'archived' 
            return await _context.Members.Where(m => m.IsArchived == archived && m.IsRemoved == removed).AsNoTracking().ToArrayAsync();
        }

        public async Task<Member> FindById(Guid id)
        {
            return await _context.Members.FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<Member> Add(Member member)
        {
            _context.Members.Add(member);
            await _context.SaveChangesAsync();
            return member;
        }

        public async Task<Member> Update(Member member)
        {
            _context.Members.Update(member);
            await _context.SaveChangesAsync();
            return member;
        }

        public async Task<Member> RemovedStatus(Guid id, bool remove)
        {
            var member = await _context.Members.FirstOrDefaultAsync(m => m.Id == id);
            if (member == null) return null;
            member.IsRemoved = remove;
            _context.Members.Update(member);
            await _context.SaveChangesAsync();
            return member;
        }

        public async Task<Member> ArchivedStatus(Guid id, bool archive)
        {
            var member = await _context.Members.FirstOrDefaultAsync(m => m.Id == id);
            if (member == null) return null;
            member.IsArchived = archive;
            _context.Members.Update(member);
            await _context.SaveChangesAsync();
            return member;
        }

        public async Task<IEnumerable<MemberDTO>> FindAllCandidates()
        {
            return await _context.Members.Where(c => c.Status == Status.Candidate)
                                         .Select(c=>new MemberDTO()
                                         {
                                             Id = c.Id,
                                             BirthDay = c.BirthDate,
                                             FirstName = c.FirstName,
                                             Gender = c.Gender,
                                             LastName= c.LastName
                                         })
                                         .AsNoTracking()
                                         .ToArrayAsync();
        }
    }
}
