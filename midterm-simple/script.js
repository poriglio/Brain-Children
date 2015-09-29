angular.module("characterApp", [])

angular.module("characterApp").controller("characterController",["$scope",function($scope){

	$scope.showSheet = false
	$scope.showForm = false


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
		$scope.selectedSheet = $scope.refs[$index].sheetName
		return $scope.selectedSheet
	}

	$scope.selectChar = function ($index){
		$scope.selectedChar = $scope.characters[$index].charName
		$scope.showForm = true
		$scope.showSheet = false
		return $scope.selectedChar
	}

	// SAVE REF SHEET FOR CHARACTER

	$scope.saveSheet = function ($index) {
		console.log($index)
		console.log($scope.selectedSheet)
		$scope.showSheet = true
		$scope.showForm = false
	}

	// END SAVE REF SHEET FOR CHARACTER



	// PRESET REF SHEETS

	$scope.refs = []

	var Ref = function (sheetName,fieldsArray){
		this.sheetName = sheetName
		this.fieldsArray = fieldsArray
		$scope.refs.push(this)
	}

	var ref1 = new Ref("Basic Info",[{question: "Gender", answer : ""},{question: "Orientation", answer : ""},{question: "Species", answer : ""},{question: "Breed", answer : ""},{question: "Hobbies", answer : ""},{question: "Enneagram Type", answer : ""},{question: "Job", answer : ""},{question: "Car", answer : ""},{question: "Location", answer : ""},{question: "Birthday", answer : ""},{question: "Birthplace", answer : ""}])
	var ref2 = new Ref("Physical Characteristics",[{question: "Height", answer : ""},{question: "Hairstyle", answer : ""},{question: "Fur Color", answer : ""},{question: "Hair Color", answer : ""},{question: "Weight", answer : ""},{question: "Piercings", answer : ""},{question: "Tattoos", answer : ""},{question: "Scars", answer : ""},{question: "Eye Color", answer : ""},{question: "Clothing Style", answer : ""},{question: "Build", answer : ""}])
	var ref3 = new Ref("Family and Friends",[{question: "best friend", answer : ""},{question: "ex-friend", answer : ""},{question: "frienemy", answer : ""},{question: "deceased friends", answer : ""},{question: "deceased relatives", answer : ""},{question: "the one s/he dreads seeing on holidays", answer : ""},{question: "siblings", answer : ""},{question: "parents", answer : ""},{question: "step-family members", answer : ""},{question: "childhood best friend", answer : ""},{question: "the one s/he'd have a crush on if they weren't family", answer : ""}])
	var ref4 = new Ref("Romantic Past,Present,and Future",[{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""}])
	var ref5 = new Ref("Probing Questions",[{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""}])
	var ref6 = new Ref("Favorites",[{question: "food", answer : ""},{question: "color", answer : ""},{question: "restaurant", answer : ""},{question: "movie", answer : ""},{question: "song", answer : ""},{question: "family member", answer : ""},{question: "sport", answer : ""},{question: "item of clothing", answer : ""},{question: "dessert", answer : ""},{question: "season", answer : ""},{question: "animal", answer : ""}])

}])

// THIS FILTER EXPECTS THE SELECTED REF TEMPLATE

angular.module("characterApp").filter('filterbyselected', function(){
  return function(input,selectedSheet){
    var output = [];
    angular.forEach(input, function(ref){
      if(ref.sheetName === selectedSheet){
        output.push(ref)
      }
    })
    return output;
  }
})