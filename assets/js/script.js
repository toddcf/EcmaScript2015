// ES2015 (short for ECMAScript 2015) is the official name for the new version of JavaScript.
// However, everyone just calls it ES6, because it came after ES5.
// ES5 is currently supported in all modern browsers.
// ES6 has partial support in modern browsers, and no support in older browsers.
// ES2016 is already out, but has almost no browser support at this time.
// Use a transpiler that converts ES6 code back to ES5 to ensure browser support.


// Variable Declaractions: LET and CONST
/*
// ES5:

// Variables declared in ES5 are "function scoped," which means they can be changed.

var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6:

// Variables declared in ES6 are "block scoped," and use either LET or CONST.
	// "Block scope" refers to the block -- or the code that is wrapped inside curly braces.
// let is like var, and can be changed later.
// const is for values we don't want to change.

const name6 = "Jane Smith";
let age6 = 23;
// This won't work:
name6 = "Jane Miller";
console.log(name6);
*/


// ES5:
/*
function driversLicense5( passedTest ) {
	if ( passedTest ) {
		// Trying to use a variable before it's been declared will show "undefined" in ES5:
		console.log( firstName );
		var firstName = "John";
		var yearOfBirth = 1990;
	}

	console.log( firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car." );
};

driversLicense5( true );

// ES6:

function driversLicense6( passedTest ) {
	// In ES6, trying to use a variable before it's been declared will throw an error. This is because of the "temporal debt zone."
	// The variable has been hoisted, but still cannot be accessed before it's been declared.
	console.log( firstName );
	if ( passedTest ) {
		let firstName = "John";
		const yearOfBirth = 1990;
	}

	// This won't work in ES6, because is is referring to variables inside the block scope, which it does not have access to:
	console.log( firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car." );
	// One partial workaround is to declare your let variables outside the block scope. The code inside the block scope will have access to them.
	// However, you cannot declare a const variable outside the block and then assign its value inside the block. You must assign its value outside the block when you declare it.
};

driversLicense6( true );
*/

// In this example, the i variable outside the for loop is a completely different i than the one declared and used inside the for loop.
// This is because of the block scope. Which provides DATA PRIVACY.
/*
let i = 23;

for ( let i = 0; i < 5; i++ ) {
	console.log( "Inside for loop: " + i );
}

console.log( "Outside for loop: " + i );
*/

/*
// Blocks and IIFEs:

// You can create a block simply by putting code inside curly braces:
{
	const	a = 1;
	let		b = 2;
	var		c = 3;
}

// This won't work, because the variables are not accessible outside the block:
console.log( a + b );
// So block scoping is very much like an IIFE.
// This WILL work because "var" IS accessible outside the block:
console.log( c );
*/

// Strings
/*
let firstName		= "John";
let lastName		= "Smith";
const yearOfBirth	= 1990;

function calcAge( year ) {
	return 2017 - year;
};

// ES5:

console.log( "This is " + firstName + " " + lastName + ". I was born in " + yearOfBirth + ", which makes me " + calcAge( yearOfBirth ) + " years old." ); 

// ES6:

// Template Literals, which means using backticks instead of quotation marks.
// You can write all your text PLUS the variables inside the backticks:
console.log( `This is ${ firstName } ${ lastName }. I was born in ${ yearOfBirth }, which makes me ${ calcAge( yearOfBirth ) } years old.` );

// startsWith:
const n = `${ firstName } ${ lastName }`;
console.log( n );

// This will display TRUE:
console.log( n.startsWith( "J" ) );
// This will display FALSE (because it's lowercase):
console.log( n.startsWith( "j" ) );

// endsWith:

// This will display TRUE:
console.log( n.endsWith( "th" ) );

// includes:
// (This is to search the middle of the string.)

// This will display TRUE:
console.log( n.includes( "Sm" ) );

// Repeat:

// The number in the parentheses is the number of times you want it to repeat.
// This will print "John" five times:
console.log( firstName.repeat( 5 ) );

// If you want a space between the repeats, you must write a template literal:
console.log( `${ firstName } `.repeat( 5 ) );
*/

/*
// Arrow Functions

const years = [ 1990, 1965, 1982, 1937 ];

// ES5:
// Use map to create a new array of ages and store it in ages5:
var ages5 = years.map( function( el ) {
	return 2017 - el;
});

console.log( ages5 );

// ES6 uses an "arrow function," which is much more concise.
// There are three ways of writing arrow functions.
// 1. One argument, and one line of code. The simplest.
let ages6 = years.map( el => 2017 - el );

console.log( ages6 );

// 2. Two arguments, which means using parentheses. Still able to use one line of code:
ages6 = years.map( ( el, index ) => `Age element ${ index + 1 }: ${ 2017 - el }.`);

console.log( ages6 );

// 3. Two arguments, and multiple lines of code (most complex).
// Must use curly braces to create a block, and use the return keyword at the end.
ages6 = years.map( ( el, index ) => {
	// Current year:
	const now = new Date().getFullYear();
	// Calculate age based on current year and the element that was passed in:
	const age = now - el;
	return `Age element ${ index + 1 }: ${ age }.`
});

console.log( ages6 );
*/

// Arrow Functions: Lexical "This" Keyword:

// Arrow functions do not have a "this" keyword. They use the "this" keyword of the function they are written in.
// Therefore, we say that they have a lexical "this" variable.

// ES5:
/*
// Can't use "this" keyword without a workaround because it would be pointing to the global object.
var box5 = {
	color: "green",
	position: 1,
	clickMe: function() {
		var self = this;
		document.querySelector( ".green" ).addEventListener( "click", function() {
			var str = "This is box number " + self.position + ", and it is " + self.color + ".";
			alert( str );
		});
	}
};

box5.clickMe();
*/

// ES6:
/*
// With arrow function, you CAN use the "this" keyword because it shares the lexical "this" keyword of its surroundings:
const box6 = {
	color: "green",
	position: 1,
	clickMe: function() {
		document.querySelector( ".green" ).addEventListener( "click", () => {
			var str = "This is box number " + this.position + ", and it is " + this.color + ".";
			alert( str );
		});
	}
};

// box6.clickMe();

// Another variation, using an arrow function in the first function.
// But "this" will now refer to the global object, so it won't work.

const box66 = {
	color: "green",
	position: 1,
	clickMe: () => {
		document.querySelector( ".green" ).addEventListener( "click", () => {
			var str = "This is box number " + this.position + ", and it is " + this.color + ".";
			alert( str );
		});
	}
};

box66.clickMe();
*/

// With function constructor:
/*
function Person( name ) {
	this.name = name;
};
*/
// ES5:
/*
Person.prototype.myFriends5 = function( friends ) {
	var arr = friends.map( function( el ) {
		return this.name + " is friends with " + el
	}.bind( this ));

	console.log( arr );
}

var friends = ["Bob", "Jane", "Mark"];
new Person( "John" ).myFriends5( friends );
*/
// ES6:
/*
Person.prototype.myFriends6 = function( friends ) {
	var arr = friends.map( el => `${this.name} is friends with ${el}` );

	console.log( arr );
}

var friends = ["Bob", "Jane", "Mark"];
new Person( "Mike" ).myFriends6( friends );
*/


// Destructuring

// Use this to store each element in an array inside a single variable.

// ES5:
/*
var john = [ "John", 26 ];
var name = john[0];
var age = john[1];
*/
// ES6:
/*
const [ name, age ] = [ "John", 26 ];
// What this will do is create a const called "name" and a const called "year", and then store the data in the array in each of those variables.
console.log( name );
console.log( age );

// Also works with objects:

const obj = {
	firstName: "John",
	lastName: "Smith"
};
*/
/*
const { firstName, lastName } = obj;

console.log( firstName );
console.log( lastName );
*/
/*
// If you don't want the variables to be the same as the keys in the object:
const { firstName: a, lastName: b } = obj;

console.log( a );
console.log( b );
*/
/*
function calcAgeRetirement( year ) {
	const age = new Date().getFullYear() - year;
	return [ age, 65 - age ];
};

// Now destructure the function:
const [ age, retirement ] = calcAgeRetirement( 1990 );
console.log( age );
console.log( retirement );
*/

// Arrays (and a new kind of loop)

// const boxes = document.querySelectorAll( ".box" );

// Remember that querySelectorAll returns a nodelist, which we'll then have to convert into an array:

// ES5:
/*
var boxesArr5 = Array.prototype.slice.call( boxes );

boxesArr5.forEach( function( cur ) {
	// Change all boxes to blue:
	cur.style.backgroundColor = "dodgerblue";
});
*/

// ES6:

// const boxesArr6 = Array.from( boxes );
// A new method called "from," combined with the arrow function:
// Array.from( boxes ).forEach( cur => cur.style.backgroundColor = "dodgerblue");


// Now we will change the text inside the boxes depending on color:

// ES5:
/*
// If we reach the blue box, we want to "continue" -- meaning to skip this iteration of the loop and go to the next one:
for ( var i = 0; i < boxesArr5.length; i++ ) {
	if ( boxesArr5[i].className === "box blue" ) {
		continue;
	}

	boxesArr5[i].textContent = "I changed to blue!";
};
*/

// ES6:

// ES6 has a "for-of" loop.
/*
for ( const cur of boxesArr6 ) {
	// If the className includes the word "blue":
	if ( cur.className.includes( "blue" ) ) {
		continue;
	}

	cur.textContent = "I changed to blue!";
};
*/

// ES5:

// var ages = [ 12, 17, 8, 21, 14, 11 ];
/*
// In ES5, we would have to create a boolean array to determine if the age is above or below 18, and then use the indexOf to determine the elements that we want.
var full = ages.map( function( cur ) {
	return cur >= 18;
});

console.log( full );

// Now find the position of any true elements in the array:
console.log( full.indexOf( true ) );
// Now retrieve that element from the array so you can display their age:
console.log( ages[ full.indexOf( true ) ] );
*/
// ES6:
// ES6 has the findIndex and find methods to shorten the above process significantly.
// Return the index of the cur element if that element is greater than 18:
// console.log( ages.findIndex( cur => cur >= 18 ) );

// Now show the age of anyone over 18:
// console.log( ages.find( cur => cur >= 18 ) );


// Spread Operator

// A convenient way to expand elements of an array, like arguments and function calls.
/*
function addFourAges( a, b, c, d ) {
	return a + b + c+ d;
};

var sum1 = addFourAges( 18, 30, 12, 21 );
console.log( sum1 );

// What if the ages were in an array? Use the "apply" method.

// ES5:
var ages = [ 18, 30, 12, 21 ];
// In using the apply method, we must specify "this". But in this case we don't need it, so we can just say it's null.
var sum2 = addFourAges.apply( null, ages );
console.log( sum2 );

// ES6:

// The spread operator is the ellipses:
const sum3 = addFourAges( ... ages );
// It will expand the ages array into its components.
console.log( sum3 );

// You can combine both of those arrays using the spread operator on each one:
const familySmith = [ "John", "Jane", "Mark" ];
const familyMiller = [ "Mary", "Bob", "Ann" ];
let bigFamily = [ ... familySmith, ... familyMiller ];
console.log( bigFamily );
// You can even add a new element in the middle:
bigFamily = [ ... familySmith, "Lily", ... familyMiller ];
console.log( bigFamily );


// To use the spread operator on a nodelist:

// Example: Change all boxes to purple using querySelectorAll, which returns a nodelist:

const h = document.querySelector( "h1" );
const boxes = document.querySelectorAll( ".box" );

// Now use the spread operator instead of individually changing the text color of the h1 element and then looping through all the elements with a class of box:
const all = [ h, ... boxes ];
// Now we've stored h1 and all the boxes (expanded) in the "all" variable.

// Convert nodelist to array:
Array.from( all ).forEach( cur => cur.style.color = "purple" );
*/

// Rest Parameters

// These allow us to pass an arbitrary number of arguments into a function.
// These look like spread operators but are the exact opposite.
// Whereas the spread operator expands an array into its components, rest parameters receive a couple single values and transforms them into an array when we call a function with multiple parameters.


// Example:
// We have a function that receives an arbitrary number of years, and then prints to the console whether each person is over 18 years of age.
// Note that "arguments" is like the "this" keyword.
// Although "arguments" looks a lot like an array, it is actually an object.
// Arrays have the array function constructor as their prototype, but "arguments" has the object prototype.
// So "arguments" is an array-like structure, but is not actually an array.
// If you want to use it as an array (to loop through it, for example), you must first convert it into an array.

/*
// ES5:
function isFullAge5() {
	// console.log( arguments );
	// Convert to an array and store in new variable:
	var argsArray = Array.prototype.slice.call( arguments );
	// Now that it's been converted into an array, you can loop through it:
	argsArray.forEach( function( cur ) {
		// cur comes from the current array, which comes from the arguments, which are all the numbers that are passed into the function when it's called:
		console.log( ( 2017 - cur) >= 18 );
	})
};

// Pass some years into the function:
// isFullAge5( 1990, 2001, 1965 );
// Try it with more arguments:
// isFullAge5( 1990, 2001, 1965, 2016, 1987 );


// ES6:

// In ES6, instead of having no parameters, we use the rest parameter operator, followed by the variable name.
// So as soon as we call the function, it will convert the arguments into an array and then pass that array into this function:
function isFullAge6( ... years ) {
	// console.log( years );
	years.forEach( cur => console.log ( ( 2017 - cur ) >= 18 ) );
};
// The result will actually have the array prototype (not the object prototype).

// Pass some years into the function:
isFullAge6( 1990, 2001, 1965 );
// Try it with more arguments:
isFullAge6( 1990, 2001, 1965, 2016, 1987 );
*/
/*
// Same thing, but a parameter that accepts not the age limit, but at what age a person becomes an adult. (Maybe it is different in different countries.)
// But this means the "limit" (aka year of full age) will be part of the arguments, so we need to fix that by "slicing" starting at position 1.
// This will exclude the first argument.
// ES5:
function isFullAge5( limit ) {
	// console.log( arguments );
	// Convert to an array and store in new variable:
	var argsArr = Array.prototype.slice.call( arguments, 1 );
	// console.log( argsArr );
	// Now that it's been converted into an array, you can loop through it:
	argsArr.forEach( function( cur ) {
		// cur comes from the current array, which comes from the arguments, which are all the numbers that are passed into the function when it's called:
		console.log( ( 2017 - cur) >= limit );
	})
};

// Pass some years into the function, the first being the "limit", or age of adulthood:
isFullAge5( 21, 1990, 2001, 1965 );
// Try it with a different limit, and more arguments:
isFullAge5( 18, 1990, 2001, 1965, 2016, 1987 );


// ES6:

// In ES6, instead of having no parameters, we use the rest parameter operator, followed by the variable name.
// And we now add the "limit" before the rest parameters.
// So as soon as we call the function, it will convert the arguments into an array and then pass that array into this function:
function isFullAge6( limit, ... years ) {
	// console.log( years );
	years.forEach( cur => console.log ( ( 2017 - cur ) >= limit ) );
};
// The result will actually have the array prototype (not the object prototype).

// Pass some years into the function:
isFullAge6( 21, 1990, 2001, 1965 );
// Try it with more arguments:
isFullAge6( 18, 1990, 2001, 1965, 2016, 1987 );
*/


// Default Parameters

// Used whenever we want one or more parameters of a function to be preset -- aka have a default value.

// ES5:
/*
function SmithPerson( firstName, yearOfBirth, lastName, nationality ) {
	// Defaults:
	// If the lastName is undefined, make it Smith. Otherwise, make it whatever argument was passed in:
	lastName === undefined ? lastName = "Smith" : lastName = lastName;
	nationality === undefined ? nationality = "American" : nationality = nationality;

	// Explicit Settings:
	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
};

var john = new SmithPerson( "John", 1990 );
// If we only specify a couple of the arguments, JavaScript will set the other parameters to "undefined."

// John's sister has married and moved to Spain:
var emily = new SmithPerson( "Emily", 1983, "Diaz", "Spanish" );
*/
/*
// ES6:

// In ES6, you define the defaults right in the parameters!
function SmithPerson( firstName, yearOfBirth, lastName = "Smith", nationality = "American" ) {
	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
};

var john = new SmithPerson( "John", 1990 );
// If we only specify a couple of the arguments, JavaScript will set the other parameters to "undefined."

// John's sister has married and moved to Spain:
var emily = new SmithPerson( "Emily", 1983, "Diaz", "Spanish" );
*/

// Maps

// Anything can be a key, not just a string. Could be numbers, booleans, functions, objects.
/*
const question = new Map();
// To add data to the new Map, we use the set method. Parameters are key, then value:
question.set( "question", "What is the official name of the latest major JavaScript version?" );
// Now set multiple choice answers to that question:
question.set( 1, "ES5" );
question.set( 2, "ES6" );
question.set( 3, "ES2015" );
question.set( 4, "ES7" );
question.set( "correct", 3 );
// If question is answered correctly, print to the console:
question.set( true, "Correct!" );
// If answered incorrectly:
question.set( false, "Sorry, that is incorrect. Please try again." );


// To retrieve data from this map, use the opposite of set, which is get.
// Then all you have to do is pass in the key.

console.log( question.get( "question" ) );
*/
// It's also very easy to get the size of the map by using the size property.
// Use "size" instead of "length."
// console.log( question.size );
/*
// If the question has key #4, delete it:
if ( question.has( 4 ) ) {
	// You can delete one of the elements by using its key:
	question.delete( 4 );	
}
*/

// It's also very easy to add or remove data from the map.
// You can also delete EVERYTHING from the map using "clear."
// question.clear();

// Set, get, has, delete, and clear are the most basic methods for manipulating maps.

// Maps are also iterable. You can LOOP through a map! One way is the forEach method.

// question.forEach( ( value, key ) => console.log( `This is ${key} and it's set to ${value}.` ) );
/*
// Using entries will return all entries of our question map:
for (let [ key, value ] of question.entries() ) {
	// Only execute this part of the code if the key is a number:
	if ( typeof( key ) === "number" ) {
		console.log( `Answer ${key}: ${value}` );
	}
};

// Since JavaScript will interpret the user response as a string, we must use parseInt to convert it to an integer:
const ans = parseInt( prompt( "Write the correct answer." ) );
// Compare the user answer with the true answer:
console.log( question.get( ans === question.get( "correct" ) ) );
*/

// Classes

// ES5:
/*
var Person5 = function( name, yearOfBirth, job ) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear - this.yearOfBirth;
	console.log( age );
}

var john5 = new Person5( "John", 1990, "teacher" );

// ES6:

// Class declaration:
class Person6 {
	// All classes have to have the constructor method, which looks a lot like a function:
	constructor ( name, yearOfBirth, job ) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	// If you want to add a method to it, you do it here inside the class:
	calculateAge() {
		var age = new Date().getFullYear - this.yearOfBirth;
		console.log( age );
	}

	// Static methods are attached to the class, but not inherited by the class instances.
	// For example, this static greeting cannot be used on john:
	static greeting() {
		console.log( "Hey, there!" );
	}
}

const john6 = new Person6( "John", 1990, "teacher" );

Person6.greeting();

// Class definitions are NOT hoisted.
// Unlike function constructors, we need to first implement a class, and only later in our code can we start using it.
// We can only add methods to classes, but not properties. Which is fine, because inheriting properties through the object instances is not the best practice.
*/

// Subclasses

// ES5:
/*
var Person5 = function( name, yearOfBirth, job ) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log( age );
}

var john5 = new Person5( "John", 1990, "teacher" );

// This will inherit from Person5.
// First parameters are the same; then you add on the other stuff that is unique to this:
var Athlete5 = function( name, yearOfBirth, job, olympicGames, medals ) {
	// So first we call our super class, which is Person5, that we'll be inheriting from:
	Person5.call( this, name, yearOfBirth, job );
	this.olympicGames = olympicGames;
	this.medals = medals;
}
*/

/*
Regarding the above, the reason we have to set the "this" variable to "this":
When creating a new Athlete object, "new" creates a new empty object, calls the Athlete function constructor, and sets the "this" keyword
to the newly created empty objects.
In the execution context that we're in here, the "this" keyword will point to the new empty object.
If we want the Person properties name, yearOfBirth, and job to be set on a new Athlete object, we need to call the Person function constructor with the
"this" keyword also set to our newly-created Athlete object.
So after this, all the properties will be set in the new Athlete object that's created by the new operator. That's why we need to call it here, and why
we need to set the "this" variable to "this".
*/

// To use the correct prototype chain, we'll use object.create.
// We want the prototype of the Athlete object to become the prototype of the Person object so that they become connected.
/*
Athlete5.prototype = Object.create( Person5.prototype );
*/
// This method is specific to the athletes, so they will only inherit it if they are athlete instances.
// Person instances will NOT inherit this method.
// Note that this can only happen AFTER the two function constructors have been connected.
/*
Athlete5.prototype.wonMedal = function() {
	this.medals++;
	console.log ( this.medals );
}

// Now test it by creating a new athlete:
var johnAthlete5 = new Athlete5( "John", 1990, "swimmer", 3, 10 );

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/

// ES6:
/*
// Superclass
class Person6 {
	// All classes have to have the constructor method, which looks a lot like a function:
	constructor ( name, yearOfBirth, job ) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	// If you want to add a method to it, you do it here inside the class:
	calculateAge() {
		var age = new Date().getFullYear() - this.yearOfBirth;
		console.log( age );
	}

}

// Subclass
// Always start out by saying the sublcass "extends" the superclass:
class Athlete6 extends Person6 {
	constructor( name, yearOfBirth, job, olympicGames, medals ) {
		// Saying "super" will call the super class. List only the paramaters of the super class.
		super( name, yearOfBirth, job );
		this.olympicGames = olympicGames;
		this.medals = medals;
	}

	wonMedal() {
		this.medals++;
		console.log( this.medals );
	}
}

const johnAthlete6 = new Athlete6( "John", 1990, "swimmer", 3, 10 );

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/

// Final Challenge:

/*
You work in a small town administration, and are in charge of two elements:

1. Parks.
2. Streets.

It's a very small town, so there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
Your boss wants a report on the following:

1. Tree density of each park. (Number of trees/park area.)
2. Average age of each town's park. (Sum of all ages/number of parks.)
3. The name of the park that has more than 1,000 trees.
4. Total and average length of the town's streets.
5. Size classification of all streets: tiny, small, normal, big, huge. If the size is unkown, the default is normal.

Print all results to the console.

HINT: Use ES6 classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

Examples:

Parks Report:
Our 3 parks have an average of X years.
Green Park has a tree density of 1,075 trees per sq km.
National Park has a tree density of 1,221 trees per sq km.
Oak Park has a tree density of 2,372.5 trees per sq km.
National Park has more than 1,000 trees.

Streets Report:
Our 4 streets have a total length of 7.1 km, with an average of 1.775 km.
Ocean Avenue, built in 1999, is a big street.
Evergreen Street, built in 2008, is a small street.
4th Street, built in 2015, is a normal street.
Sunset Blvd, built in 1982, is a huge street.
*/

// Store current year in a variable so we can use it to calculate ages later:
const now = new Date().getFullYear();

// Create a superclass that contains the name and the buildYear, since both parks and streets have these elements.
// Then create subclasses for parks and streets to handle their unique elements.

// Superclass:
class Element {
	// All classes have to have the constructor method, which looks a lot like a function:
	constructor ( name, buildYear ) {
		this.name = name;
		this.buildYear = buildYear;
	}

	// If you want to add a method to it, you do it here inside the class:
	// calculateAge() {
		// var age = new Date().getFullYear() - this.yearOfBirth;
		// console.log( age );
	// }
}

// Subclasses:

// Always start out by saying the sublcass "extends" the superclass:
class Park extends Element {
	constructor ( name, buildYear, area, trees ) {
		// Saying "super" will call the super class. List only the paramaters of the super class.
		super ( name, buildYear );
		this.area = area;
		this.trees = trees;
	}

	// Method for calculating the tree density:
	treeDensity() {
		const density = this.trees / this.area;
		console.log( `${ this.name } has a tree density of ${ density } trees per square km.` );
	}
}

// Always start out by saying the sublcass "extends" the superclass:
class Street extends Element {
	// Default parameter for size is set to 3, or "normal".
	// Therefore, we won't have to pass a value in for size.
	constructor ( name, buildYear, length, size = 3 ) {
		// Saying "super" will call the super class. List only the paramaters of the super class.
		super ( name, buildYear );
		this.length = length;
		this.size = size;
	}

	classifyStreet() {
		const classification = new Map();
		// Set classifications for all street sizes by number:
		classification.set( 1, "tiny" );
		classification.set( 2, "small" );
		classification.set( 3, "normal" );
		classification.set( 4, "big" );
		classification.set( 5, "huge" );
		console.log( `${ this.name }, built in ${ this.buildYear }, is a ${ classification.get( this.size ) } street.` );
	}

}

// Construct the parks:
const allParks = [
	new Park( "Green Park", 1963, 2, 80 ),
	new Park( "Chill Park", 1979, 5, 120 ),
	new Park( "Tranquility Park", 1983, 19, 1239 )
];

// Construct the streets:
const allStreets = [
	new Street( "Huntington Blvd", 1949, 14, 5 ),
	// No size argument on Evergreen, just to test the default parameter:
	new Street( "Evergreen Street", 1951, 7 ),
	new Street( "Alpine Road", 1999, 10, 2 ),
	new Street( "Constellation Circle", 2001, 12, 1 )
];


function calcAvg( arr ) {
	// Use "reduce" to loop through an array and accumulate all the values into a single value.
	// Put a callback function inside the reduce method:
	// We also have access to the previous value. So to add them all up, just add the previous value with the current value.
	// "Index" is the position at which we want to start in the array, which in this case is 0.
	const sum = arr.reduce( ( prev, cur, index ) => prev + cur, 0 );

	// To find the average, divide the sum we just calculated by the length of the array.
	return [ sum, sum / arr.length ];

};

function parksReport( p ) {
	console.log( `Parks Report:`);
	// Tree Density:
	// Use the forEach method to loop through the allParks array.
	// We only want the current element, so use el.
	// And for that el, call the treeDensity method:
	p.forEach( el => el.treeDensity() );

	// Average Age:

	// Before we can calculate the AVERAGE AGE, we must first calculate all the ages and "map" them to their own array.
	const ages = p.map( el => ( now - el.buildYear) );
	// Now we can call the external function that calculates averages. (Use destructuring to save two values from an array into one variable.)
	const [ totalAge, avgAge ] = calcAvg( ages );
	console.log( `Our ${ p.length } parks have an average age of ${ avgAge } years.` );

	// If park has more than 1,000 trees:
	// Get all of the numbers of trees into an array, and then use findIndex. Can "chain" these methods on the same line.
	const grand = p.map( el => el.trees ).findIndex( el => el >= 1000 );
	console.log( `${ p[grand].name } has more than 1,000 trees.` );

};

function streetsReport( s ) {
	console.log( `Streets Report:` );

	// Total and average street lengths.
	
	// First we need to "map" the lengths to their own array.
	const treeLengths = s.map( el => el.length );
	// Then we can calculate the average.
	const [ totalLength, avgLength ] = calcAvg( treeLengths );
	console.log( `Our ${ s.length } streets have a total length of ${ totalLength } km, with an average length of ${ avgLength } km.` );
	// Our 4 streets have a total length of 7.1 km, with an average of 1.775 km.

	// Street size classification.
	s.forEach( el => el.classifyStreet() );
};

parksReport( allParks );
streetsReport( allStreets );































