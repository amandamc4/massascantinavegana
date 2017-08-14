using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MassasCantina.Controllers
{
    public class ProdutoAdd
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }

    public class ProdutoBase : ProdutoAdd
    {
        public int Id { get; set; }
    }

    public class ProdutoEdit
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }
}