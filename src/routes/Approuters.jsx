import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import PrivateRoute from '../components/PrivateRoute'
import Sidebar from '../components/sidebar/Sidebar'

export default function Approuters() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Sidebar/>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}
