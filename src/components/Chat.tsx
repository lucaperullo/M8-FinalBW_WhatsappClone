import React, { useEffect, useState } from "react"
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
  IonTextarea,
} from "@ionic/react"
import styled from "styled-components"
import io from "socket.io-client"
import "../theme/style.css"
import SettingsModal from "./Settings"
import { settingsOutline } from "ionicons/icons"
import { useContacts } from "../hooks/useContacts"
import { useAllGroups } from "../hooks/useGroups"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { sendSharp } from "ionicons/icons"
// socket
const endpoint = "http://localhost:5000"
const socket = io(endpoint, { transports: ["websocket"] })

const Chat = () => {
  const [userNumber] = useLocalStorage<string>("userNumber", "")
  const [SettingsModalShow, setSettingsModalShow] = useState<boolean>(false)
  const { status, data, error, isFetching } = useContacts(userNumber)
  const [message, setMessage] = useState<string>("")

  const handleSendMessage = () => {
    socket.emit("sendMessage", message, () => {
      setMessage("")
    })
  }

  useEffect(() => {
    console.log(status)
    status === "success" && console.log(data)
  }, [status])

  return (
    <IonContent
      style={{
        padding: "100px",
      }}
    >
      <ChatContainer></ChatContainer>
      <IonItem>
        <IonTextarea
          placeholder="Write some text..."
          value={message}
          onIonChange={(e) => setMessage(e.detail.value!)}
        />
        <IonIcon onClick={handleSendMessage} color="primary" slot="end" icon={sendSharp} />
      </IonItem>
      <>
        <IonMenu swipeGesture={true} side="end" menuId="main2" contentId="content2">
          <IonHeader>
            <IonItem>
              <IonLabel>Start a new chat..</IonLabel>
              <IonIcon
                color="grey"
                className="settings"
                slot="end"
                icon={settingsOutline}
                onClick={() => setSettingsModalShow(true)}
              ></IonIcon>
            </IonItem>
          </IonHeader>

          {data ? (
            <IonContent style={{ bottom: 0 }}>
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
        </IonMenu>
        <IonRouterOutlet id="main2"></IonRouterOutlet>
      </>
      <SettingsModal modalShow={SettingsModalShow} setModalShow={setSettingsModalShow} />
    </IonContent>
  )
}

const IonContainer = styled(IonContent)`
  display: flex;
  flex-direction: column-reverse;
`
const IonItems = styled(IonItem)`
  position: fixed;
  bottom: 1rem;
  width: 62%;
`
const ChatContainer = styled.div`
  padding: 70px;
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100vw;
  padding-bottom: 10vh;
`

const BlockDiv = styled.div`
  width: 100%;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  position: relative;
  display: block;
`
export default Chat
