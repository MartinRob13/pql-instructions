import { AppLayout } from "../layout/AppLayout"
import { HeroBannerWithImage, HeroBannerWithImageProps } from "../components/HeroBannerwithImage"
import { Grid, Typography } from "@mui/material"
import { useAppDispatch } from "../hooks/useAppDispatch";
import { startLoadingTeams } from "../store/league/thunks";


export const HomePage = () => {

  const dispatch = useAppDispatch();

  const houses = [
    {
      name:'Gryffindor',
      image: '/images/gryffindor.png',
      text: "The Gryffindor house emphasised the traits of courage as well as daring, nerve, and chivalry.",
    },
    {
      name: 'Ravenclaw',
      image: '/images/ravenclaw.png',
      text: "Ravenclaw was one of four Hogwarts houses and prized students whose focus was on learning, wit and wisdom.",
    },
    {
      name: 'Slytherin',
      image: '/images/slytherin.png',
      text: "Slytherin values ambition, cunning, leadership, and resourcefulness.",
    },
    {
      name: 'Hufflepuff',
      image: '/images/hufflepuff.png',
      text: "Hufflepuff values hard work, patience, justice, and loyalty.",
    }
      
  ];

  const homeBannerProps:HeroBannerWithImageProps = {
    title: "Welcome to the Official Page of the Premier Quidditch League",
    subtitle: "Don't Muggle It! Become a Quidditch master. Join the League today! ",
    src:"/images/quidditch_hero.png"
  }

  dispatch( startLoadingTeams() );  

  return (
    <>
       <AppLayout >
          <HeroBannerWithImage {... homeBannerProps}/>
          <Grid container rowSpacing={1} p={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex' }}>
            <Typography variant="h4">Unleash the Magic! Discover the houses in the Quidditch League</Typography>
            {
              houses.map(house => (
                <Grid container item mt={3} xs={6} key={house.name}>
                  <div className="houseCard">
                      <div>
                        <img src={house.image} alt="house of hogwarts"/>
                      </div>
                      <div className="houseCard-info">
                          <Typography variant="h5">{house.name}</Typography>
                          <Typography variant="body1" sx={{textAlign: 'center'}}>
                              {house.text}
                          </Typography>
                      </div>
                  </div>
                </Grid>
              ))
            }

          </Grid>
        </AppLayout>
    </>
  )
}
