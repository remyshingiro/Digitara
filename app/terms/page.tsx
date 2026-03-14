import LegalLayout from "@/components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="March 14, 2026">
      <p>
        These Terms of Service ("Terms") govern your access to and use of the services provided by <strong>Digitara</strong> ("we," "us," or "our"). By engaging our services or using our website, you agree to be bound by these Terms.
      </p>

      <hr />

      <h2>1. Scope of Services</h2>
      <p>
        Digitara provides professional software engineering, web development, and digital strategy services. The specific scope, milestones, and deliverables for any project will be outlined in a separate <strong>Service Level Agreement (SLA)</strong> or Statement of Work (SOW) signed by both parties.
      </p>

      <h2>2. Client Obligations</h2>
      <p>
        To ensure the successful delivery of high-performance digital assets, clients agree to:
      </p>
      <ul>
        <li>Provide timely feedback and approvals during the design and development phases.</li>
        <li>Furnish necessary brand assets, content, and third-party access (e.g., domain registrars) as required.</li>
        <li>Ensure that all provided materials do not infringe upon the intellectual property rights of third parties.</li>
      </ul>

      <h2>3. Intellectual Property Rights</h2>
      <p>
        We believe in full transparency regarding code ownership:
      </p>
      <p>
        Upon receipt of final payment, Digitara transfers all <strong>Intellectual Property (IP)</strong> rights and source code for the custom-built solution to the Client. We retain the right to use the completed project in our professional portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) specifies otherwise.
      </p>

      <h2>4. Payment Terms & Milestones</h2>
      <p>
        Our standard payment structure involves a 50% commencement fee and a 50% completion fee for standard projects. For enterprise-scale development, we utilize a milestone-based billing system. All payments are non-refundable once the development phase has begun, as resources are allocated immediately to ensure sub-second performance and regional scalability.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        Digitara utilizes modern tech stacks (React, Go, Cloudflare) to ensure maximum security and uptime. However, we shall not be held liable for any indirect, incidental, or consequential damages resulting from third-party hosting failures, external API outages, or security breaches on client-managed servers after the hand-off.
      </p>

      <h2>6. Governing Law</h2>
      <p>
        These Terms and any project contracts shall be governed by and construed in accordance with the <strong>Laws of the Republic of Rwanda</strong>. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Kigali, Rwanda.
      </p>

      <h2>7. Modifications to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify clients of significant changes via email or through a clear notice on our website. Continued use of our services following such changes constitutes acceptance of the new Terms.
      </p>
    </LegalLayout>
  );
}