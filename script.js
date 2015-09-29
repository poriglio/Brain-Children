angular.module("characterApp", [])

angular.module("characterApp").controller("characterController",["$scope",function($scope){



	// USER REGISTRATION

	users = []

	var User = function (username,password) {
		this.username  = username
		this.password  = password
	}

	var register = function ( ) {
		
		var newUser = new User($scope.newUsername,$scope.newPassword)
		users.push(newUser)
		$scope.newUsername = ""
		$scope.newPassword = ""
	}

	// END USER REGISTRATION

	// LOGIN VALIDATION

	var validate = function ( ) {

		var valid = users.filter(function(element){
			if(($scope.loginUsername === element.username)&&($scope.loginPassword === element.password)){
				return true
			}
		})

		$scope.currentUser = valid[0].username
		World.prototype.username = $scope.newUsername || $scope.currentUser
		return $scope.currentUser
	}

	// END LOGIN VALIDATION


	// CREATE WORLD

	$scope.worlds = []

	var World = function (worldName,worldInfo) {
		this.worldName = worldName
		this.worldInfo = worldInfo
	}


	var makeWorld = function ( ) {
		var world = new World($scope.worldName,$scope.worldInfo)
		$scope.worlds.push(world)
		World.prototype.type = "world"
	}

	// END CREATE WORLD


	// CREATE CHARACTER

	$scope.characters = []

	var Character = function (characterName,characterInfo) {
		this.characterName = characterName
		this.characterInfo = characterInfo
	}


	var makeCharacter = function ( ) {
		var character = new Character($scope.characterName,$scope.characterInfo)
		Character.prototype.type = "character"
		character.world = $scope.worldIndex
		$scope.characters.push(character)
		return character
	}

	// END CREATE CHARACTER




	// CREATE TEMPLATE

	$scope.userTemplates = []

	var UserTemplate = function (sheetName,sheetInfo,numberFields,fieldsArray) {
		this.sheetName = sheetName
		this.sheetInfo = sheetInfo
		this.numberFields = numberFields
		this.fieldsArray = this.fieldsArray()
	}


	var makeUserTemplate = function ( ) {
		var userTemplate = new UserTemplate($scope.sheetName,$scope.sheetInfo,$scope.numberFields)
		UserTemplate.prototype.type = "template"
		UserTemplate.prototype.username = $scope.currentUser
		$scope.userTemplates.push(userTemplate)
		return userTemplate
	}

	UserTemplate.prototype.fieldsArray = function(template){
		var fieldsArray = []
		for(var x = 0; x < this.numberFields; x++){
			fieldsArray.push({question : "question", answer : "answer"})
		}
		console.log(fieldsArray)
		return fieldsArray
	}

	var editUserTemplate = function ( ) {
		$scope.showNewTemplateFields = true;
	}

	// END CREATE TEMPLATE









	// CLICK AND HIDE/SHOW EVENTS

	$scope.logout = function ( ) {

		$scope.introHide = false;
		$scope.userShow = false;
		$scope.registerShow = false;
		$scope.sheetShow = false;
		$scope.characterShow = false;
		$scope.createTemplateShow = false;
		$scope.createWorldShow = false;
		$scope.createCharShow = false;
		$scope.createSheetShow = false;
		$scope.editSheetShow = false;

	}

	$scope.getStarted = function ( ) {

		$scope.introHide = true;
		$scope.registerShow = true;
		$scope.userShow = false;
		$scope.sheetShow = false;
		$scope.characterShow = false;
		$scope.createTemplateShow = false;
		$scope.createWorldShow = false;
		$scope.createCharShow = false;
		$scope.createSheetShow = false;
		$scope.editSheetShow = false;

	}

	$scope.login = function ( ) {

		$scope.userShow = true;
		$scope.introHide = true;
		$scope.registerShow = false;
		$scope.sheetShow = false;
		$scope.characterShow = false;
		$scope.createTemplateShow = false;
		$scope.createWorldShow = false;
		$scope.createCharShow = false;
		$scope.createSheetShow = false;
		$scope.editSheetShow = false;
		$scope.loginPromptShow = false;
		validate()

	}

	$scope.newUser = function ( ) {

		$scope.registerShow = false;
		$scope.loginPromptShow = true;
		register()
		makeWorld()
	}

	$scope.newWorld = function ( ) {

		$scope.createWorldShow = true;
		$scope.createTemplateShow = false;
		$scope.createCharShow = false;
		$scope.characterShow = false;
		$scope.createSheetShow = false;
		$scope.sheetShow = false;
		$scope.worldName = ""
		$scope.worldInfo = ""
	}

	$scope.newTemplate = function ( ) {

		$scope.createTemplateShow = true;
		$scope.createWorldShow = false;
		$scope.createCharShow = false;
		$scope.characterShow = false;
		$scope.createSheetShow = false;
		$scope.sheetShow = false;

	}

	$scope.newCharacter = function ($index) {

		$scope.createCharShow = true;
		$scope.createTemplateShow = false;
		$scope.createWorldShow = false;
		$scope.characterShow = false;
		$scope.createSheetShow = false;
		$scope.sheetShow = false;
		$scope.worldIndex = $index.worldName
	}

	$scope.submitWorld = function ( ) {


		$scope.createWorldShow = false;
		makeWorld()

	}

	$scope.submitTemplate = function ( ) {

		$scope.createTemplateShow = false;
		makeUserTemplate()
		editUserTemplate()

	}

	$scope.submitCharacter = function ( ) {

		$scope.createCharShow = false;
		makeCharacter()
	}

	$scope.viewCharacter = function ( ) {

		$scope.characterShow = true;
		$scope.createCharShow = false;
		$scope.createTemplateShow = false;
		$scope.createWorldShow = false;

	}

	$scope.createSheet = function ( ) {

		$scope.createSheetShow = true;
		$scope.sheetShow = false;

	}

	$scope.submitSheet = function ( ) {

		$scope.createSheetShow = false;

	}

	$scope.close = function ( ) {

		$scope.characterShow = false;
		$scope.createCharShow = false;
		$scope.createTemplateShow = false;
		$scope.createWorldShow = false;
		$scope.createSheetShow = false;
		$scope.editSheetShow = false;
		$scope.sheetShow = false;

	}

	$scope.closeInnerForm = function ( ) {

		$scope.createSheetShow = false;
		$scope.sheetShow = false;

	}

	$scope.openCharSheet = function ( ) {

		$scope.sheetShow = true;

	}

	// END CLICK AND HIDE/SHOW EVENTS



}])

// THIS FILTER EXPECTS AN ARRAY OF CHARACTERS AND A WORLD NAME

angular.module("characterApp").filter('filterbyworld', function(){
  return function(input,worldName){
    var output = [];
    angular.forEach(input, function(character){
      if(character.world === worldName){
        output.push(character)
      }
    })
    return output;
  }
})