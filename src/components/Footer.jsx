import '../styles/Footer.css';

export const Footer = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <footer className="bg-dark text-light py-4">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 mb-4">
                      <h5>Contactos</h5>
                      <p></p>
                      <p></p>
                  </div>
  
                  <div className="col-md-4 mb-4">
                      <h5>Enlaces</h5>
                      <ul className="row list-unstyled">
                          <li className='col-6 mb-3'><a href="#" className='text-decoration-none custom-link'>Categorias</a></li>
                          <li className='col-6 mb-3'><a href="#" className='text-decoration-none custom-link'>Nootbooks</a></li>
                          <li className='col-6 mb-3'><a href="#" className='text-decoration-none custom-link'>Smartphone</a></li>
                          <li className='col-6 mb-3'><a href="#" className='text-decoration-none custom-link'>Promociones</a></li>
                          <li className='col-6 mb-3'><a href="#" className='text-decoration-none custom-link'>Cuenta</a></li>
                          <li className='col-6 mb-3'><a href="#" className='text-decoration-none custom-link'>Ayuda</a></li>
                      </ul>
                  </div>
  
                  <div className="col-md-4 mb-4">
                      <h5>Siguenos</h5>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                         <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                         <i className="fab fa-facebook"></i>
                      </a>
                      <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                         <i className="fab fa-x"></i>
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-light"></a>
                      <i className='fab fa-youtube'></i>
                      <div className="mt-2">
                          <h5>Métodos de pago</h5>
                          <i className="fa-brands fa-cc-visa me-2"></i>
                          <i className="fa-brands fa-cc-mastercard me-2"></i>
                          <i className="fa-brands fa-paypal me-2"></i>
                          <i className="fa-solid fa-bitcoin-sign"></i>
                      </div>
                  </div>
              </div>
  
              <div className="row">
                  <div className="col-12 text-center mt-3">
                      <p>&copy; 2024 MegaStore. Todos los derechos reservados.</p>
                      <button className="btn btn-primary" onClick={scrollToTop}>Volver al principio</button>
                  </div>
              </div>
          </div>
  
      </footer>
    );
  };