import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApiResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);

  getDesignations(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      environment.API_URL + 'GetAllDesignation'
    );
  }

  getRoles(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      environment.API_URL + 'GetAllRoles'
    );
  }
}
