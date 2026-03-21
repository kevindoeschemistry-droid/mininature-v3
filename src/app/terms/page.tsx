import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for the MiniNature Reserve website, a 501(c)(3) nonprofit dedicated to restoring native plants in urban environments.",
};

export default function TermsPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-16">
        <div className="container-site">
          <div className="max-w-xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              Legal
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Please review these terms carefully before using the MiniNature
              Reserve website and services.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site py-16 max-w-3xl">
        <p className="text-sm text-forest-mid mb-10">
          Effective Date: January 1, 2025 &middot; Last Updated: January 1, 2025
        </p>

        {/* Acceptance */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            By accessing or using the website operated by MiniNature Reserve
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a
            501(c)(3) nonprofit organization based in Oxnard, California, you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use the website.
          </p>
          <p className="text-forest-mid leading-relaxed">
            These terms apply to all visitors, supporters, volunteers, donors,
            and users of the site located at mininaturereserve.org.
          </p>
        </section>

        {/* Use of Site */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Use of the Website
          </h2>
          <p className="text-forest-mid leading-relaxed mb-3">
            You agree to use the website only for lawful purposes and in a
            manner that does not infringe on the rights of others or restrict
            their use and enjoyment of the site. Prohibited conduct includes but
            is not limited to:
          </p>
          <ul className="list-disc list-inside text-forest-mid leading-relaxed space-y-1.5 pl-2">
            <li>
              Using the site in any way that violates applicable local, state,
              or federal law
            </li>
            <li>
              Attempting to gain unauthorized access to any part of the website
              or its systems
            </li>
            <li>
              Uploading or transmitting viruses, malware, or other harmful code
            </li>
            <li>
              Scraping, data mining, or using automated tools to collect
              information from the site without permission
            </li>
            <li>
              Misrepresenting your identity or affiliation with MiniNature
              Reserve
            </li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Intellectual Property
          </h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            All content on this website, including text, images, graphics,
            logos, photographs, videos, and design elements, is the property of
            MiniNature Reserve or its content providers and is protected by
            United States copyright and trademark laws.
          </p>
          <p className="text-forest-mid leading-relaxed mb-4">
            You may view, download, and print content from this website for
            personal, non-commercial use only, provided you do not remove any
            copyright or proprietary notices. Any other use, including
            reproduction, distribution, modification, or republication, requires
            our prior written consent.
          </p>
          <p className="text-forest-mid leading-relaxed">
            The MiniNature Reserve name, logo, and all related marks are
            trademarks of MiniNature Reserve. You may not use these marks
            without our express written permission.
          </p>
        </section>

        {/* Donations and Refunds */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Donations &amp; Refunds
          </h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            MiniNature Reserve is a tax-exempt 501(c)(3) organization. Donations
            made through our website are tax-deductible to the extent permitted
            by law. You will receive a donation receipt via email for your
            records.
          </p>
          <p className="text-forest-mid leading-relaxed mb-4">
            All donations are final. If you believe a donation was made in
            error, please contact us within 30 days at{" "}
            <a
              href="mailto:info@mininature.org"
              className="text-reserve-green hover:underline"
            >
              info@mininature.org
            </a>{" "}
            and we will review your request on a case-by-case basis.
          </p>
          <p className="text-forest-mid leading-relaxed">
            For merchandise purchases made through our online shop, please refer
            to the specific return and refund policies displayed at the time of
            purchase. Generally, merchandise may be returned in unused condition
            within 30 days for a full refund.
          </p>
        </section>

        {/* Volunteer and Program Participation */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Volunteer &amp; Program Participation
          </h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            Participation in MiniNature Reserve volunteer activities, workshops,
            and events may require you to sign additional waivers, agreements, or
            consent forms. By registering for events through our website, you
            acknowledge that outdoor activities carry inherent risks and agree to
            follow all safety guidelines provided by our staff.
          </p>
          <p className="text-forest-mid leading-relaxed">
            We reserve the right to refuse or revoke participation for any
            individual who does not comply with our code of conduct or safety
            protocols.
          </p>
        </section>

        {/* User Submissions */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            User Submissions
          </h2>
          <p className="text-forest-mid leading-relaxed">
            If you submit content to us through the website, including
            photographs, stories, comments, or other materials, you grant
            MiniNature Reserve a non-exclusive, royalty-free, perpetual license
            to use, reproduce, modify, and display that content in connection
            with our mission, programs, and promotional materials. You represent
            that you own or have the necessary rights to any content you submit.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Third-Party Links
          </h2>
          <p className="text-forest-mid leading-relaxed">
            Our website may contain links to third-party websites, services, or
            resources. These links are provided for your convenience and do not
            imply endorsement. We are not responsible for the content, privacy
            practices, or availability of any linked sites. Your use of
            third-party sites is at your own risk and subject to their respective
            terms and policies.
          </p>
        </section>

        {/* Disclaimer of Warranties */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Disclaimer of Warranties
          </h2>
          <p className="text-forest-mid leading-relaxed">
            The website and all content are provided &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo; without warranties of any kind, either
            express or implied. MiniNature Reserve makes no warranties regarding
            the accuracy, completeness, reliability, or availability of the
            website or its content. We do not warrant that the site will be
            uninterrupted, error-free, or free of viruses or other harmful
            components.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Limitation of Liability
          </h2>
          <p className="text-forest-mid leading-relaxed">
            To the fullest extent permitted by applicable law, MiniNature
            Reserve, its directors, officers, employees, volunteers, and agents
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or related to your
            use of, or inability to use, the website. This includes, without
            limitation, damages for loss of data, revenue, or profits, even if
            we have been advised of the possibility of such damages.
          </p>
        </section>

        {/* Indemnification */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Indemnification
          </h2>
          <p className="text-forest-mid leading-relaxed">
            You agree to indemnify, defend, and hold harmless MiniNature Reserve
            and its directors, officers, employees, and volunteers from and
            against any and all claims, damages, losses, liabilities, costs, and
            expenses (including reasonable attorneys&apos; fees) arising out of
            your use of the website, your violation of these terms, or your
            infringement of any third-party rights.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Governing Law
          </h2>
          <p className="text-forest-mid leading-relaxed">
            These Terms of Service are governed by and construed in accordance
            with the laws of the State of California, without regard to its
            conflict of laws principles. Any disputes arising under these terms
            shall be resolved in the state or federal courts located in Ventura
            County, California.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Changes to These Terms
          </h2>
          <p className="text-forest-mid leading-relaxed">
            We reserve the right to modify these Terms of Service at any time.
            Changes will be effective immediately upon posting to the website. We
            will update the &ldquo;Last Updated&rdquo; date at the top of this
            page when changes are made. Your continued use of the website after
            any changes constitutes your acceptance of the revised terms.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Contact Us
          </h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please
            contact us:
          </p>
          <div className="bg-white rounded-organic border border-lichen-cream p-6">
            <p className="text-deep-forest font-semibold mb-1">
              MiniNature Reserve
            </p>
            <p className="text-forest-mid text-sm mb-1">
              Oxnard, CA &middot; Ventura County
            </p>
            <p className="text-forest-mid text-sm mb-1">
              Email:{" "}
              <a
                href="mailto:info@mininature.org"
                className="text-reserve-green hover:underline"
              >
                info@mininature.org
              </a>
            </p>
            <p className="text-forest-mid text-sm">
              Phone:{" "}
              <a
                href="tel:+18058168732"
                className="text-reserve-green hover:underline"
              >
                (805) 816-8732
              </a>
            </p>
          </div>
        </section>

        {/* Footer link */}
        <div className="border-t border-lichen-cream pt-8 flex flex-wrap gap-4">
          <Link
            href="/privacy"
            className="text-sm text-reserve-green hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="text-sm text-reserve-green hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
