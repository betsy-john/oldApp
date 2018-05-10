(function () {

    angular.module('oldApp').factory('userInfo', function ($http, $q, urlRequestService) {

        function addUser(newUser) {
            console.log('0newUser111', newUser)

            return urlRequestService.dbDetails(newUser).then(function (result) {

                console.log('1Succesfully added new user to the database', result);
                return result
            })
        }

       

        return {
            addUser: addUser,
           
        };
    });
})();