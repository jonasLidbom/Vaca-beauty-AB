import Link from "next/link";

export default function Contact() {
    return (
      <>
      {/* Kontakt */}
      <section class="contact-section">
        <div class="contact-bg"> 
            <h1>Get in touch</h1>
            <h3>47 Chandos Place, London, WC2N 4HS</h3>
            <Link href={"/"}><button class='link-button'>Contact us</button></Link>
        </div>
      </section>
      </>
    );
  }