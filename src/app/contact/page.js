export default function Contact() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Send us a message</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-outline-danger fw-4 border-none">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Contact Information</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-geo-alt me-2"></i>
                  123 Street, City, Country
                </li>
                <li className="mb-3">
                  <i className="bi bi-envelope me-2"></i>
                  info@example.com
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone me-2"></i>
                  (123) 456-7890
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 