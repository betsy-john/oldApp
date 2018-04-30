angular.module('oldApp').controller('appointment', function ($uibModal, $log, $document) {
    var vm = this;
    vm.time_interval = ['8 AM to 11 AM', '1 PM to 4 PM', '5 AM to 8 PM'];
    vm.morning = ['l.h hospital', 'v.h hospital', 'l.p hospital']
    vm.hosp1 = ['Dr. Anita Dongra', 'Dr. Ajay Chopra', 'Dr. Lata Babu', 'Dr. Payal Singh',]
    vm.hosp2 = ['Dr. Anita Dongra', 'Dr. Ajay Chopra', 'Dr. Lata Babu', 'Dr. Payal Singh',]
    vm.hosp3 = ['Dr. Anita Dongra', 'Dr. Ajay Chopra', 'Dr. Lata Babu', 'Dr. Payal Singh',]

    vm.afternoon = ['l.h hospital', 'v.h hospital', 'l.p hospital']
    vm.hosp1 = ['Dr.Sarthar Sharma', 'Dr. Ankit Joseph', 'Dr. Mibin John', 'Dr. Ali Zafar',]
    vm.hosp2 = ['Dr.Sarthar Sharma', 'Dr. Ankit Joseph', 'Dr. Mibin John', 'Dr. Ali Zafar',]
    vm.hosp3 = ['Dr.Sarthar Sharma', 'Dr. Ankit Joseph', 'Dr. Mibin John', 'Dr. Ali Zafar',]

    vm.evening = ['l.h hospital', 'v.h hospital', 'l.p hospital']
    vm.hosp1 = ['Dr. Sam John', 'Dr. Avit Mathur', 'Dr. Beena Mattews', 'Dr. Cliea rocheal',]
    vm.hosp2 = ['Dr. Sam John', 'Dr. Avit Mathur', 'Dr. Beena Mattews', 'Dr. Cliea rocheal',]
    vm.hosp3 = ['Dr. Sam John', 'Dr. Avit Mathur', 'Dr. Beena Mattews', 'Dr. Cliea rocheal',]

    vm.animationsEnabled = true;

    vm.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: vm.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'vm',
            size: size,
            appendTo: parentElem,
            resolve: {
                selVals: function () {

                    return ['Time Between: '+vm.selectedVal,'Hospital: '+vm.hospVal,'Doctor Attending: '+vm.docVal];
                },
            }
        });
        modalInstance.result.then(function (selectedItem) {
            vm.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});
angular.module('oldApp').controller('ModalInstanceCtrl', function ($uibModalInstance,  selVals) {
   var vm=this  ;
    vm.selVals = selVals;
  
    vm.selected = {
        selVals: vm.selVals        
    };

    vm.ok = function () {
        $uibModalInstance.close(vm.selected.selVals );
        alert('ThankYou, You will soon get a Appointment message on Your registered Mobile');
    };
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
angular.module('oldApp').component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function () {
        var vm = this;
        vm.$onInit = function () {
            vm.items = vm.resolve.items;
            vm.selected = {
                item: vm.items[0]
            };
        };
        vm.ok = function () {
            vm.close({ $value: vm.selected.item });
        };
        vm.cancel = function () {
            vm.dismiss({ $value: 'cancel' });
        };
    }
});



// });