import React, { Component, useState, useEffect } from 'react'
import { IonPage, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonBadge, IonNav, IonLoading, IonInput, IonFabButton, IonIcon, IonItemDivider, IonToast } from '@ionic/react'

import '../common/common.css'
import CustomHeader from '../components/CustomHeader';
import { trash, add, remove, removeCircle } from 'ionicons/icons';
import CustomFooter from '../components/CustomFooter';

const Splash = (props) => {

    return (
        <div>
            <IonPage>
                <CustomHeader />
                <IonContent className="bg-lightblue">
                    <div className="text-center" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
                        <IonLabel>Welcome To My App!</IonLabel>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Splash;
