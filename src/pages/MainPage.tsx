import { IonItem } from "@ionic/react";
import Chat from "../components/Chat";
import Contacts from "../components/Contacts";

const MainPage = () => {
  return (
    <IonItem style={{ display: "flex", flexDirection: "row" }}>
      <Contacts />
      <Chat />
    </IonItem>
  );
};

export default MainPage;
