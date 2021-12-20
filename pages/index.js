import styles from '../styles/Home.module.css'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from '../components/CustomForm'
import {useEffect, useState} from "react";
import axios from "axios";

// store u and id in env
const u = '6e3c7e1a0a99bb0fe0a924924'
const id = '25635f88a1'

const unsub = 'https://gmail.us5.list-manage.com/unsubscribe?u=6e3c7e1a0a99bb0fe0a924924&id=25635f88a1'
const url = 'https://gmail.us5.list-manage.com/subscribe/post?u='+ u + '&id=' + id

export default function Home() {
    const [email, setEmail] = useState('')

    useEffect(() => {
        fetch("https://gmail.us5.list-manage.com/subscribe/post?u=6e3c7e1a0a99bb0fe0a924924&amp;id=25635f88a1", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({EMAIL: 'test@test.com'})}).then(

        )
    })
    const onClickHandler = () => {
        fetch("https://gmail.us5.list-manage.com/subscribe/post?u=6e3c7e1a0a99bb0fe0a924924&id=25635f88a1", {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({EMAIL: 'test@test.com'})}).then(

        )
    }
    return (
    <div className={styles.container}>
        <button onClick={() => onClickHandler()}>send req</button>
    {/*  <MailchimpSubscribe*/}
    {/*      url={url}*/}
    {/*      // render={({ subscribe, status, message }) => (*/}
    {/*      //     <CustomForm*/}
    {/*      //         status={status}*/}
    {/*      //         message={message}*/}
    {/*      //         onValidated={formData => subscribe(formData)}*/}
    {/*      //     />*/}
    {/*      // )}*/}
    {/*  />*/}
    </div>
  )
}
