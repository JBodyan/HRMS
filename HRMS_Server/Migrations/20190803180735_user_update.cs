using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HRMS_Server.Migrations
{
    public partial class user_update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DocumentCategories_Documents_DocumentId",
                table: "DocumentCategories");

            migrationBuilder.DropIndex(
                name: "IX_DocumentCategories_DocumentId",
                table: "DocumentCategories");

            migrationBuilder.DropColumn(
                name: "DocumentId",
                table: "DocumentCategories");

            migrationBuilder.AddColumn<Guid>(
                name: "CategoryId",
                table: "Documents",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Gender",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecondName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Documents_CategoryId",
                table: "Documents",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Documents_DocumentCategories_CategoryId",
                table: "Documents",
                column: "CategoryId",
                principalTable: "DocumentCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Documents_DocumentCategories_CategoryId",
                table: "Documents");

            migrationBuilder.DropIndex(
                name: "IX_Documents_CategoryId",
                table: "Documents");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Documents");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SecondName",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<Guid>(
                name: "DocumentId",
                table: "DocumentCategories",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_DocumentCategories_DocumentId",
                table: "DocumentCategories",
                column: "DocumentId");

            migrationBuilder.AddForeignKey(
                name: "FK_DocumentCategories_Documents_DocumentId",
                table: "DocumentCategories",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
