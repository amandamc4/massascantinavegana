namespace MassasCantina.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProdutoDBUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Produtoes", "Sabor", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Produtoes", "Sabor");
        }
    }
}
