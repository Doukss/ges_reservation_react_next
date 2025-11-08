import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server"
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}

export default withAuth