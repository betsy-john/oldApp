angular.module('oldApp').controller('appointment', function () {
    var vm = this;
    vm.time_interval = ['8 AM to 11 AM', '1 PM to 4 PM', '5 AM to 8 PM'];
   vm.morning=['l.h hospital', 'v.h hospital', 'l.p hospital']
   vm.hosp1=['dr. s','dr. a','dr. b','dr. c',]
   vm.hosp2=['dr. s','dr. a','dr. b','dr. c',]
   vm.hosp3=['dr. s','dr. a','dr. b','dr. c',]

   vm.afternoon=['l.h hospital', 'v.h hospital', 'l.p hospital']
   vm.hosp1=['dr. sa','dr. ab','dr. bc','dr. cd',]
   vm.hosp2=['dr. sa','dr. ab','dr. bc','dr. cd',]
   vm.hosp3=['dr. sa','dr. ab','dr. bc','dr. cd',]

   vm.evening=['l.h hospital', 'v.h hospital', 'l.p hospital']
   vm.hosp1=['dr. srr','dr. avv','dr. bee','dr. cqq',]
   vm.hosp2=['dr. srr','dr. avv','dr. bee','dr. cqq',]
   vm.hosp3=['dr. srr','dr. avv','dr. bee','dr. cqq',]
});