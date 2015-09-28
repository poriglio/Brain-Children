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
		return $scope.currentUser

	}

	// END LOGIN VALIDATION


	// CREATE WORLD

	worlds = []

	var World = function (worldName,worldInfo) {
		this.worldName = worldName
		this.worldInfo = worldInfo
	}


	var makeWorld = function ( ) {
		var world = new World($scope.worldName,$scope.worldInfo)
		worlds.push(world)
		World.prototype.type = "world"
		World.prototype.username = $scope.newUsername || $scope.currentUser
		console.log(worlds)
	}


	// END CREATE WORLD







	// BUILT-IN TEMPLATES

	// END BUILT IN TEMPLATES









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
		validate()

	}

	$scope.newUser = function ( ) {

		$scope.registerShow = false;
		$scope.userShow = true;
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

	}

	$scope.newTemplate = function ( ) {

		$scope.createTemplateShow = true;
		$scope.createWorldShow = false;
		$scope.createCharShow = false;
		$scope.characterShow = false;
		$scope.createSheetShow = false;
		$scope.sheetShow = false;

	}

	$scope.newCharacter = function ( ) {

		$scope.createCharShow = true;
		$scope.createTemplateShow = false;
		$scope.createWorldShow = false;
		$scope.characterShow = false;
		$scope.createSheetShow = false;
		$scope.sheetShow = false;

	}

	$scope.submitWorld = function ( ) {

		$scope.createWorldShow = false;

	}

	$scope.submitTemplate = function ( ) {

		$scope.createTemplateShow = false;

	}

	$scope.submitCharacter = function ( ) {

		$scope.createCharShow = false;

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