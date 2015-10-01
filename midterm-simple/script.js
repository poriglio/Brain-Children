angular.module("characterApp", [])

angular.module("characterApp").controller("characterController",["$scope",function($scope){

	$scope.showSheet = false
	$scope.showButtons = false

	// VIEW REF SHEET

	$scope.viewCharSheet = function ($index) {
		console.log($scope.ref)
		$scope.userRefs.forEach(function(element){
			element.active = false
			console.log($scope.userRefs)
		})
		$scope.userRefs[$index].active = true

	}



	// CHARACTER CREATION

	$scope.characters = [{charName : "Lacey"},{charName : "Mo"},{charName : "Will"},{charName : "Jack"},{charName : "Lucinda"},{charName : "Carmen"}]

	$scope.addChar = function ( ) {
		if($scope.charName !== undefined ){
			var Character = function (charName) {
				this.charName = charName
			}
			var character = new Character($scope.charName)
			$scope.characters.push(character)
		}
		$scope.charName = undefined
	}

	// END CHARACTER CREATION

	// SAVE REF SHEET FOR CHARACTER

	var Ref = function (sheetName,fieldsArray,character){
		this.sheetName = sheetName
		this.fieldsArray = fieldsArray
		this.character = character
		this.active = false
		$scope.refs.push(this)
	}

	// DEFAULT USER REFS

	$scope.userRefs = [
	{
		sheetName : "Probing Questions",
		fieldsArray : [{question: "Would s/he give his/her life for a stranger?",answer:"blah9"},{question: "What does s/he feel most guilty about from the past?",answer:"blah8"},{question: "What is s/he ashamed of?",answer:"blah00"},{question: "What is his/her opinion of drugs?",answer:"blah0"},{question: "What is a dream s/he longs for but keeps secret?",answer:"blah7"},{question: "Would s/he ever cheat on his/her partner?",answer:"blah6"},{question: "What is the worst thing s/he'd do for money?",answer:"blah4"},{question: "How has s/he been betrayed?",answer:"blah5"},{question: "What is his/her favorite childhood memory?",answer:"blah3"},{question: "What is his/her most awful childhood memory?",answer:"blah2"},{question: "What is his/her best character trait?",answer:"blah1"}],
		character : "Lacey",
		active : false,
		myIndex : 0
	},
	{
		sheetName : "Favorites",
		fieldsArray : [{question: "food", answer: "thing1"},{question: "color", answer: "thing2"},{question: "restaurant", answer: "thing3"},{question: "movie", answer: "thing4"},{question: "song", answer: "thing5"},{question: "family member", answer: "thing6"},{question: "sport", answer: "thing7"},{question: "item of clothing", answer: "thing8"},{question: "dessert", answer: "thing9"},{question: "season", answer: "thing11"},{question: "animal", answer: "thing111"}],
		character : "Mo",
		active : false,
		myIndex : 1
	}
	]

	// END DEFAULT USER REFS

	var createSheet = function($index){
		
		var newRef = $scope.refs[$index]
		newRef.character = $scope.selectedChar
		newRef.myIndex = $scope.userRefs.length 
		$scope.userRefs.push(newRef)
	}

	// var clearRef = function($index){
	// 	$scope.refs[$index].fieldsArray.forEach(function(element){
	// 		element.answer = ""
	// 	})
	// }

	$scope.saveSheet = function ($index) {
		createSheet($index)
		$scope.showSheet = true
		$scope.showButtons = false
		console.log("user refs:")
		console.log($scope.userRefs)
		console.log("preset refs:")
		console.log($scope.refs)
	}

	// END SAVE REF SHEET FOR CHARACTER

	// REF SHEET TEMPLATE SELECTION

	$scope.selectedChar = "..."
	$scope.selectedSheet = "Basic Info"

	$scope.selectSheet = function ($index){

		$scope.refs.forEach(function(element){
			element.active=false;
		})
		$scope.refs[$index].active = true;
		$scope.selectedSheet = $scope.refs[$index].sheetName
		$scope.userRefs.forEach(function(element){
			element.active = false
			console.log($scope.userRefs)
		})
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

	// PRESET REF SHEETS

	$scope.refs = []

	var Ref = function (sheetName,fieldsArray,character){
		this.sheetName = sheetName
		this.fieldsArray = fieldsArray
		this.character = character
		this.active = false
		$scope.refs.push(this)
	}

	var ref1 = new Ref("Basic Info",[{question: "Gender"},{question: "Orientation"},{question: "Species"},{question: "Breed"},{question: "Hobbies"},{question: "Enneagram Type"},{question: "Job"},{question: "Car"},{question: "Location"},{question: "Birthday"},{question: "Birthplace"}],"")
	var ref2 = new Ref("Physical Characteristics",[{question: "Height"},{question: "Hairstyle"},{question: "Fur Color"},{question: "Hair Color"},{question: "Weight"},{question: "Piercings"},{question: "Tattoos"},{question: "Scars"},{question: "Eye Color"},{question: "Clothing Style"},{question: "Build"}],"")
	var ref3 = new Ref("Family and Friends",[{question: "best friend"},{question: "ex-friend"},{question: "frienemy"},{question: "deceased friends"},{question: "deceased relatives"},{question: "the one s/he dreads seeing on holidays"},{question: "siblings"},{question: "parents"},{question: "step-family members"},{question: "childhood best friend"},{question: "the one s/he'd have a crush on if they weren't family"}],"")
	var ref4 = new Ref("Romantic Past, Present, and Future",[{question: "sexual orientation"},{question: "current crush"},{question: "first lover"},{question: "first crush"},{question: "monogamy versus polyamory?"},{question: "celebrity crush"},{question: "first kiss"},{question: "marriage?"},{question: "children?"},{question: "the one that got away"},{question: "worst breakup"}],"")
	var ref5 = new Ref("Probing Questions",[{question: "Would s/he give his/her life for a stranger?"},{question: "What does s/he feel most guilty about from the past?"},{question: "What is s/he ashamed of?"},{question: "What is his/her opinion of drugs?"},{question: "What is a dream s/he longs for but keeps secret?"},{question: "Would s/he ever cheat on his/her partner?"},{question: "What is the worst thing s/he'd do for money?"},{question: "How has s/he been betrayed?"},{question: "What is his/her favorite childhood memory?"},{question: "What is his/her most awful childhood memory?"},{question: "What is his/her best character trait?"}],"")
	var ref6 = new Ref("Favorites",[{question: "food"},{question: "color"},{question: "restaurant"},{question: "movie"},{question: "song"},{question: "family member"},{question: "sport"},{question: "item of clothing"},{question: "dessert"},{question: "season"},{question: "animal"}],"")

	// var ref1 = new Ref("Basic Info",[{question: "Gender"},{question: "Orientation"},{question: "Species"},{question: "Breed"},{question: "Hobbies"},{question: "Enneagram Type"},{question: "Job"},{question: "Car"},{question: "Location"},{question: "Birthday"},{question: "Birthplace"}],"")
	// var ref2 = new Ref("Physical Characteristics",[{question: "Height"},{question: "Hairstyle"},{question: "Fur Color"},{question: "Hair Color"},{question: "Weight"},{question: "Piercings"},{question: "Tattoos"},{question: "Scars"},{question: "Eye Color"},{question: "Clothing Style"},{question: "Build"}],"")
	// var ref3 = new Ref("Family and Friends",[{question: "best friend"},{question: "ex-friend"},{question: "frienemy"},{question: "deceased friends"},{question: "deceased relatives"},{question: "the one s/he dreads seeing on holidays"},{question: "siblings"},{question: "parents"},{question: "step-family members"},{question: "childhood best friend"},{question: "the one s/he'd have a crush on if they weren't family"}],"")
	// var ref4 = new Ref("Romantic Past, Present, and Future",[{question: "sexual orientation"},{question: "current crush"},{question: "first lover"},{question: "first crush"},{question: "monogamy versus polyamory?"},{question: "celebrity crush"},{question: "first kiss"},{question: "marriage?"},{question: "children?"},{question: "the one that got away"},{question: "worst breakup"}],"")
	// var ref5 = new Ref("Probing Questions",[{question: "Would s/he give his/her life for a stranger?"},{question: "What does s/he feel most guilty about from the past?"},{question: "What is s/he ashamed of?"},{question: "What is his/her opinion of drugs?"},{question: "What is a dream s/he longs for but keeps secret?"},{question: "Would s/he ever cheat on his/her partner?"},{question: "What is the worst thing s/he'd do for money?"},{question: "How has s/he been betrayed?"},{question: "What is his/her favorite childhood memory?"},{question: "What is his/her most awful childhood memory?"},{question: "What is his/her best character trait?"}],"")
	// var ref6 = new Ref("Favorites",[{question: "food"},{question: "color"},{question: "restaurant"},{question: "movie"},{question: "song"},{question: "family member"},{question: "sport"},{question: "item of clothing"},{question: "dessert"},{question: "season"},{question: "animal"}],"")

	// END PRESET REF SHEETS

}])