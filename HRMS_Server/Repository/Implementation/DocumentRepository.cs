using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.Models.DocumentModel;
using HRMS_Server.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HRMS_Server.Repository.Implementation
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly AppDbContext _context;
        public DocumentRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Document>> FindAll()
        {
            return await _context.Documents.AsNoTracking().ToListAsync();
        }

        public async Task<IEnumerable<Document>> FindAllByFilter(IEnumerable<DocumentCategory> categories, IEnumerable<DocumentTag> tags)
        {
            //FIXME: Create impl for this method
            return null;
        }

        public async Task<IEnumerable<Document>> FindAllDeleted()
        {
            return await _context.Documents.Where(d => d.IsDeleted).ToListAsync();
        }

        public async Task<Document> Add(Document document)
        {
            _context.Documents.Add(document);
            await _context.SaveChangesAsync();
            return document;
        }

        public async Task<IEnumerable<Document>> FindByName(string name)
        {
            return await _context.Documents.Where(d => d.Name == name).ToListAsync();
        }

        public async Task<IEnumerable<Document>> FindByUserId(string id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            return (user == null) ? null : await _context.Documents.Where(d => d.User == user).ToListAsync();
        }

        public async Task<Document> FindById(Guid id)
        {
            return await _context.Documents.FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task<Document> Update(Document document)
        {
            _context.Documents.Update(document);
            await _context.SaveChangesAsync();
            return document;
        }

        public async Task<Document> RemovedStatus(Guid id, bool removed)
        {
            var document = await _context.Documents.FirstOrDefaultAsync(d => d.Id == id);
            if (document == null) return null;
            document.IsDeleted = removed;
            _context.Documents.Update(document);
            await _context.SaveChangesAsync();
            return document;
        }
    }
}
