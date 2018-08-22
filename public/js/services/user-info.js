(function () {

    angular.module('oldApp').factory('userInfo', function ($http, $q, urlRequestService,docUrlService,administrationUrl) {

        function addUser(newUser) {
            console.log('0newUser111', newUser)

            return urlRequestService.dbDetails(newUser).then(function (result) {

                console.log('1Succesfully added new user to the database', result);
                return result
            })
        }
        function addDoc(newDocs) {
            console.log('0newDocs111', newDocs)

            return docUrlService.dbDocs(newDocs).then(function (result) {

                console.log('1Succesfully added new user to the database', result);
                return result
            })
        }
        function addAdminstrator(newAdminstrator) {
            console.log('0newAdminstrator111', newAdminstrator)
          return administrationUrl.postAdministrationDetails(newAdminstrator).then(function (result) {

                console.log('1Succesfully added new user to the database', result);
                return result
            })
        }
        return {
            addUser: addUser,
            addDoc: addDoc,
            addAdminstrator:addAdminstrator
        };
    });
})();