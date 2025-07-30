import { useAuth } from "@/context/AuthContext";
import Styles from "./Sidebar.module.scss"
import { ArrowRight, CircleAlert, Home, LogOut, Music, User } from "lucide-react";
import { useRouter } from "next/navigation";
function SideBar() {
    const { user, logout } = useAuth()
    const router = useRouter()
    const LogingOut = () => {
        logout();
        router.push('/auth');
    }
    return (
        <div className="w-3/12 lg:block hidden h-full px-6 p-2 bg-[#fdfdfd] text-black" >
            <div className="w-full flex justify-center" >
                <h1 className="text-xl" >

                </h1>
            </div>
            <div className="w-full my-3 items-center justify-between flex px-2" >
                <div className="items-center flex flex-col xl:flex-row">
                    <div className={`${Styles.avatar}`} >
                        <img className={`${Styles.avatar}`} src={user?.picture.large} width={60} height={60} />
                    </div>
                    <div className="xl:ml-5 xl:mt-0  mt-3 flex items-center xl:items-start flex-col " >
                        <div>{user?.name.first} {user?.name.last}</div>
                        <div className="text-[#4b5563]" >{user?.email}</div>
                    </div>
                </div>
            </div>
            <hr className="my-3 text-[#a1a1aa]" />
            <div>
                <div className={`py-3 my-3 flex items-center justify-between ${Styles.ListItem} ${Styles.active} px-2`} >
                    <div className="flex items-center" >
                        <Home className="mr-3" />
                        <div>
                            Home
                        </div>
                    </div>
                    <div>
                        <ArrowRight />
                    </div>
                </div>
                <div className={`py-3 my-3 flex items-center justify-between ${Styles.ListItem} px-2`} >
                    <div className="flex items-center" >
                        <User className="mr-3" />
                        <div>
                            Profile
                        </div>
                    </div>
                    <div>
                        <ArrowRight />
                    </div>

                </div>
                <div className={`py-3 my-3 flex items-center justify-between ${Styles.ListItem} px-2`} >
                    <div className="flex items-center" >
                        <CircleAlert className="mr-3" />
                        <div>
                            Home
                        </div>
                    </div>
                    <div>
                        <ArrowRight />
                    </div>

                </div>
                <div className={`py-3 my-3 flex items-center justify-between ${Styles.ListItem} px-2`} >
                    <div className="flex items-center" >
                        <Music className="mr-3" />
                        <div>
                            music
                        </div>
                    </div>
                    <div>
                        <ArrowRight />
                    </div>
                </div>
                <div onClick={LogingOut} className={`py-3 my-3 flex items-center justify-between ${Styles.ListItem} px-2`} >
                    <div className="flex items-center" >
                        <LogOut className="mr-3" />
                        <div>
                            Logout
                        </div>
                    </div>
                    <div>
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;