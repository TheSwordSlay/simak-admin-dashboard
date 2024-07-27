'use server'
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
export async function loginFunction(previousState: any, formData: FormData) {
    const response = await fetch('http://localhost:5000/api/v1/admin/login', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify({ 
        "username": formData.get("username"),
        "password": formData.get("password")
      }),
    })
 
    // Handle response if necessary
    const data = await response.json()
    if(data.message === "Admin Login Success") {
      cookies().set("tkn", data.value.token)
      redirect('/')
    }

    return { message: {text: data.message} }
  }