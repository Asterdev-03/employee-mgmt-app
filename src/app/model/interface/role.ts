export interface IApiResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface IRole {
  roleId: number;
  role: string;
}

export interface IDesignation {
  designationId: number;
  designation: string;
}
