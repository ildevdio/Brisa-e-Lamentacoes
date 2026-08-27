export type ClassKind='physical'|'magical';
export type RpgClass={name:string;kind:ClassKind;resource:'Mana'|'Prana';initialMax:number;paths:[string,string];identity:string};
export const classes:RpgClass[]=[
{name:'Bárbaro',kind:'physical',resource:'Prana',initialMax:20,paths:['Caminho da Fúria','Caminho do Instinto Selvagem'],identity:'Fúria primordial e resistência'},
{name:'Guardião',kind:'physical',resource:'Prana',initialMax:25,paths:['Caminho do Muralha','Caminho do Campeão'],identity:'Proteção e defesa'},
{name:'Guerreiro',kind:'physical',resource:'Prana',initialMax:15,paths:['Caminho do Mestre de Armas','Caminho do Guardião Marcial'],identity:'Maestria marcial'},
{name:'Ladino',kind:'physical',resource:'Prana',initialMax:20,paths:['Caminho do Assassino','Caminho do Trapaceiro'],identity:'Oportunidade e astúcia'},
{name:'Monge',kind:'physical',resource:'Prana',initialMax:35,paths:['Caminho do Punho de Ferro','Caminho do Vazio'],identity:'Disciplina interior'},
{name:'Patrulheiro',kind:'physical',resource:'Prana',initialMax:25,paths:['Caminho do Caçador','Caminho do Companheiro'],identity:'Caça e sobrevivência'},
{name:'Samurai',kind:'physical',resource:'Prana',initialMax:30,paths:['Caminho do Iaijutsu','Caminho do Bushido'],identity:'Posturas, disciplina e lâmina'},
{name:'Bardo',kind:'magical',resource:'Mana',initialMax:85,paths:['Caminho do Trovador','Caminho do Orador'],identity:'Inspiração e influência'},
{name:'Druida',kind:'magical',resource:'Mana',initialMax:90,paths:['Caminho da Forma Primordial','Caminho do Guardião Natural'],identity:'Natureza e transformação'},
{name:'Serafim',kind:'magical',resource:'Mana',initialMax:100,paths:['Caminho da Devoção','Caminho do Guerreiro Celestial'],identity:'Fé e poder espiritual'},
{name:'Feiticeiro',kind:'magical',resource:'Mana',initialMax:110,paths:['Caminho da Linhagem','Caminho da Tempestade'],identity:'Magia instintiva'},
{name:'Mago',kind:'magical',resource:'Mana',initialMax:115,paths:['Caminho do Conhecimento','Caminho da Guerra Arcana'],identity:'Conhecimento e preparação'}];
export const attributes=['Força','Agilidade','Precisão','Inteligência','Sabedoria','Presença'];
