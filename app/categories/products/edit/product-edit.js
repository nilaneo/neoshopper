angular.module('categories.products.edit', [

])
	.config(function($stateProvider) {
		$stateProvider
			.state('neoshopper.categories.products.edit', {
				url: '/products/:productId/edit',
				templateUrl: 'app/categories/products/edit/product-edit.tmpl.html',
				controller: 'EditProductCtrl as editProductCtrl'
			})
		;
	})
	.controller('EditProductCtrl', function($state, $stateParams, ProductsModel) {
		var editProductCtrl = this;

		function returnToProducts() {
			$state.go('neoshopper.categories.products', {
				category: $stateParams.category
			})
		}

		function cancelEditing() {
			returnToProducts();
		}

		function updateProduct() {
			editProductCtrl.product = angular.copy(editProductCtrl.editedProduct);
			ProductsModel.updateProduct(editProductCtrl.product);
			returnToProducts();
		}

		ProductsModel.getProductById($stateParams.productId)
			.then(function(product) {
				if(product) {
					editProductCtrl.product = product;
					editProductCtrl.editedProduct = angular.copy(editProductCtrl.product)
				} else {
					returnToProducts;
				}
			});

		editProductCtrl.cancelEditing = cancelEditing;
		editProductCtrl.updateProduct = updateProduct;
	})
;