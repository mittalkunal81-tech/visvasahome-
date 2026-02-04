
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoaderPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/user"); 
    }, 1500); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={styles.loaderWrapper}>
      <div style={styles.logoRow}>
        <div style={styles.logoBox}>VC</div>
        <span style={styles.logoText}>Visavasa Company</span>
      </div>

      <div style={styles.progressBar}>
        <div style={styles.progress} />
      </div>
    </div>
  );
}

const styles = {
  loaderWrapper: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  logoBox: {
    width: "40px",
    height: "40px",
    background: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    fontWeight: "700",
  },
  logoText: {
    fontSize: "22px",
    fontWeight: "600",
  },
  progressBar: {
    width: "260px",
    height: "4px",
    background: "#e5e5e5",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progress: {
    width: "100%",
    height: "100%",
    background: "#6a4cff",
    animation: "loading 2.5s linear",
  },
};

