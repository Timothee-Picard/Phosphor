import styles from "./contact.module.css";

type Props = {
    id?: string
}
export default function Contact(props: Props) {
    const {id} = props;
    return (
        <section className={styles.sectionContact} id={id? id : ""}>
            <h1>Contactez<br/><span>Nous</span></h1>
            <form>
                <div className={styles.formGroup}>
                    <input name="name" id="name" type="text" placeholder=" "/>
                    <label htmlFor="name">Votre nom</label>
                </div>
                <div className={styles.formGroup}>
                    <input name="email" id="email" type="email" placeholder=" "/>
                    <label htmlFor="email">Votre e-mail</label>
                </div>
                <div className={styles.formGroup}>
                    <textarea name="message" id="message" rows={6} placeholder=" "/>
                    <label htmlFor="message">Votre message</label>
                </div>
                <input type="submit" value="Envoyer"/>
            </form>
            <div className={styles.arrows}>
                <svg xmlns="http://www.w3.org/2000/svg" width="262" height="558" viewBox="0 0 262 558" fill="">
                    <path opacity="0.2"
                          d="M35.6147 6.37797C41.5431 -1.76931 53.6583 -1.87099 59.7226 6.1757L258.53 269.972C262.558 275.317 262.558 282.683 258.53 288.028L59.7226 551.824C53.6583 559.871 41.5431 559.769 35.6147 551.622L3.24759 507.141C-0.635279 501.804 -0.574457 494.557 3.39741 489.287L122.557 331.175C124.517 328.574 125.578 325.405 125.578 322.147L125.578 235.853C125.578 232.595 124.517 229.426 122.557 226.825L3.39744 68.713C-0.574419 63.4428 -0.63524 56.1957 3.2476 50.8596L35.6147 6.37797Z"
                          fill="black"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="262" height="558" viewBox="0 0 262 558" fill="">
                    <path opacity="0.2"
                          d="M35.6147 6.37797C41.5431 -1.76931 53.6583 -1.87099 59.7226 6.1757L258.53 269.972C262.558 275.317 262.558 282.683 258.53 288.028L59.7226 551.824C53.6583 559.871 41.5431 559.769 35.6147 551.622L3.24759 507.141C-0.635279 501.804 -0.574457 494.557 3.39741 489.287L122.557 331.175C124.517 328.574 125.578 325.405 125.578 322.147L125.578 235.853C125.578 232.595 124.517 229.426 122.557 226.825L3.39744 68.713C-0.574419 63.4428 -0.63524 56.1957 3.2476 50.8596L35.6147 6.37797Z"
                          fill="black"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="262" height="558" viewBox="0 0 262 558" fill="">
                    <path opacity="0.2"
                          d="M35.6147 6.37797C41.5431 -1.76931 53.6583 -1.87099 59.7226 6.1757L258.53 269.972C262.558 275.317 262.558 282.683 258.53 288.028L59.7226 551.824C53.6583 559.871 41.5431 559.769 35.6147 551.622L3.24759 507.141C-0.635279 501.804 -0.574457 494.557 3.39741 489.287L122.557 331.175C124.517 328.574 125.578 325.405 125.578 322.147L125.578 235.853C125.578 232.595 124.517 229.426 122.557 226.825L3.39744 68.713C-0.574419 63.4428 -0.63524 56.1957 3.2476 50.8596L35.6147 6.37797Z"
                          fill="black"/>
                </svg>
            </div>
        </section>
    )
}