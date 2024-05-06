import styles from "./page.module.css";
import Image from "next/image";
import Logo from "../../../public/Assets/logo-dark.png";
import { TextInput, PasswordInput, Checkbox, Button } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import Link from "next/link";

const Signup = () => {
  return (
      <div className={styles.main}>
        <div className={styles.formContainer}>
          <div className={styles.logo}>
            <Image src={Logo} height={160} width={160} alt="Logo" />
          </div>
          <div className={styles.form}>
            <TextInput
              mt="md"
              label="Name"
              placeholder="Enter your Name"
              className="text-gray-600"
            />
            <TextInput
              mt="md"
              label="Email address"
              placeholder="Enter your email"
              className="text-gray-600"
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              className="mt-3 text-gray-600"
            />
            <Checkbox mt="lg" label="I accept Terms and Conditions" />
            <Button fullWidth className="mt-6">
              Sign Up
            </Button>
          </div>
        </div>
        <div className={styles.others}>
          <div className={styles.sign_up}>
            <p className={styles.no_account_text}>Already have an account ? </p>
            <span className={styles.signup}>
              <Link href="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
  );
};
export default Signup;
