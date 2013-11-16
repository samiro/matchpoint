function needsController( $scope, $http ){

	$scope.url = 'http://matchpointapp.appspot.com/api/user'

	$scope.getAllByUser = function( id_user ){

		var xhr = $http.get( $scope.url + '/' + window.user.id + '/needs' );

		xhr.success( function( data ){
			
			console.info( data );

			$scope.needs_user = data.needs;
		} );
	}	
}