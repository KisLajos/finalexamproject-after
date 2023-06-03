import ContactLinks from "@/components/ContactLinks";
import NonHomeHeader from "@/components/NonhomeHeader";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import Image from 'next/image';
import styles from './styles.module.scss';

export default async function Kapcsolat() {
    const page = await getPageDataBySlug("kapcsolat")
    //console.log(page)

    return (
        <div>
            <NonHomeHeader content={page.title.rendered}/>
            <div className={styles.contactPageContainer}>
                <div className={styles.contactPageHeaders}>
                    <h2>Keress minket bizalommal!</h2>
                    <h3>
                        Nagyon szuper és gördülékeny készülődést<br/>
                        kívánunk Nektek a NAGY NAPOTOKIG!
                    </h3>
                </div>

                <div className={styles.contactDetailsBackground}>
                    <div className={styles.contactDetailsContainer}>
                        <div className={styles.contactPageLogoContainer}>
                            <Image src={"http://finalexamprojectafter-wp.lajoskis.dk/wp-content/uploads/2023/06/diolevel.zold_-scaled.jpg"} alt='Logo' width={200} height={200}/>
                        </div>
                        <ContactLinks/>
                    </div>
                </div>
            </div>
        </div>
    );
}

//export default Kapcsolat;