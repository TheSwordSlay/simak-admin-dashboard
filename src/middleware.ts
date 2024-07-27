import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    if (request.nextUrl.pathname === "/") {
        const tkn = request.cookies.get("tkn")
        if (tkn == undefined) {
            return NextResponse.redirect(new URL("/signin", request.url))
        }
        return response
    }

    if (request.nextUrl.pathname === "/signin") {
        const tkn = request.cookies.get("tkn")
        if (tkn != undefined) {
            return NextResponse.redirect(new URL("/", request.url))
        }
        return response
    }
}