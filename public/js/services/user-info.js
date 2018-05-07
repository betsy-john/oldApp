(function () {

    angular.module('oldApp').factory('userInfo', function ($http, $q) {

        function addUser(newUser) {
            console.log('newUser111', newUser)
            return $http({
                method: 'POST',
                url: 'http://postman-echo.com/post',
                data: newUser
            })
                .then(addUserSuccess)
                .catch(addUserError)
        }
        function addUserSuccess(response) {
            console.log('res', response)
            return 'User Added: ' + response.data;
        }
        function addUserError(response) {
            return $q.reject('error handling user(http status:' + response.status + ' )');
        }

        function userName(newUserInfo) {
            console.log('newUserInfo', newUserInfo)
            user(newUserInfo);
            return newUserInfo;
        }
        function user(newUserInfo) {
            console.log('newUserInfo222', newUserInfo)
            var some = newUserInfo;
            console.log('some', some)
            return newUserInfo;
        }
        return {
            addUser: addUser,
            userName: userName,
            user: user
        };
    });
})();