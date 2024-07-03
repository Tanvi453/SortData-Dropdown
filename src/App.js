
import { useState } from 'react';
import './App.css';

function App() {

  const [student, setStudent] = useState({ fname: '', uname: '', email: '', password: '' })

  const [selected, setSelected] = useState("");

  const [data, setData] = useState(JSON.parse(localStorage.getItem("students")) || [])

  const handleChange = (e) => {
    console.log(e.target.name)
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    setData([...data, student]);
    localStorage.setItem("students", JSON.stringify([...data, student]))
  }
  console.log(data);
  console.log(student);

  const sorting = () => {

    if (selected === "w") {
      const sortdata = data.sort((a, b) => { return (a.fname > b.fname ? 1 : -1) });
      console.log(sortdata);
      setData([...sortdata]);

    }

    else if (selected === "x") {
      const sortdata = data.sort((a, b) => { return (a.uname > b.uname ? 1 : -1) });
      console.log(sortdata);
      setData([...sortdata]);

    }

    else if (selected === "y") {
      const sortdata = data.sort((a, b) => { return (a.email > b.email ? 1 : -1) });
      console.log(sortdata);
      setData([...sortdata]);

    }

    else if (selected === "z") {
      const sortdata = data.sort((a, b) => { return (a.password > b.password ? 1 : -1) });
      console.log(sortdata);
      setData([...sortdata]);

    }

  }


  return (

    <>
      <div>

        <div style={{ backgroundImage: "url(https://images.pexels.com/photos/961402/pexels-photo-961402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", height: "930px", width: "100%", backgroundSize: "cover" }} className='flex flex-col justify-center items-center'>

          <div className='flex flex-col items-center gap-[60px] ml-[35%]'>

            <div className='flex flex-col gap-3'>
              <label htmlFor='fname' className='text-2xl font-bold text-[#6a6146]'>Full Name:-</label>
              <input type='text' id='fname' name='fname' value={student.fname} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#c38b9a] ' />
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor='uname' className='text-2xl font-bold text-[#6a6146]'>User Name:-</label>
              <input type='text' id='uname' name='uname' value={student.uname} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#c38b9a]' />
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor='email' className='text-2xl font-bold text-[#6a6146]'>E-mail:-</label>
              <input type='email' id='email' name='email' value={student.email} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#c38b9a]' />
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor='password' className='text-2xl font-bold text-[#6a6146]'>Password:-</label>
              <input type='password' id='password' name='password' value={student.password} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#c38b9a]' />
            </div>

            <div>
              <button type='submit' onClick={() => handleSubmit()} className='bg-transparent h-[50px] w-[200px] rounded-md border-[#c38b9a] text-[#6a6146] text-2xl font-bold mt-[20px]'>Submit</button>
            </div>

          </div>

        </div>

        <div className='flex justify-center gap-[50px] mt-[50px]'>

          <div>
            <select onChange={(e) => setSelected(e.target.value)} className='h-[40px] w-[180px] bg-transparent text-[16px] font-bold text-[#6a6146] border-[#c38b9a] border-2'>
              <option value="">Select Field:</option>
              <option value="w">Full Name</option>
              <option value="x">User Name</option>
              <option value="y">E-mail</option>
              <option value="z">Password</option>
            </select>
          </div>

          <div>
            <button type="button" onClick={sorting} className='h-[40px] w-[150px] bg-transparent text-[16px] font-bold text-[#6a6146] border-[#c38b9a] border-2 text-[20px]'>Sort</button>
          </div>

        </div>

        <div className='flex justify-center mt-[5%]'>

          <table>
            <thead>
              <th>Full Name:</th>
              <th>User Name:</th>
              <th>E-mail:</th>
              <th>Password:</th>
            </thead>

            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                    <td>{item.fname}</td>
                    <td>{item.uname}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                  </tr>
                )
              })}
            </tbody>


          </table>

        </div>

      </div>

    </>
  );
}

export default App;
