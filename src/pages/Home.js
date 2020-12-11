import React, { Component, useState, useEffect } from 'react'
import { IonPage, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonBadge, IonNav, IonLoading, IonInput, IonFabButton, IonIcon, IonItemDivider, IonToast } from '@ionic/react'

import '../common/common.css'
import CustomHeader from '../components/CustomHeader';
import { trash, add, remove, removeCircle } from 'ionicons/icons';

const Home = (props) => {

    const [modalstate, setModalState] = useState(false);
    const [insertmodalstate, setInsertModalState] = useState(false);
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [listdata, setListData] = useState([
        { index: 0, name: "Users", value: "100" },
        { index: 1, name: "Records", value: "200" }
    ]);

    const [showToast, setShowToast] = useState(false);

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };

    var index = 2;

    const showModal = () => {
        setModalState(true);
    }
    const hideModal = () => {
        setModalState(false);
        setInsertModalState(false);
    }

    const [showLoading, setShowLoading] = useState(true);

    const modalView = () => {
        setInsertModalState(true);
    }

    const handleName = event => {
        setName(event.target.value);
    }

    const handleValue = event => {
        setValue(event.target.value);
    }
    const addItem = () => {

        if (confirm()) {

            index++;

            setListData(original => {
                return [...original, { index: index, name: name, value: value }];
            });

        } else {
            setShowToast(true);
        }

        setInsertModalState(false);
        setName("");
        setValue("");
    }

    const confirm = () => {
        return (name == "" || value == "") ? false : true;
    }

    const removeItem = event => {

        console.log(event);

        // setListData(original => {
        //     return original.filter(obj => {
        //         return obj.index != event.target.value;
        //     })
        // })

    }

    useEffect(() => {

        console.log(name);
        console.log(value);

    }, [name, value]);

    return (
        <div>
            <IonPage>
                <CustomHeader />
                <IonContent className="bg-lightblue">
                    <IonList>
                        <IonHeader className="title">{props.title}</IonHeader>
                        {listdata && listdata.map(item => (
                            <IonItem key={item.index}>
                                <IonLabel>{item.name}</IonLabel>
                                <IonBadge color="success">{item.value}</IonBadge>
                            </IonItem>
                        ))}
                    </IonList>
                    <div className="text-center p-5">
                        <IonFabButton size="medium" color="white" className="m-2" onClick={modalView}>
                            <IonIcon icon={add} color="white" />
                        </IonFabButton>
                    </div>

                    <div className="text-center p-5">
                        <IonButton class="button button-calm" onClick={showModal}>About This App</IonButton>
                    </div>
                    <IonModal isOpen={modalstate} swipeToClose={true} className="modal-about shadow-md">
                        <IonHeader className="modal-title">About This App</IonHeader>
                        <hr />
                        <IonContent className="bg-blue modal-about-content">
                            This App is for Training.
                        </IonContent>
                        <div className="text-center p-5">
                            <IonButton class="button button-royal" onClick={hideModal}>OK</IonButton>
                        </div>
                    </IonModal>
                    <IonModal isOpen={insertmodalstate} swipeToClose={true} className="modal-about shadow-md">
                        <IonHeader className="modal-title">Insert new item</IonHeader>
                        <hr />
                        <IonContent className="bg-blue modal-about-content">
                            <IonList>
                                <IonItemDivider>Name</IonItemDivider>
                                <IonItem>
                                    <IonInput value={name} onIonChange={handleName}></IonInput>
                                </IonItem>
                                <IonItemDivider>Value</IonItemDivider>
                                <IonItem>
                                    <IonInput value={value} onIonChange={handleValue}></IonInput>
                                </IonItem>
                            </IonList>
                        </IonContent>
                        <div className="text-center p-5">
                            <IonButton class="button button-royal" onClick={addItem}>Add</IonButton>
                            <IonButton class="button button-royal" onClick={hideModal}>Cancel</IonButton>
                        </div>
                    </IonModal>
                    <IonLoading
                        cssClass='my-custom-class'
                        isOpen={showLoading}
                        onDidDismiss={() => setShowLoading(false)}
                        message={'Please wait...'}
                        duration={2000}
                    />
                    <IonToast
                        isOpen={showToast}
                        onDidDismiss={() => setShowToast(false)}
                        message="Please insert exact value!"
                        duration={3000}
                    />
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Home;
