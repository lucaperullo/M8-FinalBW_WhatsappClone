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
import { moon, sunny } from "ionicons/icons";

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
import LoginPage from "./pages/LoginPage";
import { store } from "./store/store";
import MainPage from "./pages/MainPage";
import { toggleTheme } from "./store/features/chatrooms/chatRoomSlice";

const theme = store.getState();
const Dark = document.body.classList.value === "dark";
const Light = document.body.classList.value === "light";
document.body.classList.add("dark");
const toggleDarkModeHandler = () => {
  console.log("running");
  const lightDarkModeHandler = () => {
    Light
      ? document.body.classList.toggle("dark") && console.log(toggleTheme())
      : document.body.classList.toggle("light");
  };
  lightDarkModeHandler();
};
const App: React.FC = () => (
  <Provider store={store}>
    <IonApp>
      <IonReactRouter>
        <IonItem>
          <IonIcon slot="end" icon={Light ? sunny : moon} />

          <IonToggle
            slot="end"
            name="darkMode"
            onIonChange={toggleDarkModeHandler}
          />
        </IonItem>
        <Route path="/" exact component={LoginPage} />
        <Route path="/chat" exact component={MainPage} />
      </IonReactRouter>
    </IonApp>
  </Provider>
);

export default App;
