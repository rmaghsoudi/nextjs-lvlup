export default function LvlupSection() {
  return (
    <div className="lvlup-section">
      Im the lvlup section, wus gud
      <progress
        id="lvlup-meter"
        value={dummyUser.xp}
        max={dummyUser.xp_to_lvlup}
      >
        Level {dummyUser.level}
      </progress>
      <label htmlFor="lvlup-meter">
        {dummyUser.xp}xp / {dummyUser.xp_to_lvlup}xp
      </label>
    </div>
  );
}

const dummyUser = {
  id: 1,
  auth_id: "auth | 78263t 12341",
  level: 1,
  xp: 1000,
  xp_to_lvlup: 1515,
};
