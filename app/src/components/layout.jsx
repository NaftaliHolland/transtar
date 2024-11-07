import Header from "@/components/header"
import Footer from "@/components/footer"

const Layout = ({children}) => {
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;