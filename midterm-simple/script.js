angular.module("characterApp", [])

angular.module("characterApp").controller("characterController",["$scope",function($scope){

	$scope.showSheet = false
	$scope.showButtons = false


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

	// REF SHEET TEMPLATE SELECTION

	$scope.selectedChar = "..."
	$scope.selectedSheet = "Basic Info"

	$scope.selectSheet = function ($index){

		$scope.refs.forEach(function(element){
			element.active=false;
		})
		console.log($scope.refs[$index])
		$scope.refs[$index].active = true;
		$scope.selectedSheet = $scope.refs[$index].sheetName
		// clearRef($index)
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

	// SAVE REF SHEET FOR CHARACTER

	$scope.userRefs = []

	var createSheet = function($index){
		console.log($index)
		var newRef = $scope.refs[$index]
		newRef.character = $scope.selectedChar
		$scope.userRefs.push(newRef)
		console.log($scope.userRefs)
	}

	// var clearRef = function($index){
	// 	$scope.refs[$index].fieldsArray.forEach(function(element){
	// 		element.answer = ""
	// 	})
	// 	console.log($scope.refs)
	// }

	$scope.saveSheet = function ($index) {
		createSheet($index)
		$scope.showSheet = true
		$scope.showButtons = false
	}

	// END SAVE REF SHEET FOR CHARACTER



	// PRESET REF SHEETS

	$scope.refs = []

	var Ref = function (sheetName,fieldsArray,character){
		this.sheetName = sheetName
		this.fieldsArray = fieldsArray
		this.character = character
		this.active = false
		$scope.refs.push(this)
	}

	var ref1 = new Ref("Basic Info",[{question: "Gender", answer : ""},{question: "Orientation", answer : ""},{question: "Species", answer : ""},{question: "Breed", answer : ""},{question: "Hobbies", answer : ""},{question: "Enneagram Type", answer : ""},{question: "Job", answer : ""},{question: "Car", answer : ""},{question: "Location", answer : ""},{question: "Birthday", answer : ""},{question: "Birthplace", answer : ""}],"")
	var ref2 = new Ref("Physical Characteristics",[{question: "Height", answer : ""},{question: "Hairstyle", answer : ""},{question: "Fur Color", answer : ""},{question: "Hair Color", answer : ""},{question: "Weight", answer : ""},{question: "Piercings", answer : ""},{question: "Tattoos", answer : ""},{question: "Scars", answer : ""},{question: "Eye Color", answer : ""},{question: "Clothing Style", answer : ""},{question: "Build", answer : ""}],"")
	var ref3 = new Ref("Family and Friends",[{question: "best friend", answer : ""},{question: "ex-friend", answer : ""},{question: "frienemy", answer : ""},{question: "deceased friends", answer : ""},{question: "deceased relatives", answer : ""},{question: "the one s/he dreads seeing on holidays", answer : ""},{question: "siblings", answer : ""},{question: "parents", answer : ""},{question: "step-family members", answer : ""},{question: "childhood best friend", answer : ""},{question: "the one s/he'd have a crush on if they weren't family", answer : ""}],"")
	var ref4 = new Ref("Romantic Past, Present, and Future",[{question: "sexual orientation", answer : ""},{question: "current crush", answer : ""},{question: "first lover", answer : ""},{question: "first crush", answer : ""},{question: "monogamy versus polyamory?", answer : ""},{question: "celebrity crush", answer : ""},{question: "first kiss", answer : ""},{question: "marriage?", answer : ""},{question: "children?", answer : ""},{question: "the one that got away", answer : ""},{question: "worst breakup", answer : ""}],"")
	var ref5 = new Ref("Probing Questions",[{question: "Would s/he give his/her life for a stranger?", answer : ""},{question: "What does s/he feel most guilty about from the past?", answer : ""},{question: "What is s/he ashamed of?", answer : ""},{question: "What is his/her opinion of drugs?", answer : ""},{question: "What is a dream s/he longs for but keeps secret?", answer : ""},{question: "Would s/he ever cheat on his/her partner?", answer : ""},{question: "What is the worst thing s/he'd do for money?", answer : ""},{question: "How has s/he been betrayed?", answer : ""},{question: "What is his/her favorite childhood memory?", answer : ""},{question: "What is his/her most awful childhood memory?", answer : ""},{question: "What is his/her best character trait?", answer : ""}],"")
	var ref6 = new Ref("Favorites",[{question: "food", answer : ""},{question: "color", answer : ""},{question: "restaurant", answer : ""},{question: "movie", answer : ""},{question: "song", answer : ""},{question: "family member", answer : ""},{question: "sport", answer : ""},{question: "item of clothing", answer : ""},{question: "dessert", answer : ""},{question: "season", answer : ""},{question: "animal", answer : ""}],"")

}])