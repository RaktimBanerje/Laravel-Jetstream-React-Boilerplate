import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <Link href={route('profile.show')}>Profile</Link>
    </div>

  )
}

export default Dashboard