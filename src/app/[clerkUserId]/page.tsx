import Head from '../components/Head';
import MidSection from '../components/MidSection';

interface PageProps {
  params: { clerkUserId: string };
}

export default async function page({
  params,
}: {
  params: Promise<{ clerkUserId: string }>
}) {
  const { clerkUserId } = await params

  return (
    <div className="min-h-screen flex-col w-screen bg-background text-foreground">
      <Head />
      <MidSection cui={clerkUserId} />
    </div>
  )
}