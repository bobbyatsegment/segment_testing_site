import { Link, Routes, Route } from 'react-router-dom';
import './Docs.css'
import DocAlert from '../../components/DocAlert/DocAlert';

const Docs = () => {
  return (
    <div>
      <h1>Documentation</h1>
      <ul>
        <li><Link to="/docs/phone">Phone Docs</Link></li>
        <li><Link to="/docs/setup">Setup Docs (Placeholder)</Link></li>
      </ul>

      <Routes>
        <Route path="phone" element={<PhoneDocs />} />
        <Route path="setup" element={<SetupDocs />} />
      </Routes>
    </div>
  );
};

const PhoneDocs = () => (
<section className='docs-module'>
    <div className='phone-docs'>
        <h2>Phone Numbers</h2>
        <p>Twilio's virtual phone numbers give you instant access to local, national, mobile, and toll-free phone numbers in over 100 countries for your voice call and messaging applications.
    Leverage local phone numbers for your customers to call and text, or use your own number.</p>
        <p>To verify that you and your customers don't receive unwanted calls and text messages meant for previous owners, every phone number available through the Phone Numbers API goes through a rigorous screening process, including meticulous testing of network providers.</p>
        <p>With the Phone Numbers APIs, you can search for and buy available Twilio phone numbers, manage your Twilio numbers, port a phone number you own to Twilio, and more.</p>
        <DocAlert type="info" title="Info">
            If you are an Australian Consumer customer, Twilio's Critical Information Summary (CIS) can be found <a href="https://docs-resources.prod.twilio.com/documents/CriticalInformationSummaryTwilioPhoneNumbers.docx" target="_blank">here</a>.
        </DocAlert>
    </div>
</section>
);

const SetupDocs = () => (
  <div>
    <h2>Setup Documentation</h2>
    <p>Coming soon...</p>
  </div>
);

export default Docs;