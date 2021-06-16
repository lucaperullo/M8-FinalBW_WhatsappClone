import { IonModal, IonButton, IonContent } from '@ionic/react';

interface ModalProps {
  modalShow: boolean
  setModalShow: (arg0: boolean) => void
}
const NewContactModal = (props: ModalProps) => {

  return (
    <IonContent>
      <IonModal isOpen={props.modalShow} cssClass='my-custom-class'>
        <p>This is modal content</p>
        <IonButton onClick={() => props.setModalShow(false)}>Close Modal</IonButton>
      </IonModal>
    </IonContent>
  );
};

export default NewContactModal