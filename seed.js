var users = [
	{ name: 'Amon' },
	{ name: 'Loke' },
	{ name: 'Maia' }
];

var postSeed = [
	{ 
		title: "The Standard Lorem Ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		tags: ['dummy text', 'lorem ipsum', 'latin']
	},

	{ 
		title: "The Gods are Fallen",
		body: "“When a child first catches adults out—when it first walks into his grave little head that adults do not always have divine intelligence, that their judgments are not always wise, their thinking true, their sentences just—his world falls into panic desolation. The gods are fallen and all safety gone. And there is one sure thing about the fall of gods: they do not fall a little; they crash and shatter or sink deeply into green muck. It is a tedious job to build them up again; they never quite shine. And the child’s world is never quite whole again. It is an aching kind of growing.” – John Steinbeck, East of Eden",
		tags: ['john steinbeck', 'east of eden', 'literature', 'adults']
	},

	{ 
		title: "Real Courage",
		body: "“I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin but you begin anyway and you see it through no matter what.” – Harper Lee, To Kill a Mockingbird",
		tags: ['harper lee', 'to kill a mockingbird', 'literature', 'courage']
	},

	{ 
		title: "Gatsby's Green Light",
		body: "“Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter—tomorrow we will run faster, stretch out our arms farther…And then one fine morning—So we beat on, boats against the current, borne back ceaselessly into the past.” – F. Scott Fitzgerald, The Great Gatsby",
		tags: ['the great gatsby', 'f scott fitzgerald', 'literature', 'light']
	},

	{ 
		title: "Oh, the Places You'll Go!",
		body: "“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You’re on your own. And you know what you know. And YOU are the one who’ll decide where to go…” - Dr. Seuss, Oh, the Places You’ll Go!",
		tags: ['dr seuss', 'oh the places you\'ll go', 'literature', 'light']
	},

	{ 
		title: "Apple's Thinnist and Lightest MacBook Ever",
		body: "Apple has just announced a new MacBook which has a retina display and is lighter and 4mm thinner than any MacBook that ever came before it. Forgive me for gloating a bit, but come on. Just as I was thinking — how can I possibly save another 3 or 4 millimeters of space in my backpack — this comes along.",
		tags: ['apple', 'macbook', 'tech']
	},


	{ 
		title: "The Wearisomeness of Life",
		body: "“He found himself understanding the wearisomeness of this life, where every path was an improvisation and a considerable part of one’s waking life was spent watching one’s feet.” - William Golding, Lord of the Flies",
		tags: ['lord of the flies', 'william golding', 'literature', 'life']
	},

	{ 
		title: "Anxious Introversion",
		body: "Unlike social introverts, anxious introverts may seek out solitude because they feel awkward and painfully self-conscious around other people, because they're not very confident in their own social skills. But, often, their anxiety doesn't fade when they're all alone. This kind of introversion is defined by a tendency to ruminate, to turn over and over in their minds the things that might or could or already have gone terribly wrong. ",
		tags: ['introversion', 'skepticism', 'psychology', 'life']
	},

	{ 
		title: "Lafayatte Now Sells Artisonal Push-Pops",
		body: "Grub thought New York pastry chefs had reimagined every possible childhood-throwback dessert (with the exception of Dunkaroos, which someone should definitely make with grown-up ingredients). But now the talented Jennifer Yee at Andrew Carmellini's Lafayette has unveiled a tutti-frutti push-pop, complete with crushed macarons. It looks like the dessert will run all summer, and that this is only the first flavor of several. It's kind of brilliant.",
		tags: ['food', 'dessert', 'nyc', 'life']
	},

	{ 
		title: "A hilarious Monty Python sketch explains why Greece is in a huge crisis",
		body: "Many top English-speaking economists are either alarmed or aghast over Europe's handling of the crisis in Greece. Several Nobel Prize winners say it has been exacerbated, time and again, by an unnecessarily rigid approach by Germany, Europe's economic powerhouse and decision-maker. Greece simply cannot repay its debts, economists argue, no matter how much the country slashes public services or raises taxes. So by insisting it keep on trying, the thinking goes, Germany seems to be intent on punishing Greece. The Germans see it differently, saying what they are doing may be painful, but necessary, to get the country on a sustainable footing for the long term. To understand the massive gap in opinion, it might help to watch a Monty Python sketch from 1974 about a soccer match between Germany and Greece. In the match, the two countries are represented by their foremost philosophers. For much of the game, the two sides do nothing but talk. Then, in the final minute, there is movement. Socrates scores on the German goalie Gottfried Wilhelm Leibniz, who lived from 1646 to 1716, to win. The German philosophers G.W.F. Hegel, Immanuel Kant and Karl Marx then dispute the goal with the referee, Confucius. \"Hegel is arguing that the reality is merely an a priori adjunct of non-naturalistic ethics. Kant via the categorical imperative is holding that ontologically it exists only in the imagination,\" the announcer says. \"Marx is claiming it was offside.\"",
		tags: ['greece', 'germany', 'economy', 'monty python']
	}

];

var commentSeed = [
	{
		body: "Awesome post!"
	},

	{
		body: "Cool."
	},

	{
		body: "Terrible."
	},

	{
		body: "Boring!"
	},

	{
		body: "Trolling..."
	},

	{
		body: "This is unacceptable writing."
	},

	{
		body: "This post is absolutely meaningless."
	},

	{
		body: "Stop trying to make this happen."
	},

	{
		body: "Excellent piece. Well done!"
	},

	{
		body: "You really have a talent for finding well-written things online."
	}

];

var mongoose = require('mongoose');
var bluebird = require('bluebird');

var UserModel = require('./server/models/user-model');
var PostModel = require('./server/models/post-model');
var CommentModel = require('./server/models/comment-model');

mongoose.connect('mongodb://localhost/jsdata');

var wipeDB = function() {

	var models = [PostModel, UserModel, CommentModel];

	models.forEach(function(model) {
		model.find({}).remove(function() {});
	})

	return bluebird.resolve();

};


var seedDB = function() {

	var posts, comments;

	var randomizeData = function(array) {
		var randomIndex = Math.floor(Math.random() * array.length);
			var randomData = array[randomIndex];
			array.splice(randomIndex,1);
			return randomData;
	}

	PostModel.create(postSeed).then(function(userPosts) {
		posts = userPosts;
		return CommentModel.create(commentSeed)
	}).then(function(userComments) {
		comments = userComments
		return UserModel.create(users)
	}).then(function(allUsers) {
		return bluebird.map(allUsers, function(currentUser) {
			
			currentUser.posts.push(randomizeData(posts));
			currentUser.posts.push(randomizeData(posts));
			currentUser.posts.push(randomizeData(posts));
			
			currentUser.comments.push(randomizeData(comments));
			currentUser.comments.push(randomizeData(comments));
			currentUser.comments.push(randomizeData(comments));
			
			return currentUser.save();
		})
		
	}).then(function() {
		process.kill(0)
	}).then(null, function(err) {
		console.log(err)
	})
}

mongoose.connection.once('open', function() {
	wipeDB().then(seedDB);
})











