import React from 'react'
import './App.css'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import Datas from './pages/Datas'


const App = () => {
  return (
    <Layout>
      <Home />
      <Datas/>
    </Layout>
  )
}

export default App