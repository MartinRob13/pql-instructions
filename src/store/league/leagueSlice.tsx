import { createSlice } from '@reduxjs/toolkit';

export const leagueSlice = createSlice({
    name: 'league',
    initialState: {
        isSaving: true,
        teamSaved: '',
        teams: [],
        players: [],
        errorMessage: null,    
    },
    reducers: {
        loadTeams: (state, action) => {

        },
        addNewTeam: (state, action) => {

        },
        setSavingTeam: (state) => {

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
    loadTeams,
    addNewTeam,
    setSavingTeam,
    updateTeam,
    deleteTeamById,
    loadPlayers,
    addNewPlayer,
    setSavingPlayer,
    updatePlayer,
    deletePlayerById } = leagueSlice.actions;