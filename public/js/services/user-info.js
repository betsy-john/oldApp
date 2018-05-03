(function () {
    
    angular.module('oldApp').factory('userInfo', function ($http,$q) {
       return {
        addUser: addUser,
       };
       function addUser(newUser){
        console.log('newUser111',newUser)
           return $http({
               method:'POST',
               url:'https://my-json-server.typicode.com/typicode/demo/posts',
               data:newUser
           })
           .then(addUserSuccess)
           .catch(addUserError)
       }
       function addUserSuccess(response){
        console.log('res',response)
           return 'User Added: '+response.data.name;
       }
       function addUserError(response){
           return $q.reject ('error handling user(http status:'+ response.status + ' )');
       }
    });
})();