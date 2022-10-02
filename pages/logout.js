import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import {useEffect} from "react";

function Logout() {
  const router = useRouter();

  useEffect(() => {
    async function callSignout() {
      try {
        await Auth.signOut().then(() => {
          router.push("/");
        });
      } catch (error) {
        console.log("error signing out: ", error);
      }
    }
    callSignout();
  }, [router]);

  return "Logging Out...";
}

export default Logout;
