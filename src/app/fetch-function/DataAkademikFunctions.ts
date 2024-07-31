'use server'
import { cookies } from "next/headers"
import getUrl from "../apis/apiLists"
import { revalidatePath } from "next/cache"

export async function getDataAkademik() {
    const res = await fetch(getUrl('dataakademik'), { 
      headers: {
        "Authorization": "Bearer "+cookies().get('tkn')?.value,
      },
      cache: 'no-store' 
    })

    return res.json()
}

export async function addDataAkademik(previousState: any, formData: FormData) {
  const response = await fetch(getUrl('add-dataakademik'), {
      headers: {
        "Authorization": "Bearer "+cookies().get('tkn')?.value,
      },
      method: 'POST',
      body: JSON.stringify({ 
        "mahasiswa_id": formData.get("mahasiswa_id"),
        "nama": formData.get("nama"),
        "alamat": formData.get("alamat"),
        "tempat_lahir": formData.get("tempat_lahir"),
        "jenis_kelamin": formData.get("jenis_kelamin"),
        "kewarganegaraan": formData.get("kewarganegaraan"),
        "golongan_darah": formData.get("golongan_darah"),
        "no_telp_rumah": parseInt(formData.get("no_telp_rumah")?.toString()!),
        "tanggal_lahir": formData.get("tanggal_lahir"),
        "agama": formData.get("agama"),
        "status_perkawinan": formData.get("status_perkawinan")
      }),
    })
 
    // Handle response if necessary
    const data = await response.json()
    if(data.message === "Success") {
      revalidatePath('/data-akademik')
    }

    return { message: {text: data.message, error: data.error} }
}

export async function editDataAkademik(previousState: any, formData: FormData) {
  const response = await fetch(getUrl('edit-dataakademik')+formData.get("id"), {
      headers: {
        "Authorization": "Bearer "+cookies().get('tkn')?.value,
      },
      method: 'PUT',
      body: JSON.stringify({ 
        "nama": formData.get("nama"),
        "alamat": formData.get("alamat"),
        "tempat_lahir": formData.get("tempat_lahir"),
        "jenis_kelamin": formData.get("jenis_kelamin"),
        "kewarganegaraan": formData.get("kewarganegaraan"),
        "golongan_darah": formData.get("golongan_darah"),
        "no_telp_rumah": parseInt(formData.get("no_telp_rumah")?.toString()!),
        "tanggal_lahir": formData.get("tanggal_lahir"),
        "agama": formData.get("agama"),
        "status_perkawinan": formData.get("status_perkawinan")
      }),
    })
 
    // Handle response if necessary
    const data = await response.json()
    if(data.message === "Success") {
      revalidatePath('/data-akademik')
    }

    return { message: {text: data.message, error: data.error} }
}

export async function deleteDataAkademik(id: String) {
  const response = await fetch(getUrl('delete-dataakademik')+'/'+id, {
      headers: {
        "Authorization": "Bearer "+cookies().get('tkn')?.value,
      },
      method: 'DELETE',
  })
  
  const data = await response.json()
  revalidatePath('/data-akademik')
}