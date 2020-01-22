function accept(id){
    console.log(id)
}

axios.get('https://star-rating123.herokuapp.com/get/all-company')
    .then((result) => {
        console.log('result', result)
    })

axios.get('https://star-rating123.herokuapp.com/get/peding-company')
    .then((result) => {
        const { data } = result
        console.log(data)
        data['data'].map((v, i) => {
            return document.getElementById("companyBody").innerHTML += `<tr id=${v._id}>
            <th scope="row">
              <div class="media align-items-center">
                <a href="#" class="avatar rounded-circle mr-3">
                  <img alt="Image placeholder" src="../assets/img/theme/no-user-image.png">
                </a>
                <div class="media-body">
                  <span class="mb-0 text-sm">${v.name}</span>
                </div>
              </div>
            </th>
            <td>
              ${v.contactEmail}
            </td>
            <td>
              <span class="badge badge-dot mr-4">
                <i class="bg-warning"></i> Monthly Pkg
              </span>
            </td>
            <td>
              <div class="avatar-group">
                <span class="badge badge-dot mr-4">${v.contactNo}</span>
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center">
                <span class="badge badge-dot mr-4">${v.url}</span>
              </div>
            </td>
            <td class="text-right">
              <div class="dropdown">
                <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a class="dropdown-item" href="#" onclick=accept("${v._id}")>Accept</a>
                  <a class="dropdown-item" href="#">Cancel</a>
                </div>
              </div>
            </td>
            </tr>`
        })
    })