using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MassasCantina.Controllers
{
    public class DobraAdd
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }

    public class DobraBase : DobraAdd
    {
        public int Id { get; set;  }
    }

    public class DobraEdit
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }
}