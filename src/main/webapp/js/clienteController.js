function clienteController($scope, $window, $http) {

    var init = function() {
        $http.get('cliente').success(function(data) {
            $scope.clientes = data;
        });
    }();

    $scope.postCliente = function() {
        var client = clienteToJson($scope.cliente);
        $http.post('cliente', client).success(function(data) {
            $scope.clientes.unshift(data);
            reset();
        });
    };

    $scope.getCliente = function(cliente) {
        var url = 'cliente/' + cliente.id;
        $http.get(url).success(function(data) {
            $scope.cliente = data;
            $(".btn-success").attr("disabled", "disabled");
            $(".btn-primary").removeAttr("disabled");
        });
    };

    $scope.putCliente = function() {
        var url = 'cliente/' + $scope.cliente.id;
        var cliente = clienteToJson($scope.cliente);
        $http.put(url, cliente).success(function() {            
            var indexOf = $scope.clientes.indexOf($scope.cliente);
            $scope.clientes.splice(indexOf, 1);
            $scope.clientes.unshift($scope.cliente);
            reset();
            $(".btn-primary").attr("disabled", "disabled");
            $(".btn-success").removeAttr("disabled");
        });
    };

    $scope.deleteCliente = function(cliente) {
        var confirm = $window.confirm('Remove cliente ' + cliente.nome + '?');
        if (confirm) {
            var url = 'cliente/' + cliente.id;
            $http.delete(url).success(function() {
                var index = $scope.clientes.indexOf(cliente);
                $scope.clientes.splice(index, 1);
            });
        }
    };

    $scope.edit = function(cliente) {
        $scope.cliente = cliente;
        $(".btn-success").attr("disabled", "disabled");
        $(".btn-primary").removeAttr("disabled");
    };

    var reset = function() {
        $scope.cliente = {id: 0, nome: ""};
    };
    
    var clienteToJson = function(client) {
        return angular.toJson({cliente: client});
    };

}