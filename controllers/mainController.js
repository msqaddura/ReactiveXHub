'use strict';

/* Controllers */


var RxHubController = angular.module('RxHubController', []);

RxHubController.controller('searchController', ['$scope', function ($scope) {

    $scope.links = [
        {
            title:"One",
            link : "operators",
            links: [
                {
                    title: "Two",
                    link: "",
                    links: [
                        { title: "Three", link: "/#zip" },
                        { title: "Four", link: "/#merge" }
                    ]
                },
                {
                    title: "Five",
                    link: "",
                    links: [
                        { title: "Six", link: "/#zip" },
                        { title: "Seven", link: "/#merge" }
                    ]
                }
            ]
        },
        {
            title: "Eight",
            link: "operators",
            links: [
                {
                    title: "Nine",
                    link: "",
                    links: [
                        { title: "Ten", link: "/#zip" },
                        { title: "Eleven", link: "/#merge" }
                    ]
                },
                {
                    title: "Six",
                    link: "",
                    links: [
                        { title: "Zip", link: "/#zip" },
                        { title: "Merge", link: "/#merge" }
                    ]
                }
            ]
        },
        {
            title: "Single",
            link: "operators",
            links: [
                {
                    title: "Create Observables",
                    link: "",
                    links: [
                        { title: "Zip", link: "/#zip" },
                        { title: "Merge", link: "/#merge" }
                    ]
                },
                {
                    title: "Combining Observables",
                    link: "",
                    links: [
                        { title: "Zip", link: "/#zip" },
                        { title: "Merge", link: "/#merge" }
                    ]
                }
            ]
        },
        {
            title: "Subject",
            link: "operators",
            links: [
                {
                    title: "Create Observables",
                    link: "",
                    links: [
                        { title: "Zip", link: "/#zip" },
                        { title: "Merge", link: "/#merge" }
                    ]
                },
                {
                    title: "Combining Observables",
                    link: "",
                    links: [
                        { title: "Zip", link: "/#zip" },
                        { title: "Merge", link: "/#merge" }
                    ]
                }
            ]
        },
        {
            title: "Schendular",
            link: "operators",
            links: [
                {
                    title: "Create Observables",
                    link: "",
                    links: [
                        { title: "Zip", link: "/#zip" },
                        { title: "Merge", link: "/#merge" }
                    ]
                },
                {
                    title: "Combining Observables",
                    link: "",
                    links: [
                        { title: "Zip", link: "/#zip" },
                        { title: "Merge", link: "/#merge" }
                    ]
                }
            ]
        }
    ]
    $scope.linksx = [


        {
            title: "Create Observables", level: 1, links: [
            ]
        },
        { title: "Zip", url: "/#zip",level:2 },
        { title: "Merge", url: "/#merge",level:2 }
    ]
}]);