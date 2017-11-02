angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Project/Movie list';
    vm.searchInput = '';
    vm.shows = [
        {
            title: 'Game of Thrones',
            year: 2017,
            favorite: false
        },
        {
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            title: 'Brat',
            year: 1997,
            favorite: true
        },
        {
            title: 'Brat-2',
            year: 2000,
            favorite: true
        },
        {
            title: 'Crazy Bankcook',
            year: 2017,
            favorite: true
        }
    ];
    vm.orders = [
        {
            id: 1,
            title: 'Year Ascending',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            title: 'Year Descending',
            key: 'year',
            reverse: true
        },
        {
            id: 3,
            title: 'Title Ascending',
            key: 'title',
            reverse: false
        },
        {
            id: 4,
            title: 'Title Descending',
            key: 'title',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function() {
        vm.shows.push(vm.new);
        vm.new = {};
    };
});
