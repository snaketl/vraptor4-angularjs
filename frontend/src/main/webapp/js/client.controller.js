(function () {
    'use strict';

    angular
            .module('client')
            .controller('ClientController', ClientController);
    
    ClientController.$inject = ['$window', 'clientService'];

    function ClientController($window, clientService) {
        
        var vm = this;
        vm.cliente = {};
        vm.clientes = [];
        vm.postCliente = postClient;
        vm.getCliente = getClient;
        vm.putCliente = putClient;
        vm.deleteCliente = deleteClient;
      
        var init = function () {
            clientService.getClientes().success(function(data) {
                vm.clientes = data;
            });            
        }();

        function postClient() {
            clientService.postCliente(vm.cliente).success(function (data) {
                vm.clientes.unshift(data);
                reset();
            });
        };

        function getClient(cliente) {
            clientService.getCliente(cliente.id).success(function (data) {
                vm.cliente = data;
                $(".btn-success").attr("disabled", "disabled");
                $(".btn-primary").removeAttr("disabled");                
            });
        };
        
        function putClient() {            
            clientService.putCliente(vm.cliente).success(function () {
                var indexOf = vm.clientes.indexOf(vm.cliente);
                vm.clientes.splice(indexOf, 1);
                vm.clientes.unshift(vm.cliente);
                reset();
                $(".btn-primary").attr("disabled", "disabled");
                $(".btn-success").removeAttr("disabled");                
            });
        };

        function deleteClient(cliente) {
            var confirm = $window.confirm('Remove cliente ' + cliente.nome + '?');
            if (confirm) {
                clientService.deleteCliente(cliente).success(function () {
                    var index = vm.clientes.indexOf(cliente);
                    vm.clientes.splice(index, 1);
                });
            };
        };

        var reset = function () {
            vm.cliente = {id: 0, nome: ""};
        };

    }

})();