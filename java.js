//var age = prompt("White is your age ?");

//document.getElementById('show').innerHTML = age;

//let fruit = "banana";
//let morefruit = "apple\nbanana"
//document.write(morefruit);

//let name = ['shahana', 'nipa', 'ashfaq', 'kayes  '];
//document.write(name.toString());
//document.write(name.join('*'));

/*document.write(name.pop());
document.write(name.push('prome'), name);
let num = [10,2,1,5,9,8,4,6,7,3];
document.write(num.sort(function(a,b) {return(a-b)}),' ');
document.write(' ',num.sort(function(a,b) {return(b-a)}));

let newarray = new Array();
for(let num = 1; num <= 10; num++){
	newarray.push(num);
}
document.write(newarray);

let age = prompt("Enter your age here...");
if ((age >= 18) && (age <= 35)) {
	document.write("Welcome to my website");
}
else{
	document.write("you are not permited for this page");
}
*/
// challenge = 1........

function fun(){
	let age = prompt("Enter Your Birthyear...");
	let days = (2020 - age) * 365;
	let result = "Your are " +days+"days old."; 
	document.getElementById('div').innerHTML= result;
}
function reset(){
	document.getElementById('div').innerHTML = " ";
}

//challenge = 2........

function pic(){
	let image = document.createElement('img');
	let div = document.getElementById('cat');
	image.src="image/cover.gif";
	div.appendChild(image);
}

//challenge = 3........

function rps(you){
	console.log(you);
	var human, computer;
	human = you.id;
	computer = numbertochoice(randToRpsInt());
	console.log("computer choice", computer);
	result = winner(human , computer);
	console.log(result);
	message = yourmessage(result);
	console.log(message);
	rpsend(you.id, computer, message);
}
function randToRpsInt(){
	return Math.floor(Math.random()*3);
}
function numbertochoice(number){
	return ['rock', 'paper', 'scissors'][number];
}
function winner(you , computerchoice){
	var database = {
		"rock" : {'scissors':1,'rock':0.5,'paper':0},
		"paper" : {'rock':1,'paper':0.5,'scissors':0},
		"scissors" : {'paper':1,'scissors':0.5,'rock':0}
	};
	var yourscore = database[you][computerchoice];
	var computerscore = database[computerchoice][you];
	return [yourscore , computerscore];
}
function yourmessage([yourscore , computerscore]){
	if (yourscore === 0) {
		return{'message': 'You lost', 'color': 'red'};
	}
	else if (yourscore === 0.5) {
		return{'message': 'You tied', 'color': 'yellow'};
	}
	else{
		return{'message': 'You win', 'color': 'green'};
	}
}
function rpsend(humanimg,computerimg,yourmessage){
	var imagedatabase = {
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissors': document.getElementById('scissors').src
	}
	
	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	var humandiv = document.createElement('div');
	var computerdiv = document.createElement('div');
	var messagediv = document.createElement('div');

	humandiv.innerHTML = "<img src='" +imagedatabase[humanimg]+ "'>"
	messagediv.innerHTML = "<h1>" +yourmessage['message']+"</h1>"
	computerdiv.innerHTML = "<img src='" +imagedatabase[computerimg]+"'>"

	document.getElementById('container3').appendChild(humandiv);
	document.getElementById('container3').appendChild(messagediv);
	document.getElementById('container3').appendChild(computerdiv);
}

//Challenge : 4............

let all_button = document.getElementsByTagName('button');
console.log(all_button);

let copycolor =[];
for(let i=0; i<all_button.length; i++){
	copycolor.push(all_button[i].classList[0]);
}
console.log(copycolor);

function btncolor(thinky){
	if (thinky.value === 'red') {
		btnRed();
	}
	else if(thinky.value === 'green'){
		btnGreen();
	}
	else if(thinky.value === 'blue'){
		btnBlue();
	}
	else if(thinky.value === 'reset'){
		btnReset();
	}
	else if(thinky.value === 'random'){
		btnRandom();
	}
}

function btnRed(){
	for(let i=0; i<all_button.length; i++){
		all_button[i].classList.remove(all_button[i].classList[0]);
		all_button[i].classList.add('red');
	}
}
function btnGreen(){
	for(let i=0; i<all_button.length; i++){
		all_button[i].classList.remove(all_button[i].classList[0]);
		all_button[i].classList.add('green');
	}
}
function btnBlue(){
	for(let i=0; i<all_button.length; i++){
		all_button[i].classList.remove(all_button[i].classList[0]);
		all_button[i].classList.add('blue');
	}
}
function btnReset(){
	for(let i=0; i<all_button.length; i++){
		all_button[i].classList.remove(all_button[i].classList[0]);
		all_button[i].classList.add(copycolor[i]);
	}
}
function btnRandom(){
	var choice = ['red', 'green', 'yellow', 'blue'];
	for(let i=0; i<all_button.length; i++){
		let randomNumber = Math.floor(Math.random()*4);
		all_button[i].classList.remove(all_button[i].classList[0]);
		all_button[i].classList.add(choice[randomNumber]);
	}
}

//Challenge 5: Blackjack Game.

let blackjack_game={
	'you':{'ScoreSpan':'#you', 'div':'#your_box', 'score': 0},
	'dealer':{'ScoreSpan':'#dealer', 'div':'#dealer_box', 'score': 0},
	'cards':['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
	'card_Value':{'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'J':10, 'Q':10, 'A':[1,11]},
	'wins': 0,
	'losts': 0,
	'drews': 0,
	'stand': false,
	'turnOver': false,
};

const YOU = blackjack_game['you']
const DEALER = blackjack_game['dealer']

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const losSound = new Audio('sounds/aww.mp3');

document.querySelector('#hit_btn').addEventListener("click", backjackHit);
document.querySelector('#stand_btn').addEventListener("click", backjackStand);
document.querySelector('#dealer_btn').addEventListener("click", backjackDealer);


function backjackHit(){
	if (blackjack_game['stand'] === false) {
		let card=random_card();
		console.log(card);
		show_card(card, YOU);
		player_score(card, YOU);
		show_score(YOU);
		console.log(YOU['score']);
	}
}

function backjackStand(){
	blackjack_game['stand'] = true;
	let card=random_card();
	console.log(card);
	show_card(card, DEALER);
	player_score(card, DEALER);
	show_score(DEALER);
	console.log(DEALER['score']);

	if (DEALER['score'] > 15) {
		blackjack_game['turnOver'] = true;
		let game_result = select_winner();
		show_result(game_result);
	}
}

function backjackDealer(){
	if (blackjack_game['turnOver'] === true) {

		blackjack_game['stand'] = false;

		let yourImage = document.querySelector('#your_box').querySelectorAll('img');
		let dealerImage = document.querySelector('#dealer_box').querySelectorAll('img');

		for(i=0; i<yourImage.length; i++){
			yourImage[i].remove();
		}
		for(i=0; i<dealerImage.length; i++){
			dealerImage[i].remove();
		}

		YOU['score'] = 0;
		DEALER['score'] = 0;
		document.querySelector('#you').textContent = 0;
		document.querySelector('#dealer').textContent = 0;

		document.querySelector('#you').style.color = 'white';
		document.querySelector('#dealer').style.color = 'white';
		document.querySelector('#message').textContent = "Let's Play";
		document.querySelector('#message').style.color= "black";

		blackjack_game['turnOver'] = false;
	}

}

function random_card(){
	let randomIndex = Math.floor(Math.random()*13);
	return blackjack_game['cards'][randomIndex];
}

function show_card(card , activePlayer){
	if (activePlayer['score'] <=21) {
		let Image = document.createElement('img');
		Image.src= `image/images/${card}.png`;
		document.querySelector(activePlayer['div']).appendChild(Image);
		hitSound.play();
	}
}

function player_score(card, activePlayer){
	if (card === 'A') {
		if (activePlayer['score'] + blackjack_game['card_Value'][card][1]<= 21) {

			activePlayer['score'] += blackjack_game['card_Value'][card][1];
		}
		else{
			activePlayer['score'] += blackjack_game['card_Value'][card][0];
		}
	}
	else{
		activePlayer['score'] += blackjack_game['card_Value'][card];
	}
}

function show_score(activePlayer){
	if (activePlayer['score'] >21){
		document.querySelector(activePlayer['ScoreSpan']).textContent = 'BUST';
		document.querySelector(activePlayer['ScoreSpan']).style.color = 'red';
	}
	else{
		document.querySelector(activePlayer['ScoreSpan']).textContent = activePlayer['score'];
	}
}

function select_winner(){

	let Fwinner;

	if (YOU['score'] <= 21) { 

		if ((YOU['score'] > DEALER['score']) || (DEALER['score'] > 21)) {
			blackjack_game['wins']++;
			Fwinner = YOU;
		}
		else if(YOU['score'] < DEALER['score']) {   
			blackjack_game['losts']++;
			Fwinner = DEALER;
		}
		else if (YOU['score'] === DEALER['score']) {
			blackjack_game['drews']++;
		}
	}
	else if (YOU['score'] > 21 && DEALER['score'] <= 21){
		blackjack_game['losts']++;
		Fwinner = DEALER;
	}
	else if (YOU['score'] > 21 && DEALER['score'] > 21){
		blackjack_game['drews']++;
	}

	console.log('Winner is', Fwinner);
	return Fwinner;
}

function show_result(Fwinner){

	let message, message_color;

	if (blackjack_game['turnOver'] === true) {

		if (Fwinner === YOU) {
			document.querySelector('#wins').textContent = blackjack_game['wins'];
			message = 'You Win';
			message_color = 'green';
			winSound.play();
		}
		else if(Fwinner === DEALER){
			document.querySelector('#loss').textContent = blackjack_game['losts'];
			message = 'You Lost';
			message_color = 'Red';
			losSound.play();
		}
		else{
			document.querySelector('#drew').textContent = blackjack_game['drews'];
			message = 'Game is Drew';
			message_color = 'blue';
		}
		document.querySelector('#message').textContent = message;
		document.querySelector('#message').style.color = message_color;
	}
}