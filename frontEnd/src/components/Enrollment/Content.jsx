import Input from "../UI/FloatingInput"
const Content = () => {

  return (
    <>
      <div className="content p-2">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col"></div>
              <div className="col-2">
                <Select  />
              </div>
            </div>
            <div className="row">
              <div className="col py-2">
                <Input idName='idNumber' placeholder='ID Number' type='text' />
              </div>
              <div className="col py-2">
                <select name="studentTypeSelect" id="studentTypeSelect">
                  <option value="jhs">Junior </option>
                </select>
              </div>
              <div className="col py-2">
                <Input idName='firstName' placeholder='First Name' type='text' />
              </div>
              <div className="col py-2">
                <Input idName='middleName' placeholder='Middle Name' type='text' />
              </div>
              <div className="col py-2">
                <Input idName='lastName' placeholder='Last Name' type='text' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


function Select({}) {
  return (<select name="studentTypeSelect" id="studentTypeSelect" className="form-select form-select-lg fs-6 mb-3 shadow-sm">
              <option value="new">New</option>
              <option value="old" disabled>Old</option>
              <option value="trans" disabled>Transferee</option>
            </select>);
}
export default Content