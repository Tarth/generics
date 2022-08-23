import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
  Button,
} from "@mui/material";
import { IData, ITableData, IModalData } from "../models/models";
import { GetData } from "../controller/table";
import { format, parseISO } from "date-fns";
import { EditCustomer } from "./editCustomer";
export function DisplayTable() {
  const [data, setData] = useState<ITableData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  let content;
  let tableData: ITableData[] = [];
  let modalData: IModalData[] = [];
  let propertyNames: string[] = [];

  GetData("https://demoeplanner.eliteit.dk/REST/api/Tasks", setData, setIsLoading);

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
                  onClick={() => {
                    console.log("Clicked");
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
