import Image from "next/image";
import phoneImage from "../assets/images/PhoneLoginSS.png";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-100vh">
      <div className="border-black border-2 rounded-md">
        <Image alt="phone" src={phoneImage} />
      </div>
      {/* login Form */}
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
