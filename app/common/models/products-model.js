angular.module('neoshopper.models.products', [

])
	.service('ProductsModel', function($http) {
		var model = this,
			products,
				URLS = {
					FETCH: 'data/products.json'
				};

		function extract(result) {
			return result.data;
		}

		function cacheProducts(result) {
			products = extract(result);
			return products;
		}

		model.getProducts = function() {
			return $http.get(URLS.FETCH).then(cacheProducts);
		}
	})
;