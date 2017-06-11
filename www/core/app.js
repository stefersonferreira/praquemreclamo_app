// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'ngLodash',
  'ngCordova',
  'ngResource',
])

  .run(function ($rootScope, $ionicPlatform, $cordovaNetwork) {

    $rootScope.ionicReady = false;

    $ionicPlatform.ready(function () {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      $rootScope.ip = "offline";
      if (window.cordova) {
        $rootScope.ionicReady = true;
        
        networkinterface.getIPAddress(function (ip) {
          $rootScope.ip = ip;
        });
      }

    });
  })

  // remove cache for views
  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'core/views/menu.html',
        controller: 'AppController'
      })


      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'home/views/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('app.categoriasReclamacoes', {
        url: '/categoriasreclamacoes',
        views: {
          'menuContent': {
            templateUrl: 'reclamacoes/views/categorias-reclamacoes.html',
            controller: 'CategoriasReclamacoesCtrl'
          }
        }
      })

      .state('app.subCategoriasReclamacoes', {
        url: '/categoriasreclamacoes/:id',
        views: {
          'menuContent': {
            templateUrl: 'reclamacoes/views/subcategorias-reclamacoes.html',
            controller: 'SubCategoriasReclamacoesCtrl'
          }
        }
      })

      .state('app.reclamacoes', {
        url: '/reclamacoes/:id',
        views: {
          'menuContent': {
            templateUrl: 'reclamacoes/views/reclamacoes-list.html',
            controller: 'ReclamacoesListCtrl'
          }
        }
      })

      .state('app.reclamacao', {
        url: '/reclamacao/:id',
        views: {
          'menuContent': {
            templateUrl: 'reclamacoes/views/reclamacao.html',
            controller: 'reclamacaoCtrl'
          }
        }
      })

      .state('app.about', {
        url: '/about',
        views: {
          'menuContent': {
            templateUrl: 'about/views/about.html',
            controller: 'AboutCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  });
