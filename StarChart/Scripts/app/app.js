var app = angular.
    module("main", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: '/scripts/app/pages/dashboard.html',
        controller: 'homeController'
    });

    $routeProvider.when("/signup", {
        templateUrl: '/scripts/app/pages/signup.html',
        controller: 'signupController'
    });

    $routeProvider.when("/signin", {
        templateUrl: '/scripts/app/pages/signin.html',
        controller: 'signinController'
    });

    $routeProvider.when("/subscription", {
        templateUrl: '/scripts/app/pages/subscription.html',
        controller: 'subscriptionController'
    });

    $routeProvider.when("/product", {
        templateUrl: '/scripts/app/pages/product.html',
        controller: 'productController'
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});

