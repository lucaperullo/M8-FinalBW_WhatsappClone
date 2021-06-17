import {
  IonModal,
  IonButton,
  IonHeader,
  IonLabel,
  IonItem,
  IonInput,
  IonText,
  IonToggle,
  IonIcon,
} from "@ionic/react";
import { moon, sunny } from "ionicons/icons";
import "../theme/style.css";
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
          <h1>‏‏‎ ‎‏‏‎ ‎‏‏‎ Settings</h1>
        </IonText>
      </IonHeader>
      <div className="modalContainer" style={{ width: "100%" }}>
        <IonItem>
          <IonText>
            <h1>‏‏‎ ‎‏‏‎ ‎‏‏‎ Theme</h1>
          </IonText>
          <IonIcon slot="end" icon={Light ? sunny : moon} />

          <IonToggle
            slot="end"
            name="darkMode"
            onIonChange={toggleDarkModeHandler}
          />
        </IonItem>
        <div className="modalButtons">
          <IonButton
            color="danger"
            onClick={() => {
               window.location.assign("/");
            }}
          >
            Log out
          </IonButton>
          <IonButton onClick={() => props.setModalShow(false)}>Close</IonButton>
        </div>
      </div>
    </IonModal>
  );
};

export default SettingsModal;
