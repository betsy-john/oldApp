(function () {

    angular.module('oldApp').factory('userInfo', function ($http, $q, urlRequestService) {

        function addUser(newUser) {
            console.log('0newUser111', newUser)

            return urlRequestService.dbDetails(newUser).then(function (result) {

                console.log('1Succesfully added new user to the database', result);
                return result
            })
        }

        function getUserDetails(newUserName) {
            console.log('3neenpicndienicno', newUserName)

            return urlRequestService.getUserDetails(newUserName).then(function (result) {

                console.log('4Getting the Name og the User being Added', result);
                return result
            })

        }


        return {
            addUser: addUser,
            getUserDetails: getUserDetails
        };
    });
})();