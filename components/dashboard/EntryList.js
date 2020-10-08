import EntryCard from "./EntryCard";

export default function EntryList() {
  return (
    <div className="entry-list">
      Hello I am the entry list, pleased to meet you
      {dummyEntries.length > 0
        ? dummyEntries.map((entry) => {
            return <EntryCard entry={entry} />;
          })
        : "You don't have any entries yet :("}
    </div>
  );
}

const dummyEntries = [
  {
    id: 1,
    name: "Take out trash",
    completed: false,
    description: "",
    parent_entry: null,
    user: 1,
    type: "task",
    difficulty: 2,
    xp: 200,
  },
  {
    id: 2,
    name: "Write out weekly plan",
    completed: true,
    description: "what will you be doing daily? how'll your days be carved up?",
    parent_entry: null,
    user: 1,
    type: "task",
    difficulty: 5,
    xp: 500,
  },
  {
    id: 3,
    name: "Clean apartment",
    completed: false,
    description: "",
    parent_entry: null,
    user: 1,
    type: "task",
    difficulty: 7,
    xp: 700,
  },
  {
    id: 4,
    name: "Get groceries",
    completed: true,
    description: "get veggies, sum meat, und peper tewels",
    parent_entry: null,
    user: 1,
    type: "task",
    difficulty: 3,
    xp: 300,
  },
  {
    id: 5,
    name: "Make a web app",
    completed: false,
    description: "create a full stack web app to add to your portfolio",
    parent_entry: null,
    user: 1,
    type: "goal",
    difficulty: 5,
    xp: 5000,
  },
  {
    id: 6,
    name: "complete API",
    completed: true,
    description: "",
    parent_entry: 5,
    user: 1,
    type: "pillar",
    difficulty: 5,
    xp: 2500,
  },
  {
    id: 7,
    name: "complete UI",
    completed: false,
    description: "",
    parent_entry: 5,
    user: 1,
    type: "pillar",
    difficulty: 5,
    xp: 2500,
  },
];
