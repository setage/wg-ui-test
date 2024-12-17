import ButtonGroup from "../ButtonGroup/ButtonGroup";
import SelectedItem from "../SelectedItem/SelectedItem";

function Dialog() {
  return (
    <form>
      <div>
        <h1>Select items</h1>
        <button>x</button>
      </div>

      <div>
        <div>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" name="search" />
        </div>
        <div>
          <label htmlFor="filter">Filter</label>
          <select id="filter" name="filter">
            <option value="">No filter</option>
            <option value="10">{">10"}</option>
            <option value="100">{">100"}</option>
            <option value="200">{">200"}</option>
          </select>
        </div>
      </div>

      <div>
        <input type="checkbox" name="element-1" id="element-1" value={1} />{" "}
        <label htmlFor="element-1">Element 1</label>
      </div>

      <p>Currently selected items:</p>
      <ButtonGroup>
        <SelectedItem name="Element 5" />
        <SelectedItem name="Element 51" />
      </ButtonGroup>

      <ButtonGroup>
        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
      </ButtonGroup>
    </form>
  );
}

export default Dialog;
