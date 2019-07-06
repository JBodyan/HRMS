using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Data;
using HRMS_Server.Models.DocumentModel;
using HRMS_Server.Repository.Interfaces;

namespace HRMS_Server.Repository.Implementation
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly AppDbContext _context;
        public DocumentRepository(AppDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Document> FindAll()
        {
            return _context.Documents;
        }

        public IEnumerable<Document> FindAllByFilter(IEnumerable<DocumentCategory> categories, IEnumerable<DocumentTag> tags)
        {
            //FIXME: Create impl for this method
            return null;
        }

        public IEnumerable<Document> FindAllDeleted()
        {
            return _context.Documents.Where(d => d.IsDeleted);
        }

        public Document Add(Document document)
        {
            _context.Documents.Add(document);
            _context.SaveChanges();
            return document;
        }

        public IEnumerable<Document> FindByName(string name)
        {
            return _context.Documents.Where(d => d.Name == name);
        }

        public IEnumerable<Document> FindByUserId(string id)
        {
            var user = _context.Users.FirstOrDefault(u => u.Id == id);
            return user == null ? null : _context.Documents.Where(d => d.User == user);
        }

        public Document FindById(Guid id)
        {
            return _context.Documents.FirstOrDefault(d => d.Id == id);
        }

        public Document Update(Document document)
        {
            _context.Documents.Update(document);
            _context.SaveChanges();
            return document;
        }

        public Document RemovedStatus(Guid id,bool removed)
        {
            var document = _context.Documents.FirstOrDefault(d => d.Id == id);
            if (document == null) return null;
            document.IsDeleted = removed;
            _context.Documents.Update(document);
            _context.SaveChanges();
            return document;
        }
    }
}
