"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        "group rounded-lg border-[0.5px] border-neutral-800/60",
        "transition-all duration-200 ease-in-out",
        isOpen
          ? "bg-linear-to-br via-white/2 from-white/5 via-zinc-50/50 to-white/5"
          : "hover:bg-white/[0.02]",
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-2 py-4"
      >
        <h3
          className={cn(
            "text-left text-base font-medium transition-colors duration-200",
            "text-zinc-300",
            isOpen && "text-white",
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "shrink-0 rounded-full p-0.5",
            "transition-colors duration-200",
            isOpen ? "text-white" : "text-zinc-500",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-sm leading-relaxed text-neutral-400"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQ() {
  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "What is Statsio?",
      answer:
        "Statsio is a minimal, privacy-friendly analytics tool built for developers. It helps you track page views, unique visitors, countries, browsers, and device types without complexity.",
    },
    {
      question: "Can I export my analytics data?",
      answer:
        "Yes! Statsio allows you to easily export your analytics data in CSV format, so you can analyze or share insights anytime you need.",
    },
    {
      question: "What kind of data does Statsio track?",
      answer:
        "Statsio tracks page views, unique visitors, and device types (mobile or desktop). It's built to give you just the insights you actually need.",
    },
    {
      question: "Is Statsio free to use?",
      answer:
        "Yes! Statsio is completely free and open-source, making it accessible to developers who need simple and transparent analytics without added cost.",
    },
    {
      question: "Can I self-host Statsio?",
      answer:
        "Yes, Statsio is open-source and can be self-hosted for full control. You can also contribute to the project or extend it as needed.",
    },
    {
      question: "Which frameworks does Statsio support?",
      answer:
        "Statsio works with any website or frontend framework. Simply add the tracking script and you're ready to go.",
    },
  ];

  return (
    <section className="bg-linear-to-b w-full from-transparent via-white/[0.02] to-transparent py-24">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <motion.div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-3 bg-black bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
            Let&apos;s Answer Your Questions
          </h2>
          <p className="text-sm text-zinc-400">
            Everything you need to know about our platform
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default FAQ;
