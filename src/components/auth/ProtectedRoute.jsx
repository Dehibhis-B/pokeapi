import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const nameTrainer = useSelector((store) => store.nameTrainer)
    
    if(nameTrainer){
        return <Outlet />
    }else{
        <Navigate to="/" />
    }

    
}

export default ProtectedRoute