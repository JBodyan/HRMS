using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Models.DocumentModel;
namespace HRMS_Server.Repository.Interfaces
{
    interface IDocumentRepository
    {
        IEnumerable<Document> FindAll();
        IEnumerable<Document> FindAllByFilter(IEnumerable<DocumentCategory> categories, IEnumerable<DocumentTag> tags);
        IEnumerable<Document> FindAllDeleted();
        Document Add(Document document);
        Document FindByName(string name);
        Document FindByUserId(Guid id);
        Document FindById(Guid id);
        Document Update(Document document);
        Document Remove(Guid id);

    }
}
