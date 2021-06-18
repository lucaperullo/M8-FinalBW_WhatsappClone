import { IonItem, IonInput, IonLabel, IonButton } from "@ionic/react"
import { useState } from "react"
import styled from "styled-components"
import { backend } from "../config"
import { useLocalStorage } from "../hooks/useLocalStorage"

const LoginPage = () => {
  const [userNumber, setUserNumber] = useLocalStorage<string>("userNumber", "")
  const [password, setPassword] = useState<string>("")

  const loginHandler = async (e: any) => {
    e.preventDefault()
    const res = await backend.post("/api/user/login", {
      userNumber,
    })
    console.log(res)
    // if login successful push route to /chat
    res && window.location.assign("/chat")
    !res && console.error({ error: res })
  }
  return (
    <>
      <Container>
        <form
          onSubmit={(e) => {
            loginHandler(e)
          }}
        >
          <IonItem style={{ borderRadius: "10px", marginBottom: "5px" }}>
            <IonLabel>Phone : </IonLabel>
            <IonInput
              type="text"
              value={userNumber}
              placeholder="Enter Number"
              onIonChange={(e) => setUserNumber(e.detail.value!)}
            ></IonInput>
          </IonItem>
          {/* <IonItem style={{ borderRadius: "10px", marginBottom: "5px" }}>
            <IonLabel>Password : </IonLabel>
            <IonInput
              type="password"
              value={password}
              placeholder="Password"
              onIonChange={(e) => setPassword(e.detail.value!)}
            ></IonInput>
          </IonItem> */}
          <IonButton type="submit">Sign in</IonButton>
        </form>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30vh;
  width: 50vw;
  height: 100vh;
  top: 50 vh;
  align-self: center;
  justify-self: center;
`

export default LoginPage
