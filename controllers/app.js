var app = angular.module('app',[]);
app.controller('MainCtrl',function($http){
        var vm = this;
        vm.loading = true;
        vm.fetchData = function(user){
            $http.get('https://api.github.com/users/' + user.name).then(function(res){
               vm.data = res;
               vm.loading = false;
        })
    }
})



function myFunction() {
    console.log('heyo');
    alert('hello');
}