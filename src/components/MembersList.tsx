import { Button, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { playerInterface } from "../utils/Interfaces"
import { Person2Outlined } from "@mui/icons-material";

interface membersListProps {
    members: playerInterface[];
    teamId:number;
}

export const MembersList = ({members, teamId}:membersListProps) => {
   
  const teamMembers = members.filter(member => member.team_id === teamId);
    
  return (
    <Grid container>
        <Grid item>
            <Button variant="outlined" color="info">Agregar Jugadores</Button>
        </Grid>
        <Grid item>
        <List dense={true}>
              {
                teamMembers && teamMembers.map((member)  => (
                    <ListItem>
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
    </Grid>
  )
}
