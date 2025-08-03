import  style  from "./[id]/Details.module.scss"

const loading = () => {
  return (
    <div className={style.loaderContainer}>
      <div className={style.spinner}>Loading...</div>
    </div>
  )
}

export default loading