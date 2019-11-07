function loadPhotos (searchQuery) {
    fetch ("http://www.splashbase.co/api/v1/images/search?query=" + searchQuery)
        .then(function(response){
            return response.json()
        })
        .then(function(responsePhotos){
            console.log(responsePhotos)
        })
            
}