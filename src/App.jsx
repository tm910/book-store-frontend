import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"
import { AuthProvider } from "./context/AuthContext"
function App() {
  return (
    <AuthProvider>
      <div className="container-fluid  mx-auto">
        <Navbar />
        <main className="min-h-screen mx-auto max-w-screen-2xl font-primary px-4 py-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
