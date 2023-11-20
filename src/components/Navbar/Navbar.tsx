import { AiOutlineBell, AiOutlineCalendar, AiOutlineCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import avatarImage from "../../assets/avatar.jpg";
import { Nav } from './style';



export const Navbar=()=> {

    

    return (
        <Nav>
            <div className="title">
                <h1>Dashboard</h1>
            </div>
            <div className="notification">
                <div className="date">
                    <AiOutlineCalendar />
                    <span>Jan 30, 2022</span>
                </div>
                <div className="icon">
                    <BiSearch />
                    <span>|</span>
                    <AiOutlineBell />
                    <span>|</span>
                    <div className="image">
                        <img src={avatarImage} alt="" />
                    </div>
                    <AiOutlineCaretDown />
                </div>
            </div>
        </Nav>
    )
}
