import styles from './Avatar.module.css'

/* exemplo de desestruturação 

    const user = { name: "diego" }
    const { name } = user

*/

// eslint-disable-next-line react/prop-types
export function Avatar( { hasBorder = true, src } ) {

  return (
    <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar }
        src={src} 
    />
  )
}
