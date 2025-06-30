"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href={`/`}>
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <h1>EnvoyCast</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src={`/assets/icons/star.svg`}
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              EnvoyCast makes screen recording easy, From quick walkthroughs to
              full presentations, it's fast, smooth, and shareable in seconds
            </p>
            <article>
              <Image
                src={`/assets/images/jason_voorhees.png`}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full aspect-square"
              />
              <div>
                <h2>Jason Voorhees</h2>
                <p>Software Engineer, @Friday13thDev</p>
              </div>
            </article>
          </section>
        </div>
        <p>© EnvoyCast {new Date().getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="Logo"
              width={40}
              height={40}
            />
            <h1>EnvoyCast</h1>
          </Link>
          <p>
            Create and share your <span>EnvoyCast</span> video!
          </p>
          <button onClick={handleSignIn}>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default Page;
