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
});
