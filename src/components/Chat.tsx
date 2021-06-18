import React, { useEffect, useState } from "react"
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonRouterOutlet,
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

// socket
const endpoint = "http://localhost:5000"
const socket = io(endpoint, { transports: ["websocket"] })

const Chat = () => {
  const [userNumber] = useLocalStorage<string>("userNumber", "")
  const [SettingsModalShow, setSettingsModalShow] = useState<boolean>(false)
  const { status, data, error, isFetching } = useContacts(userNumber)
  const [message, setMessage] = useState<string>("")

  const handleSendMessage = (e: any) => {
    if (e.KeyCode === 13) {
      socket.emit("sendMessage", (message: string) => {})
    }
  }

  useEffect(() => {
    console.log(status)
    status === "success" && console.log(data)
  }, [status])

  return (
    <IonContent
      style={{
        backgroundImage: "https://www.transparenttextures.com/patterns/black-scales.png",
      }}
      fullscreen
    >
      <ChatContainer>
        <BlockDiv>
          <SenderBubble>[THIS IS SENDER CHAT]</SenderBubble>
        </BlockDiv>
        <BlockDiv>
          <ReceivedBubble>[THIS IS RECEIVED CHAT]</ReceivedBubble>
        </BlockDiv>
      </ChatContainer>
      <IonItem>
        <IonTextarea
          placeholder="Write some text..."
          value={message}
          onKeyPress={handleSendMessage}
          onIonChange={(e) => setMessage(e.detail.value!)}
        />
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
            {data ? (
              data?.map((data, i) => {
                return (
                  <div key={i}>
                    <IonItem>
                      <IonAvatar slot="start">
                        <img src={data.profileImg} alt="profileImg" />
                      </IonAvatar>
                      <IonLabel>
                        <h3>{data.name}</h3>
                        <p>{data.about}</p>
                      </IonLabel>
                    </IonItem>
                  </div>
                )
              })
            ) : (
              <h1>loading</h1>
            )}
          </IonHeader>

          <IonContent id="content2"></IonContent>
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
  display: flex;
  flex-direction: column-reverse;
  height: 90vh;
  width: 100%;
  padding-bottom: 10vh;
`
const SenderBubble = styled.p`
  color: white;
  padding: 10px;
  background-color: #056162;
  border-radius: 10px;
  display: inline-block;
  position: absolute;
  right: 0;
`
const ReceivedBubble = styled.p`
  color: white;
  padding: 10px;
  background-color: #455e5d;
  border-radius: 10px;
  display: inline-block;
  position: absolute;
  left: 0;
`
const BlockDiv = styled.div`
  width: 100%;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  position: relative;
  display: block;
`
export default Chat
