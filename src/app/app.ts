import "jquery";
import "bootstrap";
import * as angular from "angular";
import "angular-ui-router";
import {ShoppingListController} from "./controller";

angular
    .module('myApp', ['ui.router'])
    .config(function ($stateProvider: any, $urlRouterProvider: any) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/home.html'
            })
            .state('shopping-list', {
                url: '/shopping-list',
                templateUrl: '/shopping-list.html',
                controller: 'ShoppingListController'
            })

    }).controller('ShoppingListController', ShoppingListController);

