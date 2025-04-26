import NextAuth, { User } from "next-auth"
import { JWT } from "next-auth/jwt"
import { ApplicationUser } from "./auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  /**
 * The shape of the user object returned in the OAuth providers' `profile` callback,
 * or the second parameter of the `session` callback, when using a database.
 */
interface User {
  token: string,
  user:ApplicationUser;

}

  interface Session {
    user: ApplicationUser;
  }
}


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends User {}
}
