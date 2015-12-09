angular.module('categories.products', [
	'categories.products.create',
	'categories.products.edit',
	'neoshopper.models.categories',
	'neoshopper.models.products'
])
	.config(function($stateProvider) {
		$stateProvider
			.state('neoshopper.categories.products', {
				url: 'categories/:category',
				views: {
					'products@': {
						templateUrl: 'app/categories/products/products.tmpl.html',
						controller: 'ProductsListCtrl as productsListCtrl'
					}
				}
			})
		;
	})
	.controller('ProductsListCtrl', function ($stateParams, ProductsModel, CategoriesModel) {
		var productsListCtrl = this;
		
		CategoriesModel.setCurrentCategory($stateParams.category);

		ProductsModel.getProducts()
			.then(function(products) {
				productsListCtrl.products = products;
			});

		productsListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
		productsListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
		productsListCtrl.deleteProduct = ProductsModel.deleteProduct;

	})
;