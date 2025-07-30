import { useAuth } from "@/context/AuthContext";
import styles from "./FullScreenMenu.module.scss"
interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}
function FullScreenMenu({ isOpen, setIsOpen }: Props) {
    const { user } = useAuth()
    return (<>
        <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`}>
            <div className={styles.menuContent}>
                <div className="w-full my-3 items-center justify-between flex " >
                    <div className="items-center flex ">
                        <div className={`${styles.avatar}`} >
                            <img className={`${styles.avatar}`} src={user?.picture.large} width={60} height={60} />
                        </div>
                        <div className="ml-5 mt-3 flex flex-col " >
                            <div className="text-black" >{user?.name.first} {user?.name.last}</div>
                            <div className="text-[#4b5563]" >{user?.email}</div>
                        </div>
                    </div>
                </div>
                <hr className="my-3 text-[#a1a1aa]" />
                <nav className={styles.nav}>
                    <a href="#" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Profile</a>
                    <a href="#" onClick={() => setIsOpen(false)}>AboutUs</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Music</a>
                </nav>

                <button
                    className={styles.closeButton}
                    onClick={() => setIsOpen(false)}
                >
                    &times;
                </button>
            </div>
        </div>
    </>);
}

export default FullScreenMenu;