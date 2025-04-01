"use client"

import Image from "next/image";
import styles from "./home.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faTimes } from "@fortawesome/free-solid-svg-icons";



export default function Home() {
  const [open,setOpen] = useState(false);

  const changeModal = ()=>{
    setOpen(!open);
  }
  return (

    <div>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Innovative Insurance Solutions Agency.</h1>
        <p className={styles.desc}>
        Leveraging fintech, automation, and AI-driven solutions to streamline insurance processes and enhance policy accuracy.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        
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
     
     <h2>Insurance Planning & Advisory</h2>
     <p> Secure your future with expert insurance guidance. Our tailored insurance planning services help individuals and businesses choose the right coverage, manage risk, and ensure long-term financial protection.</p>
      </div>

      <div className={styles.card}>

     <h2>Risk Assessment & Policy Management</h2>
     <p>Optimize your coverage with data-driven insights. We provide in-depth risk assessments and customized policy management strategies to safeguard assets and ensure financial stability.</p>
      </div>

      <div className={styles.card}>

     <h2>Business Insurance Solutions</h2>
     <p>Protect your business with comprehensive coverage. From liability and property insurance to employee benefits, we help businesses mitigate risks and secure long-term success.</p>
      </div>

      <div className={styles.card}>

     <h2>Claims & Risk Management</h2>
     <p>Navigate claims with confidence. Our claims support and risk mitigation services ensure a smooth process, helping individuals and businesses recover from unforeseen events efficiently.

     </p>
      </div>

      <div className={styles.card}>

     <h2>Regulatory Compliance & Tax Efficiency</h2>
     <p>Stay compliant while maximizing benefits. We provide expert guidance on insurance regulations and tax strategies to help policyholders optimize coverage and financial returns.</p>
      </div>

      <div className={styles.card}>

      <h2>Digital Insurance & Fintech Solutions</h2>
      <p>Revolutionizing insurance with technology. We integrate AI-driven underwriting, seamless digital claims processing, and secure payment solutions to enhance accessibility and customer experience.</p>
       </div>
      </div>
      </div>
    </div>
  </div>
<div>

</div>

<div>
      {/* Chatbot Toggle Button */}
      <button onClick={changeModal} className={styles.chatbotButton}>
        <FontAwesomeIcon icon={open ? faTimes : faCommentDots} />
      </button>

      {/* Chatbot Window */}
      {open && (
        <div className={styles.chatbotContainer}>
          <iframe
            src="https://copilotstudio.microsoft.com/environments/Default-804b1c9a-f4c5-498c-a4ab-71f1e249e369/bots/cr9fb_agent/webchat?__version__=2"
            className={styles.widgetIframe}
            frameBorder="0"
            title="Copilot Assistant"
          />
        </div>
      )}
    </div>

  </div>
  );
}
