import { Card, CardContent, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { playerInterface } from '../utils/Interfaces'
import { DeleteOutline } from '@mui/icons-material'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { dispatchDeletePlayerById } from '../store/league/thunks'

interface playersTableProps {
    allPlayers: playerInterface[],
}


export const PlayersTable = ({allPlayers}:playersTableProps) => {
    const dispatch = useAppDispatch();

    const deletePlayer = (id:number) => {        
        dispatch( dispatchDeletePlayerById(id) )
    }

  return (
    <Card>
        <CardContent>
           
               
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Age</TableCell>
                                    <TableCell align="right">Position</TableCell>
                                    <TableCell align="right">Availability</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {
                                allPlayers && allPlayers.map((player, index) => (
                                    <TableRow
                                        key={player.id}
                                    >
                                        <TableCell align="left">{index + 1}</TableCell>
                                        <TableCell align="right">{player.name}</TableCell>
                                        <TableCell align="right">{player.age}</TableCell>
                                        <TableCell align="right">{player.position}</TableCell>
                                        <TableCell align="right">
                                            {
                                                player.team_id == null ? 'Available' : 'Assigned'
                                            }
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton onClick={() => deletePlayer(player.id)} aria-label="delete" size="large" color="warning">
                                                <DeleteOutline fontSize="inherit" />
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>
                                ))

                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
    
            
        </CardContent>
    </Card>
  )
}
