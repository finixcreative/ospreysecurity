function Element(config, contents){
	this.config = config;
	this.contents = contents;
};
function FinixApp({company, title, favicon, description, keywords, author}, contents){
	FinixApp.inherits(Element);
	this.config.company = company;
	this.config.title = title;
	this.config.favicon = favicon;
	this.config.description = description;
	this.config.keywords = keywords;
	this.config.author = author;
	this.contents = contents;
};
FinixApp.prototype = {
	website: Object.create(Website()),
	email: Object.create(Email())	
};

var Element = new Object();
var FinixApp = new Element();
var fx = new FinixApp();
fx.website({...},[...]);



function Website(){};
function Page(){};
function Row(){};
function Block(){};
function Headline(){};
function Paragraph(){};
function Image(){};
function Video(){};