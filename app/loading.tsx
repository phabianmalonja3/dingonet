import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image
        src="/preloader.svg"
        alt="Loading..."
        className="w-16 h-16 animate-spin"
        width={64}
        height={64}
      />
    </div>
  );
}

