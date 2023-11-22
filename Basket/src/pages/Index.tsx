import { useState } from 'react';
import { Equipe, getEquipes } from '../data/equipe';
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
import './Home.css';
import Header from '../components/header';
import EquipeListItem from '../components/EquipeListItem';


const Index: React.FC = () => {

  const [equipes, setEquipes] = useState<Equipe[]>([]);
  

  useIonViewWillEnter(() => {
    const msgs = getEquipes();
    setEquipes(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="Index-page">
      <Header></Header>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              NBA
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        
        <IonList>
          {equipes.map(m => <EquipeListItem key={m.idEquipe} equipe={m} />) }
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Index;
