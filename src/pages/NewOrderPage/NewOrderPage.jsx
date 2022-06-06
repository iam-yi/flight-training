export default function NewOrderPage() {
  return (
    <>
    <h1>NewOrderPage</h1>
    <div className="form-container">
    <form >
      <label>Instructor</label>
      <select value="instructor">
        <option value="JimC">Jim C</option>
        <option value="Step">Stephanie L</option>
        <option value="MarioM">Mario R</option>
      </select>
      <label>Hours: </label>
      <input type="text" name="hours" required />
      <label>Total Hours: </label>
      <input type="text" name="total-hours" required />
      <button type="submit">Check out</button>
    </form>
    </div>
    </>
  );
}