import React, { useState, useEffect } from "react"
import {
  IonButton,
  IonContent,
  IonItem,
  IonAvatar,
  IonLabel,
  IonSearchbar,
  IonIcon,
} from "@ionic/react"
import { settingsOutline } from "ionicons/icons"
import NewContactModal from "./NewContactModal"

import "../theme/style.css"
import SettingsModal from "./Settings"
import { Contact } from "../types/"
import { useQuery } from "react-query"
import axios from "axios"
import { backend } from "../config"
import { useContacts } from "../hooks/useContacts"

const Contacts: React.FC = () => {
  // const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useContacts()

  const [modalShow, setModalShow] = useState<boolean>(false)
  const [SettingsModalShow, setSettingsModalShow] = useState<boolean>(false)

  console.log(data)

  return (
    <IonContent fullscreen>
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
      <IonButton style={{ display: "flex" }} onClick={() => setModalShow(true)}>
        Add contact
      </IonButton>
      <SettingsModal modalShow={SettingsModalShow} setModalShow={setSettingsModalShow} />
      <NewContactModal modalShow={modalShow} setModalShow={setModalShow} />
    </IonContent>
  )
}

export default Contacts
