import { Button, Grid, Typography } from "@mui/material";
import { HeroBannerWithImage, HeroBannerWithImageProps } from "../components/HeroBannerwithImage";
import { AppLayout } from "../layout/AppLayout"
import { AddCircle } from "@mui/icons-material";
import { useState } from "react";
import { PlayerForm } from "../components/PlayerForm";
import { useFetchGetPlayers } from "../hooks/useFetchGetPlayers";
import { PlayersTable } from "../components/PlayersTable";

export const PlayersPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const {allPlayers} = useFetchGetPlayers();
  console.log(typeof allPlayers)
  const onClickNewPlayer = () => {
    setIsOpen(!isOpen);

  }

  const closeDialog = (status:boolean) => {
    setIsOpen(status);
  }

  const teamsBannerProps:HeroBannerWithImageProps = {
    title: "Welcome to the playes admin page",
    subtitle: "Challenge Accepted! Add the next MVP of the league.",
    src: '/images/team_players.png'
  };

  return (
   <>
    <AppLayout>
      <HeroBannerWithImage {... teamsBannerProps}/>
      <Grid container p={5}>
        <Grid container m={4} sx={{ width: '100%', display: 'flex'}} direction="column" >
          <Grid item sx={{ display:'flex', justifyContent: 'space-between', width: '100%'}}>
          <Typography variant="h3">Registered teams</Typography>
            <Button variant="contained" onClick={onClickNewPlayer} endIcon={<AddCircle /> } >
              Add a new player
            </Button>
          </Grid>
        </Grid>
        <Grid item  sx={{ display:'flex', flexDirection: 'column', width: '100%'}}>
            <PlayersTable allPlayers={allPlayers}/>
        </Grid>
        </Grid>
        <PlayerForm
          isDialogOpened={isOpen}
          handleCloseDialog={() => closeDialog(false)}
        />

    </AppLayout>
   </>
  )
}
