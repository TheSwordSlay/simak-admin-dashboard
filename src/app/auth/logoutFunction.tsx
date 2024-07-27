'use server'
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function logoutFunction() {
    cookies().delete("tkn")
    redirect('/')
}