import React from 'react';
import { IonContent, IonItem, IonAvatar, IonLabel, IonSearchbar } from '@ionic/react';

import '../theme/style.css'

const Contacts: React.FC = () => (
  <IonContent
  fullscreen
    scrollEvents={true}
    onIonScrollStart={() => {}}
    onIonScrollEnd={() => {}}>

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
  </IonContent>
)

export default Contacts