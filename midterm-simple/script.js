angular.module("characterApp", [])

angular.module("characterApp").controller("characterController",["$scope",function($scope){

	// SUBMIT NEW CHARACTER

	$scope.charSubmit = function ( ) {
		addChar( )
	}

	// VIEW SAVED CHAR SHEETs

	$scope.selectCharacter= function ($index) {

		deactivateTemplates()
		deactivateChars()
		$scope.characters[$index].active = true

	}


	// ADD NEW CHAR SHEET

	$scope.addSheet = function ($index) {

		deactivateChars()
		$scope.templateButtons = true
		$scope.characters[$index].active = true
	}

	$scope.selectTemplate = function($index){
		deactivateTemplates()
		$scope.templates[$index].active = true
	}

	// SAVE CHARACTER SHEET

	$scope.saveSheet = function($index){
		var newSheet = $scope.templates[$index]
		$scope.characters[findCharacterIndex()].charSheets.push(newSheet)
		deactivateTemplates()
		deactivateChars()
		$scope.templateButtons = true
		console.log($scope.characters)
	}

	// -=-=-=-=-=-=-=-=-=--=-=-=-=-=--=-=
	// IGNORE EVERYTHING BELOW THIS LINE
	// -=-=-=-=-=-=-=-=-=--=-=-=-=-=--=-=


	// FUNCTIONS

	var findCharacterIndex = function(){

		var charIndex = ""
		$scope.characters.forEach(function(element,index){
			if(element.active === true){
				charIndex = index
			}
		})
		return charIndex
	}

	addChar = function ( ) {
		if($scope.charName !== undefined ){
			var Character = function (charName) {
				this.charName = charName
				this.charSheets = []
				this.active = false
			}
			var character = new Character($scope.charName)
			$scope.characters.push(character)
		}
		$scope.charName = undefined
	}

	var deactivateChars = function () {
		$scope.characters.forEach(function(element){
			element.active = false
		})
	}

	var deactivateTemplates = function (){
		$scope.templates.forEach(function(element){
			element.active = false
		})
	}

	// PRESET CHARACTERS

	$scope.characters = [

		{
			charName : "Lacey",
			charSheets : [],
			active: false
		},
		{
			charName : "Mo",
			charSheets : [],
			active: false
		},
			{charName : "Will",
			charSheets : [],
			active: false
		},
		{
			charName : "Jack",
			charSheets : [],
			active: false
		},
		{
			charName : "Lucinda",
			charSheets : [],
			active: false
		},
		{
			charName : "Carmen",
			charSheets : [],
			active: false
		}
			
			]

	// PRESET REF SHEETS

	$scope.templates = []

	var Ref = function (sheetName,fieldsArray){
		this.sheetName = sheetName
		this.fieldsArray = fieldsArray
		this.active = false
		$scope.templates.push(this)
	}

	var ref1 = new Ref("Basic Info",[{question: "Gender"},{question: "Orientation"},{question: "Species"},{question: "Breed"},{question: "Hobbies"},{question: "Enneagram Type"},{question: "Job"},{question: "Car"},{question: "Location"},{question: "Birthday"},{question: "Birthplace"}])
	var ref2 = new Ref("Physical Characteristics",[{question: "Height"},{question: "Hairstyle"},{question: "Fur Color"},{question: "Hair Color"},{question: "Weight"},{question: "Piercings"},{question: "Tattoos"},{question: "Scars"},{question: "Eye Color"},{question: "Clothing Style"},{question: "Build"}])
	var ref3 = new Ref("Family and Friends",[{question: "best friend"},{question: "ex-friend"},{question: "frienemy"},{question: "deceased friends"},{question: "deceased relatives"},{question: "the one s/he dreads seeing on holidays"},{question: "siblings"},{question: "parents"},{question: "step-family members"},{question: "childhood best friend"},{question: "the one s/he'd have a crush on if they weren't family"}])
	var ref4 = new Ref("Romantic Past, Present, and Future",[{question: "sexual orientation"},{question: "current crush"},{question: "first lover"},{question: "first crush"},{question: "monogamy versus polyamory?"},{question: "celebrity crush"},{question: "first kiss"},{question: "marriage?"},{question: "children?"},{question: "the one that got away"},{question: "worst breakup"}])
	var ref5 = new Ref("Probing Questions",[{question: "Would s/he give his/her life for a stranger?"},{question: "What does s/he feel most guilty about from the past?"},{question: "What is s/he ashamed of?"},{question: "What is his/her opinion of drugs?"},{question: "What is a dream s/he longs for but keeps secret?"},{question: "Would s/he ever cheat on his/her partner?"},{question: "What is the worst thing s/he'd do for money?"},{question: "How has s/he been betrayed?"},{question: "What is his/her favorite childhood memory?"},{question: "What is his/her most awful childhood memory?"},{question: "What is his/her best character trait?"}])
	var ref6 = new Ref("Favorites",[{question: "food"},{question: "color"},{question: "restaurant"},{question: "movie"},{question: "song"},{question: "family member"},{question: "sport"},{question: "item of clothing"},{question: "dessert"},{question: "season"},{question: "animal"}])
}])