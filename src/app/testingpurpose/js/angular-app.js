var App = angular.module('App', []);

/**
 * STARS DIRECTIVE
 */

 App.directive('ngStars', function(){
     return {
         restrict: 'EA',
         link: function($scope, element, attrs){
             var stars_template = {
                 one: 'fa-star',
                 zero: 'fa-star-o',
                 half: 'fa-star-half-o'
             };

             $scope.stars = [];
             $scope.max = ($scope.max) ? $scope.max : 5;
             var readOnly = ($scope.readOnly == undefined) ? false : true;

             $scope.$watch('value', function(val){
                 var stars = [];

                 for ( i=0; i < $scope.max; i++ ){
                     var val = $scope.value - i;

                     if ( val >= 1 ){
                         stars.push({ class: stars_template.one })
                     } else if ( val < 1 && val > 0 ){
                         stars.push({ class: stars_template.half })
                     } else if ( val <= 0 ){
                         stars.push({ class: stars_template.zero })
                     }
                 }

                 $scope.stars = stars;
             });

             $scope.setStars = function(val){
                 if( !readOnly ){
                     val += 1;
                     $scope.value = val;

                     if( typeof($scope.callback) == 'function' ){
                         if( $scope.callback() == false ){
                             readOnly = true;
                         }
                     }
                 }
             }
         },
         template: '<span class="fa {{star.class}}" ng-repeat="star in stars track by $index" ng-click="setStars($index)"></span>',
         scope: {
             max: '@ngStarsMax',
             value: '=ngStars',
             stars: '=',
             readOnly: '@ngStarsReadonly',
             callback: '=ngStarsCallback',
         },
     };
 });

App.controller("AppController", function($scope) {
    $scope.ratingValue = 2.5;
    $scope.ratingValue1 = 4;
    $scope.ratingValue2 = 7.3;
    $scope.ratingValue3 = 2;
    $scope.ratingValue4 = 4;

    $scope.callback1 = function(){
        return true;
    };

    $scope.callback2 = function(){
        // AJAX or more something
        return false;
    };
});
