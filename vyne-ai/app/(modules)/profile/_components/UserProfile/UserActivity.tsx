import { userActivityData } from "@/data/userActivityData";
import ActivityCalendar from "react-activity-calendar";

const UserActivity = () => {

  return (
    <div className="p-6 space-y-4 rounded-xl">
      {/* <div>Activity</div> */}
      <div className=" p-2  rounded-md border border-neutral-800 ">
        <ActivityCalendar
          data={userActivityData}
          colorScheme="dark"
          blockSize={9}
          blockMargin={6}
          hideMonthLabels={true}
          hideColorLegend={true}
          hideTotalCount={true}

        />
      </div>
    </div>
  );
};

export default UserActivity;
