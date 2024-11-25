import WelcomeInscription from "../emails/Welcome";
import { Resend } from "resend";

const resend = new Resend('re_5vupUbrW_BfVvxGZaXHPXXFdoT8XbH1wN');
export const sendEmail=async()=>{
    
    const s=await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'bramslevel129@gmail.com',
        subject: 'Your Space Jelly Login Code',
        
        react: WelcomeInscription()
      });
}