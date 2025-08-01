// src/scripts/tarocchi.ts
export type Card = { 
  name: string; 
  file: string; 
  descr: string; 
};

export const cards: Card[] = [
  { name: "il matto", file: "RWS1909_-_00_Fool.jpeg", descr: "Rappresenta nuove avventure, libertà e imprevedibilità." },
  { name: "il mago", file: "RWS1909_-_01_Magician.jpeg", descr: "Simbolo di creatività, iniziativa e potere personale." },
  { name: "la papessa", file: "RWS1909_-_02_High_Priestess.jpeg", descr: "Invita alla saggezza interiore e all'intuizione." },
  { name: "l'imperatrice", file: "RWS1909_-_03_Empress.jpeg", descr: "Porta abbondanza, creatività e fertilità." },
  { name: "l'imperatore", file: "RWS1909_-_04_Emperor.jpeg", descr: "Simbolo di stabilità, autorità e struttura." },
  { name: "il papa", file: "RWS1909_-_05_Hierophant.jpeg", descr: "Indica guida spirituale, tradizione e apprendimento." },
  { name: "gli amanti", file: "RWS1909_-_06_Lovers.jpeg", descr: "Rappresenta scelte importanti e unioni profonde." },
  { name: "il carro", file: "RWS1909_-_07_Chariot.jpeg", descr: "Simbolo di vittoria, determinazione e controllo." },
  { name: "la forza", file: "RWS1909_-_08_Strength.jpeg", descr: "Indica coraggio, autodisciplina e pazienza." },
  { name: "l'eremita", file: "RWS1909_-_09_Hermit.jpeg", descr: "Rappresenta introspezione, ricerca interiore e saggezza." },
  { name: "la ruota della fortuna", file: "RWS1909_-_10_Wheel_of_Fortune.jpeg", descr: "Indica cicli della vita, destino e cambiamenti." },
  { name: "la giustizia", file: "RWS1909_-_11_Justice.jpeg", descr: "Simbolo di equilibrio, verità e responsabilità." },
  { name: "l'appeso", file: "RWS1909_-_12_Hanged_Man.jpeg", descr: "Rappresenta attesa, sacrificio e nuova prospettiva." },
  { name: "la morte", file: "RWS1909_-_13_Death.jpeg", descr: "Simbolo di trasformazione, fine e rinascita." },
  { name: "la temperanza", file: "RWS1909_-_14_Temperance.jpeg", descr: "Indica armonia, moderazione e adattamento." },
  { name: "il diavolo", file: "RWS1909_-_15_Devil.jpeg", descr: "Rappresenta illusioni, dipendenze e desideri materiali." },
  { name: "la torre", file: "RWS1909_-_16_Tower.jpeg", descr: "Simbolo di crollo improvviso, cambiamento e rivelazione." },
  { name: "la stella", file: "RWS1909_-_17_Star.jpeg", descr: "Indica speranza, ispirazione e guarigione." },
  { name: "la luna", file: "RWS1909_-_18_Moon.jpeg", descr: "Rappresenta mistero, sogni e intuizione." },
  { name: "il sole", file: "RWS1909_-_19_Sun.jpeg", descr: "Simbolo di gioia, chiarezza e successo." },
  { name: "il giudizio", file: "RWS1909_-_20_Judgement.jpeg", descr: "Indica riflessione, risveglio e consapevolezza." },
  { name: "il mondo", file: "RWS1909_-_21_World.jpeg", descr: "Rappresenta completamento, realizzazione e armonia." }
];
