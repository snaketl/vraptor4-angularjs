<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
        <title>AngularJs</title>
    </head> 

    <body ng-controller="clienteController" style="margin-left: 20px">
        <h2>Cliente</h2>
        <div>
            <form class="form">
                <input type="hidden" value="" ng-model="cliente.id">
                <input type="text" ng-model="cliente.nome">
                <input type="text" ng-model="cliente.sobrenome">
                <button ng-click="postCliente()" class="btn btn-success dropdown-toggle">Incluir</button>
                <button ng-click="putCliente()" class="btn btn-primary dropdown-toggle" disabled="disabled">Atualizar</button>
            </form>
            <table class="table table-striped" style="width : 40%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="cliente in clientes">
                        <td>{{cliente.id}}</td>
                        <td>{{cliente.nome}}</td>
                        <td>
                            <a href="#" ng-click="getCliente(cliente)">
                                <span class="label label-default">Editar</span>
                            </a>
                            <a href="#" ng-click="deleteCliente(cliente)">
                                <span class="label label-danger">Deletar</span>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js"></script>
    <script type="text/javascript" src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/clienteController.js"></script>
</html>
