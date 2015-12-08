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
			qty: null,
			units: ''
		};

		$scope.createProductForm.$setPristine();
	}

	function createProduct(product) {
		if($scope.createProductForm.$valid) {
			product.id = $scope.products.length;
			$scope.products.push(product);

			resetCreateForm();
			$scope.isCreating = false;
		}
	}

	$scope.createProduct = createProduct;

	$scope.editedProduct = null;

	function setEditedProduct (product) {
		if($scope.isEditing && product !== $scope.editedProduct) {
			if (window.confirm('You are editing an item already. Do you want to edit "' + product.name + '" instead?')) {
				$scope.editedProduct = angular.copy(product);
			}
		} else if(product == $scope.editedProduct) {
			window.alert('You are already editing this item.');
		} else {
			$scope.editedProduct = angular.copy(product);			
		}
	}

	function updateProduct(product) {
		if($scope.editProductForm.$valid) {
			var index = _.findIndex($scope.products, function(p) {
				return p.id == product.id;
			});

			$scope.products[index] = product;

			$scope.editedProduct = null;
			$scope.isEditing = false;
		}
	}

	$scope.setEditedProduct = setEditedProduct;
	$scope.updateProduct = updateProduct;

	function deleteProduct(product) {
		if (window.confirm('You are going to delete "' + product.name + '". Are you sure?')) {
			_.remove($scope.products, function (p) {
				return p.id == product.id;
			});

			if($scope.isEditing && product.id == $scope.editedProduct.id) {
				cancelEditing();
			}
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
		resetCreateForm();
	}

	function startEditing(product) {
		if($scope.isCreating) {
			if (window.confirm('You are creating a new item already. Do you want to edit "' + product.name + '" instead?')) {
				$scope.isCreating = false;
				$scope.isEditing = true;
			}
		} else {
			$scope.isEditing = true;
		}
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
