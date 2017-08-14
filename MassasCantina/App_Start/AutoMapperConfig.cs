using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;

namespace MassasCantina.App_Start
{
    public static class AutoMapperConfig
    {
        public static MapperConfiguration MapperConfiguration;
        public static void RegisterMappings()
        {            
            Mapper.Initialize(cfg => {
                cfg.CreateMap<Controllers.DobraAdd, Models.Dobra>().ReverseMap();
                cfg.CreateMap<Models.Dobra, Controllers.DobraBase>().ReverseMap();
                cfg.CreateMap<Controllers.DobraEdit, Controllers.DobraBase>().ReverseMap();

                cfg.CreateMap<Controllers.RecheioAdd, Models.Recheio>().ReverseMap();
                cfg.CreateMap<Models.Recheio, Controllers.RecheioBase>().ReverseMap();
                cfg.CreateMap<Controllers.RecheioEdit, Controllers.RecheioBase>().ReverseMap();

                cfg.CreateMap<Controllers.ProdutoAdd, Models.Produto>().ReverseMap();
                cfg.CreateMap<Models.Produto, Controllers.ProdutoBase>().ReverseMap();
                cfg.CreateMap<Controllers.ProdutoEdit, Controllers.ProdutoBase>().ReverseMap();
            });
        }
    }
}