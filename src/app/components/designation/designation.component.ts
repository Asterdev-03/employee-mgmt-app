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
  isLoader: boolean = true;
  designationList: IDesignation[] = [];

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      (res: IApiResponseModel) => {
        this.designationList = res.data;
        this.isLoader = false;
      },
      (error) => {
        // alert('API error/ Network Down');
      }
    );
  }
}
