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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form handleSubmit = {handleSubmit} className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-5">
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