var albumsArray = new Array();

var albumImage = ['media/led.png', 'media/big.png', 'media/patti.png', 'media/beatles.png', 'media/andy.png', 'media/led.png'];

function showCover(){
	document.getElementById('Cover').style.display = 'block';
}
function hideCover() {
	document.getElementById('Cover').style.display = 'none';
}

class albumClass
{
	constructor (title, artist, year, description){
		this.title = title;
		this.artist = artist;
		this.year = year;
		this.description = description;
	}

	toStringTitle(){
		//i did album title
		return this.title;
	}
	toStringArtist(){
		return "Artist: " + this.artist;
	}
	toStringYear(){
		//i did year album was released
		return "Year: " + this.year;
	}
	toStringDescription(){
		//description from https://www.billboard.com/photos/6715351/best-album-covers-of-all-time
		return this.description;
	}
}

function initializeArray() {

	//images from https://www.billboard.com/photos/6715351/best-album-covers-of-all-time

	var album0 = new albumClass("'Led Zeppelin I'", "Led Zeppelin", "1969", "Somehow the image of a burning airship erupting into flames just moments before plummeting to the ground and claiming dozens of lives is the perfect visual introduction to Led Zeppelin's debut masterpiece. Whether you see it as an indication of the explosive music within the sleeve, or a heartless shock tactic capitalizing on a real-life tragedy, this black-and-white rendering of the Hinderburg disaster has become of the most indelible images in hard rock.");

	var album1 = new albumClass("'Ready to Die'", "The Notorious B.I.G", "1994", "The innocence of a baby-sized Biggie on the cover of his classic debut Ready to Die vastly contradicted the content contained inside. But that was the point: the album traced his life from beginning to a mournful, foreshadowing end, using the innocence of a child to illustrate how a cruel world imprints on unmolded minds.");

	var album2 = new albumClass("'Horses'", "Patti Smith", "1975", "Aside from the critical acclaim for Smith's beat poetry-infused lyrics mixed with punk rock, Horses' cover is a visual masterpiece. Photographed by close friend and fellow artist Robert Mapplethorpe, the photo of Smith was considered by critic Camille Paglia as one of the greatest photographs ever taken of a woman. With Smith describing her look as Sinatra-like, all elements combined to create one of the greatest album covers (and rock photographs) ever.");

	var album3 = new albumClass("'Abbey Road'", "The Beatles", "1969", "Does any other album cover on this list stop traffic? It's a testament to the lasting impression of this street-crossing photo that hundreds of fans re-create it every day outside Abbey Road Studios. There's even a webcam live feed of the attraction. Another notable fact: It's the first Beatles cover that doesn't feature the band's name or album title.");

	var album4 = new albumClass("'The Velvet Underground & Nico'", "The Velvet Underground and Nico", "1967", "This iconic Andy Warhol banana picture with 'peel slowly and see' instructions is a great cover on its own, but the original version actually included a peel-off sticker revealing a flesh-colored banana beneath. A perfect combination of art, music and humor.");

	var album5 = new albumClass("'Led Zeppelin I'", "Led Zeppelin", "1969", "Somehow the image of a burning airship erupting into flames just moments before plummeting to the ground and claiming dozens of lives is the perfect visual introduction to Led Zeppelin's debut masterpiece. Whether you see it as an indication of the explosive music within the sleeve, or a heartless shock tactic capitalizing on a real-life tragedy, this black-and-white rendering of the Hinderburg disaster has become of the most indelible images in hard rock.");
    albumsArray.push(album0, album1, album2, album3, album4, album5);
}

function accessInformation() {
	var x = Math.floor((Math.random() * 6) +1 );
	document.getElementById("Title").innerHTML = albumsArray[x].toStringTitle();
	document.getElementById("Artist").innerHTML = albumsArray[x].toStringArtist();
	document.getElementById("Year").innerHTML = albumsArray[x].toStringYear();
  document.getElementById("Album").src= albumImage[x];
	document.getElementById("Description").innerHTML = albumsArray[x].toStringDescription();

}
