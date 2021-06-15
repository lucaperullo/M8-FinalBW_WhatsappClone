import { Redirect, Route } from "react-router-dom";

import {
  IonApp,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
  IonRow,
  IonCol,
  IonInput,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { moon } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Provider } from "react-redux";
const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};
const App: React.FC = () => (
  <Provider store={root}>
  <IonApp>
    <IonItem>
      <IonIcon slot="start" icon={moon} />
      <IonLabel>Whatzapp</IonLabel>
      <IonToggle
        slot="start"
        name="darkMode"
        onIonChange={toggleDarkModeHandler}
      />
    </IonItem>
    <div
      style={{
        width: "100vw",
        display: "flex",
        border: "1px solid black",
        height: "100vh",
        padding: "100px",
      }}
    >
      <div>
        <IonItem>
          <IonInput></IonInput>
          <IonInput></IonInput>
        </IonItem>
      </div>
    </div>
    <IonReactRouter></IonReactRouter>
    </IonApp>
    </Provider>
);

export default App;
