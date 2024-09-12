import type { Metadata } from 'next';

import Accordion from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Samahan 2024',
  description: 'The official Samahan 2024 Website.',
};

export default function Home() {
  return (
    <main className="m-32">
      test{/* add sections here */}
      <Accordion
        title="How long do we keep your information?"
        content={
          <>
            <p>
              We keep your information for as long as necessary to fulfill the
              purposes outlined in this privacy notice unless otherwise required
              by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice unless a
              longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than 1 year. When we have no ongoing legitimate business
              need to process your personal information, we will either delete
              or anonymize such information, or, if this is not possible (for
              example, because your personal information has been stored in
              backup archives), then we will securely store your personal
              information and isolate it from any further processing until
              deletion is possible.
            </p>
          </>
        }
      />
      <Accordion
        title="Do we process any sensitive personal information?"
        content={
          <>
            <p>We do not process sensitive personal information.</p>
          </>
        }
      />
    </main>
  );
}
