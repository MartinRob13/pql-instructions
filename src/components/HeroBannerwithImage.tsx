import { Box, Grid, Typography } from '@mui/material';

export interface HeroBannerWithImageProps {
    src: string;
    title: string;
    subtitle: string;
}

export const HeroBannerWithImage = ({src, title, subtitle}:HeroBannerWithImageProps) => {
  return (
    <Grid container sx={{ backgroundImage: `url(${src})`,  height: { sm: '', md:'500px'}, m:0, color: '#fff', backgroundSize: 'cover'}}>
        <Grid container sx={{ background: 'rgba(0, 0, 0, 0.6)'}}>
            <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column' }}>
                <Box>
                    <Typography variant="h4" gutterBottom >{title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs:'column', md: 'row'}, alignItems: 'center'}}>
                    <Box sx={{ display:'flex', alignItems:'center', maxWidth: '700px', flexDirection:'column', justifyContent:'center', background: 'rgb(255 255 255 / 15%)', height: '100%',}}>
                        <Typography variant="subtitle1" sx={{ p: 2, textAlign:'center' }}>{subtitle}</Typography>   
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Grid>
  )
}
