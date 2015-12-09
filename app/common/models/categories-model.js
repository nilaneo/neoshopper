angular.module('neoshopper.models.categories', [

])
	.service('CategoriesModel', function(){
		var model = this,
			categories = [
				{"id": 0, "name": "Food"},
				{"id": 1, "name": "Drinks"},
				{"id": 2, "name": "Clothes"},
				{"id": 3, "name": "Cosmetics"},
				{"id": 4, "name": "All categories"}		
			];

		model.getCategories = function() {
			return categories;
		}
	})
;

