
import footerLogo from "/src/assets/IMAGE (1).svg"
export default function Footer() {
  return (
  <footer className="mx-auto container  ">
    <div className="flex flex-col items-center border-t-2  relative bottom-0">
      <img src={footerLogo} alt="" className="flex-1 max-w-44" />
      <p>&copy;Mashkhura Zokirova </p>
    </div>
  </footer>
  )
}
