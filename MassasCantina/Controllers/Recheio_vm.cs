using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MassasCantina.Controllers
{
    public class RecheioAdd
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }

    public class RecheioBase : RecheioAdd
    {
        public int Id { get; set; }
    }

    public class RecheioEdit
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }
}