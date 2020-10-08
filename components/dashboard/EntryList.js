import EntryCard from "./EntryCard";

class EntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: props.entries };
  }

  handleSort = (e) => {
    const sortedEntries = [...this.props.entries].sort((a, b) => {
      return a[e.target.value] > b[e.target.value];
    });
    this.setState({ entries: sortedEntries });
  };

  handleFilter = (e) => {};

  render() {
    return (
      <div className="entry-list">
        <label for="sort">Sort by:</label>

        <select name="sort" onChange={(e) => this.handleSort(e)}>
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="completed">Completion</option>
          <option value="xp">XP</option>
          <option value="difficulty">Difficulty</option>
        </select>

        <label for="filter">Filter by:</label>

        <select name="filter" onChange={(e) => this.handleFilter(e)}>
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="completed">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        {this.state.entries.length > 0
          ? this.state.entries.map((entry) => {
              return <EntryCard entry={entry} />;
            })
          : "You don't have any entries yet :("}
      </div>
    );
  }
}

export default EntryList;
