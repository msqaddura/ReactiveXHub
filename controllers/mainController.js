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
                    title: "Creating",
                    link: "/#operators/creating",
                    hide:true,
                    links: [
                    ]
                },
                {
                    title: "Combining",
                    link: "/#operators/combining",
                    links: [
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