import logo from "../assets/logo.svg"
import logoRosa from "../assets/logorosa.svg"

const Logo = ({bg}) => {
  return (
    <div>
      {bg === "branco" ? <img src={logoRosa} alt="logo digital college" /> : <img src={logo} alt="logo digital college" /> }  
    </div>
  )
}

export default Logo