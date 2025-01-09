import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { IApiResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  http = inject(HttpClient);

  getAllClients(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENTS
    );
  }

  addUpdateClient(obj: Client): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(
      environment.API_URL + 'AddUpdateClient',
      obj
    );
  }

  deleteClientById(id: number): Observable<IApiResponseModel> {
    return this.http.delete<IApiResponseModel>(
      environment.API_URL + 'DeleteClientByClientId?clientId=' + id
    );
  }

  getAllEmployees(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_EMP
    );
  }

  addUpdateClientProject(obj: Client): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(
      environment.API_URL + 'AddUpdateClientProject',
      obj
    );
  }

  getAllClientProjects(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_PROJECTS
    );
  }

  getAllUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
