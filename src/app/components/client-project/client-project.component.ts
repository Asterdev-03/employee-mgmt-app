import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/client.service';
import {
  IApiResponseModel,
  IClientProjects,
  IEmployee,
} from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { DatePipe } from '@angular/common';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  clientService = inject(ClientService);
  clientList: Client[] = [];
  employeeList: IEmployee[] = [];

  projectList = signal<IClientProjects[]>([]);

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
    this.getAllClientProjects();
  }

  getAllEmployee() {
    this.clientService.getAllEmployees().subscribe((res: IApiResponseModel) => {
      this.employeeList = res.data;
    });
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((res: IApiResponseModel) => {
      this.clientList = res.data;
    });
  }
  getAllClientProjects() {
    this.clientService
      .getAllClientProjects()
      .subscribe((res: IApiResponseModel) => {
        this.projectList.set(res.data);
      });
  }

  onSaveCLick() {
    const formValue = this.projectForm.value;

    debugger;
    this.clientService
      .addUpdateClientProject(formValue)
      .subscribe((res: IApiResponseModel) => {
        if (res.result) {
          alert('Project created success');
        } else {
          alert('Error:' + res.message);
        }
      });
  }
}
