"use client"
import React from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { motion, AnimatePresence } from "framer-motion";

// Define types for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

interface Items {
  general: FAQItem[];
  privateSaleAndIDO: FAQItem[];
  token: FAQItem[];
}

// Define the items object with the specific type
const items: Items = {
  general: [
    {
      question: "What is a blockchain?",
      answer:
        "A blockchain is a distributed, cryptographically-secure database structure that allows network participants to establish a trusted and immutable record of transactional data without the need for intermediaries. A blockchain can execute a variety of functions beyond transaction settlement, such as smart contracts. Smart contracts are digital agreements that are embedded in code and that can have limitless formats and conditions. Blockchains have proven themselves as superior solutions for securely coordinating data, but they are capable of much more, including tokenization, incentive design, attack-resistance, and reducing counter party risk. The very first blockchain was the Bitcoin blockchain, which itself was a culmination of over a century of advancements in cryptography and database technology.",
    },
    {
      question: "What is a blockchain database?",
      answer:
        "Historically, databases have incorporated a centralized client-server architecture, in which a sole authority controls the central server. This design means that data security, alteration, and deletion rests with a single point of failure. The decentralized architecture of blockchain databases emerged as a solution for many of the weaknesses of centralized database architecture. A blockchain network consists of a large number of distributed nodes––voluntary participants who must reach consensus and maintain a single transactional record together.",
    },
    {
      question: "How does a blockchain work?",
      answer:
        "When a digital transaction occurs in a blockchain network, it is grouped together in a cryptographically-secure “block” with other transactions that have occurred in the same time frame. The block is then broadcast to the network. A blockchain network is comprised of nodes or participants who validate and relay transaction information. The block of transactions is verified by participants called miners, who use computing power to solve a cryptographic puzzle and validate the block of transactions. The first miner to solve and validate the block is rewarded. Each verified block is connected to the previously verified block, creating a chain of blocks.",
    },
    {
      question: "What is a block in blockchain ?",
      answer:
        "The “block” in a blockchain refers to a block of transactions that has been broadcast to the network. The “chain” refers to a string of these blocks. When a new block of transactions is validated by the network, it is attached to the end of an existing chain. This chain of blocks is an ever-growing ledger of transactions that the network has validated. We call this single, agreed-upon history of transactions a blockchain. Only one block can exist at a given chain height. There are several ways to add new blocks to an existing chain. These are often termed “proofs,” i.e. Proof of Work (PoW), Proof of Stake (PoS), and Proof of Authority (PoA). All involve cryptographic algorithms with varying degrees of complexity.",
    },
    {
      question: "What is Kadesh?",
      answer:
        "Kadesh is an ecosystem that allows users to organize and biometrically sign smart contracts.",
    },
    {
      question: "What is Kadesh Wallet ?",
      answer:
        "Kadesh Wallet is a digital wallet application that allows users to manage their digital assets and perform payment, transfer, and contract transactions.",
    },
    {
      question: "What is Kadesh Chain?",
      answer:
        "Kadesh Chain is the distributed ledger unit in the Kadesh ecosystem that stores digital contracts and authentication data.",
    },
    {
      question: "What is Kadesh Token?",
      answer:
        "KDS is the funding token that will be used for transaction and commission payments in the Kadesh ecosystem built on the Kadesh Chain infrastructure.",
    },
  ],
  privateSaleAndIDO: [
    {
      question: "How can I participate in the private sale?",
      answer:
        "The KDS token private sale process is carried out only through the official telegram channel of Kadesh Chain. Our official telegram channel: https://t.me/kadeshchain",
    },
    {
      question: "When will the Kadesh Chain IDO take place?",
      answer:
        "The Kadesh Chain IDO will be start 1 week after the KDS token private sale process ends.",
    },
    {
      question: "Where will the KDS token IDO be held?",
      answer:
        "Information about the KDS token IDO process will be made through our official social media and community channels, 1 week before the end of the KDS token private sale process.",
    },
    {
      question: "Will the tokens I purchased appear in my wallet immediately after the private sale?",
      answer:
        "Private sale buyers will receive their tokens on a schedule. 10% of the total amount of tokens purchased for each within 10 months following the pre-sale process.",
    },
  ],
  token: [
    {
      question: "What will be the KDS token usage areas?",
      answer:
        "In the Kadesh ecosystem, KDS token will be used as a payment and commission instrument in all transactions.",
    },
    {
      question: "Is the KDS token subject to any transfer commission?",
      answer:
        "No, there isn't any TAX or transfer commisions.",
    },
  ],
};

const AccordionItem = ({ question, answer, isOpen, setIsOpen }: { question: string; answer: string; isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      key={question}
      className="py-6 border-b border-white/30 cursor-pointer transition-all duration-300"
    >
      <div className="flex items-center text-white">
        <span className="flex-1 text-lg font-semibold">{question}</span>
        {isOpen ? <MinusIcon className="text-gray-400" /> : <PlusIcon className="text-gray-400" />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }} // Adjust maxHeight to control vertical size
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-300 mt-2 overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  const [openSection, setOpenSection] = React.useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<"general" | "privateSaleAndIDO" | "token">("general");

  const handleCategoryChange = (category: "general" | "privateSaleAndIDO" | "token") => {
    setSelectedCategory(category);
    setOpenSection(null); // Reset accordion state when changing category
  };

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently Asked Questions
        </h2>

        {/* Filter Section */}
        <div className="mt-8 flex justify-center gap-6">
          <button
            onClick={() => handleCategoryChange("general")}
            className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${selectedCategory === "general" ? "bg-gray-700 text-white" : "hover:bg-gray-600"}`}
          >
            General
          </button>
          <button
            onClick={() => handleCategoryChange("privateSaleAndIDO")}
            className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${selectedCategory === "privateSaleAndIDO" ? "bg-gray-700 text-white" : "hover:bg-gray-600"}`}
          >
            Private Sale & IDO
          </button>
          <button
            onClick={() => handleCategoryChange("token")}
            className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${selectedCategory === "token" ? "bg-gray-700 text-white" : "hover:bg-gray-600"}`}
          >
            Token
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 max-w-[1200px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items[selectedCategory].map(({ question, answer }) => (
            <AccordionItem
              key={question}
              question={question}
              answer={answer}
              isOpen={openSection === question}
              setIsOpen={(value) => setOpenSection(value ? question : null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
