import React, { Component, useState } from 'react'
import { IonPage, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonBadge, IonActionSheet, IonIcon, IonFab, IonFabButton, IonFabList, IonProgressBar } from '@ionic/react'

import '../common/common.css'
import { trash, share, caretForwardCircle, heart, close, ellipse, ellipseOutline, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import useLongPress from "../plugin/useLongPress";
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';


const Home = (props) => {

    const [showActionSheet, setShowActionSheet] = useState(false);
    const [showList, setShowList] = useState(false);

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };


    const onLongPress = () => {
        setShowActionSheet(true);
    };

    const onClick = () => {
    }

    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);


    return (
        <div>
            <IonPage>
                <CustomHeader />
                <IonContent className="bg-lightblue">
                    <IonButton {...longPressEvent} expand="block">
                        Show Action Sheet
                    </IonButton>
                    <IonFab vertical="center" horizontal="center" slot="fixed">
                        <IonFabButton>
                            <IonIcon icon={share} />
                        </IonFabButton>
                        <IonFabList side="top">
                            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
                        </IonFabList>
                        <IonFabList side="bottom">
                            <IonFabButton><IonIcon icon={logoFacebook} /></IonFabButton>
                        </IonFabList>
                        <IonFabList side="start">
                            <IonFabButton><IonIcon icon={logoInstagram} /></IonFabButton>
                        </IonFabList>
                        <IonFabList side="end">
                            <IonFabButton><IonIcon icon={logoTwitter} /></IonFabButton>
                        </IonFabList>
                    </IonFab>
                    <IonProgressBar type="indeterminate"></IonProgressBar>
                    <IonActionSheet
                        isOpen={showActionSheet}
                        onDidDismiss={() => setShowActionSheet(false)}
                        cssClass='my-custom-class'
                        buttons={[{
                            text: 'Delete',
                            role: 'destructive',
                            icon: trash,
                            handler: () => {
                                console.log('Delete clicked');
                            }
                        }, {
                            text: 'Share',
                            icon: share,
                            handler: () => {
                                console.log('Share clicked');
                            }
                        }, {
                            text: 'Play (open modal)',
                            icon: caretForwardCircle,
                            handler: () => {
                                console.log('Play clicked');
                            }
                        }, {
                            text: 'Favorite',
                            icon: heart,
                            handler: () => {
                                console.log('Favorite clicked');
                            }
                        }, {
                            text: 'Cancel',
                            icon: close,
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        }]}
                    >
                    </IonActionSheet>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Home;
