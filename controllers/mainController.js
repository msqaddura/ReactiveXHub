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
                    title: "Filtering",
                    link: "/#operators/filtering",
                    links: [
                        { title: "debounce", link: "/#operators/filtering/debounce" },
                        { title: "distinct", link: "/#operators/filtering/distinct" },
                        { title: "elementAt", link: "/#operators/filtering/elementAt"},
                        { title: "filter", link: "/#operators/filtering/filter" },
                        { title: "first", link: "/#operators/filtering/first" },
                        { title: "ignoreElements", link: "/#operators/filtering/ignoreElements" },
                        { title: "last", link: "/#operators/filtering/last", hide:true }
                    ]
                },
                {
                    title: "Combining",
                    link: "/#operators/combining",
                    links: [
                        { title: "and/thenDo/when", link:"/#operators/combining/and_then_when"},
                        { title: "merge", link: "/#operators/combining/merge" },
                        { title: "startWith", link: "/#operators/combining/startWith" },
                        { title: "zip", link: "/#operators/combining/zip" }
                    ]
                },
                {
                    title: "Conditional",
                    link: "/#operators/conditional",
                    links: [
                        { title: "skipUntil", link: "/#operators/conditional/skipUntil" },
                        { title: "takeUntil", link: "/#operators/conditional/takeUntil" }
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