import { defineStore } from 'pinia'
import type { ILoginForm, ISession, IUpdateUser } from '../models/userModel.ts'
import { ref } from 'vue'

export const useAuthStore = defineStore('authStore', () => {
  //const isAuth = authService.isAuth()

  const login = async(loginUser:ILoginForm)=>{
    try {
    } catch (error) {
      throw error.message
    }
  }

  const logout = async()=>{

  }


  const isAuth = async()=>{

  }

  const getUserInfo = async()=>{
  }

  const updateUser = async(user:IUpdateUser)=>{
  }

  return { getUserInfo,  isAuth, login, logout, updateUser }
})
