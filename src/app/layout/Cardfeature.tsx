import Card from '../components/Card'
import styles from './Cardfeature.module.scss'


const CardFeature = () => {
  return (
    <>
      <p className={styles.title}>User</p>
      <section className={styles.cardFeatureWrapper}>
        <div className={styles.gridContainer}>
          <Card imageSrc='/assets/user.svg' title="USERS" description="2,453" />
          <Card imageSrc="/assets/active.svg" title="ACTIVE USERS" description="2,453" />
          <Card imageSrc='/assets/loan.svg' title="USERS WITH LOANS" description="12,453" />
          <Card imageSrc='/assets/eclipse1.svg' title="USERS WITH SAVINGS" description="102,453" />
        </div>
      </section>
    </>
  )
}

export default CardFeature
