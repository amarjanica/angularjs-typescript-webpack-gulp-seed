import {IScope} from "angular";

export class ShoppingListController {
    static $inject = ['$scope'];

    constructor(protected $scope: IScope) {
        $scope.shoppingList = ['apples', 'oranges', 'eggs', 'milk']
    }
}