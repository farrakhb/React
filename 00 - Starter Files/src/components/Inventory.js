import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component{

    render(){
        return(
        <div>
            <h1>Inventory</h1>
            <AddFishForm />
        </div>
        )
    }
}

export default Inventory;
