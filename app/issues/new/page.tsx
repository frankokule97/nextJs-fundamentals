//example of css modules used
import styles from './newissue.module.css'

const NewIssuePage = () => {
  return (
    <div>
      <button className={styles.button}>New issue button </button>
    </div>
  )
}

export default NewIssuePage;