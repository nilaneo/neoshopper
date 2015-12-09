angular.module('categories', [
	'neoshopper.models.categories'
])
	.config(function($stateProvider) {
		$stateProvider
			.state('neoshopper.categories', {
				url: '/',
				views: {
					'categories@': {
						controller: 'CategoriesListCtrl as categoriesListCtrl',
						templateUrl: 'app/categories/categories.tmpl.html'
					},
					'products@': {
						controller: 'ProductsListCtrl as productsListCtrl',
						templateUrl: 'app/categories/products/products.tmpl.html'
					}
				}
			})
		;
	})
	.controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel) {
		var categoriesListCtrl = this;

		CategoriesModel.getCategories()
			.then(function(result) {
				categoriesListCtrl.categories = result;
			});
	})
;