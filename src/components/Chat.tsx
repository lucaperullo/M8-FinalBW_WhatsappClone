import React, { useEffect } from "react"
import { IonContent, IonItem, IonTextarea } from "@ionic/react"
import styled from "styled-components"

import io from "socket.io-client"
const endpoint = "localhost:3001"
const socket = io(endpoint, { transports: ["websocket"] })

const Chat = () => {
  return (
    <IonContainer fullscreen>
      <ChatContainer>
        <div>
          <SenderBubble>[THIS IS SENDER CHAT]</SenderBubble>
        </div>
        <div>
          <ReceivedBubble>[THIS IS RECEIVED CHAT]</ReceivedBubble>
        </div>
      </ChatContainer>
      <IonItems>
        <IonTextarea
          placeholder="Write some text..."
          // value={text}
          // onIonChange={e => setText(e.detail.value!)}
        />
      </IonItems>
    </IonContainer>
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
  height: 100%;
  width: 100%;
  padding-bottom: 20vh;
`
const SenderBubble = styled.span`
  color: white;
  display: inline-block;
  padding: 10px;
  background-color: limegreen;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const ReceivedBubble = styled.span`
  color: black;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export default Chat
