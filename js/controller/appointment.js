angular.module('oldApp').controller('appointment', function ($uibModal, $log, $document) {
    var vm = this;
    vm.time_interval = ['8 AM to 11 AM', '1 PM to 4 PM', '5 AM to 8 PM'];
    vm.morning = ['l.h hospital', 'v.h hospital', 'l.p hospital']
    vm.hosp1 = ['dr. Anita Dongra', 'dr. Ajay Chopra', 'dr. Lata Babu', 'dr. Payal Singh',]
    vm.hosp2 = ['dr. Anita Dongra', 'dr. Ajay Chopra', 'dr. Lata Babu', 'dr. Payal Singh',]
    vm.hosp3 = ['dr. Anita Dongra', 'dr. Ajay Chopra', 'dr. Lata Babu', 'dr. Payal Singh',]

    vm.afternoon = ['l.h hospital', 'v.h hospital', 'l.p hospital']
    vm.hosp1 = ['dr.Sarthar Sharma', 'dr. Ankit Joseph', 'dr. Mibin John', 'dr. Ali Zafar',]
    vm.hosp2 = ['dr.Sarthar Sharma', 'dr. Ankit Joseph', 'dr. Mibin John', 'dr. Ali Zafar',]
    vm.hosp3 = ['dr.Sarthar Sharma', 'dr. Ankit Joseph', 'dr. Mibin John', 'dr. Ali Zafar',]

    vm.evening = ['l.h hospital', 'v.h hospital', 'l.p hospital']
    vm.hosp1 = ['dr. Sam John', 'dr. Avit Mathur', 'dr. Beena Mattews', 'dr. Cliea rocheal',]
    vm.hosp2 = ['dr. Sam John', 'dr. Avit Mathur', 'dr. Beena Mattews', 'dr. Cliea rocheal',]
    vm.hosp3 = ['dr. Sam John', 'dr. Avit Mathur', 'dr. Beena Mattews', 'dr. Cliea rocheal',]

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

                    return [vm.selectedVal,vm.hospVal,vm.docVal];
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