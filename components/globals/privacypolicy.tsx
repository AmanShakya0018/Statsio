"use client";
import React from "react";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "@/components/globals/pageheader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "../landingpage/navbar-shrink";
import Footer from "../landingpage/footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="container mx-auto max-w-[88rem] p-6 pt-12">
        <PageHeader>
          <PageHeaderHeading className="bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text py-2 pr-2 text-transparent">
            Privacy Policy
          </PageHeaderHeading>
          <PageHeaderDescription className="text-neutral-100">
            Your privacy is important to us.
          </PageHeaderDescription>
        </PageHeader>
        <Card className="mt-6 border-zinc-800 bg-transparent p-4 text-neutral-100">
          <CardContent>
            <h2 className="mb-4 text-xl font-semibold">Overview</h2>
            <p className="mb-4">
              We respect your privacy and are committed to ensuring that your
              personal information remains secure. We collect personal data from
              users only to enhance the features and functionality of our
              platform. All data collected is used fairly and transparently,
              with the user&apos;s consent. Additionally, users have full
              control over their data and may request its deletion at any time.
            </p>
            <h2 className="mb-4 text-xl font-semibold">Future Updates</h2>
            <p className="mb-4">
              If we introduce new features in the future that require the
              collection of personal data, we will update this policy
              accordingly and ensure that you are informed in advance. Any such
              changes will adhere to applicable laws and prioritize your privacy
              and security. We are committed to providing clear and concise
              information about any updates to this policy.
            </p>
            <p className="mb-4">
              Additionally, we will provide clear options for you to control the
              sharing of your information, ensuring that you remain in full
              control of your data at all times. Our goal is to maintain the
              highest level of transparency and user empowerment, building a
              relationship based on trust and respect.
            </p>
            <h2 className="mb-4 text-xl font-semibold">Get in Touch</h2>
            <p className="mb-4">
              If you have any questions or feedback about this policy, feel free
              to contact us on Twitter by clicking the button below. We are
              always open to hearing from our users and value your input in
              helping us improve our platform and policies.
            </p>
            <Button>
              <a
                href="https://twitter.com/AmanShakya0018"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Support
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
