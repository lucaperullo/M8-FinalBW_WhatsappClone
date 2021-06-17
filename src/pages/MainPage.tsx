// import { IonContent  } from "@ionic/react";
import React from "react";
import { IonGrid, IonRow, IonCol, IonContent } from "@ionic/react";
import Chat from "../components/Chat";
import Contacts from "../components/Contacts";
import styled from "styled-components";

const MainPage = () => {
  return (
    // <IonContent fullscreen>
    <div>
      <IonGrid>
        <IonRow>
          <ModCol size="3">
            <Contacts />
          </ModCol>
          <ModCol>
            <Chat />
          </ModCol>
        </IonRow>
      </IonGrid>
    </div>
    // </IonContent>
  );
};

const ModCol = styled(IonCol)`
  height: 100vh;
`;

export default MainPage;
