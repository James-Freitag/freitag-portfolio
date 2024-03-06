import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  const [modal, setModal] = useState(false);
  const form = useRef();

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   console.log(`Name: ${formData.name},
  //   Email: ${formData.email},
  //   Message: ${formData.message}`);

  //   toggleModal();
  //   setFormData({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  // };
  const sendEmail = (e: any) => {
    e.preventDefault();
    toggleModal();
    // setFormData({
    //   name: "",
    //   email: "",
    //   message: "",
    // });

    emailjs
      .sendForm("service_nzwg885", "template_3ejdg4f", form.current, {
        publicKey: "l-fv6uRuqrUAlZgxW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error: any) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const toggleModal = () => {
    setModal(true);
    autoCloseModal();
  };
  const closeModal = () => {
    setModal(false);
  };

  const autoCloseModal = () => {
    setTimeout(() => {
      closeModal();
    }, 5000);
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center bg-neutral-800 pt-8"
    >
      <h4 className="text-3xl font-semibold underline text-white">Contact</h4>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-[500px] p-6 text-xl"
      >
        <label htmlFor="name" className="text-white font-semibold">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          // value={formData.name}
          // onChange={handleChange}
          id="name"
          placeholder="Enter your name"
          className="w-full p-1 border mb-4 border-black"
          required
        />
        <label htmlFor="email" className="text-white font-semibold">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          // value={formData.email}
          // onChange={handleChange}
          id="email"
          placeholder="Enter your email"
          className="w-full p-1 border mb-4 border-black"
          required
        />
        <label htmlFor="message" className="text-white font-semibold">
          Message
        </label>
        <textarea
          name="message"
          // value={formData.message}
          // onChange={handleChange}
          id="message"
          cols={30}
          rows={10}
          placeholder="Enter message"
          className="w-full p-1 border mb-4 border-black"
          required
        ></textarea>
        {/*---------------------------------------------------- HONEYPOT FIELD START ------------------------------------------------------------ */}
        <label
          htmlFor="city"
          className="absolute opacity-0 top-0 left-0 h-0 w-0 z-[-1]"
          tabIndex={-1}
        ></label>
        <input
          type="text"
          placeholder="Enter your city"
          autoComplete="off"
          name="city"
          id="city"
          className="absolute opacity-0 top-0 left-0 h-0 w-0 z-[-1]"
          tabIndex={-1}
        />
        <label
          htmlFor="country"
          className="absolute opacity-0 top-0 left-0 h-0 w-0 z-[-1]"
          tabIndex={-1}
        ></label>
        <input
          type="text"
          placeholder="Enter your country"
          autoComplete="off"
          name="country"
          id="country"
          className="absolute opacity-0 top-0 left-0 h-0 w-0 z-[-1]"
          tabIndex={-1}
        />
        <label
          htmlFor="middle name"
          className="absolute opacity-0 top-0 left-0 h-0 w-0 z-[-1]"
          tabIndex={-1}
        ></label>
        <input
          type="text"
          placeholder="Enter your middle name"
          autoComplete="off"
          name="middle name"
          id="middle name"
          className="absolute opacity-0 top-0 left-0 h-0 w-0 z-[-1]"
          tabIndex={-1}
        />
        {/*---------------------------------------------------- HONEYPOT FIELD END ---------------------------------------------------------------*/}
        <button className="w-full py-4 text-white bg-neutral-950 hover:bg-black">
          Submit
        </button>
      </form>
      {modal && (
        <div
          id="modal"
          className="fixed bottom-64 right-10 bg-green-900 text-white rounded-xl shadow-xl w-[400px] h-[150px] p-2 flex justify-between items-center mx-auto"
        >
          <div onClick={autoCloseModal}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-800 size-7 rounded-full"
            >
              X
            </button>
          </div>
          <div>
            <p className="text-xl pb-2 font-semibold">Message sent!</p>
            <p className="text-lg text-gray-300">
              Thank you for contacting me, I look forward to having a
              conversation with you!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
