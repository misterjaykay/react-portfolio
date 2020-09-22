import React from 'react';

export default function ContactForm() {
    return(
        <form>
          <div className="form-group">
            <label for="formGroupNameInput">Name</label>
            <input type="text" className="form-control" id="formGroupNameInput" placeholder="John Smith" />
          </div>
          <div className="form-group">
            <label for="formGroupEmailInput">Email</label>
            <input type="text" className="form-control" id="formGroupEmailInput" placeholder="youremail@domain.com" />
          </div>
          <div className="form-group">
            <label for="msgFormControlTextarea">Message</label>
            <textarea className="form-control" id="msgFormControlTextarea" placeholder="Enter Your Message Here" rows="3"></textarea>
          </div>
          <div className="input-group">
            <div className="col-auto my-1">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            <div className="my-1 mx-1">
              <a className="mailtoui" href="mailto:misterjaykay@gmail.com">or Email Me</a>
            </div>
          </div>
        </form>
    )
}