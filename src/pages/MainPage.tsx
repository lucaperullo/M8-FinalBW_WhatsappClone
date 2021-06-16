// import { IonContent  } from "@ionic/react";
import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import Chat from "../components/Chat";
import Contacts from "../components/Contacts";
import styled from 'styled-components'

const MainPage = () => {
  return (
    <IonContent fullscreen>
      <IonGrid>
      <IonRow>
      <IonCol size="4"><Contacts /></IonCol>
      <IonCol><Chat /></IonCol>
      </IonRow>
      </IonGrid>
    </IonContent>

  );
};

const Container = styled.div`
  height: 100%;
  width: 100%
`

export default MainPage;
