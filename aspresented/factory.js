angular.module("characterApp").factory("characterFactory",function(){

	// CHARACTER CREATION

	var characters = []

	var Character = function(name,sheets){
		this.name = name
		this.sheets = sheets
		this.active = false
		characters.push(this)
	}

	var lacey   = new Character("Lacey")
	var lucinda = new Character("Lucinda")
	var will    = new Character("Will")
	var mino    = new Character("Mino")
	var hack    = new Character("Hack")
	var carmen  = new Character("Carmen")
	var mo      = new Character("Mo")
	var jack    = new Character("Jack")
	var robert  = new Character("Robert")

	// TEMPLATES

	var templates = []

	var Template = function(name,fields){
		this.name = name
		this.fields = fields
		this.active = false
		templates.push(this)
	}

	var template1 = new Template("the Basics",[{question:"Full name"},{question:"Birthday"},{question:"Birthplace"},{question:""},{question:"Current job"},{question:"Social class"},{question:"Allergies"},{question:"Diseases"},{question:"Mental illness/es"},{question:"Physical weaknesses"},{question:"Right or left-handed?"},{question:"Voice sounds like..."},{question:"Frequently used words/phrases"},{question:"Defining habits, mannerisms, quirks, etc"}])
	var template2 = new Template("Physical Characteristics",[{question:"Height"},{question:"Weight"},{question:"Hairstyle"},{question:"Hair color"},{question:"Eye color"},{question:"Clothing style"},{question:"Favorite outfit"},{question:"Tattoos"},{question:"Scars"},{question:"Distinguishing marks"}])
	var template3 = new Template("Childhood",[])
	var template4 = new Template("Beliefs and Opinions",[])
	var template5 = new Template("Romance",[])
	var template6 = new Template("Friendships",[])
	var template7 = new Template("Family",[{question:"Siblings' names"},{question:"Relationships with siblings"},{question:"Descriptions of siblings"},{question:"Parents' names"},{question:"Parents' occupations"},{question:"Relationships with parents"},{question:"Parents' marital status"},{question:"If the parents are not alive, how did they die?"}])
	var template8 = new Template("Favorites",[])
	var template9 = new Template("Personality",[])
	var template10 = new Template("A Day in the Life",[])
	var template11 = new Template("the Future",[])
	var template12 = new Template("Random",[{question:"What's in his/her pockets?"}])

	// RETURN STATEMENT

	return {
		characters : characters,
		Character  : Character,
		templates  : templates,
		Template   : Template
	}

});