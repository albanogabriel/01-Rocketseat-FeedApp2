import styles from './Avatar.module.css'

/* exemplo de desestruturação 

    const user = { name: "diego" }
    const { name } = user

*/

// eslint-disable-next-line react/prop-types
export function Avatar( { hasBorder = true, src } ) {

  return (
    <img 
        // eslint-disable-next-line react/prop-types
        className={hasBorder ? styles.avatarWithBorder : styles.avatar }
        // eslint-disable-next-line react/prop-types
        src={src} 
    />
  )
}
