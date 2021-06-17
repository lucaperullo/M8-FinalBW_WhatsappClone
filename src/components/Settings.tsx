import {
  IonModal,
  IonButton,
  IonHeader,
  IonLabel,
  IonItem,
  IonInput,
  IonText,
} from "@ionic/react";

interface SettingsProps {
  modalShow: boolean;
  setModalShow: (arg0: boolean) => void;
}
const SettingsModal = (props: SettingsProps) => {
  return (
    <IonModal
      isOpen={props.modalShow}
      cssClass="settings-modal"
      backdropDismiss={false}
    >
      <IonHeader>
        <IonText color="primary">
          <h1>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‎‎‎Add a new contact</h1>
        </IonText>
      </IonHeader>

      <IonButton onClick={() => props.setModalShow(false)}>
        Do something
      </IonButton>
      <IonButton onClick={() => props.setModalShow(false)}>Close</IonButton>
    </IonModal>
  );
};

export default SettingsModal;
