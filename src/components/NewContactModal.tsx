import {
  IonModal,
  IonButton,
  IonHeader,
  IonLabel,
  IonItem,
  IonInput,
  IonText,
} from "@ionic/react";

interface ModalProps {
  modalShow: boolean;
  setModalShow: (arg0: boolean) => void;
}
const NewContactModal = (props: ModalProps) => {
  return (
    <IonModal
      isOpen={props.modalShow}
      cssClass="add-contact-modal"
      backdropDismiss={false}
    >
      <IonHeader>
        <IonText color="primary">
          <h1>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‎‎‎Add a new contact</h1>
        </IonText>
      </IonHeader>
      <IonItem style={{ borderRadius: "10px", marginBottom: "5px" }}>
        <IonLabel>Phone Number: </IonLabel>
        <IonInput type="text"></IonInput>
      </IonItem>
      <IonItem style={{ borderRadius: "10px", marginBottom: "5px" }}>
        <IonLabel>Name: </IonLabel>
        <IonInput type="text"></IonInput>
      </IonItem>
      <IonButton onClick={() => props.setModalShow(false)}>
        Add contact
      </IonButton>
      <IonButton onClick={() => props.setModalShow(false)}>Close</IonButton>
    </IonModal>
  );
};

export default NewContactModal;
