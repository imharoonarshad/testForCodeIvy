"use client";
import Dashboard from "@/components/Dashboard/Dashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if window object is available (browser environment)
    if (typeof window !== 'undefined') {
      // Access localStorage to check for token
      const token = localStorage.getItem("token");
      if (!token) {
        // If token is not present, navigate to user registration page
        router.push("/user-registration");
      }
    }
  }, [router]);

  return (
    <>
        <DefaultLayout>
          <Dashboard />
        </DefaultLayout>
    </>
  );
}
