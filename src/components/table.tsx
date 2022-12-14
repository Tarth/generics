import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
  Button,
} from "@mui/material";
import { EResponsible, ETaskStatus, IModalData, ITableData } from "../models/models";
import { GetDataHook } from "../controller/table";
import { format, parseISO } from "date-fns";
import { EditCustomer } from "./editCustomer";
import { GetData } from "../services/services";
export function DisplayTable() {
  const [customers, setCustomers] = useState<ITableData[]>([]);
  const [customer, setCustomer] = useState<IModalData>({
    No: 0,
    Job_Description: "",
    Job_Task_Description: "",
    Customer_Name: "",
    Responsible: "",
    App_Task_Status_Description: "",
    JobNo: 0,
    Job_Task_No: 0,
    Deadline: "",
    To_Be_Done_By: "",
    Task_GUID: "",
    Customer_No: 0,
    Created_By: EResponsible.Carsten,
    Created_DateTime: "",
    Text: "",
    Work_Description: "",
    Task_Status: ETaskStatus.planlagt,
    Priority: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  {
  }
  let content;
  let tableData: ITableData[] = [];
  let propertyNames: string[] = [];

  GetDataHook("https://demoeplanner.eliteit.dk/REST/api/Tasks", setCustomers, setIsLoading);

  customers.forEach((customer) => {
    tableData.push({
      No: customer.No,
      Job_Description: customer.Job_Description,
      Job_Task_Description: customer.Job_Task_Description,
      Customer_Name: customer.Customer_Name,
      Responsible: customer.Responsible,
      App_Task_Status_Description: customer.App_Task_Status_Description,
      JobNo: customer.JobNo,
      Job_Task_No: customer.Job_Task_No,
      Deadline: customer.Deadline,
      To_Be_Done_By: customer.To_Be_Done_By,
      Task_GUID: customer.Task_GUID,
    });
  });

  if (tableData.length !== 0) {
    propertyNames = Object.getOwnPropertyNames(tableData[0]);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  if (isLoading) {
    content = <CircularProgress color="primary" />;
  } else {
    content = (
      <>
        <Button onClick={handleClickOpen}>Open Dialog</Button>
        <Table sx={{ width: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {propertyNames.length !== 0 ? (
                propertyNames.map((propertyName) => {
                  return <TableCell>{propertyName}</TableCell>;
                })
              ) : (
                <></>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((customer) => {
              return (
                <TableRow
                  onClick={async () => {
                    const data = await GetData(
                      `https://demoeplanner.eliteit.dk/REST/api/Tasks/${customer.Task_GUID}`
                    );
                    setCustomer(data);
                  }}
                >
                  <TableCell>{customer.No}</TableCell>
                  <TableCell>{customer.Job_Description}</TableCell>
                  <TableCell>{customer.Job_Task_Description}</TableCell>
                  <TableCell>{customer.Customer_Name}</TableCell>
                  <TableCell>{customer.Responsible}</TableCell>
                  <TableCell>{customer.App_Task_Status_Description}</TableCell>
                  <TableCell>{customer.JobNo}</TableCell>
                  <TableCell>{customer.Job_Task_No}</TableCell>
                  <TableCell>{format(parseISO(customer.Deadline), "dd-MM-yyyy")}</TableCell>
                  <TableCell>{customer.To_Be_Done_By}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <EditCustomer
          open={open}
          onClose={handleClose}
          selectedValue={selectedValue}
        ></EditCustomer>
      </>
    );
  }
  return content;
}
