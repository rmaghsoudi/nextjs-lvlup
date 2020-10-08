import EntryCard from "./EntryCard";

class EntryList extends React.Component {
  constructor(props) {
    super(props);
    // filters out the completed entries (API sends all entries belonging to a user)
    const entries = this.filterEntries(props.entries, false);
    this.state = { entries };
  }

  handleSort = (e) => {
    const sortedEntries = [...this.state.entries].sort((a, b) => {
      return a[e.target.value] > b[e.target.value];
    });
    this.setState({ entries: sortedEntries });
  };

  handleFilter = (e) => {
    let filteredEntries = [];
    if (e.target.value === "completed") {
      filteredEntries = this.filterEntries([...this.props.entries], true);
    } else if (e.target.value === "incomplete") {
      filteredEntries = this.filterEntries([...this.props.entries], false);
    }
    this.setState({ entries: filteredEntries });
  };
  // filters entries based on whether they're completed or not, value is the boolean for completion
  filterEntries = (arr, value) => {
    const filteredArr = [...arr].filter((entry) => {
      return entry.completed === value;
    });
    return filteredArr;
  };

  render() {
    return (
      <div className="entry-list">
        <label htmlFor="sort">Sort by:</label>

        <select name="sort" onChange={(e) => this.handleSort(e)}>
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="xp">XP</option>
          <option value="difficulty">Difficulty</option>
        </select>

        <label htmlFor="filter">Filter by:</label>
        <select name="filter" onChange={(e) => this.handleFilter(e)}>
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="completed">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>

        <button className="btn-add-entry" onClick={this.props.toggleModal}>
          Add Entry
        </button>

        {this.state.entries.length > 0
          ? this.state.entries.map((entry) => {
              return <EntryCard key={entry.id} entry={entry} />;
            })
          : "You don't have any entries yet :("}
      </div>
    );
  }
}

export default EntryList;
