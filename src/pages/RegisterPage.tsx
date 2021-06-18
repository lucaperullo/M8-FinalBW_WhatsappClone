import { IonItem, IonInput, IonLabel, IonButton } from "@ionic/react";
import { useState } from "react";
import styled from "styled-components";
import { backend } from "../config";

const RegisterPage = () => {
  const [username, setUsername] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const registerHandler = async (e: any) => {
    e.preventDefault();
    localStorage.setItem("phone-number", phoneNumber);
    console.log(phoneNumber, username);
    const res = await backend.post("/api/user/register", {
      userNumber: phoneNumber,
      name: username,
    });

    console.log(res);
    // if login successful push route to /chat
    // res && window.location.assign("/chat");
    !res && console.error({ error: res });
  };
  return (
    <>
      <Container>
        <form
          onSubmit={(e) => {
            registerHandler(e);
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
                value={phoneNumber}
                placeholder="Enter Number"
                onIonChange={(e) => setPhoneNumber(e.detail.value!)}
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
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30vh;
  width: 50vw;
  height: 100vh;
  top: 50 vh;
  align-self: center;
  justify-self: center;
`;

export default RegisterPage;
