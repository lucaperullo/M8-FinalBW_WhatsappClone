import {IonItem, IonInput} from '@ionic/react'
import { useState } from 'react'
import styled from 'styled-components'

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
        <>
          <Container>
          <IonItem>
            <IonInput type="text" value={phoneNumber} placeholder="Enter Number" onIonChange={e => setPhoneNumber(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="password" value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          </Container>
        </>
  )
}

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  top: 50 vh;
  align-self: center;
  justify-self: center
`


export default LoginPage