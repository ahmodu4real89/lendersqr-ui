import Image from 'next/image'
import style from './Card.module.scss'

type FeatureCardProps = {
  imageSrc: string
  title: string
  description: string
}

const Card = ({ imageSrc, title, description }: FeatureCardProps) => {
  return (
    <div className={style.card}>
      <Image src={imageSrc} alt={title} width={50} height={50}  className={style.card__image} />
      <h3 className={style.card__title}>{title}</h3>
      <p className={style.card__description}>{description}</p>
    </div>
  )
}

export default Card
