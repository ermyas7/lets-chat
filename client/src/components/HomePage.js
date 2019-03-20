import React, { Component } from 'react'
import JoinForm from './JoinForm';

class HomePage extends Component {
  render() {
    return (
    <div>
        <header style={header}>
          <h1 
          style={
              {fontSize: '2.5rem',
               fontWeight: '300',
                marginBottom: '2rem'}
              }>
              Lets-chat
            </h1>
          <h3 
          style={
            {fontSize: '2.0rem',
             fontWeight: '500',
             marginBottom: '4rem'}
            }>
            Join the chat world!
            </h3>
        </header>
        <JoinForm/>
      </div>
    )
  }
}

const header = {
    color: '#fff',
    textAlign: 'center',
    paddingTop: '5rem',
  } 
  
  

export default HomePage
