angular.module('neoshopper.models.products', [

])
	.service('ProductsModel', function($http, $q) {
		var model = this,
			URLS = {
				FETCH: 'data/products.json'
			},
			products;

		function extract(result) {
			return result.data;
		}

		function cacheProducts(result) {
			products = extract(result);
			return products;
		}

		function findProduct(productId) {
			return _.find(products, function(product) {
				return product.id === parseInt(productId, 10);
			})
		}

		model.getProducts = function() {
			return (products) ? $q.when(products) : $http.get(URLS.FETCH).then(cacheProducts);
		};

		model.getProductById = function(productId) {
			var deferred = $q.defer();

			if(products) {
				deferred.resolve(findProduct(productId));
			} else {
				model.getProducts().then(function() {
					deferred.resolve(findProduct(productId));
				})
			}

			return deferred.promise;
		};

		model.createProduct = function(product) {
			product.id = product.length;
			products.push(product);
		};

		model.updateProduct = function(product) {
			var index = _.findIndex(products, function(p) {
				return p.id == product.id;
			});
			 
			products[index] = product;
		};

		model.deleteProduct = function(product) {
			_.remove(products, function(p) {
				return p.id == product.id;
			});
		};
	}) 
;