(function () {

    var nurturedApp = angular.module("nurturedApp",[]);

    nurturedApp.controller("ctrller",['$scope', '$http', function($scope, $http){
        $scope.apis =[
            {'id':0, 'apiUrl':'https://esllearning2.mybluemix.net/chat?isay=', 'label':'NurturEd ChatBot'},
            {'id':1, 'apiUrl':'https://esllearning2.mybluemix.net/slackbot?isay=', 'label':'SlackBot'},
            {'id':2, 'apiUrl':'https://esllearning2.mybluemix.net/slack?text=!', 'label':'SlackBot Conversation (Still testing)'},
            {'id':3, 'apiUrl':'https://esllearning2.mybluemix.net/talk?text_to_say=','label':'Text to Speech'}
        ];

        $scope.selectedApi = $scope.apis[1];

        $scope.updateAPI = function(){
            var index = $('#robotSelector').val();
            $scope.selectedApi = $scope.apis[index];
        }

        $scope.textParameter = '';

        $scope.btnTest_click = function(){
            console.log('Selected '+$scope.selectedApi.id);
            $http({
                url : $scope.selectedApi.apiUrl,
                method : 'GET',
                params : $scope.textParameter,
                timeout : 5000,
                cache : false
            }).then(function(data){
                $('#response').append(data);
                if ( $scope.selectedApi.id == 3){
                    var api = $scope.selectedApi.apiUrl;
                    var param = $scope.textParameter;
                    $('#response').append('<div>Text To Speech demo: <a href="'
		 				+api+encodeURIComponent(param)+'" target="_blank">click here</a></div>');
                }
            },
            function(response){
                console.log(response);
                $('#errorDiv').append(response);
            });
        }; // end onclick
    }]); // end controller

})();
