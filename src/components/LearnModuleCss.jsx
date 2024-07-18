import Image from 'next/image'
import styles from '../css/LearnCss.module.css'
import postman from '../../public/images/postman.webp'
const LearnModuleCss = () => {
  return (
    <div className={styles.my_green_text}>
      Learn Module Css
      <Image src={postman} alt='Postman Certificate image' width={"100%"}/>
    </div>
  )
}

export default LearnModuleCss
