import React from 'react';
import { hitBack, hitMonster } from '../features/fight/fightSlice';
import { useDispatch } from 'react-redux';

// class ButtonCapacity extends React.Component {
const ButtonCapacity = props =>{ 

    const dispatch = useDispatch();

    const combat = () => {
        dispatch(hitMonster(5))
          console.log('aie!')
        dispatch(hitBack(5))
        
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