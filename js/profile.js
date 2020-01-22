function Delete(id) {
  console.log(id)
}

axios.get('https://star-rating123.herokuapp.com/get/all-users')
  .then((result) => {
    console.log('users', result)
    const { data } = result
    data['data'].map((v, i) => {
      return document.getElementById('profileBody').innerHTML += `<tr id=${v._id} key="${i}">
            <th scope="row">
              <div class="media align-items-center">
                <a href="#" class="avatar rounded-circle mr-3">
                  <img alt="Image placeholder" height="50" width="50" src=${v.profilePic.url}>
                </a>
                <div class="media-body">
                  <span class="mb-0 text-sm">${v.name}</span>
                </div>
              </div>
            </th>
            <td>
              ${v.email}
            </td>
            <td>
              <span class="badge badge-dot mr-4">
                <i></i>${v.buyPlan ? v.plan : '---'}
              </span>
            </td>
            <td>
              <div class="avatar-group">
                <span class="badge badge-dot mr-4">${v._id}</span>
              </div>
            </td>
            <td class="text-right">
              <div class="dropdown">
                <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a class="dropdown-item" href="#" onclick=Delete("${v._id}")>Delete</a>
                </div>
              </div>
            </td>
          </tr>`
    })
  })