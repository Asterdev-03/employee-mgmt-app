import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IApiResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: IApiResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveClick() {
    debugger;
    this.clientService
      .addUpdate(this.clientObj)
      .subscribe((res: IApiResponseModel) => {
        if (res.result) {
          alert('Client Created Success');
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
