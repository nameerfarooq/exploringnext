"use client";
import { useRouter } from "next/navigation";

const LearnUseRouter = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/admin/profile")}>
        go to admin profile
      </button>
    </div>
  );
};

export default LearnUseRouter;
