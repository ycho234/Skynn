"use client";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const auth = getAuth(app);

const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("user");
        router.push("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
