import React, { useEffect, useState } from "react";
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonSkeletonText,
  IonText,
  IonTextarea,
} from "@ionic/react";
import styled from "styled-components";
import io from "socket.io-client";
import "../theme/style.css";
import SettingsModal from "./Settings";
import { happySharp, personAddOutline, settingsOutline } from "ionicons/icons";
import { useContacts } from "../hooks/useContacts";
import { useAllGroups } from "../hooks/useGroups";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { sendSharp } from "ionicons/icons";
import CreateGroup from "./CreateGroup";

// socket
const endpoint = "http://localhost:5000";
const socket = io(endpoint, { transports: ["websocket"] });

const Chat = () => {
  const [userNumber] = useLocalStorage<string>("userNumber", "");
  const [SettingsModalShow, setSettingsModalShow] = useState<boolean>(false);
  const [GroupModalShow, setGroupModalShow] = useState<boolean>(false);
  const { status, data, error, isFetching } = useContacts(userNumber);
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = () => {
    socket.emit("sendMessage", message, () => {
      setMessage("");
    });
  };

  useEffect(() => {
    console.log(status);
    status === "success" && console.log(data);
  }, [status]);

  return (
    <IonContent>
      <IonHeader>
        {true === true ? (
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
        ) : (
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
        )}
      </IonHeader>
      <ChatContainer></ChatContainer>

      <IonItem className="chat-box">
        <IonIcon
          className="chat-button"
          size="large"
          color="primary"
          slot="start"
          icon={happySharp}
        />
        <div className="chat-container">
          <IonTextarea
            placeholder="Write some text..."
            value={message}
            onKeyPress={handleSendMessage}
            onIonChange={(e) => setMessage(e.detail.value!)}
          />
        </div>
        <IonIcon
          className="chat-button"
          size="large"
          color="primary"
          slot="end"
          icon={sendSharp}
        />
      </IonItem>

      <IonMenu
        swipeGesture={true}
        side="end"
        menuId="main2"
        contentId="content2"
      >
        <IonHeader>
          <IonItem>
            <IonText color="primary">Start a new chat..</IonText>
            <IonIcon
              color="grey"
              className="settings"
              slot="start"
              icon={personAddOutline}
              onClick={() => setGroupModalShow(true)}
            ></IonIcon>
            <IonIcon
              color="grey"
              className="settings"
              slot="end"
              icon={settingsOutline}
              onClick={() => setSettingsModalShow(true)}
            ></IonIcon>
          </IonItem>

          <SettingsModal
            modalShow={SettingsModalShow}
            setModalShow={setSettingsModalShow}
          />
          <CreateGroup
            modalShow={GroupModalShow}
            setModalShow={setGroupModalShow}
          />
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
                <div key={i}>
                  <IonItem>
                    <IonAvatar slot="start">
                      <img src={data.profileImg} alt="profileImg" />
                    </IonAvatar>
                    <IonLabel>
                      <h3>{data.contactsName}</h3>
                      <p>{data.about}</p>
                    </IonLabel>
                  </IonItem>
                </div>
              );
            })
          ) : (
            <IonContent
              style={{ position: "absolute", top: "8vh", height: "90vh" }}
            >
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
            </IonContent>
          )}
        </IonHeader>
        <IonContent id="content2"></IonContent>
      </IonMenu>
      <IonRouterOutlet id="main2"></IonRouterOutlet>
    </IonContent>
  );
};

const IonContainer = styled(IonContent)`
  display: flex;
  flex-direction: column-reverse;
`;
const IonItems = styled(IonItem)`
  position: fixed;
  bottom: 1rem;
  width: 62%;
`;
const ChatContainer = styled.div`
  padding: 70px;
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  padding-bottom: 10vh;
`;

const BlockDiv = styled.div`
  width: 100%;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  position: relative;
  display: block;
`;
export default Chat;
