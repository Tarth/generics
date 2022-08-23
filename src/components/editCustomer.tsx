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
import { RowProp, DialogProps } from "../models/models";

export const EditCustomer: React.FC<DialogProps> = ({ open, selectedValue, onClose }) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  function AllRows() {
    return (
      <Box>
        <Stack>
          <Row title={"Numre"} inputElement={<TextField></TextField>} editable={false}></Row>
          <Row title={"Kunde"} inputElement={<TextField></TextField>} editable={false}></Row>
          <Row title={"Oprettet"} inputElement={<TextField></TextField>} editable={false}></Row>
          <Row
            title={"Sagsbeskrivelse"}
            inputElement={<TextField></TextField>}
            editable={false}
          ></Row>
          <Row
            title={"Opgavebeskrivelse"}
            inputElement={<TextField></TextField>}
            editable={true}
          ></Row>
          <Row
            title={"Arbejdsbeskrivelse"}
            inputElement={<TextField></TextField>}
            editable={true}
          ></Row>
          <Row title={"Status"} inputElement={<TextField></TextField>} editable={true}></Row>
          <Row title={"Prioritet"} inputElement={<TextField></TextField>} editable={true}></Row>
          <Row title={"Ansvarlig"} inputElement={<TextField></TextField>} editable={true}></Row>
          <Row title={"Udføres af"} inputElement={<TextField></TextField>} editable={true}></Row>
          <Row title={"Deadline"} inputElement={<TextField></TextField>} editable={true}></Row>
        </Stack>
      </Box>
    );
  }

  const Row: React.FC<RowProp> = ({ title, inputElement, editable = true }): JSX.Element => {
    let textField = <></>;

    if (editable) {
      textField = <TextField></TextField>;
    } else {
      textField = <TextField variant="filled" disabled></TextField>;
    }
    return (
      <Stack direction="row">
        <div>{title}</div>
        {textField}
      </Stack>
    );
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <AllRows></AllRows>
      </DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};
