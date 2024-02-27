import Footer from "./footer/footer"
import Header from "./header/header"



const Main = ( {children} ) => {
    return (<>
    <Header />
       {children}
    <Footer  />
    </>);

}
 
export default Main;