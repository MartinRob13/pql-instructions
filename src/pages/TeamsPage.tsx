import { Button, Grid, Typography } from "@mui/material"
import { HeroBanner, HeroBannerProps } from "../components/HeroBanner"
import { AppLayout } from "../layout/AppLayout"
import { AddCircle } from "@mui/icons-material";
import { TeamsList } from "../components/TeamsList";
import { useAppSelector } from "../hooks/useAppDispatch";
import { useState } from "react";
import { TeamsForm } from "../components/TeamsForm";

export const TeamsPage = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const {teams, players} = useAppSelector(state => state.league)
  const onClickNewTeam = () => {
    setIsOpen(!isOpen);

  }

  const closeDialog = (status:boolean) => {
      setIsOpen(status);
  }

  
  
  const teamsBannerProps:HeroBannerProps = {
    title: "Welcome to the teams admin page",
    subtitle: "Challenge Accepted! Build your dream team and join the Quidditch League.",
  };

  return (
    <>
    <AppLayout>
      <HeroBanner {... teamsBannerProps}/>
      <Grid container p={5}>
        <Grid container m={4} sx={{ width: '100%', display: 'flex'}} direction="column" >
          <Grid item sx={{ display:'flex', justifyContent: 'space-between', width: '100%'}}>
          <Typography variant="h3">Registered teams</Typography>
            <Button variant="contained" onClick={onClickNewTeam} endIcon={<AddCircle /> } >
              Add new team
            </Button>
          </Grid>
          <Grid item xs={12} md={4}  >
            {
                teams && (<TeamsList teams={teams} players={players} />)
            }
            
          </Grid>
        </Grid>
      </Grid>
      <TeamsForm 
        isDialogOpened={isOpen}
        handleCloseDialog={() => closeDialog(false)}
      />
    </AppLayout>
   </>
  )
}
