angular.module('Neoshopper', [

]).controller('MainCtrl', function($scope) {
	
	$scope.products = [
		{"id": 0, "title": "Milk", "quantity": "2", "units": "liters"},
		{"id": 1, "title": "Water", "quantity": "3", "units": "liters"},
		{"id": 2, "title": "Bananas", "quantity": "5", "units": "pcs"},
		{"id": 3, "title": "Sweater", "quantity": "1", "units": "pcs"},
		{"id": 4, "title": "Shirt", "quantity": "2", "units": "pcs"},
		{"id": 5, "title": "Mascara", "quantity": "1", "units": "pcs"},
		{"id": 6, "title": "Coffee", "quantity": "1", "units": "package"},
		{"id": 7, "title": "Apples", "quantity": "2", "units": "kilos"},
		{"id": 8, "title": "Powder", "quantity": "2", "units": "pcs"},
		{"id": 9, "title": "Cleaner", "quantity": "2", "units": "pcs"}
	];

	$scope.isCreating = false;
	$scope.isEditing = false;

	function startCreating() {
		$scope.isCreating = true;
		$scope.isEditing = false;
	}

	function cancelCreating() {
		$scope.isCreating = false;
	}

	function startEditing() {
		$scope.isCreating = false;
		$scope.isEditing = true;
	}

	function cancelEditing() {
		$scope.isEditing = false;
	}

	function shouldShowCreating() {
		return !$scope.isEditing;
	}

	function shouldShowEditing() {
		return $scope.isEditing && !$scope.isCreating;
	}

	$scope.startCreating = startCreating;
	$scope.cancelCreating = cancelCreating;
	$scope.startEditing = startEditing;
	$scope.cancelEditing = cancelEditing;
	$scope.shouldShowCreating = shouldShowCreating;
	$scope.shouldShowEditing = shouldShowEditing;
});
