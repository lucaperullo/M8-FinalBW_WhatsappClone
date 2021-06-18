import { IonItem, IonInput, IonLabel, IonButton } from "@ionic/react"
import { useState } from "react"
import styled from "styled-components"
import { backend } from "../config"
import { useLocalStorage } from "../hooks/useLocalStorage"

const RegisterPage = () => {
  const [username, setUsername] = useState<string>("")
  const [userNumber, setUserNumber] = useLocalStorage<string>("userNumber", "")

  const registerHandler = async (e: any) => {
    e.preventDefault()
    const res = await backend.post("/api/user/register", {
      userNumber: userNumber,
      name: username,
    })

    console.log(res)
    // if login successful push route to /chat
    // res && window.location.assign("/chat");
    !res && console.error({ error: res })
  }
  return (
    <>
      <Container>
        <form
          onSubmit={(e) => {
            registerHandler(e)
          }}
        >
          <IonItem
            style={{
              borderRadius: "10px",
              marginBottom: "5px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <IonLabel>Phone : </IonLabel>
              <IonInput
                type="text"
                value={userNumber}
                placeholder="Enter Number"
                onIonChange={(e) => setUserNumber(e.detail.value!)}
              ></IonInput>
              <IonLabel>Username : </IonLabel>
              <IonInput
                type="text"
                value={username}
                placeholder="your username here"
                onIonChange={(e) => setUsername(e.detail.value!)}
              ></IonInput>
            </div>
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
          <IonButton type="submit">Sign up</IonButton>
        </form>
      </Container>
    </>
  )
}

const Container = styled.div`
  background-image: url(${"https://www.transparenttextures.com/patterns/food.png"});
  display: flex;
  flex-direction: column;
  padding-top: 30vh;

  width: 100vw;
  height: 100vh;
  top: 50 vh;
  align-self: center;
  justify-self: center;
`

export default RegisterPage
