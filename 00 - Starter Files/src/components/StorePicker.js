import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    //
    goToStore(event){
        event.preventDefault();
        console.log("you changed the store")
        //first grab the text from the box
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`);
        //second we are going to transitoin form /to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render(){
        return(
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
                ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store </button>
            </form>
        )
    }
}

StorePicker.contextTypes ={
    router: React.PropTypes.object
}

export default StorePicker;
