export default class EntryModal extends React.Component {
  render() {
    if (!this.props.showModal) {
      return null;
    }
    return (
      <div className="entry-modal">
        <form>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" />
          <br />
          <label htmlFor="description">Description: </label>
          <textarea placeholder="entry info" name="description" />
          <br />
          <label htmlFor="entry-parent">Parent Entry: </label>
          <select name="entry-parent">
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="xp">XP</option>
            <option value="difficulty">Difficulty</option>
          </select>
          <br />
          <label htmlFor="entry-type">Entry Type: </label>
          <select name="entry-type">
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="xp">XP</option>
            <option value="difficulty">Difficulty</option>
          </select>
          <br />
          <label htmlFor="entry-difficulty">Difficulty: </label>
          <input
            type="number"
            name="entry-difficulty"
            min="1"
            max="10"
            // defaultValue={entry.difficulty}
          />{" "}
          <br />
          <label htmlFor="entry-completed">Completed: </label>
          <input
            type="checkbox"
            name="entry-completed"
            value="True"
            // defaultChecked={entry.completed}
          />
          <br />
          <input type="hidden" name="user" value="" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
