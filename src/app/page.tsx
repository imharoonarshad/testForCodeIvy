"use client";
import Dashboard from "@/components/Dashboard/Dashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check local storage for token on initial render
    const token = localStorage.getItem("token");
    if (!token) {
      // If token is not present, navigate to user registration page
      router.push("/user-registration");
    }
  }, []);

  return (
    <>
        <DefaultLayout>
          <Dashboard />
        </DefaultLayout>
    </>
  );
}
