import {
    IonItem,
    IonLabel,
    IonNote
    } from '@ionic/react';
  import { Equipe } from '../data/equipe';
  import './MessageListItem.css';
  
  interface EquipeListItemProps {
    equipe: Equipe;
  }
  
  const EquipeListItem: React.FC<EquipeListItemProps> = ({ equipe }) => {
    return (
      <IonItem routerLink={`/statistique/${equipe.idEquipe}`} detail={false}>
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel className="ion-text-wrap">
          <h2>
            {equipe.nomEquipe}
          </h2>
        </IonLabel>
      </IonItem>
    );
  };
  
  export default EquipeListItem;
  