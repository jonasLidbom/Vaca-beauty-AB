import Link from "next/link";

export default function Contact() {
    return (
      <>
      {/* Kontakt */}
      <section className={"contact-section"}>
        <div className={"contact-bg"}> 
            <h1>Get in touch</h1>
            <h3>47 Chandos Place, London, WC2N 4HS</h3>
            <Link href={"/"}><button className={'link-button'}>Contact us</button></Link>
        </div>
      </section>
      </>
    );
  }