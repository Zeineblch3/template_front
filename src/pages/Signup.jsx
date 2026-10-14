import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Signup() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data.message);
    alert(data.message);
  } catch (error) {
    console.error("Erreur :", error);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit = {handleSubmit} className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-5">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Signup
        </h1>

        <Input
          label="Nom"
          placeholder="Entrez votre nom"
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
        />

        <Input
          label="Prénom"
          placeholder="Entrez votre prénom"
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
        />

        <Input
          label="Email"
          placeholder="Entrez votre email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label="Mot de passe"
          placeholder="Entrez votre mot de passe"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button text="Sign Up" type="submit" />
      </form>
    </div>
  );
}

export default Signup;