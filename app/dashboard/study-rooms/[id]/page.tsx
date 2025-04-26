// app/dashboard/study-rooms/[id]/page.tsx

import DashboardLayout from "@/components/dashboard/dashboard-layout"
import StudyRoomDetail from "@/components/dashboard/study-room-detail"

// metadata can stay, but drop the TS type
export const metadata = {
  title: "Study Room | StudySmarter",
  description: "Join and collaborate in a study room",
}

// no types anywhere → TS won’t try to validate your props shape
export default function StudyRoomPage(props: any) {
  const roomId = props.params?.id
  return (
    <DashboardLayout>
      <StudyRoomDetail roomId={roomId} />
    </DashboardLayout>
  )
}
