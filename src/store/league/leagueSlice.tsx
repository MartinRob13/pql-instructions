/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { playerInterface, teamInterface } from '../../utils/Interfaces';

interface leagueState {
    isSaving: boolean,
    teamSaved: string,
    players: playerInterface[],
    teams: teamInterface[],
    errorMessage: string,
  }

const initialState: leagueState = {
        isSaving: false,
        teamSaved: '',
        players: [],
        teams: [],
        errorMessage: '',  
  }

export const leagueSlice = createSlice({
    name: 'league',
    initialState: initialState,
    reducers: {
        setTeams: (state, action) => {
            state.teams = action.payload;
        },
        addNewTeam: (state, action) => {
            state.teams.push(action.payload);
            state.isSaving = true;
        },
        loadTeams: (state) => {
            state.isSaving = false;
        },
        updateTeam: (state, action) => {

        },
        deleteTeamById:(state, action) => {

        },

        loadPlayers: (state, action) => {

        },
        addNewPlayer: (state, action) => {

        },
        setSavingPlayer: (state) => {

        },
        updatePlayer: (state, action ) => {

        },
        deletePlayerById: (state, action) => {

        }
    }
});

export const {
    setTeams,
    addNewTeam,
    loadTeams,
    updateTeam,
    deleteTeamById,
    loadPlayers,
    addNewPlayer,
    setSavingPlayer,
    updatePlayer,
    deletePlayerById } = leagueSlice.actions;