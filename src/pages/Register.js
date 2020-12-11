import React, { Component, useState, useEffect, useImperativeHandle } from 'react'
import { IonPage, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonBadge, IonNav, IonLoading, IonInput, IonFabButton, IonIcon, IonItemDivider, IonToast, IonCard, IonCardHeader, IonCardContent } from '@ionic/react'

import '../common/common.css'
import CustomHeader from '../components/CustomHeader';

import auth from "../services/authService";
import * as user from "../services/userService";
import { useHistory } from 'react-router';
import CustomFooter from '../components/CustomFooter';

const Register = (props) => {

    let history = useHistory();

    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatPassword] = useState("");
    const [message, setMessage] = useState("Welcome!");

    const [showToast, setShowToast] = useState(false);

    const handleName = event => {
        setName(event.target.value);
    }
    const handleUserName = event => {
        setUserName(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleRepeatPassword = event => {
        setRepeatPassword(event.target.value);
    }

    const confirm = () => {

        return (username == "" || password == "" || repeatpassword == "") ? false : true;

    }

    const login = async () => {

        if (confirm()) {

            try {
                const response = await user.register(name, username, password, repeatpassword);

                auth.loginWithJwt(response.headers["x-auth-token"]);
                window.location = "/home";

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
                                <IonItemDivider>Full Name</IonItemDivider>
                                <IonItem>
                                    <IonInput value={name} onIonChange={handleName} style={{ color: "green" }}></IonInput>
                                </IonItem>
                                <IonItemDivider>Email</IonItemDivider>
                                <IonItem>
                                    <IonInput value={username} onIonChange={handleUserName} style={{ color: "green" }}></IonInput>
                                </IonItem>
                                <IonItemDivider>Password</IonItemDivider>
                                <IonItem>
                                    <IonInput value={password} onIonChange={handlePassword}></IonInput>
                                </IonItem>
                                <IonItemDivider>Reenter Password</IonItemDivider>
                                <IonItem>
                                    <IonInput value={repeatpassword} onIonChange={handleRepeatPassword}></IonInput>
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

export default Register;
