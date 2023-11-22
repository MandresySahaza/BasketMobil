import { Joueur } from "./joueur";
import { Statistique } from "./statistique";

export interface Equipe {
    idEquipe : number;
    nomEquipe : string;
}


const equipes: Equipe[] = [
    {
      idEquipe : 1,
      nomEquipe : 'Lakers',   
    },
    {
      idEquipe : 2,
      nomEquipe : 'Toronto',
      
    },
];

export const getEquipes = () => equipes;

export const getEquipe = (id: number) => equipes.find(m => m.idEquipe === id);


