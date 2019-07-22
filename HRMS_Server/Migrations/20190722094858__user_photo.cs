using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HRMS_Server.Migrations
{
    public partial class _user_photo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CandidateProfiles_Members_Id",
                table: "CandidateProfiles");

            migrationBuilder.DropForeignKey(
                name: "FK_EmployeeProfiles_Members_Id",
                table: "EmployeeProfiles");

            migrationBuilder.AddColumn<Guid>(
                name: "CandidateProfileId",
                table: "Members",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "EmployeeProfileId",
                table: "Members",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "AspNetUserTokens",
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 128);

            migrationBuilder.AlterColumn<string>(
                name: "LoginProvider",
                table: "AspNetUserTokens",
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 128);

            migrationBuilder.AddColumn<string>(
                name: "Photo",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ProviderKey",
                table: "AspNetUserLogins",
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 128);

            migrationBuilder.AlterColumn<string>(
                name: "LoginProvider",
                table: "AspNetUserLogins",
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 128);

            migrationBuilder.CreateIndex(
                name: "IX_Members_CandidateProfileId",
                table: "Members",
                column: "CandidateProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Members_EmployeeProfileId",
                table: "Members",
                column: "EmployeeProfileId");

            migrationBuilder.AddForeignKey(
                name: "FK_Members_CandidateProfiles_CandidateProfileId",
                table: "Members",
                column: "CandidateProfileId",
                principalTable: "CandidateProfiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Members_EmployeeProfiles_EmployeeProfileId",
                table: "Members",
                column: "EmployeeProfileId",
                principalTable: "EmployeeProfiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Members_CandidateProfiles_CandidateProfileId",
                table: "Members");

            migrationBuilder.DropForeignKey(
                name: "FK_Members_EmployeeProfiles_EmployeeProfileId",
                table: "Members");

            migrationBuilder.DropIndex(
                name: "IX_Members_CandidateProfileId",
                table: "Members");

            migrationBuilder.DropIndex(
                name: "IX_Members_EmployeeProfileId",
                table: "Members");

            migrationBuilder.DropColumn(
                name: "CandidateProfileId",
                table: "Members");

            migrationBuilder.DropColumn(
                name: "EmployeeProfileId",
                table: "Members");

            migrationBuilder.DropColumn(
                name: "Photo",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "AspNetUserTokens",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "LoginProvider",
                table: "AspNetUserTokens",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "ProviderKey",
                table: "AspNetUserLogins",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "LoginProvider",
                table: "AspNetUserLogins",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddForeignKey(
                name: "FK_CandidateProfiles_Members_Id",
                table: "CandidateProfiles",
                column: "Id",
                principalTable: "Members",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_EmployeeProfiles_Members_Id",
                table: "EmployeeProfiles",
                column: "Id",
                principalTable: "Members",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
