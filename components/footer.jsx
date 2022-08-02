import Image from 'next/image';

export default function Footer() {
  return (
    <>
    <footer>
      <div class="footer-logo">
        <Image
          src="/Vaca-logo.svg"
          height={40}
          width={100}
          class="image"
        />
      </div>
      <div class="footer-links">
        <a>Privacy Policy</a>
        <a>Privacy Policy</a>
        <a id="last-link">Privacy Policy</a>
      </div>
    </footer>
    </>
  );
}