import { useAppDispatch } from '../hooks/useAppDispatch';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, TextField } from '@mui/material'
import { useForm } from '../hooks/useForm';
import { createNewTeam } from '../store/league/thunks';
import { FormEvent } from 'react';
import { Close } from '@mui/icons-material';

interface TeamsFormProps {
    isDialogOpened: boolean,
    handleCloseDialog: (value: boolean) => void,
}

export const TeamsForm = ({ isDialogOpened, handleCloseDialog }:TeamsFormProps) => {

    const dispatch = useAppDispatch();
    const { name, slogan , onInputChange} = useForm({
        name: 'Potters',
        slogan: 'the child who lives!'
    });
    
    const handleClose = () => {
        handleCloseDialog(false);
    };

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(createNewTeam({name: name, slogan: slogan}));

    }

    return (
        <Dialog
            onClose={handleClose}
            open={isDialogOpened}
            fullWidth={true}
            maxWidth={'sm'}
        >   
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Create a new team
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
                Complete the following magic fields to create a new team for the league.
            </DialogContentText>
               
                    <Grid container sx={{display: 'flex', flexDirection: 'column'}}>
                        <TextField id="name" label="Team name" name="name" value={ name } onChange={ onInputChange} placeholder="Write the name of the new team" variant="filled" />
                        <TextField id="slogan" label="Slogan" name="slogan" value={ slogan } onChange={ onInputChange} placeholder="Write the awesome team slogan here." variant="filled" />
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
