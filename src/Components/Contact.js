import React from 'react'
import MainLayout from './mainLayout'
import { ButtonContainer } from './Style'

const Contact = () => {
  return (
    <MainLayout>
      <center>
        <h1>CONTACT</h1> <br />
        <h2>KEEP IN TOUCH</h2> <br />
        <form>
          <h3>Name:</h3> <input type="text" placeholder='Name'/> <br />
          <h3>E-mail:</h3> <input type="text" placeholder='E-mail'/><br /><br />
          <ButtonContainer>Send</ButtonContainer>
        </form>

      </center>
    </MainLayout>
  )
}

export default Contact