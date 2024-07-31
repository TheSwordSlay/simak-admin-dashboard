import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    const tkn = request.cookies.get("tkn")
    
    if (request.nextUrl.pathname === "/") {
        if (tkn == undefined) {
            return NextResponse.redirect(new URL("/signin", request.url))
        }
        return response
    }

    if (request.nextUrl.pathname === "/data-akademik") {
        if (tkn == undefined) {
            return NextResponse.redirect(new URL("/signin", request.url))
        }
        return response
    }

    if (request.nextUrl.pathname === "/mahasiswa") {
        if (tkn == undefined) {
            return NextResponse.redirect(new URL("/signin", request.url))
        }
        return response
    }



    if (request.nextUrl.pathname === "/signin") {
        if (tkn != undefined) {
            return NextResponse.redirect(new URL("/", request.url))
        }
        return response
    }
}