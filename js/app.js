angular.module('Neoshopper', [

]).controller('MainCtrl', function($scope) {
	
	$scope.products = [
		{"id": 0, "name": "Milk", "qty": 2, "units": "liters"},
		{"id": 1, "name": "Water", "qty": 3, "units": "liters"},
		{"id": 2, "name": "Bananas", "qty": 4, "units": "pcs"},
		{"id": 3, "name": "Sweater", "qty": 1, "units": "pcs"},
		{"id": 4, "name": "Shirt", "qty": 2, "units": "pcs"},
		{"id": 5, "name": "Mascara", "qty": 1, "units": "pcs"},
		{"id": 6, "name": "Coffee", "qty": 1, "units": "package"},
		{"id": 7, "name": "Apples", "qty": 2, "units": "kilos"},
		{"id": 8, "name": "Powder", "qty": 3, "units": "pcs"},
		{"id": 9, "name": "Cleaner", "qty": 5, "units": "pcs"}
	];

	//--------------------------------------------------------------
	// CRUD
	//--------------------------------------------------------------

	function resetCreateForm () {
		$scope.newProduct = {
			name: '',
			qty: 0,
			units: ''
		}
	}

	function createProduct(product) {
		console.log("started creating");
		product.id = $scope.products.length;
		$scope.products.push(product);

		resetCreateForm();
	}

	$scope.createProduct = createProduct;

	$scope.editedProduct = null;

	function setEditedProduct (product) {
		$scope.editedProduct = angular.copy(product);
	}

	function updateProduct(product) {
		var index = _.findIndex($scope.products, function(p) {
			return p.id == product.id;
		});

		$scope.products[index] = product;

		$scope.editedProduct = null;
		$scope.isEditing = false;
	}

	$scope.setEditedProduct = setEditedProduct;
	$scope.updateProduct = updateProduct;

	function deleteProduct(product) {
		if (window.confirm('You are going to delete "' + product.name + '". Are you sure?')) {
			_.remove($scope.products, function (p) {
				return p.id == product.id;
			});
		}
	}

	$scope.deleteProduct = deleteProduct;

	//--------------------------------------------------------------
	// CREATING AND EDITING STATES
	//--------------------------------------------------------------

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
