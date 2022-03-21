import React from 'react'

import UpdatePasswordForm from "./Partials/UpdatePasswordForm"
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm"
import DeleteUserForm from './Partials/DeleteUserForm'


const Show = (props) => {
  return (
    <div class="container">
        <h3>Profile</h3>
        <div class="mt-4">
            <UpdateProfileInformationForm {...props} />
            <UpdatePasswordForm {...props} />
            <DeleteUserForm {...props} />
        </div>
    </div>
  )
}

export default Show