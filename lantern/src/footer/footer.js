import React from 'react';

// Footer to contain contact information for noschoolviolence - David
// Modeled after nsv's current site - David

const Footer = () => {
  return (
    <footer>
      <div className="Footer-Small-Screen">
      <p><a href='https://www.noschoolviolence.org'>NOSCHOOLVIOLENCE.ORG</a></p>
      <p><a href='mailto:contact@noschoolviolence.org'>CONTACT@NOSCHOOLVIOLENCE.ORG</a></p>
      <p>1 206.319.3578</p>
      <p>Seattle, WA</p>
      </div>
      <div className="Footer-Wide-Screen">
      <p><a href='https://www.noschoolviolence.org'>NOSCHOOLVIOLENCE.ORG</a> &nbsp;| &nbsp;
      <a href='mailto:contact@noschoolviolence.org'>CONTACT@NOSCHOOLVIOLENCE.ORG</a> &nbsp;|&nbsp;
      206-319-3578&nbsp; | &nbsp;Seattle, WA</p>
      </div>
    </footer>
  )
}

export default Footer;
