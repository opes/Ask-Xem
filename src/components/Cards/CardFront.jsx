import styles from './CardFront.css' 

export default function CardFront({ card }) {
  return (
    <figure className={styles.frontcontainer}>
      <h3>{card.title}</h3>
      <img
          src={`/icons/${card.animal}.png`}
          alt={card.animal}
          className={styles.image}
      />
    </figure>
  )
}