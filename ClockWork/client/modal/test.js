//seperated for adjusting
angular.module('ClockWork')
    .controller('appCtrl', [function(){
        console.log('appCtrl loaded');
    }])
    .controller('placesAutocompleteCtrl', ['$scope', function($scope){
        console.log('placesAutocompleteCtrl loaded');
        $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
            console.log('Place changed');
            console.dir($scope.autocompleteModel);
        })

    }]);