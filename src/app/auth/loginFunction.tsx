'use server'
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
import getUrl from "../apis/apiLists";
export async function loginFunction(previousState: any, formData: FormData) {
    const response = await fetch(getUrl('login'), {
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