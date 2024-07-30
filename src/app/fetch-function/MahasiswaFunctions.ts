'use server'

import { cookies } from "next/headers"
import getUrl from "../apis/apiLists"

export async function getMahasiswa() {
    const res = await fetch(getUrl('mahasiswa'), { 
      headers: {
        "Authorization": "Bearer "+cookies().get('tkn')?.value,
      },
      cache: 'no-store' 
    })

    return res.json()
}