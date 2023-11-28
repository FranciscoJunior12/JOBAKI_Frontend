import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import { DataProvider } from './context/GlobalData.jsx'
// import Search from './pages/search.jsx'
import Details from './pages/Details.jsx'
import UserRegistration from './pages/UserRegistration.jsx'
import Proposal from './pages/Proposal.jsx'
import Suporte from './pages/Suporte.jsx'
import ProposalsSent from './pages/ProposalsSent.jsx'
import CreateProject from './pages/CreateProject.jsx'
import Notification from './components/Notification.jsx'
import UserSelection from './pages/UserSelection.jsx'
import FreelancerSignUp from './pages/FreelancerSignUp.jsx'
import ClientSignUp from './pages/ClientSignUp.jsx'
import Search from './pages/Search.jsx'
import Welcome from './pages/welcome.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Welcome/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/proposta/:id' element={<Proposal />} />
            <Route path='/perfil' element={<Profile />} />
            <Route path='/notificacao' element={<Notification />} />
            <Route path='/cadastro' element={<UserRegistration />} />
            <Route path='/search/' element={<Search />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/propostas" element={<ProposalsSent />} />
            <Route path="/projecto" element={<CreateProject />} />
            <Route path="/user/selection" element={<UserSelection />} />

            <Route path="/freelancer/signup" element={<FreelancerSignUp />} />

            <Route path="/client/signup" element={<ClientSignUp />} />
            {/* <Route path="/user/selection" element={<UserSelection />} /> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
)
