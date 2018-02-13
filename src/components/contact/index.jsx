import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'I like messages.'}</h1>
    <p className={styles.email}>
      Say hello and send an email:<br />
      <a href="mailto:info@burq.fun?subject=Hello%20Shoaib!" className={styles.link}>info@burq.fun</a>
    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/sabman/">
          <Icon name="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://scholar.google.com/citations?hl=en&view_op=list_works&user=Pg-Ik9AAAAAJ">
          <Icon name="googlescholar" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://leanpub.com/u/sabman">
          <Icon name="leanpub" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://medium.com/@sabman/">
          <Icon name="medium" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/shoaibburq/">
          <Icon name="linkedin" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://twitter.com/sabman/">
          <Icon name="twitter" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.instagram.com/sabman">
          <Icon name="instagram" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://soundcloud.com/sabman">
          <Icon name="soundcloud" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Contact;
