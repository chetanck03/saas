import { FaFingerprint, FaUsers, FaWallet, FaLock, FaDatabase, FaCoins } from "react-icons/fa";
import Feature from "./Feature";
import Link from "next/link";

const features = [
  {
    title: "Kadesh Bio Smart",
    description:
      "Biometrically signed digital contracts. Sign your contracts with your biometric data. Thus, make them legally binding.",
    backwardText:
      "Bio Smart acts as an escrow service for the commercial contracts between two Kadesh system users who have completed fingerprint scanning and Face ID verification, and it also seeks to make the contracts legally binding by signing smart contracts with biometric data.",
    icon: <FaFingerprint className="text-blue-600 text-4xl" />,
  },
  {
    title: "Kadesh Will",
    description: "No more worrying about afterlife. Transfer your wallet assets to your heirs.",
    backwardText:
      "Kadesh Will allows the user to make an inheritance contract that activates automatically under predetermined conditions on the blockchain, letting the user transfer wallet assets to heirs in the event of the user’s death.",
    icon: <FaUsers className="text-blue-600 text-4xl" />,
  },
  {
    title: "Kadesh Box",
    description:
      "Lockbox service used by multiple users. A multi-user account in blockchain. Activates only when all users use their keys.",
    backwardText:
      "Kadesh Box is a multi-user lockbox service, which seeks to make confidential documents and transactions customized to individuals or organizations and only accessible when all users synchronically sign in.",
    icon: <FaLock className="text-blue-600 text-4xl" />,
  },
  {
    title: "Kadesh Wallet",
    description:
      "User and digital asset interface of Kadesh ecosystem. Safeguard your digital assets with a multi-layered security system.",
    backwardText:
      "Kadesh Wallet is a digital wallet application that allows users to manage their digital assets and perform payment, transfer, and contract transactions. With its multiple and random password mechanism, Kadesh Wallet is one-of-a-kind.",
    icon: <FaWallet className="text-blue-600 text-4xl" />,
  },
  {
    title: "Kadesh Chain",
    description:
      "Kadesh Chain is the distributed ledger unit in the Kadesh ecosystem that stores digital contracts and authentication data.",
    backwardText:
      "Data sent to the Kadesh Chain network is saved in blockchain databases that cannot be changed or exported. Users are hosted in these systems with their assigned ID. System security is provided by distributed database architecture.",
    icon: <FaDatabase className="text-blue-600 text-4xl" />,
  },
  {
    title: "KDS Token",
    description:
      "KDS is the funding token that will be used for transaction and commission payments in the Kadesh ecosystem built on the Kadesh Chain infrastructure.",
    backwardText:
      "KDS is the crypto token asset that will be used in all Kadesh projects and planned to be used to make commercial payments for a variety of services provided by businesses operating in various fields.",
    icon: <FaCoins className="text-blue-600 text-4xl" />,
  },
];

export const Features = () => {
  return (
    <section id="features">
      <div className="bg-black text-white py-[72px] sm:py-24">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Best Features
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center mt-5 text-xl text-white/70">
              Enjoy customizable lists, teamwork tools, and smart tracking all in one place. Set tasks,
              get reminders, and see your progress simply and quickly.
            </p>
          </div>
          {/* Responsive Grid Layout */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map(({ title, description, backwardText, icon }) => (
              <Feature
                key={title}
                title={title}
                description={description}
                backwardText={backwardText}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
