import React, { useState } from "react";
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

const Contacts: React.FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [SettingsModalShow, setSettingsModalShow] = useState<boolean>(false);
  return (
    <>
      <IonMenu
        swipeGesture={true}
        side="start"
        menuId="main"
        contentId="content"
      >
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent id="content">
          <IonItem>
            <IonAvatar slot="start">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="profileImg"
              />
            </IonAvatar>
            <IonIcon
              className="settings"
              slot="end"
              icon={settingsOutline}
              onClick={() => setSettingsModalShow(true)}
            ></IonIcon>
          </IonItem>
          <IonSearchbar
          // value={searchText}
          // onIonChange={e => setSearchText(e.detail.value!)}
          ></IonSearchbar>
          <IonItem>
            <IonAvatar slot="start">
              <img
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                alt="profileImg"
              />
            </IonAvatar>
            <IonLabel>
              <h3>[CONTACT NAME]</h3>
              <p>[CONTACT'S STATUS]</p>
            </IonLabel>
          </IonItem>
          <IonButton
            style={{ display: "flex" }}
            onClick={() => setModalShow(true)}
          >
            Add contact
          </IonButton>
          <SettingsModal
            modalShow={SettingsModalShow}
            setModalShow={setSettingsModalShow}
          />
          <NewContactModal modalShow={modalShow} setModalShow={setModalShow} />
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main"></IonRouterOutlet>
    </>
  );
};

export default Contacts;
