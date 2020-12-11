import React, { Component, useState } from 'react'
import { IonPage, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonBadge, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react'

import '../common/common.css'

const CustomHeader = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle className="bg-red text-white text-center text-bold font-italic h-56">SmartApp</IonTitle>
            </IonToolbar>
        </IonHeader>
    )

}

export default CustomHeader;