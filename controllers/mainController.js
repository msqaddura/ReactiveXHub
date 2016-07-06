'use strict';

/* Controllers */


var RxHubController = angular.module('RxHubController', []);

RxHubController.controller('searchController', ['$scope', function ($scope) {

    $scope.links = [
        {
            title: "Observable",
            link: "/#observable",
            links: [
            ]
        },
        {
            title:"Operators",
            link : "/#operators",
            links: [
                {
                    title: "Transforming",
                    link: "/#operators/transforming",
                    links: [
                        { title: "Buffer", link: "/#operators/transforming/buffer" },
                    ]
                },
                {
                    title: "Combining",
                    link: "/#operators/combining",
                    links: [
                        { title: "And/Then/When", link:"/#operators/combining/and_then_when"},
                        { title: "Merge", link: "/#operators/combining/merge" },
                        { title: "Zip", link: "/#operators/combining/zip" }
                    ]
                }
            ]
        },
        {
            title: "Single",
            link: "/#single",
            links: [
            ]
        },
        {
            title: "Subject",
            link: "/#subject",
            links: [
            ]
        },
        {
            title: "Schenduler",
            link: "/#scheduler",
            links: [
            ]
        }
    ]
}]);