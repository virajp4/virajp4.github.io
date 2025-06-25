export default function Footer() {
  return (
    <footer
      className="max-w-screen-xl mx-auto w-full py-10 mb-10 flex flex-col justify-between items-start gap-2 font-light"
      id="contact"
    >
      <FooterLink href="mailto:viraj.patel482@gmail.com" style="text-lg">
        viraj.patel482@gmail.com
      </FooterLink>
      <div className="flex justify-start items-center gap-5">
        <FooterLink href="https://github.com/virajp4/">Github</FooterLink>
        <FooterLink href="https://linkedin.com/in/virajpatel4/">LinkedIn</FooterLink>
        <FooterLink href="https://x.com/virajCodes/">Twitter</FooterLink>
      </div>
    </footer>
  );
}

function FooterLink({ href, children, target = "_blank", style = "" }) {
  return (
    <a
      href={href}
      target={target}
      className={`text-white hover:opacity-60 transition-all duration-250 ease-in text-md ${style}`}
    >
      {children}
    </a>
  );
}
