import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__address">
          <span className="footer__name">Адреса</span>
          <a
            className="footer__link" 
            href="https://maps.app.goo.gl/iQSN8Cmrsk5tkQiz9"
            target="_blank"
            rel="noreferrer"
          >
            вул. Сирецька 9, Київ, 04073 БЦ «Маяк», офіс 20
          </a>
        </div>
  
        <div className="footer__contacts">
          <span className="footer__name">Контакти</span>
          <a
            className="footer__link" 
            href="mailto:sales@osis.com.ua"
            target="_blank"
            rel="noreferrer"
          >
            sales@osis.com.ua
          </a>
  
          <a
            className="footer__link" 
            href="tel:+3800445009605"
            target="_blank"
            rel="noreferrer"
          >
            (044) 500-96-05
          </a>
        </div>
  
        <div className="footer__social">
          <span className="footer__name">Ми в соцмережах</span>
          <div className="footer__social-icons">
            <a 
              className="footer__link footer__link--linkedin"
              href="https://www.linkedin.com/company/osis/?trk=top_nav_home"
              target="_blank"
              rel="noreferrer"
              title="linkedin of company"
            />
    
            <a 
              className="footer__link footer__link--facebook"
              href="https://www.facebook.com/osis.com.ua"
              target="_blank"
              rel="noreferrer"
              title="facebook of company"
            />
          </div>
        </div>
  
        <div className="footer__develop">
          <span className="footer__name">Розроблено</span>
  
          <a
            className="footer__link footer__link--linkedin-develop" 
            href="https://www.linkedin.com/in/dmytro-astapenko-31136426a/"
            target="_blank"
            rel="noreferrer"
          >
            Dmytro Astapenko
          </a>
  
          <a
            className="footer__link footer__link--linkedin-develop" 
            href="https://www.linkedin.com/in/kateryna-dzhyma/"
            target="_blank"
            rel="noreferrer"
          >
            Kateryna Dzhyma
          </a>
  
          <a
            className="footer__link footer__link--linkedin-develop" 
            href="https://www.linkedin.com/in/viktor-beniukh-68a77b279/"
            target="_blank"
            rel="noreferrer"
          >
            Viktor Beniukh
          </a>
	      </div>
      </div>
    </footer>
  )
}