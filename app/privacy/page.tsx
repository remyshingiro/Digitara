import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 14, 2026">
      <p>
        At Digitara, we are committed to protecting the privacy and security of our clients and website visitors. This policy describes how we collect, use, and safeguard your personal information in compliance with the laws of the Republic of Rwanda.
      </p>

      <hr />

      <h2>1. Information We Collect</h2>
      <p>
        We collect information that you provide directly to us through our contact forms, email communications, and project discovery sessions. This may include:
      </p>
      <ul>
        <li><strong>Identity Data:</strong> Name, company name, and job title.</li>
        <li><strong>Contact Data:</strong> Email address, phone number, and location.</li>
        <li><strong>Project Data:</strong> Information regarding your business requirements and technical specifications.</li>
      </ul>

      <h2>2. Use of Information</h2>
      <p>
        Digitara uses the collected data for specific, limited purposes:
      </p>
      <ul>
        <li>To provide, maintain, and improve our high-performance software services.</li>
        <li>To communicate with you regarding project updates and inquiries.</li>
        <li>To analyze website performance and user experience using localized edge-computing metrics.</li>
      </ul>

      <h2>3. Data Protection (Law Nº 058/2021)</h2>
      <p>
        In accordance with the <strong>Rwandan Law Relating to the Protection of Personal Data and Privacy</strong>, we implement strict technical and organizational measures to prevent unauthorized access or disclosure of your data. We utilize encrypted databases and secure Go-based backend architectures to ensure data integrity.
      </p>

      <h2>4. Your Rights</h2>
      <p>
        You have the right to request access to the personal data we hold about you, to request corrections, or to ask for the deletion of your data. To exercise these rights, please contact our data compliance officer at the email provided below.
      </p>
    </LegalLayout>
  );
}