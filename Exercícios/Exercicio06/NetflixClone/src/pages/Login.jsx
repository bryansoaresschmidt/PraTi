import FormComp from "../component/FormComp"
import HeaderLogin from "../component/HeaderLogin"
import Footer from '../component/Footer'
import BackgroundDiv from "../component/BackgroundDiv";

function Login() {

  return (
    <>
      <HeaderLogin />
      <BackgroundDiv>
        <FormComp />
      </BackgroundDiv>
      <Footer />
    </>
  )
}

export default Login
