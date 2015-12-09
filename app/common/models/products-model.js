angular.module('neoshopper.models.products', [

])
	.service('ProductsModel', function() {
		var model = this,
			products = [
				{"id": 0, "name": "Milk", "qty": 2, "units": "liters", "category": "Drinks"},
				{"id": 1, "name": "Water", "qty": 3, "units": "liters", "category": "Drinks"},
				{"id": 2, "name": "Bananas", "qty": 4, "units": "pcs", "category": "Food"},
				{"id": 3, "name": "Sweater", "qty": 1, "units": "pcs", "category": "Clothes"},
				{"id": 4, "name": "Shirt", "qty": 2, "units": "pcs", "category": "Clothes"},
				{"id": 5, "name": "Mascara", "qty": 1, "units": "pcs", "category": "Cosmetics"},
				{"id": 6, "name": "Coffee", "qty": 1, "units": "package", "category": "Drinks"},
				{"id": 7, "name": "Apples", "qty": 2, "units": "kilos", "category": "Food"},
				{"id": 8, "name": "Powder", "qty": 3, "units": "pcs", "category": "Cosmetics"},
				{"id": 9, "name": "Lipstick", "qty": 5, "units": "pcs", "category": "Cosmetics"}
			];
			
		model.getProducts = function() {
			return products;
		}
	})
;