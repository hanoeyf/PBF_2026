import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const token: any = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });

    const pathname = request.nextUrl.pathname;

    // 🔥 belum login
    if (!token) {
        const loginUrl = new URL("/auth/login", request.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // 🔥 INI YANG PENTING BANGET (ROLE CHECK)
    if (pathname.startsWith("/admin") && token.role !== "admin") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {    
    matcher: ["/produk", "/about", "/profile/:path*", "/admin/:path*"],
};