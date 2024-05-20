import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

const ShareLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
export default ShareLayout