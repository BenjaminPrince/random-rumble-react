import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import {useSelector} from 'react-redux';


// class PlayerList extends React.Component {

const PlayerList = () => {
  const players = useSelector (state => state.fight.players)
  console.log(players)

  const displayPlayers = () => {
    return Object.keys(players).map(key => (
      <PlayerCard key={players[key].id} player={players[key]} />
    ));
  }
    return (
      <div className='table'>
        {displayPlayers()}
      </div>
    );
    }

export default PlayerList;