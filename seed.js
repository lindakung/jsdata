var userSeed = [
	{ username: 'Amon', password: 'noma' },
	{ username: 'Loke', password: 'ekol' },
	{ username: 'Maia', password: 'aiam' }
];

var postSeed = [
	{ 
		title: "The Standard Lorem Ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},

	{ 
		title: "The Gods are Fallen",
		body: "“When a child first catches adults out—when it first walks into his grave little head that adults do not always have divine intelligence, that their judgments are not always wise, their thinking true, their sentences just—his world falls into panic desolation. The gods are fallen and all safety gone. And there is one sure thing about the fall of gods: they do not fall a little; they crash and shatter or sink deeply into green muck. It is a tedious job to build them up again; they never quite shine. And the child’s world is never quite whole again. It is an aching kind of growing.” – John Steinbeck, East of Eden"
	},

	{ 
		title: "Real Courage",
		body: "“I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin but you begin anyway and you see it through no matter what.” – Harper Lee, To Kill a Mockingbird"
	},

	{ 
		title: "Gatsby's Green Light",
		body: "“Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter—tomorrow we will run faster, stretch out our arms farther…And then one fine morning—So we beat on, boats against the current, borne back ceaselessly into the past.” – F. Scott Fitzgerald, The Great Gatsby"
	},

	{ 
		title: "Oh, the Places You'll Go!",
		body: "“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You’re on your own. And you know what you know. And YOU are the one who’ll decide where to go…” - Dr. Seuss, Oh, the Places You’ll Go!"
	},

	{ 
		title: "Apple's Thinnist and Lightest MacBook Ever",
		body: "Apple has just announced a new MacBook which has a retina display and is lighter and 4mm thinner than any MacBook that ever came before it. Forgive me for gloating a bit, but come on. Just as I was thinking — how can I possibly save another 3 or 4 millimeters of space in my backpack — this comes along."
	},


	{ 
		title: "The Wearisomeness of Life",
		body: "“He found himself understanding the wearisomeness of this life, where every path was an improvisation and a considerable part of one’s waking life was spent watching one’s feet.” - William Golding, Lord of the Flies"
	},

	{ 
		title: "Anxious Introversion",
		body: "Unlike social introverts, anxious introverts may seek out solitude because they feel awkward and painfully self-conscious around other people, because they're not very confident in their own social skills. But, often, their anxiety doesn't fade when they're all alone. This kind of introversion is defined by a tendency to ruminate, to turn over and over in their minds the things that might or could or already have gone terribly wrong. "
	},

	{ 
		title: "Lafayatte Now Sells Artisanal Push-Pops",
		body: "Grub thought New York pastry chefs had reimagined every possible childhood-throwback dessert (with the exception of Dunkaroos, which someone should definitely make with grown-up ingredients). But now the talented Jennifer Yee at Andrew Carmellini's Lafayette has unveiled a tutti-frutti push-pop, complete with crushed macarons. It looks like the dessert will run all summer, and that this is only the first flavor of several. It's kind of brilliant."
	},

	{ 
		title: "A hilarious Monty Python sketch explains why Greece is in a huge crisis",
		body: "Many top English-speaking economists are either alarmed or aghast over Europe's handling of the crisis in Greece. Several Nobel Prize winners say it has been exacerbated, time and again, by an unnecessarily rigid approach by Germany, Europe's economic powerhouse and decision-maker. Greece simply cannot repay its debts, economists argue, no matter how much the country slashes public services or raises taxes. So by insisting it keep on trying, the thinking goes, Germany seems to be intent on punishing Greece. The Germans see it differently, saying what they are doing may be painful, but necessary, to get the country on a sustainable footing for the long term. To understand the massive gap in opinion, it might help to watch a Monty Python sketch from 1974 about a soccer match between Germany and Greece. In the match, the two countries are represented by their foremost philosophers. For much of the game, the two sides do nothing but talk. Then, in the final minute, there is movement. Socrates scores on the German goalie Gottfried Wilhelm Leibniz, who lived from 1646 to 1716, to win. The German philosophers G.W.F. Hegel, Immanuel Kant and Karl Marx then dispute the goal with the referee, Confucius. \"Hegel is arguing that the reality is merely an a priori adjunct of non-naturalistic ethics. Kant via the categorical imperative is holding that ontologically it exists only in the imagination,\" the announcer says. \"Marx is claiming it was offside.\""
	}

];


var mongoose = require('mongoose');
var Promise = require('bluebird');

var UserModel = require('./server/routes/users/user-model');
var PostModel = require('./server/routes/posts/post-model');

mongoose.connect('mongodb://localhost/jsdata');

var wipeDB = function() {

	var models = [PostModel, UserModel];

	return Promise.map(models, function(model) {
		model.remove({}).exec()
	})


};


var seedDB = function() {
	var randomizeUser = function(array) {
	  var random = Math.floor(Math.random() * array.length);
	  var randomUser = array[random];
	  return randomUser;
	}
	var randomizeData = function(array) {
		var randomIndex = Math.floor(Math.random() * array.length);
		var randomData = array[randomIndex];
		array.splice(randomIndex,1);
		return randomData;
	}

		
	UserModel.create(userSeed)
	.then(function(users){
		return Promise.map(postSeed, function(p) {
			p.author = randomizeUser(users);
			return PostModel.create(p)
		})
	})
	.then(function() {
		process.kill(0)
	})
	.then(null, function(err) {
		console.log(err)
	})

}

mongoose.connection.once('open', function() {
	wipeDB().then(seedDB);
})








