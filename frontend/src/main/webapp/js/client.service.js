(function () {
    'use strict';

    angular
            .module('client')
            .factory('clientService', ClientService);
    
    ClientService.$inject = ['$http'];
    
    function ClientService($http) {
        
        var urlPrefix = '/backend/cliente';
        
        return {
            getClientes: getClientes,
            postCliente: postCliente,
            getCliente: getCliente,
            putCliente: putCliente,
            deleteCliente: deleteCliente            
        };      
        
        function getClientes() {            
            return $http.get(urlPrefix);            
        };

        function postCliente(cliente) {
            var client = clienteToJson(cliente);
            return $http.post(urlPrefix, client);            
        };
        
        function getCliente(id) {
            var url = urlPrefix + '/' + id;
            return $http.get(url);
        };
        
        function putCliente(cliente) {
            var url = urlPrefix + '/' + cliente.id;
            var c = clienteToJson(cliente);
            return $http.put(url, c);
        };
        
        function deleteCliente(cliente) {
            var url = urlPrefix + '/' + cliente.id;
            return $http.delete(url);
        };
        
        function clienteToJson(client) {
            return angular.toJson({cliente: client});
        };        
        
    }
    
})();