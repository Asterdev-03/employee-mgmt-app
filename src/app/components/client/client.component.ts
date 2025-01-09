import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IApiResponseModel } from '../../model/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-client',
  imports: [
    FormsModule,
    UpperCasePipe,
    DatePipe,
    AlertComponent,
    MyButtonComponent,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  currentDate: Date = new Date();

  userList$: Observable<any> = new Observable<any>();

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUsers();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: IApiResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveClick(data: string) {
    debugger;
    this.clientService
      .addUpdateClient(this.clientObj)
      .subscribe((res: IApiResponseModel) => {
        if (res.result) {
          alert(data + ' Created Success');
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert('Failure:' + res.message);
        }
      });
  }

  onDeleteClick(id: number) {
    const isDelete = confirm('Are you sure you want to delete');

    if (!isDelete) return;

    this.clientService
      .deleteClientById(id)
      .subscribe((res: IApiResponseModel) => {
        if (res.result) {
          alert('Client Deleted Success');
          this.loadClient();
        } else {
          alert('Failure:' + res.message);
        }
      });
  }

  onEditClick(data: Client) {
    this.clientObj = data;
  }
}
