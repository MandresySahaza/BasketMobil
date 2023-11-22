import {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter
  } from '@ionic/react';

function Header() {
    return ( 
        <IonHeader>
            <IonToolbar>
                <IonTitle>NBA SATATS</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;

