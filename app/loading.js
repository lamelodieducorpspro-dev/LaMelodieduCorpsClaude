import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navbar placeholder */}
      <div className="h-20 border-b border-[#E2DCD0] bg-cream/80 flex items-center px-6 md:px-10">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-5 w-48 ml-3" />
      </div>

      {/* Hero grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-16 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-14 w-4/5" />
          <Skeleton className="h-6 w-full mt-2" />
          <Skeleton className="h-6 w-3/4" />
          <div className="flex gap-3 pt-4">
            <Skeleton className="h-12 w-52 rounded-full" />
            <Skeleton className="h-12 w-44 rounded-full" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <Skeleton className="aspect-square w-full rounded-[2rem]" />
        </div>
      </div>

      {/* Cards grid */}
      <div className="bg-cream-2 py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Skeleton className="h-8 w-64 mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#E2DCD0] space-y-3">
                <Skeleton className="h-11 w-11 rounded-2xl" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
