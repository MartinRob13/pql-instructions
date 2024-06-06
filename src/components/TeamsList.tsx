import { Accordion, AccordionDetails, AccordionSummary, Box, Stack } from '@mui/material'
import { teamInterface } from '../utils/Interfaces'
import { ExpandMore } from '@mui/icons-material'

interface TeamsListProps {
    teams: teamInterface[];
}

export const TeamsList = ({teams}:TeamsListProps) => {
  return (
    <Stack direction="column" spacing={1} sx={{ maxWidth: '700px'}}>
    {
        teams && teams.map(team => (

          <Accordion key={team.id}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Box sx={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                <p>{team.name}</p> 
                <p>{team.slogan} </p> 
              </Box>
            </AccordionSummary>
            <AccordionDetails>
                Aqui van los jugadores
            </AccordionDetails>
          </Accordion>

        ))

    }
    </Stack>

  )
}
