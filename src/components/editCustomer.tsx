import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Stack,
  Box,
} from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export const EditCustomer: React.FC<SimpleDialogProps> = ({ open, selectedValue, onClose }) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <TextField>asd</TextField>
        <TextField>asd</TextField>
        <TextField>asd</TextField>
        <TextField>asd</TextField>
        <TextField>asd</TextField>
        <TextField>asd</TextField>
        <TextField>asd</TextField>
      </DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};
