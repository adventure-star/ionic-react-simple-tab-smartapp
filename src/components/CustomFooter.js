import React from 'react'
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react"
import { home, list, thumbsUpSharp, settings, logOut, logIn } from "ionicons/icons"
import authService from '../services/authService'

const CustomFooter = () => {
    return (
        <IonTabBar slot="bottom" >
            <IonTabButton tab="Home" href="/home" className="bg-red change-color">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Check" href="/insert" className="bg-red change-color">
                <IonIcon icon={list} />
                <IonLabel>Insert</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Google Map" href="/action" className="bg-red change-color">
                <IonIcon icon={thumbsUpSharp} />
                <IonLabel>Action</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Settings" href="/settings" className="bg-red change-color">
                <IonIcon icon={settings} className="change-color" />
                <IonLabel>Settings</IonLabel>
            </IonTabButton>
            {authService.getCurrentUser() &&
                <IonTabButton tab="Logout" href="/logout" className="bg-red change-color">
                    <IonIcon icon={logOut} className="change-color" />
                    <IonLabel>LogOut</IonLabel>
                </IonTabButton>
            }
            {!authService.getCurrentUser() &&
                <IonTabButton tab="LogIn" href="/login" className="bg-red change-color">
                    <IonIcon icon={logIn} />
                    <IonLabel>LogIn</IonLabel>
                </IonTabButton>
            }
        </IonTabBar>
    )
}

export default CustomFooter;