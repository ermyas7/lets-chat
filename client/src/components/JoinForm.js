import React, { Component } from 'react'

export class JoinForm extends Component {
  render() {
    return (
        <div style={formContainer}>
            <form style={formStyle}>
          <div style={inputContainer}>
              <label>Display Name</label>
              <input type="text" style={textInput}/>
          </div>
          <div style={inputContainer}>
              <label>Join or Add Room</label>
              <input type="text" style={textInput}/>
          </div>
          <div style={inputContainer} >
              <button style={joinButton}>
                   Join
                   </button>
          </div>
      </form>
        </div>
    )
  }
}

const formContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-primary)',
}

const formStyle = {
    width: '20rem',
    backgroundColor: '#fff',
    borderRadius: '3px',
    padding: '2rem',
    boxShadow: 'var(--shadow-light)'
}

const inputContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.8rem',
    fontWeight: '500'
}

const textInput = {
    padding: '.3rem 1rem',
    outline: 'none',
    margin: '1rem 0',
    width: '80%',
    color: 'currentColor',
    fontSize: 'inherit',
    border: '1px solid var(--color-grey-light)'
}

const joinButton = {
    width: '80%',
    padding: '.4rem 1rem',
    margin: '1rem 0',
    cursor: 'pointer',
    backgroundColor: '#282c34',
    color:'#fff',
    outline: 'none',
    border: 'none',
    borderRadius: '3px',
    fontSize: 'inherit',
    fontWeight: '300',
    backgroundImage: 'linear-gradient(var(--color-primary-light),var(--color-primary-dark))',
    boxShadow: 'var(--shadow-light)'
}
export default JoinForm
