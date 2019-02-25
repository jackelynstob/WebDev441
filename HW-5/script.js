// create an array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16", "image17", "image18", "image19", "image20", "image21", "image22", "image23", "image24"];
// create a variable with the blank image name
var blankImagePath = "media/blank.png";


//JSON declaration
var player = {"firstName":"", "lastName":""};

// create a empty array for the actual images
var actualImages = new Array();

function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageTags.length; i++)
    {
    // iterate through the image tag ids and sets the source
        document.getElementById(imageTags[i]).src= blankImagePath;
    }



}

function createRandomImageArray()
{
    // create an array of actual images
    var actualImagePath = ["media/aquarius.png", "media/aries.png", "media/cancer.png", "media/capricorn.png", "media/gemini.png", "media/leo.png", "media/libra.png", "media/pisces.png", "media/sagitarious.png", "media/scorpio.png", "media/taurus.png", "media/virgo.png"];
    // create another array to make sure the images only get added twice
    var count = [0,0,0,0,0,0,0,0,0,0,0,0];
    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 24)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }





}

function flipImage(number)
{

  if(firstNumber >= 0)
  {
    secondNumber = number;
    document.getElementById(imageTags[number]).src= actualImages[secondNumber];
        // this should be a quick function that just changes
        // the image based on what number was pressed
  }
  else if(firstNumber < 0)
  {
    firstNumber = number;
    document.getElementById(imageTags[firstNumber]).src = actualImages[firstNumber];
  }

  if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
  {
    setTimeout(imagesDisappear, 1000);
  }

  else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
  {
    firstNumber = -1;
    secondNumber = -1;
  }
}

function imagesDisappear()
{

  console.log(firstNumber);
  document.getElementById(imageTags[firstNumber]).src =blankImagePath;
  document.getElementById(imageTags[secondNumber]).src = blankImagePath;
  firstNumber = -1;
  secondNumber = -1;
}


function addToPlayer()
{
  var firstName = document.getElementById("txtFirstName").value;
  player.firstName = firstName;
  localStorage.setItem("playerInfo", JSON.stringify(player));
  window.location = "index.html";
}

function playerInfo()
{
  var playerInformation = localStorage.getItem("playerInfo");
  player = JSON.parse(playerInformation);
  console.log(player.firstname);
  
}
