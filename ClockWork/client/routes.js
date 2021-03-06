/**
 * Created by Son on 2/15/2016.
 * File: /ClockWork/client/routes.js
 * Description: configure the routes for all files.
 *
 *  -2/24/16 C Lam
 *      -added /:eventId to tabs.event-detail route
 *      -added controllerAs EventDetail
 *
 *  -3/05/16 Son Nguyen
 *      -changed all the sub-views to even-tab. Using side bar menu.
 *
 *  3/14/16 C Lam
 *      -added signin and register routes
 */
angular
    .module('ClockWork')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('signup', {
            url: '/register',
            templateUrl: 'client/account-signup/signup.html',
            controller: 'signupCtrl',
            controllerAs: 'SignUp'
        })
        .state('signin', {
            url: '/signin',
            templateUrl: 'client/login/login.html',
            controller: 'loginCtrl',
            controllerAs: 'Login'
        })
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "client/tab/tab.html"
        })
        .state('tabs.event-feed', {
            url: "/event-feed",
            views: {
                'event-tab': {
                    templateUrl: "client/events/event-feed/event-feed.html",
                    controller: 'EventFeedCtrl',
                    controllerAs: 'EventFeed'
                }
            }
        })
        .state('tabs.event-detail', {
            url: "/event-detail/:eventId",
            views: {
                'event-tab': {
                    templateUrl: "client/events/event-detail/event-detail.html",
                    controller: 'EventDetailCtrl',
                    controllerAs: 'EventDetail'
                }
            }
        })
        .state('tabs.notifs', {
            url: "/notifications",
            views: {
                'event-tab': {
                    templateUrl: "client/notifications/notifs.html",
                    controller: 'notifCtrl',
                    controllerAs: 'Notification'
                }
            }
        })
        .state('tabs.profile', {
            url: '/profile/:userId',
            views: {
                'event-tab': {
                    templateUrl: 'client/profiles/profile.html',
                    controller: 'profileCtrl',
                    controllerAs: 'profile'
                }
            }
        })
        .state('tabs.facts2', {
            url: "/facts2",
            views: {
                'event-tab': {
                    templateUrl: "client/templates/facts2.html"
                }
            }
        })
        .state('tabs.about', {
            url: "/about",
            views: {
                'event-tab': {
                    templateUrl: "client/templates/about.html"
                }
            }
        })
        .state('tabs.navstack', {
            url: "/navstack",
            views: {
                'event-tab': {
                    templateUrl: "client/templates/nav-stack.html"
                }
            }
        })
        .state('tabs.contact', {
            url: "/contact",
            views: {
                'event-tab': {
                    templateUrl: "client/templates/contact.html"
                }
            }
        });


    //$urlRouterProvider.otherwise('tab/event-feed');
    $urlRouterProvider.otherwise('signin');
    //$urlRouterProvider.otherwise('/register');
}