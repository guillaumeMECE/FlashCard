class Manager {
   constructor() {

      this.tabCard = []; // tab de cartes
      this.keyCard = -1; // id de la carte actuelle (connaitre notre avancé)
      this.stringCard = 1; // 0 recto , 1 verso
      var self = this; // use for firebase because go out of class
      var database = firebase.database();
      database.ref('/Cards/').once('value', function(snapshot) {
         snapshot.forEach(function(childSnapshot) { // shot every card
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            self.add(new Card(childData.str1, childData.str2)); // add to tabCard
         });
         self.cardManage(self); // replace the txt of the card
      });
   }

   add(other) {
      this.tabCard.push(other);
   }

   cardManage() {
      if (this.stringCard == 0) {
         document.getElementById("cardText").innerHTML = this.flipCard();
      } else {
         document.getElementById("cardText").innerHTML = this.changeCard();
      }
   }
   flipCard() {
      var answer = document.getElementById("answer").innerHTML;
      var real = this.tabCard[this.keyCard].getStr2();
      console.log(answer,real);
      if (this.levenshtein(answer,real)) {
         console.log("GOOD");
      }
      this.stringCard = 1;
      document.getElementById("cardTitle").innerHTML = "Verso";
      return this.tabCard[this.keyCard].getStr2();
   }
   changeCard() {
      this.keyCard++;
      this.stringCard = 0;
      document.getElementById("cardTitle").innerHTML = "Recto";
      return this.tabCard[this.keyCard].getStr1();
   }

   levenshtein(str1,str2) {
      if (str1 == str2) {
         return true;
      }else {
         return false;
      }
   }


   getTst() {
      return this.tabCard[0].getStr1();
   }
}
