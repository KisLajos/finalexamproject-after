import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './styles.module.scss'

export default function ContactLinks() {
  return (
    <div className={styles.contactLinks}>
      <a href="mailto:wagner.flora@prsc.hu"><FontAwesomeIcon icon={faEnvelope} style={{color: "#f3e4e2", width: "20px"}} />wagner.flora@prsc.hu</a>
      <a href="tel:+36706097223"><FontAwesomeIcon icon={faPhone} style={{color: "#f3e4e2", width: "20px"}} /> +36 70 609 7223</a>
      <span><FontAwesomeIcon icon={faLocationDot} style={{color: "#f3e4e2", width: "20px"}} />2330 Dunaharaszti, Fő út 207.</span>
      <a href='https://www.facebook.com/dioleveldekor' target='_blank'><FontAwesomeIcon icon={faFacebook} style={{color: "#f3e4e2", width: "20px"}}/>@dioleveldekor</a>
      <a href='https://www.instagram.com/diolevel_dekormuhely/' target='_blank'><FontAwesomeIcon icon={faInstagram} style={{color: "#f3e4e2", width: "20px"}}/> @diolevel_dekormuhely</a>
    </div>
  )
}
