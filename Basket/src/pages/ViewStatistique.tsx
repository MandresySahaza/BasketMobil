import { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Statistique  ,  getStatistiques} from '../data/statistique';
import StatistiqueComponent from '../components/StatistiqueComponent';

function ViewStatistique() {
    const [statistiques, setStatistiques] = useState<Statistique[]>([]);
    const params = useParams<{ id: string }>();
  
    useIonViewWillEnter(() => {
      const eq = getStatistiques(parseInt(params.id, 10));
      setStatistiques(eq);
    });
  
    return (
      <IonPage id="view-Equipe-page">
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text="Inbox" defaultHref="/Index"></IonBackButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <br></br>
          <br></br>
          <br></br>

          <div className="table-responsive">
            <table className="table ">
              <thead className="thead-dark bg-dark text-white">
                <tr>
                  <th scope="col">Joueur</th>
                  <th scope="col">MJ</th>
                  <th scope="col">PPM</th>
                  <th scope="col">RPM</th>
                  <th scope="col">PDPM</th>
                  <th scope="col">MPM</th>
                  <th scope="col">3P</th>
                </tr>
              </thead>
              <tbody>
                {statistiques.map(m => <StatistiqueComponent key={m.count.toString()} statistique={m} />) }
              </tbody>
            </table>
          </div>
          
        </IonContent>
        
      </IonPage>
    );
  }
  
  export default ViewStatistique;
  