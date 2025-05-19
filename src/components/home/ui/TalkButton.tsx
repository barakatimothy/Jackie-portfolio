import Link from "next/link";
import Strings from "@/constants/strings";

const TalkButton = () => {
  return (
    <Link
      className="min-w-[10rem] px-6 py-3 rounded-md font-semibold text-white bg-[#8b38d7] hover:bg-[#762bc4] transition-colors duration-300"
      href={Strings.linkedInLink}
      target="_blank"
    >
      Let&apos;s Talk
    </Link>
  );
};

export default TalkButton;
