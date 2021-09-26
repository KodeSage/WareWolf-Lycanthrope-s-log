import {JOURNAL} from './journal.js'; 
const Journals = JOURNAL;


function addEntry(day, events, warewolf) //This Function adds New Entry Each Day
{ 
    Journals.push({day, events, warewolf}); //Before implementing this Function, Log out 'Journals'
}
// console.log(Journals); -> this will bring out list of events and Days it was added

// for(let i = 0; i < Journals.length; i++) {
//     if(Journals[i].warewolf === true){
//     console.log(` Day : ${Journals[i].day}  \n Events Occured: [ ${Journals[i].events} ] `);
//     }
// }

function tableFor(event, journal) {
    let table = [0, 0, 0, 0]; 
    for (let i = 0; i < journal.length; i++) 
    { 
        let entry = journal[i], index = 0; 
        if (entry.events.includes(event)) index += 1; 
        if (entry.warewolf) index += 2; table[index] += 1;
     } 
        return table;
    }
    console.log(tableFor("carrot", Journals)); 
    
function phi(table) { 
    return (table[3] * table[0] - table[2] * table[1]) /
     Math.sqrt((table[2] + table[3]) *
      (table[0] + table[1]) * 
      (table[1] + table[3]) *
       (table[0] + table[2]));
     }

function journalEvents(journal) 
{ 
    let events = []; 
    for (let entry of journal) { 
    for (let event of entry.events) { 
        if (!events.includes(event)) { 
            events.push(event); } 
            } 
        } return events; 
    }

for (let event of journalEvents(Journals)) {
     console.log(event + ":", phi(tableFor(event, Journals)));
     } 