import StatCounter from "@/components/ui/StatCounter";
import { Map, Leaf, Users, Clock, TreePine } from "lucide-react";
import { IMPACT_STATS } from "@/lib/data";

export default function ImpactBar() {
  return (
    <section className="bg-reserve-green py-12">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <StatCounter
            value={IMPACT_STATS.sqFtRestored}
            label="sq ft restored"
            icon={<Map size={22} />}
            dark
          />
          <StatCounter
            value={IMPACT_STATS.nativePlants}
            label="native plants"
            icon={<Leaf size={22} />}
            dark
          />
          <StatCounter
            value={IMPACT_STATS.volunteers}
            label="volunteers"
            icon={<Users size={22} />}
            dark
          />
          <StatCounter
            value={IMPACT_STATS.volunteerHours}
            label="volunteer hours"
            icon={<Clock size={22} />}
            dark
          />
          <StatCounter
            value={IMPACT_STATS.activeLocations}
            label="active locations"
            suffix=""
            icon={<TreePine size={22} />}
            dark
          />
        </div>
      </div>
    </section>
  );
}
