import { Button, Checkbox, Dialog, DialogContent, DialogTitle, Grid, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { playerInterface } from "../utils/Interfaces"
import { Person2Outlined } from "@mui/icons-material";
import { useState } from "react"; 
import { useAppDispatch } from "../hooks/useAppDispatch";
import { updateMembersTeam } from "../store/league/thunks";


interface membersListProps {
    members: playerInterface[];
    teamId:number;

}

export const MembersList = ({members, teamId}:membersListProps) => {

    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState([]);
    const dispatch = useAppDispatch();


    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        const team = {
            id: teamId,
            players: checked,
        }
        if(checked.length > 0){
            dispatch(updateMembersTeam(team))
        }
        setOpen(false);
    };  
   
  const teamMembers = members.filter(member => member.team_id === teamId);
  const freeMembers = members.filter(member => member.team_id === null);
    
  return (
    <Grid container>
        <Grid item>
            <Button onClick={handleClickOpen} variant="outlined" color="info">Agregar Jugadores</Button>
        </Grid>
        <Grid item>
        <List dense={true}>
              {
                teamMembers && teamMembers.map((member)  => (
                    <ListItem key={member.id}>
                        <ListItemIcon>
                        <Person2Outlined />
                        </ListItemIcon>
                        <ListItemText
                        primary={member.name}
                        secondary={member.position}
                        />
                    </ListItem>
                ))
              
              }
            </List>
        </Grid>
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
            {"Choose the players!"}
            </DialogTitle>
            <DialogContent>
            <List dense={true}>
              {
                freeMembers && freeMembers.map((member)  => (
                    <ListItem 
                    key={member.id}
                    secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(member.id)}
                          checked={checked.indexOf(member.id) !== -1}
                          inputProps={{ 'aria-labelledby': member.id }}
                        />
                      }
                    >
                        <ListItemIcon>
                        <Person2Outlined />
                        </ListItemIcon>
                        <ListItemText
                        primary={member.name}
                        secondary={member.position}
                        />
                    </ListItem>
                ))
              
              }
            </List>
                
            </DialogContent>
        </Dialog>
    </Grid>
  )
}
