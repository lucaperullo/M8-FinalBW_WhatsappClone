import React, { useState } from 'react';
import { IonButton, IonContent, IonItem, IonAvatar, IonLabel, IonSearchbar } from '@ionic/react';
import NewContactModal from './NewContactModal';

import '../theme/style.css'

const Contacts: React.FC = () =>{

  const [modalShow, setModalShow] = useState<boolean>(false)

  return(
    <IonContent
    fullscreen>
        <IonSearchbar 
        // value={searchText} 
        // onIonChange={e => setSearchText(e.detail.value!)}
        ></IonSearchbar>
        <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="profileImg" />
        </IonAvatar>
        <IonLabel>
          <h3>[CONTACT NAME]</h3>
          <p>[CONTACT'S STATUS]</p>
        </IonLabel>
      </IonItem>
      <IonButton onClick={() => setModalShow(true)}>Add contact</IonButton>
      <NewContactModal modalShow={modalShow} setModalShow={setModalShow}/>
    </IonContent>
)
} 

export default Contacts