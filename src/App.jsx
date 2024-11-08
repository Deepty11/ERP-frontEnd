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


function App() {
  const [pageTitle, setPageTitle] = useState('')

  const onRequestingPage = (title) => {
    setPageTitle(title)
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            < Route path='/' element={<MainLayout pageTitle={pageTitle} />}>
              <Route path='/dashboard' element={<Dashboard onPageLoad={onRequestingPage} />} />
              <Route path='/add-task' element={<AddTask callback={onRequestingPage} />} />
              <Route path='/add-user' element={<AddUser callback={onRequestingPage} />} />
              <Route path='/addBook' element={<AddBook callback={onRequestingPage} />} />
              <Route path='/users' element={<UserList callback={onRequestingPage} />} />
              <Route path='/add-designation' element={<AddDesignation callback={onRequestingPage} />} />
              <Route path='/designations' element={<DesignationList callback={onRequestingPage} />} />
              <Route path='/leave/create-application' element={<AddLeaveApplication callback={onRequestingPage} />} />
              <Route path='/leave/applications' element={<LeaveApplications callback={onRequestingPage} />} />
              <Route path='/profile' element={<UserProfile callback={onRequestingPage} />} />
              <Route path='/user-details' element={<ViewUserDetails callback={onRequestingPage} />} />
              <Route path='/designation-details' element={<ViewDesignationDetails callback={onRequestingPage} />} />
              <Route path='/edit-designation' element={<EditDesignationDetails callback={onRequestingPage} />} />
            </Route>
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  )

}

export default App