import Legal from '../legal';
export const metadata = {
  title: 'Privacy Policy | Legacy Estate Capital',
  description: 'How Legacy Estate Capital handles website enquiries and technical information.',
  alternates: {
    canonical: '/privacy/'
  }
};
export default function Privacy() {
  return <Legal title="Privacy Policy">
  <p>This policy describes information handled through the Legacy Estate Capital website. Contact Colette Louise at <a href="mailto:colette@legacyestatecapital.com">colette@legacyestatecapital.com</a> with privacy questions or requests.</p>
  <h2>Information we receive</h2>
  <p>The enquiry form collects your name, email address, optional company, transaction state, requested service and message. Hosting and email providers may also process technical information such as IP addresses, request times, device or browser details and delivery logs. Please do not include identification documents, banking information, contracts or other sensitive transaction records in this form.</p>
  <h2>How we use information</h2>
  <p>We use enquiries to respond, evaluate requested services and discuss possible onboarding. Technical information supports website operation, security and abuse prevention. Requesting a response does not authorize marketing calls or texts. We do not use advertising trackers or analytics scripts on this website.</p>
  <h2>Providers and disclosures</h2>
  <p>Our website is hosted on Namecheap infrastructure. Enquiry information is stored in a private folder on the hosting account, outside the public website directory. We also attempt to send an email notification through the hosting mail service to the business email inbox; email delivery depends on the receiving mailbox and provider. We may disclose information when reasonably necessary to comply with law, protect rights or investigate misuse. We do not sell enquiry information or share it for targeted advertising.</p>
  <h2>Retention and security</h2>
  <p>Enquiries may remain in private hosting records and business email records while needed to respond, maintain business records or meet legal obligations. Retention may vary with the purpose and applicable law. The form uses encrypted HTTPS in transit. Security measures reduce risk but do not guarantee that information can never be accessed improperly. Abuse controls use a temporary hashed network identifier, separately from privately stored enquiry records.</p>
  <h2>Cookies and your choices</h2>
  <p>This website does not intentionally set advertising or analytics cookies. Hosting or security infrastructure may process technical data necessary to operate the service. You can choose not to submit the form and contact us by email instead.</p>
  <h2>Privacy requests</h2>
  <p>You may request access, correction or deletion of enquiry information by emailing the address above. Rights and applicable exceptions depend on your jurisdiction. We may need to verify a request before acting on it. We will handle applicable privacy requests as required by law.</p>
  <h2>Children and changes</h2>
  <p>This business website is intended for adults and is not directed to children under 13. If a child has submitted information, contact us to request removal. We may update this policy; the date above identifies the latest version.</p>
  </Legal>;
}
