class Manager {
   constructor() {

      this.tabCard = []; // tab de cartes
      this.keyCard = 0; // id de la carte actuelle (connaitre notre avancé)
      this.stringCard = 0; // 0 recto , 1 verso
      var self = this;
      var database = firebase.database();
      database.ref('/Cards/').once('value', function(snapshot) {
         snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            self.add(new Card(childData.str1, childData.str2));
            self.cardManage();
            console.log("done");
         });
      });
   }

   add(other) {
      //console.log("done");
      this.tabCard.push(other);
   }

   cardManage() {
      if (this.stringCard == 0) {
         document.getElementById("cardText").innerHTML = flipCard();
      } else {
         document.getElementById("cardText").innerHTML = changeCard();
      }

   }
   flipCard() {
      this.stringCard = 1;
      document.getElementById("cardTitle").innerHTML = "Verso";
      return this.tabCard[this.keyCard].getStr2();
   }
   changeCard() {
      this.keyCard ++;
      document.getElementById("cardTitle").innerHTML = "Recto";
      return this.tabCard[this.keyCard].getStr1();
   }

   getTst() {
      //console.log(this.tabCard);
      return this.tabCard[0].getStr1();
   }
}
