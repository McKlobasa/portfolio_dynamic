import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  margin: auto;
  padding: 50px;
`
const ContactLine = styled.p`
  color: var(--text);
  font-size: 20px;
  font-weight: bold;

`

export default function Contact (props) {
  return (
    <Container>
      <ContactLine>+386 07 569 669</ContactLine>
      <ContactLine>kl.lampret@gmail.com</ContactLine>
    </Container>
  )
}
