import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonItem,
  IonAvatar,
  IonLabel,
  IonSearchbar,
  IonIcon,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonRouterOutlet,
} from "@ionic/react";
import { settingsOutline } from "ionicons/icons";
import NewContactModal from "./NewContactModal";

import "../theme/style.css";
import SettingsModal from "./Settings";
import { useContacts } from "../hooks/useContacts";

const Contacts: React.FC = () => {
  const { status, data, error, isFetching } = useContacts();

  const [modalShow, setModalShow] = useState<boolean>(false);
 

  return (
    <>
      <IonMenu
        swipeGesture={true}
        side="start"
        menuId="main"
        contentId="content"
      >
        <IonHeader>
          <IonItem>
            <IonAvatar slot="start">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="profileImg"
              />
            </IonAvatar>
           
          </IonItem>
          <IonSearchbar
            // value={searchText}
            onIonChange={(e) =>
              data?.filter((contact) =>
               contact.name === e.detail.value!
              )
            }
          ></IonSearchbar>
          {data ? (
            data.map((data) => {
              return (
                <IonItem>
                  <IonAvatar slot="start">
                    <img src={data.profileImg} alt="profileImg" />
                  </IonAvatar>
                  <IonLabel>
                    <h3>{data.name}</h3>
                    <p>{data.about}</p>
                  </IonLabel>
                </IonItem>
              );
            })
          ) : (
            <h1>loading</h1>
          )}

          <IonButton
            style={{ display: "flex" }}
            onClick={() => setModalShow(true)}
          >
            Add contact
          </IonButton>
         
          <NewContactModal modalShow={modalShow} setModalShow={setModalShow} />
        </IonHeader>
        <IonContent id="content"></IonContent>
      </IonMenu>
      <IonRouterOutlet id="main"></IonRouterOutlet>
    </>
  );
};

export default Contacts;
