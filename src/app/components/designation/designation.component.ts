import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);
  designationList: IDesignation[] = [];

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      (res: IApiResponseModel) => {
        this.designationList = res.data;
      },
      (error) => {
        alert('API error/ Network Down');
      }
    );
  }
}
