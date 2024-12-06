import React, { useState } from "react";

const ContactSection = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [alert, setAlert] = useState({ visible: false, message: "" });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "El nombre es requerido.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "El nombre solo debe contener letras.";
    }

    if (!formData.email) {
      newErrors.email = "El correo es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El correo no es válido.";
    }

    if (!formData.phone) {
      newErrors.phone = "El número de teléfono es requerido.";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "El número de teléfono solo debe contener números.";
    }

    if (!formData.message) {
      newErrors.message = "El mensaje es requerido.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setAlert({
        visible: true,
        message:
          "¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.",
      });

      setTimeout(() => setAlert({ visible: false, message: "" }), 5000);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="bg-deep-green text-white py-16 px-4 sm:px-6 lg:px-12"
      id="contacto"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-12">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-6 font-ptSerif uppercase">
              Contáctanos
            </h2>
            <p className="text-lg mb-4 font-hind">
              En Celestia Roofworks, transformamos techos en obras de arte.
              Somos una empresa dedicada a ofrecer soluciones de techado premium
              que combinan innovación, estética y funcionalidad.
            </p>
            <p className="text-lg mb-4 font-hind">
              Nuestra misión es proteger y embellecer hogares con diseños
              exclusivos y materiales de la más alta calidad.
            </p>
            <p className="flex items-center gap-2 font-hind">
              📍 Dirección: Ciudad, País
            </p>
            <p className="flex items-center gap-2 font-hind">
              📞 Teléfono: 000-000-0000
            </p>
          </div>

          <div className="lg:w-1/2 h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24721.285120461842!2d-89.59149025063817!3d13.986996357279265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e8a88f74c611%3A0x334dedcda18267cd!2sSanta%20Ana!5e1!3m2!1ses!2ssv!4v1733504641666!5m2!1ses!2ssv"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 text-center lg:text-left py-12">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-bold mb-4 font-ptSerif">
              ¿Tienes preguntas o necesitas ayuda?
            </h3>
            <p className="text-lg mb-6 font-hind">
              Déjanos tus datos y nuestro equipo estará encantado de ayudarte a
              resolver tus dudas y proporcionarte toda la información que
              necesites sobre nuestros servicios.
            </p>
            <p className="text-lg font-hind">
              Estamos comprometidos con ofrecer soluciones rápidas y
              personalizadas. Completa el formulario a continuación, y uno de
              nuestros especialistas se pondrá en contacto contigo lo antes
              posible.
            </p>
          </div>

          <form
            className="lg:w-1/2 w-full max-w-lg bg-opacity-90"
            onSubmit={handleSubmit}
            noValidate
          >
            {alert.visible && (
              <div className="mb-4 p-4 bg-emerald-800 text-white rounded-lg shadow-lg animate-fade-in">
                {alert.message}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6">
              <div className="relative border-b border-gray-500">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-white p-2 placeholder-gray-400"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="relative border-b border-gray-500">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-white p-2 placeholder-gray-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="relative border-b border-gray-500">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Número de teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-white p-2 placeholder-gray-400"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="relative border-b border-gray-500">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-white p-2 placeholder-gray-400 resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
