

//used to store a quote in printQuote
var quoteObj;

//stores used integers when selecting new quotes
var usedValues = [];

var quotes = [

	{
		quote:	"To the man who only has a hammer, \
		everything he encounters begins to look like a nail.", 
		source:"Abraham Maslow",
		year:"1942",
		citation:"Wikipedia",
		tag:"philosophy"
	}, 
	{
		quote: "We become what we think about.", 
		source:"Earl Nightingale",
		year:"1930",
		citation:"Wikipedia",
		tag:"philosophy"
	},
	{
		quote:"The mind is everything. What you think you become.", 
		source:"Buddha",
		year:"1000",
		citation:"Wikipedia",
		tag:"philosophy"
	},
	{
		quote:"If you want to make an easy job seem mighty hard, just keep putting off doing it.", 
		source:"Olin Miller",
		year:"2010",
		citation:"Wikipedia",
		tag:"philosophy"
	},
	{
		quote:"Take rest; a field that has rested gives a bountiful crop.", 
		source:"Ovid",
		year:"250 BC",
		citation:"Wikipedia",
		tag:"Literature"
	}
	
];

//starts timer to call printQuote
function start() {

    timer = setTimeout(printQuote, 30000);
}

//clears timer to call printQuote
function stop() {

    clearTimeout(timer);
}

//this function gets a random quote
function getRandomQuote() {

	//generate a random integer that is less than or equal to the quotes object length
	var i = Math.floor(Math.random() * (1 + quotes.length - 1));

	//clear usedValues if all values have been used then add new value and return its quote object
	if (usedValues.length >= quotes.length) {

		console.log(quotes[i])
		usedValues = [];
		usedValues.push(i);
		return quotes[i];

	//continue to call function if value has already been used
	} else if ((usedValues.includes(i)) === true) {

		console.log("running function again; can't repeat quote");

		return getRandomQuote();

	//return quote based on random i value
	} else {
	
	console.log(quotes[i])
	usedValues.push(i);
	return quotes[i];
	}
}


//this function prints a random quote from the quotes object
function printQuote() {

	//get a random quote by calling getRandomQuote
	quoteObj = getRandomQuote();

	//add a quote and source to the page
	var quoteText = "<p class=\"quote\">" + quoteObj.quote + "</p> <p class=\"source\"> " + quoteObj.source;


	// if object has the the proprties citation, year, or tag and those properties are not null, add them
	if (quoteObj.hasOwnProperty("citation") && quoteObj.citation !== null) {

		quoteText += "<span class=\"citation\">" + quoteObj.citation + "</span>"
	}


	if (quoteObj.hasOwnProperty("year") && quoteObj.year !== null) {

		 quoteText += "<span class=\"year\">" + quoteObj.year + "</span>"

	} 

	if (quoteObj.hasOwnProperty("tag") && quoteObj.tag !== null) {

		 quoteText += "<span class=\"tag\">" + quoteObj.tag + "</span> </p>"

	} 


	//set quote-box content to quoteText
	document.getElementById('quote-box').innerHTML =  quoteText;

	//randomly select a hexidecimal color
	var pageColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

	//change background color
	document.getElementById('bodyTag').style="background-color:"+pageColor; 

	//stop timer which changes quote
	stop();

	//start timer which changes quote
	start();

}

//start timer which changes quote
start();


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

