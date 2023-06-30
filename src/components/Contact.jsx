import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (ev) => {
    setContactData({
      ...contactData,
      [ev.target.name] : ev.target.value,
    });
  }

  const handleClear = () => {
    if(!contactData.name || !contactData.email || !contactData.message){
      toast.warning("Please fill in the required fields.", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      return;
    }
    setTimeout(() => {
      setContactData({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  }

  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form 
          action="https://getform.io/f/fe1eaee1-67fd-4ca4-8174-399100b1f22c"
          method="POST"
          encType="multipart/form-data"
          className="flex flex-col max-w-[600px] w-full"
        >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">\\ Submit the form below or shoot me an email - shaktisthaaa7@gmail.com</p>
        </div>
        <input 
            className="bg-[#ccd6f6] p-2" 
            type="text" 
            placeholder="Name" 
            name="name"  
            value={contactData.name}
            onChange={handleChange}
            required
            />
        <input 
            className="my-4 p-2 bg-[#ccd6f6]" 
            type="text" 
            placeholder="Email" 
            name="email" 
            value={contactData.email}
            onChange={handleChange}
            required
            />
        <textarea 
            className="bg-[#ccd6f6] p-2" 
            name="message" 
            rows="10" 
            placeholder="Message" 
            value={contactData.message}
            onChange={handleChange}
            required
            ></textarea>
        <button 
            onClick={handleClear}
            className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 duration-300 py-3 px-4 my-8 mx-auto">Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact;