function publishController( $scope, $http ){

	$scope.url_user = 'http://matchpointapp.appspot.com/api/user'
	
	$scope.life = 5;

	$scope.url_publish = 'http://matchpointapp.appspot.com/api/need';

	$scope.url_services = 'http://matchpointapp.appspot.com/api/service';
	
	$scope.getAllServices = function(){

		var xhr = $http.get( $scope.url_services );

		xhr.success( function( data ){
			$scope.services = data.items;
			console.log( data.items );
		} );

		xhr.error( function( data ){
			console.log( 'Error!. Server say: ' + data );
		} );
	}

	$scope.showVideo = function( url ){
		$('.video-reel').magnificPopup({ 
		  	items: {
      			src: url
    		},
    		type: 'iframe' 
		});
	}

	$scope.getAllNeedsByUser = function(){

		var xhr = $http.get( $scope.url_user + '/' + window.user.id + '/needs' );

		xhr.success( function( data ){
			
			console.info( data );

			$scope.needs_user = data.needs;
		} );
	}	

	$scope.publishNeed = function(){

		if( $scope.city == 'any' ){
			$scope.local_ubication = 'false'
			$scope.city = '';
		}
		else{
			$scope.local_ubication = 'true'
		}

		$scope.json_data = {
			user_id: window.user.id,
			description: $scope.description,
			service: $scope.category,
			local_ubication: $scope.local_ubication,
			delivery_time: $scope.deadline,
			budget: $scope.budget,
			life: $scope.life,
			ubication: $scope.city
		};

		var xhr = $.ajax({
			type: 'POST',
			url: $scope.url_publish,
			data: $scope.json_data,
			dataType: 'json'
		});

		/*var xhr = $http.post( $scope.url_publish,
					$scope.json_data );*/

		xhr.success( function( data ){
			
			if( data.saved ){
				$scope.getAllNeedsByUser();
				$.scrollTo( "#separator", 500 );
			}
			console.info( data );
		} );

		console.info( $scope.json_data );
	}
}