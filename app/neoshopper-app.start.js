angular.module('Neoshopper', [
	'ui.router',
	'categories',
	'categories.products'
])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('neoshopper', {
				url: '',
				abstract: true
			})
		;

		$urlRouterProvider.otherwise('/');
	});
