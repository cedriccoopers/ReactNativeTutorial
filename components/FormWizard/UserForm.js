import React, { Component } from 'react'

export class UserForm extends Component
{

    state = { 
        step:1,
        firstName : '',
        surname: '' ,
        email: '',
        city:'',
        bio:''}

        //Proceed to next step
        nextStep = () => {
            const { step } = this.state;
        }

    render(){
        return{
            <div>
            </div>
        }
    }
}

export default UserForm