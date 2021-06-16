// import { IonContent  } from "@ionic/react";
import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import Chat from "../components/Chat";
import Contacts from "../components/Contacts";
import styled from 'styled-components';


const MainPage = () => {
  return (
    <IonContent fullscreen>
      <IonGrid>
      <ModRow>
      <IonCol size="4"><Contacts /></IonCol>
      <IonCol><Chat /></IonCol>
      </ModRow>
      </IonGrid>
    </IonContent>

  );
};

const ModRow = styled(IonRow)`
  height: 100vh
`



export default MainPage;
