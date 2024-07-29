'use server'
import { revalidatePath } from "next/cache"
import getUrl from "../apis/apiLists"

export async function getDosen() {
    const res = await fetch(getUrl('dosen'), { cache: 'no-store' })

    return res.json()
}

export async function deleteDosen(id: String) {
    const response = await fetch(getUrl('delete-dosen')+'/'+id, {
        method: 'DELETE',
    })
    
    const data = await response.json()
    revalidatePath('/')
}

export async function addDosen(previousState: any, formData: FormData) {
    const response = await fetch(getUrl('add-dosen'), {
        method: 'POST',
        body: JSON.stringify({ 
          "nama": formData.get("nama"),
          "nip": formData.get("nip"),
          "email": formData.get("email"),
          "password": formData.get("password")
        }),
      })
   
      // Handle response if necessary
      const data = await response.json()
      if(data.message === "Success Create Dosen") {
        revalidatePath('/')
      }
  
      return { message: {text: data.message, error: data.error} }
}

export async function editDosen(previousState: any, formData: FormData) {
  const response = await fetch(getUrl('edit-dosen')+formData.get("id"), {
      method: 'PUT',
      body: JSON.stringify({ 
        "nama": formData.get("nama"),
        "NIP": formData.get("nip"),
        "Email": formData.get("email"),
        "password": formData.get("password")
      }),
    })
 
    // Handle response if necessary
    const data = await response.json()
    if(data.message === "Success Update Dosen") {
      revalidatePath('/')
    }

    return { message: {text: data.message, error: data.error} }
}