angular.module("characterApp", [])

angular.module("characterApp").controller("characterController",["$scope",function($scope){

	$scope.getStarted = function ( ) {

		$scope.introHide = true;
		$scope.registerShow = true;

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

	}

	$scope.newUser = function ( ) {

		$scope.registerShow = false;
		$scope.userShow = true;

	}

	$scope.newWorld = function ( ) {

		$scope.createWorldShow = true;
		$scope.createTemplateShow = false;
		$scope.createCharShow = false;
		$scope.characterShow = false;
		$scope.createSheetShow = false;

	}

	$scope.newTemplate = function ( ) {

		$scope.createTemplateShow = true;
		$scope.createWorldShow = false;
		$scope.createCharShow = false;
		$scope.characterShow = false;
		$scope.createSheetShow = false;

	}

	$scope.newCharacter = function ( ) {

		$scope.createCharShow = true;
		$scope.createTemplateShow = false;
		$scope.createWorldShow = false;
		$scope.characterShow = false;
		$scope.createSheetShow = false;

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

}])