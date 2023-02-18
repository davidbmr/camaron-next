import style from './ContactIcon.module.css'

export const ContactIcon = ({icon}) => {
  return (
    <div className={style.contactIcon}>
      {icon}
    </div>
  )
}
