import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, CircularProgress } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { IData, ITableData } from "../models/models";
import { GetData } from "../controller/table";
import { format, parseISO } from "date-fns";
export function DisplayTable() {
  const [data, setData] = useState<ITableData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(true);

  let content;

  GetData("https://demoeplanner.eliteit.dk/REST/api/Tasks", setData, setIsLoading);

  let tableData: ITableData[] = [];

  data.forEach((customer) => {
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
    });
  });
  let propertyNames: string[] = [];

  if (tableData.length !== 0) {
    propertyNames = Object.getOwnPropertyNames(tableData[0]);
  }

  if (isLoading) {
    content = <CircularProgress color="primary" />;
  } else {
    content = (
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
              <TableRow>
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
    );
  }
  return content;
}
