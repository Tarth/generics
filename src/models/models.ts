export interface IData {
  <Type>(data: Type): Type;
}

export interface ITableData {
  No: number | string;
  Job_Description: string;
  Job_Task_Description: string;
  Customer_Name: string;
  Responsible: EResponsible | string;
  App_Task_Status_Description: ETaskStatus | string;
  JobNo: number | string;
  Job_Task_No: number | string;
  Deadline: string;
  To_Be_Done_By: string;
  Task_GUID: string;
}

export interface IModalData extends ITableData {
  Customer_No: number;
  Created_By: EResponsible;
  Created_DateTime: string;
  Text: string;
  Work_Description: string;
  Task_Status: ETaskStatus;
  Priority: number;
}
export interface DialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
export interface RowProp {
  title: string;
  inputElement: JSX.Element;

  editable: boolean;
}
export enum EResponsible {
  Carsten = 1,
  Nikolai = 2,
  Mikkel = 3,
}

export enum ETaskStatus {
  planlagt = 1,
  færdig = 2,
  frigivet = 3,
}
