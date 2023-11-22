import {
    IonItem,
    IonLabel,
    IonNote
    } from '@ionic/react';
  import { Equipe } from '../data/equipe';
  import './MessageListItem.css';
import { Statistique } from '../data/statistique';
  
  interface StatistiqueProps {
    statistique : Statistique
  }
  
  const StatistiqueComponent: React.FC<StatistiqueProps> = ({ statistique }) => {
    return (
      <tr>
        <td>{ statistique.joueurs.nomJoueur }</td>
        <td>{ statistique.count.toString() }</td>
        <td>{ statistique.points_total.toString() }</td>
        <td>{ statistique.rebons.toString() }</td>
        <td>{ statistique.passeDecisives.toString()}</td>
        <td>{ statistique.minutesJouees.toString() }</td>
        <td>{ statistique.trois_points.toString() }</td>
      </tr>
    );
  };
  
  export default StatistiqueComponent;