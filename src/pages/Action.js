import React, { Component, useState } from 'react'
import { IonPage, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonBadge, IonItemSliding, IonItemOptions, IonItemOption, IonMenu } from '@ionic/react'

import '../common/common.css'
import CustomHeader from '../components/CustomHeader';
import CustomDrawer from '../components/CustomDrawer';
import CustomFooter from '../components/CustomFooter';

const Home = (props) => {

    const [modalstate, setModalState] = useState(false);

    const showModal = () => {
        setModalState(true);
    }
    const hideModal = () => {
        setModalState(false);
    }

    return (
        <div>
            <IonPage>
                <CustomHeader />
                <IonContent className="bg-lightblue">
                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="danger" expandable>
                                Delete
                                </IonItemOption>
                        </IonItemOptions>
                        <IonItem>
                            <IonLabel>Function 1</IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption color="tertiary" expandable>
                                Archive
                                </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="danger" expandable>
                                Delete
                                </IonItemOption>
                        </IonItemOptions>
                        <IonItem>
                            <IonLabel>Function 2</IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption color="tertiary" expandable>
                                Archive
                                </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="danger" expandable>
                                Delete
                                </IonItemOption>
                        </IonItemOptions>
                        <IonItem>
                            <IonLabel>Function 3</IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption color="tertiary" expandable>
                                Archive
                                </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="danger" expandable>
                                Delete
                                </IonItemOption>
                        </IonItemOptions>
                        <IonItem>
                            <IonLabel>Function 4</IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption color="tertiary" expandable>
                                Archive
                                </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                    <IonItemSliding>
                        <IonItemOptions side="start">
                            <IonItemOption color="danger" expandable>
                                Delete
                                </IonItemOption>
                        </IonItemOptions>
                        <IonItem>
                            <IonLabel>Function 5</IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption color="tertiary" expandable>
                                Archive
                                </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Home;
