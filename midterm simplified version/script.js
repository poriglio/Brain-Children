angular.module("characterApp", [])

angular.module("characterApp").controller("characterController",["$scope",function($scope){


	// CHARACTER CREATION

	$scope.characters = []

	$scope.addChar = function ( ) {
		var Character = function (charName) {
			this.charName = charName
		}
		var character = new Character($scope.charName)
		$scope.characters.push(character)
		$scope.charName = ""
		console.log($scope.characters)
	}

	// PRESET REF SHEETS

	$scope.refs = []

	var Ref = function (sheetName,fieldsArray){
		this.sheetName = sheetName
		this.fieldsArray = fieldsArray
		$scope.refs.push(this)
		console.log($scope.refs)
	}

	var ref1 = new Ref("Basic Info",[{question: "Gender", answer : ""},{question: "Orientation", answer : ""},{question: "Species", answer : ""},{question: "Breed", answer : ""},{question: "Hobbies", answer : ""},{question: "Enneagram Type", answer : ""},{question: "Job", answer : ""},{question: "Car", answer : ""},{question: "Location", answer : ""},{question: "Birthday", answer : ""},{question: "Birthplace", answer : ""}])
	var ref2 = new Ref("Physical Characteristics",[{question: "Height", answer : ""},{question: "Hairstyle", answer : ""},{question: "Fur Color", answer : ""},{question: "Hair Color", answer : ""},{question: "Weight", answer : ""},{question: "Piercings", answer : ""},{question: "Tattoos", answer : ""},{question: "Scars", answer : ""},{question: "Eye Color", answer : ""},{question: "Clothing Style", answer : ""},{question: "Build", answer : ""}])
	var ref3 = new Ref("Family and Friends",[{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""}])
	var ref4 = new Ref("Romantic Past,Present,and Future",[{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""}])
	var ref5 = new Ref("Probing Questions",[{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""}])
	var ref6 = new Ref("Favorites",[{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""},{question: "question", answer : ""}])

}])