using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS_Server.Models.DocumentModel;
namespace HRMS_Server.Repository.Interfaces
{
    interface IDocumentRepository
    {
        Task<IEnumerable<Document>> FindAll();
        Task<IEnumerable<Document>> FindAllByFilter(IEnumerable<DocumentCategory> categories, IEnumerable<DocumentTag> tags);
        Task<IEnumerable<Document>> FindAllDeleted();
        Task<Document> Add(Document document);
        Task<IEnumerable<Document>> FindByName(string name);
        Task<IEnumerable<Document>> FindByUserId(string id);
        Task<Document> FindById(Guid id);
        Task<Document> Update(Document document);
        Task<Document> RemovedStatus(Guid id, bool removed);
    }
}
