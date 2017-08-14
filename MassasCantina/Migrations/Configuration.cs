namespace MassasCantina.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MassasCantina.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            SetSqlGenerator("MySql.Data.MySqlClient", new MySql.Data.Entity.MySqlMigrationSqlGenerator());
        }

        protected override void Seed(MassasCantina.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            if (!(context.Users.Any(u => u.UserName == "massascantina@gmail.com")))
            {
                var userStore = new UserStore<ApplicationUser>(context);
                var userManager = new UserManager<ApplicationUser>(userStore);
                var userToInsert = new ApplicationUser
                {
                    UserName = "massascantina@gmail.com",
                    Email = "massascantina@gmail.com",
                    Role = "Administrator"
                };
                userManager.Create(userToInsert, "Massasc@antina123");
            }

            context.Dobras.AddOrUpdate(
                p => p.Nome,
                new Dobra { Nome = "Agnoloti", Descricao = "Agnoloti e bom"}
           );

            context.Recheios.AddOrUpdate(
                p => p.Nome,
                new Recheio { Nome = "Abobrinha", Descricao = "Abobrinha com pistache" }
           );

            context.Produtos.AddOrUpdate(
                p => p.Nome,
                new Produto { Nome = "Hamburguer", Descricao = "Hamburguer vegano" }
           );
        }
    }
}
