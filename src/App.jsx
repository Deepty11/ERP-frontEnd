import React, { useEffect, useState } from 'react'
import './App.css'
import './main.css'
import '/node_modules/primeflex/primeflex.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddTask from './pages/AddTask'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import AddUser from './pages/AddUser'
import AddBook from './pages/AddBook'
import LoginPage from './pages/LoginPage'
import AuthProvider from './components/AuthProvider'
import PrivateRoutes from './components/routes/PrivateRoutes'
import UserList from './pages/UserList'
import AddDesignation from './pages/AddDesignation'
import DesignationList from './pages/DesignationList'
import AddLeaveApplication from './pages/AddLeaveApplication'
import LeaveApplications from './pages/LeaveApplications'
import MyLeaveInformation from './pages/MyLeaveInformation'
import UserProfile from './pages/UserProfile'
import { ToastContainer } from 'react-toastify'
import ViewUserDetails from './pages/ViewUserDetails'
import ViewDesignationDetails from './pages/ViewDesignationDetails'
import EditDesignationDetails from './pages/EditDesignationDetails'
import EditUserDetails from './pages/EditUserDetails'
import HerobarProvider from './components/HerobarProvider'
import Herobar from './components/common_components/Herobar'
import TaskDashboard from './pages/TaskDashboard'


function App() {

  return (
    <Router>
      <AuthProvider>
        <HerobarProvider>
          <Herobar />
          <Routes>
            <Route element={<PrivateRoutes />}>
              < Route path='/' element={<MainLayout />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/add-task' element={<AddTask />} />
                <Route path='/add-user' element={<AddUser />} />
                <Route path='/addBook' element={<AddBook />} />
                <Route path='/users' element={<UserList />} />
                <Route path='/add-designation' element={<AddDesignation />} />
                <Route path='/designations' element={<DesignationList />} />
                <Route path='/leave/create-application' element={<AddLeaveApplication />} />
                <Route path='/leave/applications' element={<LeaveApplications />} />
                <Route path='/profile' element={<UserProfile />} />
                <Route path='/user-details' element={<ViewUserDetails />} />
                <Route path='/designation-details' element={<ViewDesignationDetails />} />
                <Route path='/edit-designation' element={<EditDesignationDetails />} />
                <Route path='/edit-user' element={<EditUserDetails />} />
                <Route path='/task-dashboard' element={<TaskDashboard />} />
              </Route>
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>

        </HerobarProvider>

      </AuthProvider>
    </Router>
  )

}

export default App