class Manager {
   constructor() {
      this.tabCard = []; // tab de cartes
      this.keyCard = 0; // id de la carte actuelle (connaitre notre avancé)
      var self = this;
      var database = firebase.database();
      database.ref('/Cards/').once('value', function(snapshot) {
         snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            self.add(new Card(childData.str1, childData.str2));
         });
      });
   }

   add(other) {
      this.tabCard.push(other);
   }

   cardManage(){

   }
   flipCard(){

   }
   changeCard(){

   }

   getTst() {
      console.log(this.tabCard);
      return this.tabCard[0].getStr1();
   }
}
