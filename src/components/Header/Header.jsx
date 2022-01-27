import logo from "../../asset/images/logo/Fook-Labs-Logo-White-186x35.png"
import './Header.css';
import Icon from '../../asset/images/icons/Body_01.png'

function Header() {
  return (
    <div className="container">
       <div className="d-flex justify-content-between align-items-center mt-3">
       <div className="right-header">
        <img
          src={logo}
          alt="Fook labs logo"
        />
       </div>
       <div className="d-flex ">
       <div className="left d-flex align-items-center">
        <div className="dot"></div>
       <div className="">
          <div className="mainnet">Mainnet</div>
        <div className="network">network</div>
       </div>
       </div>
       <div className="right d-flex align-items-center">
        <div className="ellipse-img">
          <img className="icon" src={Icon} alt="" />
        </div>
        <div className="wallet-address">0x901f6F4A0aca...</div>
       </div>
       </div>
     </div>
    </div>
    //   <div className="">
    //     <div className="logo">
    //       <img
    //         src={logo}
    //         alt="Fook labs logo"
    //       />
    //     </div>
    //     <div className="left-header">
    //       <div className="eclipse">

    //       </div>
    //       <div className="mainnet">
    //         <div className="text-light line pr-3">
    //           Mainnet <br />
    //           <small>Network</small>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div className="d-flex align-items-center">
    //       <div className=" mr-2 ">
    //         <div className="text-light line pr-3">
    //           Mainnet <br />
    //           <small>Network</small>
    //         </div>
    //       </div>
    //       <div className="d-flex align-items-center ml-2">
    //         <div className="">
    //           <img src={dumm} width={20} height={20} alt="" />
    //         </div>
    //         <div className="text-light pl-2 ">
    //           Mainnet <br />
    //           <small>Network</small>
    //         </div>
    //       </div>
    //     </div> */}
    //   </div>
    // </div>
  )
}

export default Header;
