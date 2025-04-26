import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "@/lib/constants/api.constant";
import { LoginResponse } from "./lib/types/auth";




// making an object يخضع لمعايير nextAuth
export const authOptions:NextAuthOptions={
   pages:{
       signIn:'/auth/login'
   },
    providers:[
        Credentials({
           name:"Credental1",
           credentials:{
            email:{},
            password:{}
           },

           authorize: async (Credentials)=>{
               // comnunicate back end 
              const response=await fetch(`${process.env.API}/auth/signin`,{
                method:"POST",
                body:JSON.stringify({
                    email:Credentials?.email,
                    password:Credentials?.password,
                }),
                headers:{
                    ...JSON_HEADER
                }

              });
              const payload:APIResponse<LoginResponse >=  await response.json();// البيانات اللي راجعه من السيرفر 
              if('code' in payload){
                 throw new Error(payload.message);
              }
              console.log(payload);
              return {
                id:payload.user._id,
                token:payload.token,
                user:payload.user

              }
           }
        }),
    ],

    callbacks:{
        jwt:({token,user})=>{
         // token هي الداتا اللي هتتشفر بعدين وتتحط في الكوكي 
         // user هي الداتا اللي راجعه من عمليه تسجبل الدخول 
          if(user){
            token.token=user.token;
            token.user=user.user;
          }
         return token;
        },

        session:({session,token})=>{
            // الداتا اللي اقدر استخدمها علي الكلاينت سايد
            session.user=token.user;
            return session
        }
    }

}