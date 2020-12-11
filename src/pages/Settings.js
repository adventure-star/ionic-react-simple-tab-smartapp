import React, { Component, useState } from 'react'
import { IonPage, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonBadge, IonNav, IonLoading, IonItemDivider, IonRange, IonIcon, IonRadioGroup, IonListHeader, IonRadio, IonSegment, IonSegmentButton, IonToggle } from '@ionic/react'

import '../common/common.css'
import CustomHeader from '../components/CustomHeader';
import { sunny, home, heart, pin, star, call, globe, basket } from 'ionicons/icons';
import CustomFooter from '../components/CustomFooter';

const Settings = (props) => {

    const [selected, setSelected] = useState('biff');

    return (
        <div>
            <IonPage>
                <CustomHeader />
                <IonContent>
                    <IonList>
                        <IonItemDivider>Brightness</IonItemDivider>
                        <IonItem>
                            <IonRange min={20} max={80} step={2}>
                                <IonIcon size="small" slot="start" icon={sunny} />
                                <IonIcon slot="end" icon={sunny} />
                            </IonRange>
                        </IonItem>
                        <IonItemDivider>Ring</IonItemDivider>
                        <IonItem>
                            <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)} className="w-full">
                                <IonItem>
                                    <IonLabel>Ring 1</IonLabel>
                                    <IonRadio slot="end" value="biff" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Ring 2</IonLabel>
                                    <IonRadio slot="end" value="griff" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Ring 3</IonLabel>
                                    <IonRadio slot="end" value="buford" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Ring 4</IonLabel>
                                    <IonRadio slot="end" value="buford1" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Ring 5</IonLabel>
                                    <IonRadio slot="end" value="buford2" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Ring 6</IonLabel>
                                    <IonRadio slot="end" value="buford3" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Ring 7</IonLabel>
                                    <IonRadio slot="end" value="buford4" />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Ring 8</IonLabel>
                                    <IonRadio slot="end" value="buford5" />
                                </IonItem>
                            </IonRadioGroup>
                        </IonItem>
                        <IonItem className="w-full">
                            <IonLabel>Vibration</IonLabel>
                            <IonToggle color="danger" />
                        </IonItem>
                        <IonItemDivider>Environment</IonItemDivider>
                        <IonItem>
                            <IonSegment value="heart">
                                <IonSegmentButton value="home">
                                    <IonIcon icon={home} />
                                </IonSegmentButton>
                                <IonSegmentButton value="heart">
                                    <IonIcon icon={heart} />
                                </IonSegmentButton>
                                <IonSegmentButton value="pin">
                                    <IonIcon icon={pin} />
                                </IonSegmentButton>
                            </IonSegment>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Settings;
