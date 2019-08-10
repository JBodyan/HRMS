using Microsoft.EntityFrameworkCore.Migrations;

namespace HRMS_Server.Migrations
{
    public partial class user_update_g : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Gender",
                table: "AspNetUsers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Gender",
                table: "AspNetUsers",
                nullable: true);
        }
    }
}
