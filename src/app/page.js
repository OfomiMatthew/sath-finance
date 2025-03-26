import Image from "next/image";
import styles from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faChartPie, faMoneyBillWave, faShieldAlt, faFileInvoiceDollar, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import StockInfo from "@/components/stockInfo/stockinfo";


export default function Home() {
  return (

    <div>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Innovative Finance Solutions Agency.</h1>
        <p className={styles.desc}>
          Harnessing the power of fintech, automation, and AI-driven solutions
          to enhance efficiency and financial accuracy.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        {/*<div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>*/}
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>

      
    </div>

    <div className={styles.sectionContainer}>
    <div className={styles.serviceWrapper}>
      <div className={styles.service}>
      <h1 className={styles.serviceText}>Our Services</h1>

      <div className={styles.cards}>
      <div className={styles.card}>
     
     <h2>Financial Planning & Advisory</h2>
     <p> Our tailored financial planning services help individuals and businesses set realistic goals, manage wealth, and achieve long-term financial security.</p>
      </div>

      <div className={styles.card}>

     <h2>Investment Strategy & Portfolio Management</h2>
     <p>We offer expert investment insights, risk assessments, and diversified portfolio management to ensure sustainable wealth growth.</p>
      </div>

      <div className={styles.card}>

     <h2>Business Financial Solutions</h2>
     <p>From budgeting and cash flow management to capital structuring, we help businesses optimize their financial health and profitability.</p>
      </div>

      <div className={styles.card}>

     <h2>Credit & Risk Management</h2>
     <p>Our risk assessment and credit optimization services help individuals and businesses navigate financial uncertainties with confidence.</p>
      </div>

      <div className={styles.card}>

     <h2>Tax Planning & Compliance</h2>
     <p>We provide personalized tax strategies to minimize liabilities and ensure full regulatory compliance for individuals and businesses.</p>
      </div>

      <div className={styles.card}>

      <h2>Digital Banking & Payment Solutions</h2>
      <p>We integrate modern digital banking solutions, payment gateways, and fintech innovations to enhance financial accessibility and security.</p>
       </div>
      </div>
      </div>
    </div>
  </div>
{/*<StockInfo /> */}
  </div>
  );
}
