import '../Style/Issue.css'

const Issue = () => {
    return (
     <>
      <form className='form'>
      <div style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}} className="container1">
      <h1 style={{margintop:1,fontweight:'bold',textAlign:'center'}}>Issue Item</h1>
      <div className='labelInput'>
        <label className='label'>Category:</label>
        <select id="item_category" class="form-control" name="Category" required>
              <option value="">-- Select an option --</option>
          </select>
      </div>
      <div className='labelInput'>
          <label className='label'>Sub Category:</label>
        <select id="item_category" class="form-control" name="Category" required>
              <option value="">-- Select an option --</option>
          </select>
      </div>
      <div className='labelInput'>
          <label className='label'>Quantity:</label>
        <select id="item_category" class="form-control" name="Category" required>
              <option value="">-- Select an option --</option>
          </select>
      </div>
      <div className='labelInput'>
          <label className='label'>Employee Name:</label>
        <select id="item_category" class="form-control" name="Category" required>
              <option value="">-- Select an option --</option>
          </select>
      </div>
      <div className='labelInput'>
          <label className='label'>Remark:</label>
          <input id="remarks" class="form-control" type="text" name="remarks" />
      </div>
      <div className='labelInput'>
          <button id="button" type="submit" disabled>Submit</button>
      </div>
      </div>
      </form>
     </>
    );
  };
  
  export default function ViewIssue(){
    return <Issue/>
}