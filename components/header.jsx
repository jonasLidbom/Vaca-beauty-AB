import Image from 'next/image';

export default function Header() {
  return (
    <>
    <header>
      <div className={"container-fluid"}>
      {/* Logga */}
      <Image
        src="/Vaca-logo.svg"
        height={50}
        width={100}
      />
      </div>
    </header>
    </>
  );
}