import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, NgFor],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];

  http = inject(HttpClient);
  // constructor(private http: HttpClient) {
  // }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe((res: any) => {
        this.roleList = res.data;
      });
  }
}
