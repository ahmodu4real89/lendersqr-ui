import Navbar from "@/app/components/Navbar"
import Sidenav from "@/app/components/Sidenav"
import style from './DashboardWrapper.module.scss'


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (

    <div className={style.layoutContainer}>
      <Navbar />
      <div className={style.layoutMain}>
        <Sidenav />
        <main className={style.layoutContent}>
          {children}
        </main>
      </div>
    </div>

  )
}

export default DashboardWrapper



