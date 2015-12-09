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
					}
				}
			})
		;
	})
	.controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel) {
		var categoriesListCtrl = this;
		categoriesListCtrl.categories = CategoriesModel.getCategories();
	})
;