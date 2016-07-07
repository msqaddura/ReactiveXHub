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
                        { title: "buffer", link: "/#operators/transforming/buffer" },
                        { title: "flatMap", link: "/#operators/transforming/flatMap" },
                        { title: "groupBy", link: "/#operators/transforming/groupBy", hide: true },
                        { title: "map", link: "/#operators/transforming/map"},
                        { title: "scan", link: "/#operators/transforming/scan"}
                    ]
                },
                {
                    title: "Combining",
                    link: "/#operators/combining",
                    links: [
                        { title: "and/thenDo/when", link:"/#operators/combining/and_then_when"},
                        { title: "merge", link: "/#operators/combining/merge" },
                        { title: "zip", link: "/#operators/combining/zip" }
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