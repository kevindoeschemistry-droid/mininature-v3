import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for MiniNature Reserve, a 501(c)(3) nonprofit restoring native plants in urban environments.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Your privacy matters to us. This policy explains how MiniNature
              Reserve collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site py-16 max-w-3xl">
        <p className="text-sm text-forest-mid mb-10">
          Effective Date: January 1, 2025 &middot; Last Updated: January 1, 2025
        </p>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Introduction
          </h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            MiniNature Reserve (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is a 501(c)(3) nonprofit organization
            headquartered in Oxnard, California. We are committed to protecting
            the privacy of our supporters, volunteers, donors, and website
            visitors. This Privacy Policy describes how we collect, use, share,
            and safeguard your information when you visit our website at
            mininaturereserve.org or interact with our programs and services.
          </p>
          <p className="text-forest-mid leading-relaxed">
            By using our website, you agree to the practices described in this
            policy. If you do not agree, please discontinue use of the site.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Information We Collect
          </h2>

          <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
            Information You Provide
          </h3>
          <p className="text-forest-mid leading-relaxed mb-3">
            We may collect personal information that you voluntarily provide when
            you:
          </p>
          <ul className="list-disc list-inside text-forest-mid leading-relaxed mb-6 space-y-1.5 pl-2">
            <li>Make a donation or purchase merchandise</li>
            <li>Sign up for our newsletter or mailing list</li>
            <li>Register for an event, workshop, or volunteer opportunity</li>
            <li>Submit a contact form or send us an email</li>
            <li>Apply to start a chapter or host a reserve installation</li>
          </ul>
          <p className="text-forest-mid leading-relaxed mb-6">
            This information may include your name, email address, mailing
            address, phone number, and payment details (processed securely
            through third-party payment processors).
          </p>

          <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
            Information Collected Automatically
          </h3>
          <p className="text-forest-mid leading-relaxed mb-3">
            When you visit our website, we may automatically collect certain
            technical information, including:
          </p>
          <ul className="list-disc list-inside text-forest-mid leading-relaxed space-y-1.5 pl-2">
            <li>IP address and approximate geographic location</li>
            <li>Browser type, device type, and operating system</li>
            <li>Pages visited, time spent on pages, and referring URLs</li>
            <li>Cookies and similar tracking technologies (see below)</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            How We Use Your Information
          </h2>
          <p className="text-forest-mid leading-relaxed mb-3">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-forest-mid leading-relaxed space-y-1.5 pl-2">
            <li>Processing donations and issuing tax receipts</li>
            <li>Sending newsletters, event updates, and program information</li>
            <li>Coordinating volunteer activities and chapter operations</li>
            <li>Responding to inquiries and providing supporter services</li>
            <li>
              Improving our website, programs, and user experience through
              analytics
            </li>
            <li>Complying with legal obligations and nonprofit reporting requirements</li>
          </ul>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Cookies &amp; Tracking Technologies
          </h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            Our website uses cookies and similar technologies to enhance your
            browsing experience. Cookies are small text files stored on your
            device that help us remember your preferences and understand how
            visitors use our site.
          </p>
          <p className="text-forest-mid leading-relaxed mb-3">We use:</p>
          <ul className="list-disc list-inside text-forest-mid leading-relaxed space-y-1.5 pl-2 mb-4">
            <li>
              <strong>Essential cookies</strong> &mdash; required for the
              website to function properly
            </li>
            <li>
              <strong>Analytics cookies</strong> &mdash; help us understand
              traffic patterns and improve the site
            </li>
            <li>
              <strong>Preference cookies</strong> &mdash; remember your settings
              and choices
            </li>
          </ul>
          <p className="text-forest-mid leading-relaxed">
            You can manage or disable cookies through your browser settings.
            Disabling cookies may affect certain features of the website.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Third-Party Services
          </h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            We may share limited information with trusted third-party service
            providers who assist us in operating our website, processing
            donations, sending communications, and analyzing site usage. These
            providers are contractually obligated to protect your data and use it
            only for the services they provide to us.
          </p>
          <p className="text-forest-mid leading-relaxed mb-4">
            We do not sell, rent, or trade your personal information to third
            parties for marketing purposes.
          </p>
          <p className="text-forest-mid leading-relaxed">
            We may disclose your information if required by law, court order, or
            governmental regulation, or if we believe disclosure is necessary to
            protect our rights, the safety of our users, or the public.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Data Security
          </h2>
          <p className="text-forest-mid leading-relaxed">
            We implement reasonable administrative, technical, and physical
            safeguards to protect your personal information from unauthorized
            access, alteration, disclosure, or destruction. However, no method
            of electronic transmission or storage is completely secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            Our website is not directed at children under the age of 13. We do
            not knowingly collect personal information from children under 13
            without verifiable parental consent. If you believe we have
            inadvertently collected information from a child under 13, please
            contact us immediately so we can delete it.
          </p>
          <p className="text-forest-mid leading-relaxed">
            For our school programs and youth volunteer events, we collect only
            the information necessary to facilitate participation and always
            require parental or guardian consent.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Your Rights
          </h2>
          <p className="text-forest-mid leading-relaxed mb-3">
            Depending on your location, you may have certain rights regarding
            your personal information, including the right to:
          </p>
          <ul className="list-disc list-inside text-forest-mid leading-relaxed space-y-1.5 pl-2 mb-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>
          <p className="text-forest-mid leading-relaxed">
            California residents may have additional rights under the California
            Consumer Privacy Act (CCPA). To exercise any of these rights, please
            contact us using the information below.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Changes to This Policy
          </h2>
          <p className="text-forest-mid leading-relaxed">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or applicable law. When we make material
            changes, we will update the &ldquo;Last Updated&rdquo; date at the
            top of this page and, where appropriate, notify you via email or a
            prominent notice on our website.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Contact Us
          </h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us:
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
            href="/terms"
            className="text-sm text-reserve-green hover:underline"
          >
            Terms of Service
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
