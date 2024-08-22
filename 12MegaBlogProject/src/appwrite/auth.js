import conf from "../conf/conf.js"

import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account ;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async  createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
                if(userAccount){
                    // call anothe method 
                    return this.login({email, password});
                    
                }
                else{
                    return userAccount;
                }
        }
        catch(error){
            throw error;
        }
    }

    async login({email , password}){
        try{
           return await this.account.createEmailSession(email, password);
        }
        catch(error){
            throw error;
        }
    }

     async getCurrentUser(){
        try {
         // return await this.account.get();
        //   const isUser1 = await this.account.get().then((res)=>console.log(res))
        //   return isUser1
        //     // If user is authenticated, return the user object
        //     // if (user) {
        //     //     return user;
        //     // }
    
        //     // // If user is not authenticated, create an anonymous session
        //     // const guest = await this.account.createAnonymousSession();
        //     // return guest;
            }
         catch (error) {
           // throw error;
           console.log("Appwrite serive :: getCurrentUser:: error: ->>", error);
            }
        return null;
     }
     
    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
           // throw error;
           console.log("Appwrite serive :: getCurrentUser:: error", error);
        }
    }
}

const authService  = new AuthService();

export default authService