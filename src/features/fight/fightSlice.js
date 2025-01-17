import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    // TODO : Compléter &#39;players&#39; et &#39;monster&#39;
    players: [
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
        { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
    ],
    monster: { pvMax: 1000, pv: 1000 }
}

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            state.monster.pv = state.monster.pv - action.payload.damage

            return state;
        },
        hitBack: (state, action) => {
            state.players.find(player => player.id == action.payload.playerId).pv -= action.payload.damage
           
            return state;
        }
    },

})

export default fightSlice.reducer
export const { hitMonster, hitBack} = fightSlice.actions
