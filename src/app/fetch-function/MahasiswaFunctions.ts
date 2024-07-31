'use server'

import { cookies } from "next/headers"
import getUrl from "../apis/apiLists"
import { revalidatePath } from "next/cache"

export async function getMahasiswa() {
    const res = await fetch(getUrl('mahasiswa'), { 
      headers: {
        "Authorization": "Bearer "+cookies().get('tkn')?.value,
      },
      cache: 'no-store' 
    })

    return res.json()
}

export async function addMahasiswa(previousState: any, formData: FormData) {
  const response = await fetch(getUrl('add-mahasiswa'), {
      headers: {
        "Authorization": "Bearer "+cookies().get('tkn')?.value,
      },
      method: 'POST',
      body: JSON.stringify({ 
        "dosen_id": formData.get("dosen_id"),
        "email": formData.get("email"),
        "angkatan": parseInt(formData.get("angkatan")?.toString()!),
        "nim": formData.get("nim"),
        "judul_skripsi": formData.get("judul_skripsi"),
        "password": formData.get("password")
      }),
    })
 
    // Handle response if necessary
    const data = await response.json()
    if(data.message === "Mahasiswa Register Success") {
      revalidatePath('/mahasiswa')
    }

    return { message: {text: data.message, error: data.error} }
}

export async function deleteMahasiswa(id: String) {
  const response = await fetch(getUrl('delete-mahasiswa')+'/'+id, {
      headers: {
        "Authorization": "Bearer "+cookies().get('tkn')?.value,
      },
      method: 'DELETE',
  })
  
  const data = await response.json()
  revalidatePath('/mahasiswa')
}

export async function editMahasiswa(previousState: any, formData: FormData) {
  const response = await fetch(getUrl('edit-mahasiswa')+formData.get("id"), {
      headers: {
        "Authorization": "Bearer "+cookies().get('tkn')?.value,
      },
      method: 'PUT',
      body: JSON.stringify({ 
        "dosen_id": formData.get("dosen_id"),
        "email": formData.get("email"),
        "angkatan": parseInt(formData.get("angkatan")?.toString()!),
        "nim": formData.get("nim"),
        "judul_skripsi": formData.get("judul_skripsi")
      }),
    })
 
    // Handle response if necessary
    const data = await response.json()
    if(data.message === "Successfully Updated Data Mahasiswa") {
      revalidatePath('/mahasiswa')
    }

    return { message: {text: data.message, error: data.error} }
}