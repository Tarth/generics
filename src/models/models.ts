export interface IData {
  <Type>(data: Type): Type;
}

export interface ITableData {
  No: number | string;
  Job_Description: string;
  Job_Task_Description: string;
  Customer_Name: string;
  Responsible: EResponsible | string;
  App_Task_Status_Description: ETaskStatusDescription | string;
  JobNo: number | string;
  Job_Task_No: number | string;
  Deadline: string;
  To_Be_Done_By: string;
}

export enum EResponsible {
  Carsten = 1,
  Nikolai = 2,
  Mikkel = 3,
}

enum ETaskStatusDescription {
  planlagt = 1,
  færdig = 2,
  frigivet = 3,
}
