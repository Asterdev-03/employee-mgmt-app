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

export interface IEmployee {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  role: string;
}

export interface IClientProjects {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  projectName: string;
  startDate: Date;
  expectedEndDate: Date;
  clientName: string;
  clientProjectId: number;
}
