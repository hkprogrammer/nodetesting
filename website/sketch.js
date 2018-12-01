function setup(){
	createCanvas(400,400);

	background(51);
	console.log('running');
	drawData();

	


}
function submit(){
	var word = document.getElementById('word').value;
	var score = document.getElementById('score').value;

	console.log(word, score);

	loadJSON('add/' + word + "/" + score, drawData);


}

function drawData(){

	loadJSON('/all',gotData);
	background(51);

}
function gotData(data){
	console.log(data);
	var keys = Object.keys(data);
	for(var i = 0; i < keys.length; i ++){
		var word = keys[i];
		var score = data[word];
		var x = random(width);
		var y = random(height);
		fill(255);
		text(word, x, y);

	}
	console.log(keys);
}