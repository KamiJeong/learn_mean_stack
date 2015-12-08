angular.module('app')
.controller('PostCtrl', function($scope, PostsSvc){

  $scope.posts = [];

  // Get Post
  PostsSvc.fetch().success(function(posts){
    $scope.posts = posts;
  });

  // Add Post
  $scope.addPost = function(){
    if ($scope.postBody){
      PostsSvc.create({
        username: 'dickeyxxx',
        body: $scope.postBody
      })
      .success(function(post){
        $scope.posts.unshift(post);
        $scope.postBody = null;
      });
    };
  };
});
