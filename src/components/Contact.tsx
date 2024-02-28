import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );

    alert(
      "Your Information has been sent, thank you for contacting James Freitag!"
    );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center bg-neutral-800 pt-8"
    >
      <h4 className="text-3xl font-semibold underline text-white">Contact</h4>
      <form onSubmit={handleSubmit} className="max-w-[500px] p-6 text-xl">
        <label htmlFor="name" className="text-white font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="name"
          placeholder="Enter your name"
          className="w-full p-1 border mb-4 border-black"
        />
        <label htmlFor="email" className="text-white font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          placeholder="Enter your email"
          className="w-full p-1 border mb-4 border-black"
        />
        <label htmlFor="message" className="text-white font-semibold">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          id="message"
          cols={30}
          rows={10}
          placeholder="Enter message"
          className="w-full p-1 border mb-4 border-black"
        ></textarea>
        <button className="w-full py-4 text-white bg-neutral-950 hover:bg-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
