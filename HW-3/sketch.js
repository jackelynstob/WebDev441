// function shadyMan() {
//   document.getElementById("text").innerHTML = "A shady looking man approaches you, he says ‘Hey, you look like an adventurer.'";
//   var adventurer=confirm("Are you an adventurer?");
//   if (adventurer===true){
//     document.getElementById("text").innerHTML = "I thought so. What's your name then?";
//     var name = prompt("Whats your name?");
//     document.getElementById("text").innerHTML = "Well then, " + name + ". Could you do me a favour?";
//     var choice = confirm("Do the man a favour?");
//     if (choice===false) {
//       document.getElementById("text").innerHTML = "Ahh... Go on then! Shoo!";
//       alert("You lost! Don't be afraid to be adventurous!");
//     }
//     else {
//       document.getElementById("text").innerHTML = "That's a good lad! Now listen here. There is a small cave outside of town, and you see, I am an old feeble man. I can't go out there! But inside this cave there is a horde of dragon treasure! If you can get this for me, I will give you 30 percent! No more! Ahh... Fuf! Fine! 50 percent!";
//       var quest = confirm("Accept the Quest?");
//       if (quest===true) {
//         treasureQuest();
//       }
//       else {
//         alert("You lost! Don't be afraid to be adventurous!");
//       }
//     }
//     console.log("encountered man");
//   }
//   else {
//     document.getElementById("text").innerHTML = "Your not? Well then you are no use to me!";
//   alert("You lost! Don't be afraid to be adventurous!"); }
// }
//
// function treasureQuest() {
//   document.getElementById("text").innerHTML = "You follow the man's directions, and head out towards the cave he told you about. After about a day, you reach a dark woods, the old man told you to go around this, but you can see the cave just inside the forest. You look to around, the forest seems to go on forever.";
//   var forestChoice = confirm("Do you listen to the old man's instructions?");
//   if (forestChoice === true){
//
//  document.getElementById("text").innerHTML = "You head around the forest, and you the path that the man told you about, it was just hard to see. Good thing you didn't go in the forest.";
//  Cave();
//   }
//   else {
//     document.getElementById("text").innerHTML = "You walk carefully towards the cave, when suddenly a robber jumps out!";
//     console.log("began quest");
//     robberFight();
//     dragonsNote();
//   }
// }
//
// function robberFight(){
//   alert("Prepare to fight!");
//   document.getElementById("text").innerHTML = "The robber draws a knife!";
//     alert("The robber throws the knife!");
//     document.getElementById("text").innerHTML = "Luckily you avoid it.";
//    confirm("Do you attack?");
//       document.getElementById("text").innerHTML = "You attack!";
//       alert("You hit the robber!");
//   document.getElementById("text").innerHTML = "You have killed the robber!";
//   console.log("robber");
// }
//
// function dragonsNote(){
//   alert("The robber has:\n4 Gold\nNote");
//   var noteChoice = confirm("Do you read the note?");
// if (noteChoice === true) {
//   document.getElementById("text").innerHTML = "The note reads: Go find me some food, I would like a few sheep. If you can get me three sheep, I wont eat you. Signed The Dragon";
//   alert("Was the robber working for The Dragon?");
//   console.log("note read");
//   sheep();
// }
//   else {
//     Cave();
//   }
// }
//
// function sheep(){  var sheep = confirm("It might be a good idea to get three sheep like in the Dragon's note. Do you?");
// if (sheep) {
//     var collectSheep = prompt("You have a few options, you could BUY three sheep, you could STEAL the sheep, or you could do some one a FAVOR for the sheep. ");
//     if (collectSheep==='BUY'){
//         alert("Good choice, this is a more expensive option but it will keep the task quick and simple.");
//         sheepCave();
//     }
//     else if (collectSheep==='STEAL'){
//         alert("Good choice, this will keep the task cheap.");
//         sheepCave();
//     }
//     else {
//         alert("This will keep the task cheap, with only a few lose ends to tie up.");
//          console.log("sheep gotten");
//       sheepCave();
//
//     }
// }
// }
//
// function Cave(){
//   alert("You smell a faint odor of brimstone, and sulfur.");
//   document.getElementById("text").innerHTML = "The cave is veyr near, and he heat is almost unbearable, around the cave, it looks as if the dragon burned down the trees. As you approach the cave, you can see the faint twinkle of gold, or may that be the dragons eye?";
//   var caveChoice = confirm("Do you go inside?");
//   if ( caveChoice===true){
//     document.getElementById("text").innerHTML = "Its getting really hot in here, but you can see the horde of gold.";
//     var treasureChoice=confirm("The dragon does not seem to be here, do you start taking the treasure?");
//     if (treasureChoice===true){
//       document.getElementById("text").innerHTML = "Good idea, lets just get out of here as fast as you can.";
//       alert("Wait, the ground is kind of... Scaly? You look down and see a small tail peeking out from the pile of gold. The dragon wasnt that big after all!");
//       alert("Wait a minute. If that is the dragon, then what is that! You look up to see a large grin, with two beady eyes looking at your from the darkness in the cave. The head begins to move towards you. The Dragon says: Where is my sheeep! I will eaat youu!");
//       dragonCombat();
//     }
//   }
//   else {
//     document.getElementById("text").innerHTML = "It was a good idea to stay out of this, you could have died!";
//     alert("You lost! Don't be afraid to be adventurous!");
//   }
// } //FOR NO SHEEP
// function sheepCave(){
//   document.getElementById("text").innerHTML = "As you walk in, you see the Dragon staring at you!";
//   alert("Did you bring my sheeep?");
//   document.getElementById("text").innerHTML = "Ah... What a good thief... You did bring my sheep!";
//   alert("The Dragon takes the sheep from you.");
//   document.getElementById("text").innerHTML = "The Dragon begins to eat the sheep quite messily.";
//   confirm("Do you attack the dragon while it is distracted?");
//   document.getElementById("text").innerHTML = "As you begin to draw your sword, the dragon turns around!";
//   alert("You didn't bring enough sheep! Now I will eaat you!");
//   dragonCombat();
//
// } //WITH SHEEP
// function endingHappy(){
//   document.getElementById("text").innerHTML = "You return happily to Elleron, to find the old man waiting at the gates.'Ah ha! The tripuphant hero returns!' the man shouts 'Well done my boy!' The people gather around and lift you onto thier shoulders, for the Dragon has plauged this land for many years."
//   alert("During the festivities, the man pulls you aside.")
//   alert("'You know boy,' he whispers 'you have been quite the partner...'")
//   alert("'I know about another good load of loot sitting, just waiting for someone like you...'")
// }
// function endingThief(){
//   document.getElementById("text").innerHTML = "As you begin loading the treasure into your sack, you realize that you won't be able to carry all of the treasure. You decide that it would be the best choice to just grab as much as you can carry."
// alert("But as you slide a wristlet on, it begins to grow warm in your hand...")
// alert("And it's getting a little tighter too...")
// alert("Just as you realized it was cursed, it was too late, the treasure becam searing hot and continuted to grow tighter and tighter...")
// alert("The man never went looking for you... He assumed the Dragon had killed you.")
// alert("You lost! Don't be afraid to be adventurous!")
// }
// function dragonCombat(){
//   alert("The Dragon attacks!")
//   alert("The dragon hits!")
//   confirm("Do you attack?")
//   alert("Your attack peirces the Dragons hide!")
//   alert("The Dragon roars in anger!")
//   alert("The Dragon shoots a fire ball at you!")
//   alert("Your raise your hand and channel the power of the gods! And you shoot the fire ball back at the Dragon!")
//   alert("You have defeated the Dragon!")
//   treasureCollect()
//   }
// function treasureCollect() {
//   alert("You see the treasure near the Dragon, its a lot of treasure!")
//   document.getElementById("text").innerHTML = "The gold and the gems cover the cave floor in a shining surface, and you get 50 percent of this! Although...."
//   alert("What if you took all the treasure?")
//   var treasureChoice = confirm("Do you take the treasure and run?")
//   if (treasureChoice) {
//     alert("Not a bad idea...")
//     endingThief()
//   }
//     else {
//       alert("You were right, you should keep your side of the bargain.")
//       endingHappy()
//     }
//   }
