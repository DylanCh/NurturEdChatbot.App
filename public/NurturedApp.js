(function () {

    var textValidator = angular.module("nurturedApp",[]);

    textValidator.controller("ctrller",function($scope){
        $scope.apis =[
            {'id':0, 'apiUrl':'https://esllearning2.mybluemix.net/chat?isay=', 'label':'NurturEd ChatBot'},
            {'id':1, 'apiUrl':'https://esllearning2.mybluemix.net/slackbot?isay=', 'label':'SlackBot'},
            {'id':2, 'apiUrl':'https://esllearning2.mybluemix.net/slack?text=!', 'label':'SlackBot Conversation (Still testing)'},
            {'id':3, 'apiUrl':'https://esllearning2.mybluemix.net/talk?text_to_say=','label':'Text to Speech'}
        ];

        $scope.selectedApi = $scope.apis[1];

        $scope.textParameter = '';

        $scope.btnTest_click = function($http){
            $http({
                url : $scope.selectedApi.apiUrl,
                method : 'GET',
                params : $scope.textParameter
            }).then(function(data){
                $('#response').append(data);
            });
        };
    });

})();
