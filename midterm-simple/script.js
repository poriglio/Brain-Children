angular.module("characterApp", [])

angular.module("characterApp").controller("characterController",["$scope",function($scope){

	// SUBMIT NEW CHARACTER

	$scope.charSubmit = function ( ) {
		addChar( )
	}

	// VIEW SAVED CHAR SHEET

	$scope.viewCharSheet = function ($index) {

		console.log($index)


	}

	// END VIEW SAVED CHAR SHEET

	// SAVE REF SHEET FOR CHARACTER

	var Ref = function (sheetName,fieldsArray,character){
		this.sheetName = sheetName
		this.fieldsArray = fieldsArray
		this.character = character
		this.active = false
		$scope.refs.push(this)
	}

	var createSheet = function($index){
		
		var newRef = $scope.refs[$index]

		$scope.characters.forEach(function(element,index){
			if(element.charName === $scope.selectedChar){
				$scope.characters[index].charSheets.push(newRef)
			}
		})
	}

	$scope.saveSheet = function ($index) {
		createSheet($index)
		$scope.showSheet = true
		$scope.showButtons = false
	}

	// END SAVE REF SHEET FOR CHARACTER

	// REF SHEET TEMPLATE SELECTION

	$scope.selectSheet = function ($index){

		$scope.refs.forEach(function(element){
			element.active=false;
		})
		$scope.refs[$index].active = true;
		$scope.selectedSheet = $scope.refs[$index].sheetName
		return $scope.selectedSheet
	}

	$scope.selectChar = function ($index){
		$scope.refs.forEach(function(element){
			element.active=false;
		})
		$scope.selectedChar = $scope.characters[$index].charName
		$scope.showButtons = true
		$scope.showSheet = false
		return $scope.selectedChar
	}

	// END REF SHEET TEMPLATE SELECTION




	// -=-=-=-=-=-=-=-=-=--=-=-=-=-=--=-=
	// IGNORE EVERYTHING BELOW THIS LINE
	// -=-=-=-=-=-=-=-=-=--=-=-=-=-=--=-=


	// FUNCTIONS

	addChar = function ( ) {
		if($scope.charName !== undefined ){
			var Character = function (charName) {
				this.charName = charName
				this.charSheets = []
			}
			var character = new Character($scope.charName)
			$scope.characters.push(character)
		}
		$scope.charName = undefined
		console.log($scope.characters)
	}

	// PRESET CHARACTERS

	$scope.characters = [

		{
			charName : "Lacey",
			charSheets : []
		},
		{
			charName : "Mo",
			charSheets : []
		},
			{charName : "Will",
			charSheets : []
		},
		{
			charName : "Jack",
			charSheets : []
		},
		{
			charName : "Lucinda",
			charSheets : []
		},
		{
			charName : "Carmen",
			charSheets : []
		}
			
			]

	// PRESET REF SHEETS

	$scope.refs = []

	var Ref = function (sheetName,fieldsArray){
		this.sheetName = sheetName
		this.fieldsArray = fieldsArray
		this.active = false
		$scope.refs.push(this)
	}

	var ref1 = new Ref("Basic Info",[{question: "Gender"},{question: "Orientation"},{question: "Species"},{question: "Breed"},{question: "Hobbies"},{question: "Enneagram Type"},{question: "Job"},{question: "Car"},{question: "Location"},{question: "Birthday"},{question: "Birthplace"}])
	var ref2 = new Ref("Physical Characteristics",[{question: "Height"},{question: "Hairstyle"},{question: "Fur Color"},{question: "Hair Color"},{question: "Weight"},{question: "Piercings"},{question: "Tattoos"},{question: "Scars"},{question: "Eye Color"},{question: "Clothing Style"},{question: "Build"}])
	var ref3 = new Ref("Family and Friends",[{question: "best friend"},{question: "ex-friend"},{question: "frienemy"},{question: "deceased friends"},{question: "deceased relatives"},{question: "the one s/he dreads seeing on holidays"},{question: "siblings"},{question: "parents"},{question: "step-family members"},{question: "childhood best friend"},{question: "the one s/he'd have a crush on if they weren't family"}])
	var ref4 = new Ref("Romantic Past, Present, and Future",[{question: "sexual orientation"},{question: "current crush"},{question: "first lover"},{question: "first crush"},{question: "monogamy versus polyamory?"},{question: "celebrity crush"},{question: "first kiss"},{question: "marriage?"},{question: "children?"},{question: "the one that got away"},{question: "worst breakup"}])
	var ref5 = new Ref("Probing Questions",[{question: "Would s/he give his/her life for a stranger?"},{question: "What does s/he feel most guilty about from the past?"},{question: "What is s/he ashamed of?"},{question: "What is his/her opinion of drugs?"},{question: "What is a dream s/he longs for but keeps secret?"},{question: "Would s/he ever cheat on his/her partner?"},{question: "What is the worst thing s/he'd do for money?"},{question: "How has s/he been betrayed?"},{question: "What is his/her favorite childhood memory?"},{question: "What is his/her most awful childhood memory?"},{question: "What is his/her best character trait?"}])
	var ref6 = new Ref("Favorites",[{question: "food"},{question: "color"},{question: "restaurant"},{question: "movie"},{question: "song"},{question: "family member"},{question: "sport"},{question: "item of clothing"},{question: "dessert"},{question: "season"},{question: "animal"}])
}])