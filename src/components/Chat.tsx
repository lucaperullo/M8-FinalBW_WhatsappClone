import React from "react";
import {
  IonContent,
  IonItem,
  IonTextarea
} from "@ionic/react";
import styled from "styled-components";

const Chat = () => {
  return (
    <IonContainer fullscreen>
      <ChatContainer>
        <BlockDiv>
          <SenderBubble>[THIS IS SENDER CHAT]</SenderBubble>
        </BlockDiv>
        <BlockDiv>
        <ReceivedBubble>[THIS IS RECEIVED CHAT]</ReceivedBubble>
        </BlockDiv>
      </ChatContainer>
          <IonItems>
            <IonTextarea placeholder="Write some text..." 
            // value={text}
            // onIonChange={e => setText(e.detail.value!)}
            />
          </IonItems>
    </IonContainer>
  );
};

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
const SenderBubble = styled.p`
  color: white;
  padding: 10px;
  background-color: limegreen;
  border-radius: 10px;
  display: inline-block;
  position: absolute;
  right: 0
`
const ReceivedBubble = styled.p`
  color: black;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  display: inline-block;
  position: absolute;
  left: 0
`
const BlockDiv = styled.div`
  width: 100%;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  position: relative;
  display: block;
`
export default Chat;