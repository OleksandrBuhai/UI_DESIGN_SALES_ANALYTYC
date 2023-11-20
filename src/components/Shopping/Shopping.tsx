import { AiFillCaretUp, AiOutlineShopping, AiOutlineShoppingCart, AiOutlineTeam } from "react-icons/ai";
import { Section } from './style';

export const Shopping =() => {
    return (
        <Section>
            <div className="shopping ">
                <div className="design ">
                    <div className="logo img1">
                        <AiOutlineShoppingCart />
                    </div>
                </div>
                <div className="total ">
                    <h6>ONLINE ORDERS</h6>


                </div>
                <div className="number ">
                    <h6>12302</h6>
                    <AiFillCaretUp className="svg1" />
                    <span className="t1">146 </span>
                </div>

            </div>
            <div className="shopping ">
                <div className="design ">
                    <div className="logo img2">
                        <AiOutlineShoppingCart />
                    </div>
                </div>
                <div className="total ">
                    <h6>OFFLINE ORDERS</h6>


                </div>
                <div className="number ">
                    <h6>10893</h6>
                    <AiFillCaretUp className="svg1" />
                    <span className="t1">67 </span>
                </div>

            </div>
            <div className="shopping ">
                <div className="design ">
                    <div className="logo img3">
                        <AiOutlineTeam />

                    </div>
                </div>
                <div className="total ">
                    <h6>TOTAL USERS</h6>


                </div>
                <div className="number ">
                    <h6>78691</h6>
                    <AiFillCaretUp className="svg1" />
                    <span className="t1">324 </span>
                </div>

            </div>
            <div className="shopping ">
                <div className="design ">
                    <div className="logo img4">
                        <AiOutlineShopping />
                    </div>
                </div>
                <div className="total ">
                    <h6>TOTAL PRODUCTS</h6>
                </div>
                <div className="number ">
                    <h6>1032</h6>
                    <AiFillCaretUp className="svg1" />
                    <span className="t1">48 </span>
                </div>
            </div>
        </Section>
    )
}


