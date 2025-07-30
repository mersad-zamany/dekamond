import AuthForm from "@/components/form/AuthForm";
import styles from "./auth.module.scss"
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
function AuthPage() {
    return (
        <>
            <div className="w-full h-lvh flex p-12 items-center" >
                <div className="w-full justify-between flex h-12/12">
                    <div className="w-/12" ></div>
                    <div className="lg:w-6/12 w-full flex justify-center" >
                        <div className="lg:w-6/12 w-full flex justify-center flex-col" >
                            <h1 className="text-3xl mt-5" >welcome back</h1>
                            <h1 className="mt-2 text-md text-[#a1a1aa]" >Login to access your dashboard and continue</h1>
                            <div className="mt-2 md:text-sm flex-col xl:flex-wrap flex gap-1 text-[#a1a1aa]" >
                                <span>
                                    if you dont have account, you should create
                                </span>
                                <Link href={"#"} className="text-[#00d4ff] cursor-pointer">create account</Link>
                            </div>
                            <AuthForm />
                            <div className="flex mt-5 gap-3 items-center" >
                                <Link href={"https://www.linkedin.com/in/mersad-zamany/"} >
                                    <div className={`${styles.socialButton} p-3 rounded-md`} >
                                        <Linkedin />
                                    </div>
                                </Link>
                                <Link href={"mailto:mersad.zmy@gmail.com"} >
                                    <div className={`${styles.socialButton} p-3 rounded-md`} >
                                        <Mail />
                                    </div>
                                </Link>
                                <Link href={"tel:09138048416"} >
                                    <div className={`${styles.socialButton} p-3 rounded-md`} >
                                        <Phone />
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className={`w-5/12 h-full lg:flex hidden relative ${styles.authImage} justify-center items-end py-10 bg-white rounded-2xl`} >
                        <div className={`${styles.imageBox} text-xs px-3 p-2 rounded-2xl  absolute top-5 left-5`} >
                            mersad.zmy@gmail.com
                        </div>
                        <div className={`absolute w-11/12 ${styles.introImageBox} px-3 p-2 rounded-2xl`} >
                            <p>mersad zamani</p>
                            "Every story begins after you open the first page — not by judging the cover."
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthPage;