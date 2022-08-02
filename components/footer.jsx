import Image from 'next/image';

export default function Footer() {
  return (
    <>
    <footer>
        <Image
          src="/Vaca-logo.svg"
          height={40}
          width={100}
          class="image"
        />
      <div class="footer-links">
        <a>Privacy Policy</a>
        <a>Privacy Policy</a>
        <a>Privacy Policy</a>
      </div>
    </footer>
    </>
  );
}