function loadPhotos (searchQuery) {
    fetch ("http://www.splashbase.co/api/v1/images/search?query=" + searchQuery)
        .then(function(response){
            return response.json()
        })
        .then(function(responsePhotos){
            console.log(responsePhotos)

            var row = document.querySelector("#pictureGroup");
            row.innerHTML="";

            responsePhotos.images.forEach(img => {
                row.innerHTML += `<div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img src="${img.url}" width="100%">
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted">${img.id}</small>
                    </div>
                  </div>
                </div>
              </div>
                `
            });
        })
            
}