import React, { Component } from 'react'
import { IonPage, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'

import './MiComponente.css'

export default class MiComponente extends Component {
  render() {
    console.log(this.props.var1)
    return (
      <div>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Google Map</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="bg-lightblue">
            <IonList>
              <IonHeader className="miClase">{this.props.titulo}</IonHeader>
              <IonItem>
                <IonLabel>Hola me llamo {this.props.nombre}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Hola me llamo {this.props.nombre}</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPage>
      </div>
    )
  }
}
