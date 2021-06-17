import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
  IonButton,
} from "@ionic/react";
// const toggle(animated?: boolean) => Promise<boolean>
export const MenuExample: React.FC = () => (
  <>
    <IonMenu className="my-custom-menu">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Custom Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonMenu
      swipeGesture={true}
      side="start"
      menuId="settings"
      contentId="content-2"
    >
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>End Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="content-2">
        <IonList>
          <IonItem>CONTENT 2</IonItem>
          <IonItem>CONTENT 2</IonItem>
          <IonItem>CONTENT 2</IonItem>
          <IonItem>CONTENT 2</IonItem>
          <IonItem>CONTENT 2</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonMenu swipeGesture={true} side="end" menuId="main" contentId="content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="content">
        <IonList>
          <IonItem>CONTENT 1</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonRouterOutlet id="main"></IonRouterOutlet>
    <IonRouterOutlet id="settings"></IonRouterOutlet>
    <IonButton
      onClick={() => {
        console.log(this);
      }}
    ></IonButton>
  </>
);
