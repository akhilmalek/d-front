import Footer from "./footer/footer"
import Header from "./header/header"



const Main = ( {children} : any ) => {
    return (<>
    <Header />
       {children}
    <Footer  />
    </>);

}
 
export default Main;