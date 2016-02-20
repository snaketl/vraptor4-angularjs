<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="client">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
        <title>AngularJs</title>
    </head> 

    <body ng-controller="ClientController as clientVM" style="margin-left: 20px">
        <h2>Clientes</h2>
        <div>
            <form class="form">
                <input type="hidden" value="" ng-model="clientVM.cliente.id">
                <label>Firstname</label>
                <input type="text" ng-model="clientVM.cliente.nome">
                <label>Lastname</label>
                <input type="text" ng-model="clientVM.cliente.sobrenome">
                <button ng-click="clientVM.postCliente()" class="btn btn-success dropdown-toggle">Insert</button>
                <button ng-click="clientVM.putCliente()" class="btn btn-primary dropdown-toggle" disabled="disabled">Update</button>
            </form>
            <table class="table table-striped" style="width : 40%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="c in clientVM.clientes">
                        <td>{{c.id}}</td>
                        <td>{{c.nome}}</td>
                        <td>{{c.sobrenome}}</td>
                        <td>
                            <a href="#" ng-click="clientVM.getCliente(c)">
                                <span class="label label-default">Edit</span>
                            </a>
                            <a href="#" ng-click="clientVM.deleteCliente(c)">
                                <span class="label label-danger">Delete</span>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
    <script type="text/javascript" src="//netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/client.module.js"></script>
    <script type="text/javascript" src="js/client.service.js"></script>
    <script type="text/javascript" src="js/client.controller.js"></script>
</html>
