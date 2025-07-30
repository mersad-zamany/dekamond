import Button from "@/components/ui/Button/Button";
import FullScreenMenu from "@/components/ui/FullScreenMenu/FullSCreenMenu";
import { Menu } from "lucide-react";
import { useState } from "react";
interface Props {
    handleLogout : () => void
}
function DashboardHeader({handleLogout} : Props) {
    const [menuOpen , setMenuOpen] = useState<boolean>(false)
    return (
        <div className="w-full lg:hidden h-16 absolute bg-white p-3" >
            <FullScreenMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
            <div className="w-full justify-between items-center flex h-full" >
                <Menu onClick={() => setMenuOpen(true)} className="text-black" />
                <Button onClick={handleLogout} variant="secondary" className="w-20" >Logout</Button>
            </div>
        </div>
    );
}

export default DashboardHeader;