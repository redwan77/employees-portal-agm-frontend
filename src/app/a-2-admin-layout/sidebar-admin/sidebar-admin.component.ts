import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar-admin",
  templateUrl: "./sidebar-admin.component.html",
  styleUrls: ["./sidebar-admin.component.css"],
})
export class SidebarAdminComponent implements OnInit {
  public menuOptions = [
    {
      option: "Employees status",
      route: "./employees-status",
      icon:'fas fa-flag'
    },
    {
      option: "Employees list",
      route: "./employees-list",
      icon:'fas fa-list'
    },
    {
      option: "Employees-record",
      route: "./employees-record",
      icon:'fas fa-clipboard'
    },
    {
      option: "Add Employee",
      route: "./add-employee",
      icon:'fas fa-plus'
    },
    {
      option: "Absence requests",
      route: "./absence-requests",
      icon:'fas fa-exclamation'
    },
    {
      option: "Absence verifications",
      route: "./absence-verifications",
      icon:'fas fa-exclamation'
    },
    {
      option: "Configuration",
      route: "./configuration",
      icon:'fas fa-cogs'
    },
  ];
  constructor() {}

  ngOnInit() {}
}
