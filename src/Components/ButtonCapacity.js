import React from 'react';
import { hitBack, hitMonster } from '../features/fight/fightSlice';
import { useDispatch } from 'react-redux';

// class ButtonCapacity extends React.Component {
const ButtonCapacity = props =>{ 

    const dispatch = useDispatch();

    const combat = () => {
        dispatch(hitMonster({damage:25}));
        dispatch(hitBack({damage:5, playerId:props.player.id}))
    }
        
        return (
            <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
                hit
            <i className="fas fa-bomb"></i> 5
        <i className="fas fa-fire-alt"></i> -5
    </button>
        )
    }




export default ButtonCapacity;