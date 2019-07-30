const rJS= require('./node_modules/rxjs');

// const domBody = document.body;

// const clickEvent = fromEvent(domBody, 'click');

// clickEvent.subscribe(function (event) {
//     domBody.style.backgroundColor = 'red';

//     if (!event.target) {
//         clickEvent.unsubscribe();
//     }
// });

/*A SAVOIR: LES EXECUTIONS D'OBSERVABLES 
* Une execution d'observable procure 3 types de valeurs:
- next : Envoie une valeur de type : string, number, boolean object ,etc.
- error : Envoie une exception JavaScript en cas d'erreur
- complete : Pour mettre fin à l'execution.
*/

const chaine = new rJS.Observable(subscriber => {
    //On capture l'erreur(si toute fois il y en a) et on l'affiche dans la console
    try {
        //On envoie un objet litéral contenant des données
        subscriber.next({
            ideaOfTile: "Celebrating my 1000 subscribers",
            submiter: "Jhon Doe"
        })
        //On termine l'opération
        subscriber.complete();
    } catch (error) {
        subscriber.error(console.log(error));
    }
});

const abonnement = chaine.subscribe(data => console.log(data));

//On se 'désabonne' de l'abonnement après avoir reçu les données.
abonnement.unsubscribe();
