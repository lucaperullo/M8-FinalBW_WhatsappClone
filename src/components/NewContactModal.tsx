import { useState, useEffect } from "react";
import {
  IonModal,
  IonButton,
  IonHeader,
  IonLabel,
  IonItem,
  IonInput,
  IonText,
} from "@ionic/react";

import { useMutation } from "react-query";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { backend } from "../config";

interface ModalProps {
  modalShow: boolean;
  setModalShow: (arg0: boolean) => void;
}
const NewContactModal = (props: ModalProps) => {
  const [userNumber] = useLocalStorage("userNumber", "");
  const [contactsNumber, setContactsNumber] = useState("");
  const [contactsName, setContactsName] = useState("");
  const mutation = useMutation((newContact: any) => {
    console.log(newContact);
    return backend.post(`/api/contact/${userNumber}`, newContact);
  });

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    mutation.mutate({ contactsNumber, contactsName });
    props.setModalShow(false);
  };

  useEffect(() => {
    console.log(contactsNumber);
  }, [contactsNumber]);

  return (
    <IonModal
      isOpen={props.modalShow}
      cssClass="add-contact-modal"
      backdropDismiss={false}
    >
      <form onSubmit={handleSubmit}>
        <IonHeader>
          <IonText color="primary">
            <h1>‏‏‎‏‏‎‏‏‏‏‎‎‎‎‎ ‎‏‏‎ ‎‏‏‎ Add a new contact</h1>
          </IonText>
        </IonHeader>
        <div className="modalContainer" style={{ width: "100%" }}>
          <IonItem style={{ borderRadius: "10px", marginBottom: "5px" }}>
            <IonLabel>Phone Number: </IonLabel>
            <IonInput
              value={contactsNumber}
              onIonChange={(e: any) => setContactsNumber(e.target.value)}
              type="text"
            ></IonInput>
          </IonItem>

          <IonItem style={{ borderRadius: "10px", marginBottom: "5px" }}>
            <IonLabel>Name: </IonLabel>
            <IonInput
              value={contactsName}
              onIonChange={(e: any) => setContactsName(e.target.value)}
              type="text"
            ></IonInput>
          </IonItem>
          <div className="modalButtons">
            <IonButton type="submit" onClick={(e) => handleSubmit(e)}>
              Add contact
            </IonButton>
            <IonButton onClick={() => props.setModalShow(false)}>
              Close
            </IonButton>
          </div>
        </div>
      </form>
    </IonModal>
  );
};

export default NewContactModal;
