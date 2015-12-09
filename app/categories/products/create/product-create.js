angular.module('categories.products.create', [

])
	.config(function($stateProvider) {
		$stateProvider
			.state('neoshopper.categories.products.create', {
				url: '/products/create',
				templateUrl: 'app/categories/products/create/product-create.tmpl.html',
				controller: 'CreateProductCtrl as createProductCtrl'
			})
		;
	})
	.controller('CreateProductCtrl', function($state, $stateParams, ProductsModel) {
		var createProductCtrl = this;

		function returnToProducts() {
			$state.go('neoshopper.categories.products', {
				category: $stateParams.category
			})
		}

		function cancelCreating() {
			returnToProducts();
		}

		function createProduct() {
			ProductsModel.createProduct(createProductCtrl.newProduct);
			returnToProducts();
		}

		function resetForm() {
			createProductCtrl.newProduct = {
				name: '',
				qty: null,
				units: '',
				category: $stateParams.category
			}
		}

		createProductCtrl.cancelCreating = cancelCreating;
		createProductCtrl.createProduct = createProduct;

		resetForm();
	})
;