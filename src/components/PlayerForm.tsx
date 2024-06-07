import { Close } from "@mui/icons-material"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { FormEvent } from "react";
import { targetProps, useForm } from "../hooks/useForm";
import { seletOptions } from "../utils/staticData";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { createNewPlayer } from "../store/league/thunks";


interface TeamsFormProps {
    isDialogOpened: boolean,
    handleCloseDialog: (value: boolean) => void,
}

export const PlayerForm = ({ isDialogOpened, handleCloseDialog }:TeamsFormProps) => {

    const dispatch = useAppDispatch();

    const { name , age, position, onInputChange} = useForm({
        name: 'mashle burnedead ',
        slogan: 'the child who lives!'
    });
    
    const handleClose = () => {
        handleCloseDialog(false);
    };

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(createNewPlayer({name, age, position}))

    }

    const handleChange = (event: targetProps) => {
        onInputChange(event);
      };


  return (
        <Dialog
            onClose={handleClose}
            open={isDialogOpened}
            fullWidth={true}
            maxWidth={'sm'}
        >   
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Create a new player
            </DialogTitle>
            <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <Close />
            </IconButton>
            <DialogContent dividers>
                 <form onSubmit={ onSubmit }>
            <DialogContentText>
                Complete the following magic fields to create a new player for the league.
            </DialogContentText>
               
                    <Grid container  sx={{display: 'flex', flexDirection: 'column'}} >
                        <TextField id="name" label="Player-name" name="name" value={ name } onChange={ onInputChange} placeholder="Write the name of the player" variant="filled" />
                        <TextField id="ager" label="Player-ager" name="age" type="number" value={ age } onChange={ onInputChange} placeholder="Write the age of the player" variant="filled" />
                        <InputLabel id="postion-select-label">Position</InputLabel>
                        <Select
                            variant="filled"
                            labelId="player-position"
                            id="demo-simple-select"
                            value={position}
                            name="position"
                            placeholder="Select a position"
                            label="Age"
                            onChange={handleChange}
                        >
                            {
                                seletOptions.map( option => (
                                    <MenuItem key={"option "+option} value={option}>{option}</MenuItem>

                                ))
                            }
                           
                        </Select>
                    </Grid>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" onClick={handleClose} color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>

        </Dialog>
  )
}
