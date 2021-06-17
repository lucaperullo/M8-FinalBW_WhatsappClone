import {
  IonModal,
  IonButton,
  IonHeader,
  IonLabel,
  IonItem,
  IonInput,
  IonText,
  IonToggle,
} from "@ionic/react";
import { moon, sunny } from "ionicons/icons";
interface SettingsProps {
  modalShow: boolean;
  setModalShow: (arg0: boolean) => void;
}

const Dark = document.body.classList.value === "dark";
const Light = document.body.classList.value === "light";
document.body.classList.add("dark");
const toggleDarkModeHandler = () => {
  console.log("running");
  const lightDarkModeHandler = () => {
    Light
      ? document.body.classList.toggle("dark")
      : document.body.classList.toggle("light");
  };
  lightDarkModeHandler();
};
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
      <IonItem>
        {/* <IonIcon slot="end" icon={Light ? sunny : moon} /> */}

        <IonToggle
          slot="end"
          name="darkMode"
          onIonChange={toggleDarkModeHandler}
        />
      </IonItem>
      <IonButton onClick={() => props.setModalShow(false)}>
        Do something
      </IonButton>
      <IonButton onClick={() => props.setModalShow(false)}>Close</IonButton>
    </IonModal>
  );
};

export default SettingsModal;
