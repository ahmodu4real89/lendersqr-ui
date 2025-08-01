import Image from 'next/image'
import './Card.scss'

type FeatureCardProps = {
  imageSrc: string
  title: string
  description: string
}

const Card = ({ imageSrc, title, description }: FeatureCardProps) => {
  return (
    <div className="card">
      <Image src={imageSrc} alt={title} width={50} height={50}  className="card__image" />
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </div>
  )
}

export default Card
