import React from 'react'

function Contact() {
  return (
    <section id="contact" className="section has-img-bg pb-0">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-5 my-3">
        <h6 className="mb-0">Phone</h6>
        <p className="mb-4">+91 9354630854</p>
        <h6 className="mb-0">Address</h6>
        <p className="mb-4">Sector A/5 Narela Delhi 110040</p>
        <h6 className="mb-0">Email</h6>
        <p className="mb-0">info@lyricslayers.com</p>
        <p />
      </div>
      <div className="col-md-7">
        <form>
          <h4 className="mb-4">Drop Us A Line</h4>
          <div className="form-row">
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control text-white rounded-0 bg-transparent"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="email"
                className="form-control text-white rounded-0 bg-transparent"
                name="Email"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control text-white rounded-0 bg-transparent"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="form-group col-12">
              <textarea
                name="message"
                id=""
                cols={30}
                rows={4}
                className="form-control text-white rounded-0 bg-transparent"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="form-group col-12 mb-0">
              <button
                type="submit"
                className="btn btn-primary rounded w-md mt-3"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <footer className="mt-5 py-4 border-top border-secondary">
            <p className="mb-0 small">
                © Created By{" "}
                <a href="https://www.instagram.com/the.coder_3/" target="_blank">
                Aftab
                </a>{" "}
                All rights reserved{" "}
            </p>
    </footer>
  </div>

</section>

  )
}

export default Contact