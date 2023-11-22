import { Joueur } from "./joueur";

export interface Statistique {
    count : Number,
    joueurs : Joueur,
    minutesJouees : Number;
    trois_points : Number;
    points_total : Number;
    rebons : Number;
    passeDecisives : Number
}

const statistiques : Statistique[] = [
    {
        count : 1,
        joueurs : {
            idJoueur : 1,
            nomJoueur : 'sahy',
            equipe : {
                idEquipe : 1,
                nomEquipe : "Lakers"
            }
        },
        minutesJouees : 120,
        trois_points: 4,
        points_total : 120,
        rebons : 10,
        passeDecisives : 20  
    },
    {
        count : 2,
        joueurs : {
            idJoueur : 2,
            nomJoueur : 'Mandresy',
            equipe : {
                idEquipe : 1,
                nomEquipe : "Lakers"
            }
        },
        minutesJouees : 120,
        trois_points: 4,
        points_total : 120,
        rebons : 10,
        passeDecisives : 20  
    }
    
];


export const getStatistiques = (id: number) => statistiques.filter(m => m.joueurs.equipe.idEquipe === id);

