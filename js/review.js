axios.get('http://localhost:5001/get/peding-reviews')
    .then((response) => {
        const { data } = response
        console.log(data)
        data['data'].map((v, i) => {
            return document.getElementById('reviewList').innerHTML += `<tr>
            <th scope="row">
              <div class="media align-items-center">
                <div class="media-body">
                  <span class="mb-0 text-sm">${v.reveiwerName}</span>
                </div>
              </div>
            </th>
            <td>
              <div class="align-items-center">
                <span class="mr-2 white-spce" style="white-space: normal;">${v.feedback}</span>
              </div>
            </td>
            <td>
              <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
              </video>
            </td>
            <td class="text-right">
              <div class="dropdown">
                <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </td>
          </tr>`
        })
    })