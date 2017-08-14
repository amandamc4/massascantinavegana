using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MassasCantina.Models;
using AutoMapper;
using System.Net.Http;
using System.Web.Http;
using System.Net;
using MassasCantina.App_Start;

namespace MassasCantina.Controllers
{
    public class Manager
    {
        private ApplicationDbContext ds = new ApplicationDbContext();

        public IEnumerable<DobraBase> DobrasGetAll()
        {
            var c = ds.Dobras.OrderBy(a => a.Nome);

            return Mapper.Map<IEnumerable<DobraBase>>(c);
        }

        public DobraBase DobraGetById(int id)
        {
            var c = ds.Dobras.SingleOrDefault(a => a.Id == id);

            return (c == null) ? null : Mapper.Map<DobraBase>(c);
        }

        public DobraBase DobraAdd(DobraAdd newItem)
        {
            if (newItem == null)
            {
                return null;
            }
            var addedItem = ds.Dobras.Add(Mapper.Map<Dobra>(newItem));
            ds.SaveChanges();

            return (addedItem == null) ? null : Mapper.Map<DobraBase>(addedItem);
        }

        public DobraBase DobraEdit(DobraEdit editedItem)
        {
            if (editedItem == null)
            {
                return null;
            }
            var storedItem = ds.Dobras.SingleOrDefault(e => e.Id == editedItem.Id);

            if (storedItem == null)
            {
                return null;
            }
            else
            {
                ds.Entry(storedItem).CurrentValues.SetValues(editedItem);
                ds.SaveChanges();

                return Mapper.Map<DobraBase>(storedItem);
            }
        }

        public HttpResponseMessage DobraDelete(int id)
        {
            var storedItem = ds.Dobras.Find(id);

            var response = new HttpResponseMessage();
            if (storedItem == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            else
            {
                try
                {
                    ds.Dobras.Remove(storedItem);
                    ds.SaveChanges();
                    response.Headers.Add("DeleteMessage", "Delete successful");
                }
                catch (Exception)
                {

                    response.Headers.Add("DeleteMessage", "Could not delete");
                }
            }
            return response;
        }

        public IEnumerable<RecheioBase> RecheiosGetAll()
        {
            var c = ds.Recheios.OrderBy(a => a.Nome);

            return Mapper.Map<IEnumerable<RecheioBase>>(c);
        }

        public RecheioBase RecheioGetById(int id)
        {
            var c = ds.Recheios.SingleOrDefault(a => a.Id == id);

            return (c == null) ? null : Mapper.Map<RecheioBase>(c);
        }

        public RecheioBase RecheioAdd(RecheioAdd newItem)
        {
            if (newItem == null)
            {
                return null;
            }
            var addedItem = ds.Recheios.Add(Mapper.Map<Recheio>(newItem));
            ds.SaveChanges();

            return (addedItem == null) ? null : Mapper.Map<RecheioBase>(addedItem);
        }

        public RecheioBase RecheioEdit(RecheioEdit editedItem)
        {
            if (editedItem == null)
            {
                return null;
            }
            var storedItem = ds.Recheios.SingleOrDefault(e => e.Id == editedItem.Id);

            if (storedItem == null)
            {
                return null;
            }
            else
            {
                ds.Entry(storedItem).CurrentValues.SetValues(editedItem);
                ds.SaveChanges();

                return Mapper.Map<RecheioBase>(storedItem);
            }
        }

        public HttpResponseMessage RecheioDelete(int id)
        {
            var storedItem = ds.Recheios.Find(id);

            var response = new HttpResponseMessage();
            if (storedItem == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            else
            {
                try
                {
                    ds.Recheios.Remove(storedItem);
                    ds.SaveChanges();
                    response.Headers.Add("DeleteMessage", "Delete successful");
                }
                catch (Exception)
                {

                    response.Headers.Add("DeleteMessage", "Could not delete");
                }
            }
            return response;
        }

        public IEnumerable<ProdutoBase> ProdutosGetAll()
        {
            var c = ds.Produtos.OrderBy(a => a.Nome);

            return Mapper.Map<IEnumerable<ProdutoBase>>(c);
        }

        public ProdutoBase ProdutoGetById(int id)
        {
            var c = ds.Produtos.SingleOrDefault(a => a.Id == id);

            return (c == null) ? null : Mapper.Map<ProdutoBase>(c);
        }

        public ProdutoBase ProdutoAdd(ProdutoAdd newItem)
        {
            if (newItem == null)
            {
                return null;
            }
            var addedItem = ds.Produtos.Add(Mapper.Map<Produto>(newItem));
            ds.SaveChanges();

            return (addedItem == null) ? null : Mapper.Map<ProdutoBase>(addedItem);
        }

        public ProdutoBase ProdutoEdit(ProdutoEdit editedItem)
        {
            if (editedItem == null)
            {
                return null;
            }
            var storedItem = ds.Produtos.SingleOrDefault(e => e.Id == editedItem.Id);

            if (storedItem == null)
            {
                return null;
            }
            else
            {
                ds.Entry(storedItem).CurrentValues.SetValues(editedItem);
                ds.SaveChanges();

                return Mapper.Map<ProdutoBase>(storedItem);
            }
        }

        public HttpResponseMessage ProdutoDelete(int id)
        {
            var storedItem = ds.Produtos.Find(id);

            var response = new HttpResponseMessage();
            if (storedItem == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            else
            {
                try
                {
                    ds.Produtos.Remove(storedItem);
                    ds.SaveChanges();
                    response.Headers.Add("DeleteMessage", "Delete successful");
                }
                catch (Exception)
                {

                    response.Headers.Add("DeleteMessage", "Could not delete");
                }
            }
            return response;
        }

    }
}