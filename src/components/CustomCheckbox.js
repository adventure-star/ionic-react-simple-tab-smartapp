import React, { Component } from 'react'
import { IonPage, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox } from '@ionic/react'

import './CustomCheckbox.css'

const CustomCheckbox = () => {
    return (
        <div>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div className="vertical-center">
                        <IonCheckbox id="check"/>
                        <span className="pl-5">Do you agree with me?</span>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
}
export default CustomCheckbox;