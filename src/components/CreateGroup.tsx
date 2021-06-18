import { useState } from "react";
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
  IonSearchbar,
  IonAvatar,
  IonList,
  IonSkeletonText,
  IonCheckbox,
  IonContent,
} from "@ionic/react";
import { personAddOutline } from "ionicons/icons";
import "../theme/style.css";
import { useContacts } from "../hooks/useContacts";
import { useLocalStorage } from "../hooks/useLocalStorage";
interface modalProps {
  modalShow: boolean;
  setModalShow: (arg0: boolean) => void;
}
const CreateGroup = (props: modalProps) => {
  const [userNumber] = useLocalStorage<string>("userNumber", "");
  const [isChecked, setIsChecked] = useState(false);
  const { status, data, error, isFetching } = useContacts(userNumber);
  return (
    <IonContent>
      <IonModal
        isOpen={props.modalShow}
        cssClass="settings-modal"
        backdropDismiss={false}
      >
        <IonHeader>
          <IonText color="primary">
            <h1>‏‏‎ ‎‏‏‎ ‎‏‏‎ Create group</h1>
          </IonText>
        </IonHeader>
        <div className="modalContainer" style={{ width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <IonSearchbar
              // value={something}
              onIonChange={(e) => console.log(e.detail.value!)}
              showCancelButton="always"
            ></IonSearchbar>
            {data ? (
              // <IonContent style={{ bottom: 0 }}>
              //   <IonList>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //     <IonItem>
              //       <IonAvatar slot="start">
              //         <IonSkeletonText animated />
              //       </IonAvatar>
              //       <IonLabel>
              //         <h3>
              //           <IonSkeletonText animated style={{ width: "50%" }} />
              //         </h3>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "80%" }} />
              //         </p>
              //         <p>
              //           <IonSkeletonText animated style={{ width: "60%" }} />
              //         </p>
              //       </IonLabel>
              //     </IonItem>
              //   </IonList>
              // </IonContent>
              data.map((data, i) => {
                return (
                  <IonItem key={i}>
                    <IonAvatar slot="start">
                      <img src={data.profileImg} alt="profileImg" />
                    </IonAvatar>
                    <IonLabel>
                      <h3>{data.contactsName}</h3>
                      <p>{data.about}</p>
                    </IonLabel>

                    <IonCheckbox
                      slot="end"
                      // value={isChecked}
                      checked={isChecked}
                    />
                  </IonItem>
                );
              })
            ) : (
              <IonList>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonSkeletonText animated />
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      <IonSkeletonText animated style={{ width: "50%" }} />
                    </h3>
                    <p>
                      <IonSkeletonText animated style={{ width: "80%" }} />
                    </p>
                    <p>
                      <IonSkeletonText animated style={{ width: "60%" }} />
                    </p>
                  </IonLabel>
                </IonItem>
              </IonList>
            )}
          </div>
          <div className="modalButtons">
            <IonButton
              color="danger"
              onClick={() => {
                window.location.assign("/");
              }}
            >
              Log out
            </IonButton>
            <IonButton onClick={() => props.setModalShow(false)}>
              Close
            </IonButton>
          </div>
        </div>
      </IonModal>
    </IonContent>
  );
};

export default CreateGroup;
