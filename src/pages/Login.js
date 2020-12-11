import React, { Component, useState, useEffect, useImperativeHandle } from 'react'
import { IonPage, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonBadge, IonNav, IonLoading, IonInput, IonFabButton, IonIcon, IonItemDivider, IonToast, IonCard, IonCardHeader, IonCardContent, IonTabBar, IonTabButton } from '@ionic/react'

import '../common/common.css'
import CustomHeader from '../components/CustomHeader';
import { trash, add, remove, removeCircle, home, list, thumbsUpSharp, logOut, logIn, settings } from 'ionicons/icons';
import authService, { getCurrentUser, logout } from '../services/authService';

import auth from "../services/authService";
import { useHistory } from 'react-router';
import CustomFooter from '../components/CustomFooter';

const Login = (props) => {

    let history = useHistory();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("Welcome!");

    const [showToast, setShowToast] = useState(false);

    const handleUserName = event => {
        setUserName(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const confirm = () => {

        return (username == "" || password == "") ? false : true;

    }

    const login = async () => {

        if (confirm()) {

            try {

                await auth.login(username, password);
                history.push("/home");

            } catch (ex) {

                if (ex.response && ex.response.status === 400) {

                    setMessage(ex.response.data);
                }
            }

        } else {
            setMessage("You did not insert email or password!");

        }
    }

    useEffect(() => {

        setShowToast(true);

    }, [message]);

    return (
        <div>
            <IonPage>
                <CustomHeader />
                <IonContent className="bg-lightblue">
                    <IonCard>
                        <IonCardHeader></IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                <IonItemDivider>Email</IonItemDivider>
                                <IonItem>
                                    <IonInput value={username} onIonChange={handleUserName} style={{ color: "green" }}></IonInput>
                                </IonItem>
                                <IonItemDivider>Password</IonItemDivider>
                                <IonItem>
                                    <IonInput type="password" value={password} onIonChange={handlePassword}></IonInput>
                                </IonItem>
                            </IonList>
                            <div className="text-center p-5">
                                <IonButton class="button button-block button-assertive" onClick={login}>Login</IonButton>
                            </div>
                        </IonCardContent>
                    </IonCard>
                    <IonToast
                        isOpen={showToast}
                        onDidDismiss={() => { setShowToast(false) }}
                        message={message}
                        duration={3000}
                    />
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Login;
