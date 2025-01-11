import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IApiResponseModel, IRole } from '../../model/interface/role';
import { NgFor } from '@angular/common';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, NgFor],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  isLoader: boolean = true;

  http = inject(HttpClient);
  // constructor(private http: HttpClient) {
  // }

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    // this.http
    //   .get<IApiResponseModel>(
    //     'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles'
    //   )
    //   .subscribe(
    //     (res: IApiResponseModel) => {
    //       this.roleList = res.data;
    //       this.isLoader = false;
    //     },
    //     (error) => {
    //       // alert('API error/ Network Down');
    //     }
    //   );

    this.masterService.getRoles().subscribe(
      (res: IApiResponseModel) => {
        this.roleList = res.data;
        this.isLoader = false;
      },
      (error) => {
        // alert('API error/ Network Down');
      }
    );
  }
}
